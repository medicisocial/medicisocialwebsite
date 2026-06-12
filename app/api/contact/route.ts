import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    // Server-side honeypot check: reject bot submissions silently
    const websiteUrl = formData.get('website_url');
    if (websiteUrl) {
      return NextResponse.json({ success: true });
    }
    
    // Forward the form submission to Formspree securely from the server
    const response = await fetch('https://formspree.io/f/xjgzapgg', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      const errorData = await response.json().catch(() => ({}));
      return NextResponse.json({ error: errorData }, { status: response.status });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
