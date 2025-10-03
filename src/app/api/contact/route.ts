import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, location, message, inquiry_type, company } = body

    // Here you would typically send an email or save to database
    // For now, we'll just log the data
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      location,
      message,
      inquiry_type,
      company
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your inquiry! We will get back to you soon.' 
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
