// app/api/status/route.ts
import { NextRequest, NextResponse } from 'next/server';

// Your personal API key from environment variable
const API_KEY = process.env.PERSONAL_STATUS_API_KEY;

let currentStatus = {
  thoughts: "App offline",
  activeApps: [],
  busy: false,
  timestamp: 0,
  lastUpdated: null as Date | null
};

function validateApiKey(request: NextRequest): boolean {
  const apiKeyFromHeader = request.headers.get('X-API-Key');
  return apiKeyFromHeader === API_KEY;
}

export async function POST(request: NextRequest) {
  try {
    // Require API key for POST (updating status)
    if (!validateApiKey(request)) {
      return NextResponse.json(
        { error: 'Unauthorized - Invalid API key' }, 
        { status: 401 }
      );
    }

    const data = await request.json();
    
    if (typeof data.thoughts === 'string' && 
        Array.isArray(data.activeApps) && 
        typeof data.busy === 'boolean' &&
        typeof data.timestamp === 'number') {
      
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
    // GET is public - no API key required so visitors can see your status
    const now = Date.now() / 1000;
    const isRecent = currentStatus.timestamp && (now - currentStatus.timestamp) < 20;
    
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

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, X-API-Key',
    },
  });
}