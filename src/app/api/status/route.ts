// app/api/status/route.ts
import { NextRequest, NextResponse } from 'next/server';

// In-memory storage (for demo - use database in production)
let currentStatus = {
  thoughts: "App offline",
  activeApps: [],
  busy: false,
  timestamp: 0,
  lastUpdated: null as Date | null
};

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate the incoming data
    if (typeof data.thoughts === 'string' && 
        Array.isArray(data.activeApps) && 
        typeof data.busy === 'boolean' &&
        typeof data.timestamp === 'number') {
      
      // Update the current status
      currentStatus = {
        ...data,
        lastUpdated: new Date()
      };
      
      console.log('Status updated:', currentStatus);
      
      return NextResponse.json({ 
        success: true, 
        message: 'Status updated successfully' 
      });
    } else {
      return NextResponse.json(
        { error: 'Invalid data format' }, 
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error updating status:', error);
    return NextResponse.json(
      { error: 'Failed to update status' }, 
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Check if data is recent (within last 10 seconds)
    const now = Date.now() / 1000;
    const isRecent = currentStatus.timestamp && (now - currentStatus.timestamp) < 10;
    
    if (!isRecent) {
      return NextResponse.json({
        thoughts: "App offline",
        activeApps: [],
        busy: false,
        timestamp: 0,
        lastUpdated: null,
        status: 'offline'
      });
    }
    
    return NextResponse.json({
      ...currentStatus,
      status: 'online'
    });
  } catch (error) {
    console.error('Error fetching status:', error);
    return NextResponse.json(
      { error: 'Failed to fetch status' }, 
      { status: 500 }
    );
  }
}

// Enable CORS for your domain
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}