import { NextRequest, NextResponse } from 'next/server'
import * as XLSX from 'xlsx'
import { writeFile, mkdir, readFile } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    const excelDir = path.join(process.cwd(), 'data')
    const excelFilePath = path.join(excelDir, 'signups.xlsx')

    if (!existsSync(excelDir)) {
      await mkdir(excelDir, { recursive: true })
    }

    const newRow = {
      'Timestamp': new Date().toISOString(),
      'Name': formData.name || '',
      'Username': formData.username || '',
      'Phone Number': formData.phoneNumber || '',
      'Email Address': formData.email || '',
      'Address': formData.address || '',
      'City': formData.city || '',
      'State': formData.state || '',
      'Gender': formData.gender || '',
      'Age': formData.age || '',
      'Bank Name': formData.bankName || '',
      'Account Name': formData.accountName || '',
      'Account Number': formData.accountNumber || '',
    }

    let workbook: XLSX.WorkBook
    let worksheet: XLSX.WorkSheet

    if (existsSync(excelFilePath)) {
      const fileBuffer = await readFile(excelFilePath)
      workbook = XLSX.read(fileBuffer, { type: 'buffer' })
      
      const sheetName = workbook.SheetNames.includes('Signups') 
        ? 'Signups' 
        : workbook.SheetNames[0] || 'Signups'
      worksheet = workbook.Sheets[sheetName] || XLSX.utils.aoa_to_sheet([])
    } else {
      workbook = XLSX.utils.book_new()
      worksheet = XLSX.utils.json_to_sheet([newRow])
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Signups')
    }

    const existingData = XLSX.utils.sheet_to_json(worksheet)
    existingData.push(newRow)

    const newWorksheet = XLSX.utils.json_to_sheet(existingData)
    
    workbook.Sheets['Signups'] = newWorksheet
    if (!workbook.SheetNames.includes('Signups')) {
      workbook.SheetNames[0] = 'Signups'
    }

    const excelBuffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' })
    await writeFile(excelFilePath, excelBuffer)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Form submitted successfully!',
        data: newRow
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error saving to Excel:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to submit form. Please try again.',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

