import { NextRequest, NextResponse } from 'next/server'
import { getRedisClient } from '@/lib/redis'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

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

    const redis = getRedisClient()
    
    // Get existing data from Redis
    const existingDataJson = await redis.get('signups')
    const existingData = existingDataJson ? JSON.parse(existingDataJson) : []
    
    // Add new row
    existingData.push(newRow)
    
    // Save back to Redis
    await redis.set('signups', JSON.stringify(existingData))

    return NextResponse.json(
      { 
        success: true, 
        message: 'Form submitted successfully!',
        data: newRow
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error saving signup:', error)
    
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to submit form. Please try again.',
        error: errorMessage
      },
      { status: 500 }
    )
  }
}
