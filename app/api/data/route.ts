import { NextRequest, NextResponse } from 'next/server'
import * as XLSX from 'xlsx'
import { readFile, writeFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

export async function GET(request: NextRequest) {
  try {
    const excelDir = path.join(process.cwd(), 'data')
    const excelFilePath = path.join(excelDir, 'signups.xlsx')

    if (!existsSync(excelFilePath)) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'No data file found.',
          data: []
        },
        { status: 404 }
      )
    }

    const fileBuffer = await readFile(excelFilePath)
    const workbook = XLSX.read(fileBuffer, { type: 'buffer' })
    
    const sheetName = workbook.SheetNames.includes('Signups') 
      ? 'Signups' 
      : workbook.SheetNames[0] || 'Signups'
    
    const worksheet = workbook.Sheets[sheetName]
    const data = XLSX.utils.sheet_to_json(worksheet)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Data retrieved successfully',
        data: data,
        count: data.length
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error reading Excel file:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to read data file.',
        error: error instanceof Error ? error.message : 'Unknown error',
        data: []
      },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const index = searchParams.get('index')

    if (index === null || index === undefined) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Index parameter is required.'
        },
        { status: 400 }
      )
    }

    const rowIndex = parseInt(index, 10)
    if (isNaN(rowIndex) || rowIndex < 0) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid index parameter.'
        },
        { status: 400 }
      )
    }

    const excelDir = path.join(process.cwd(), 'data')
    const excelFilePath = path.join(excelDir, 'signups.xlsx')

    if (!existsSync(excelFilePath)) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'No data file found.'
        },
        { status: 404 }
      )
    }

    const fileBuffer = await readFile(excelFilePath)
    const workbook = XLSX.read(fileBuffer, { type: 'buffer' })
    
    const sheetName = workbook.SheetNames.includes('Signups') 
      ? 'Signups' 
      : workbook.SheetNames[0] || 'Signups'
    
    const worksheet = workbook.Sheets[sheetName]
    const data = XLSX.utils.sheet_to_json(worksheet)

    if (rowIndex >= data.length) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Index out of range.'
        },
        { status: 400 }
      )
    }

    // Remove the row at the specified index
    data.splice(rowIndex, 1)

    // Create new worksheet with updated data
    const newWorksheet = XLSX.utils.json_to_sheet(data)
    workbook.Sheets[sheetName] = newWorksheet

    // Write back to file
    const excelBuffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' })
    await writeFile(excelFilePath, excelBuffer)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Row deleted successfully',
        count: data.length
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error deleting from Excel file:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to delete row.',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
