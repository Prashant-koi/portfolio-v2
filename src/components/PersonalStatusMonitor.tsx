'use client'

import { useState, useEffect } from 'react'

interface StatusData {
  thoughts: string;
  busy: boolean;
  activeApps: string[];
}

export default function PersonalStatusMonitor() {
  const [statusData, setStatusData] = useState<StatusData | null>(null)
  const [isOffline, setIsOffline] = useState(false)

  const apiUrl = 'https://portfolio-v2-green-delta-82.vercel.app/api/status'
  const updateInterval = 3000 // 3 seconds

  const updateStatus = async () => {
    try {
      const response = await fetch(apiUrl)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data: StatusData = await response.json()
      
      // Console log the response
      console.log('=== Personal Status API Response ===')
      console.log('Full Response:', data)
      console.log('Current Thoughts:', data.thoughts)
      console.log('Busy Status:', data.busy ? 'Busy' : 'Free')
      console.log('Active Applications:', data.activeApps)
      console.log('=====================================')
      
      setStatusData(data)
      setIsOffline(false)
    } catch (error) {
      console.log('Desktop app not running:', error)
      console.log('API fetch failed - showing offline state')
      setIsOffline(true)
      setStatusData(null)
    }
  }

  useEffect(() => {
    // Initial fetch
    updateStatus()
    
    // Set up interval for regular updates
    const interval = setInterval(updateStatus, updateInterval)
    
    // Cleanup interval on component unmount
    return () => clearInterval(interval)
  }, [])

  // Check if the thoughts indicate offline state
  const isAppOffline = statusData?.thoughts === "App offline" || isOffline

  if (isAppOffline) {
    return (
      <div className="status-card offline">
        <div className="offline-text">Prasant is Offline</div>
      </div>
    )
  }

  const isBusy = statusData?.busy || false
  const statusLabel = isBusy ? 'Busy' : 'Online'

  return (
    <div className="status-card online">
      <div className="status-header">Check out my current thoughts</div>
      <div className="status-thought">
        <span className="lightbulb">💡</span>
        <span className="thought-text">{statusData?.thoughts || 'Loading thoughts...'}</span>
      </div>
      <div className="status-chart-row">
        <span className="status-chart">📊</span>
        <div className={`status-indicator ${isBusy ? 'busy' : 'online'}`}>
          {statusLabel}
        </div>
      </div>
      <div className="status-apps">
        <span className="hand-icon">👋</span>
        <span className="apps-text">
          Using: {statusData?.activeApps?.join(', ') || 'Loading...'}
        </span>
      </div>
    </div>
  )
}