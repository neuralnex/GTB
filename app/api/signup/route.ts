import { NextRequest, NextResponse } from 'next/server'
import { kv } from '@vercel/kv'

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

    // Get existing data from KV
    const existingData = await kv.get<typeof newRow[]>('signups') || []
    
    // Add new row
    existingData.push(newRow)
    
    // Save back to KV
    await kv.set('signups', existingData)

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
    
    // Provide helpful error message for missing KV configuration
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    const isKvError = errorMessage.includes('KV') || errorMessage.includes('redis') || errorMessage.includes('connection')
    
    return NextResponse.json(
      { 
        success: false, 
        message: isKvError 
          ? 'Database not configured. Please set up Vercel KV in your Vercel project settings.'
          : 'Failed to submit form. Please try again.',
        error: errorMessage
      },
      { status: 500 }
    )
  }
}
