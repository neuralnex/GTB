import { NextRequest, NextResponse } from 'next/server'
import { getRedisClient } from '@/lib/redis'

interface SignupRow {
  Timestamp?: string
  Name?: string
  Username?: string
  'Phone Number'?: string
  'Email Address'?: string
  Address?: string
  City?: string
  State?: string
  Gender?: string
  Age?: string
  'Bank Name'?: string
  'Account Name'?: string
  'Account Number'?: string
}

export async function GET(request: NextRequest) {
  try {
    const redis = getRedisClient()
    const dataJson = await redis.get('signups')
    const data = dataJson ? JSON.parse(dataJson) : []

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
    console.error('Error reading data:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to read data.',
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

    const redis = getRedisClient()
    const dataJson = await redis.get('signups')
    const data = dataJson ? JSON.parse(dataJson) : []

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

    // Save back to Redis
    await redis.set('signups', JSON.stringify(data))

    return NextResponse.json(
      { 
        success: true, 
        message: 'Row deleted successfully',
        count: data.length
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error deleting row:', error)
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
