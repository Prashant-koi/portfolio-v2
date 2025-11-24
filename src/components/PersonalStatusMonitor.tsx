'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

interface StatusData {
  thoughts: string;
  busy: boolean;
  activeApps: string[];
}

export default function PersonalStatusMonitor() {
  const [statusData, setStatusData] = useState<StatusData | null>(null)
  const [isOffline, setIsOffline] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const apiUrl = 'https://www.prasantk.me/api/status'
  const updateInterval = 30000 // 30 seconds

  const updateStatus = async () => {
    try {
      const response = await fetch(apiUrl)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data: StatusData = await response.json()
      
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

  const startPolling = () => {
    if (intervalRef.current) return // Already polling
    updateStatus() // Immediate update
    intervalRef.current = setInterval(updateStatus, updateInterval)
  }

  const stopPolling = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopPolling()
        console.log('Page hidden - stopping status updates')
      } else {
        startPolling()
        console.log('Page visible - resuming status updates')
      }
    }

    // Start polling initially
    startPolling()

    // Listen for visibility changes
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      stopPolling()
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  const isAppOffline = statusData?.thoughts === "App offline" || isOffline

  const serviceCreditText = (
    <div className="font-small text-center mt-3 text-gray-400">
      This service was written using C++ <a href="https://github.com/Prashant-koi/PersonalStatus" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">check it out</a>
    </div>
  );

  if (isAppOffline) {
    return (
      <div className="w-full">
        {/* Offline State with blue line indicator like other components */}
        <div className="relative pl-6">
          <div className="absolute left-0 top-0 w-1 bg-red-500 h-full rounded-full"></div>
          <div className="bg-gray-800 border-2 border-red-600 rounded-lg p-4 shadow-lg">
            <div className="font-attention text-red-400 text-center">
              Status: Offline
            </div>
            <div className="font-normal text-gray-300 text-center mt-2">
              Hint: I am probably attending classes, sleeping or travelling!!
            </div>
          </div>
        </div>
        {serviceCreditText}
      </div>
    )
  }

  const isBusy = statusData?.busy || false
  const statusColor = isBusy ? 'bg-orange-500' : 'bg-green-500'
  const statusLabel = isBusy ? 'Busy' : 'Available'

  return (
    <div className="w-full">
      {/* Main status card with blue line indicator */}
      <div className="relative pl-6">
        <div className="absolute left-0 top-0 w-1 bg-blue-500 h-full rounded-full"></div>
        <div className="bg-gray-800 border-2 border-gray-600 rounded-lg p-4 shadow-lg">
          
          {/* Header */}
          <div className="font-secondary text-gray-200 text-center mb-3 border-b border-gray-700 pb-2">
            Live Status
          </div>
          
          {/* Current Thoughts */}
          <div className="mb-3">
            <div className="flex items-start gap-2">
              <Image 
                src="/lightbulb.png" 
                alt="thoughts" 
                width={16} 
                height={16} 
                className="flex-shrink-0 mt-1"
              />
              <div>
                <div className="font-small text-gray-400 uppercase tracking-wide mb-1">
                  Current Thoughts
                </div>
                <div className="font-normal text-gray-200 leading-tight">
                  {statusData?.thoughts || 'Loading thoughts...'}
                </div>
              </div>
            </div>
          </div>
          
          {/* Status Indicator */}
          <div className="mb-3">
            <div className="flex items-center gap-2">
              <Image 
                src="/graph.png" 
                alt="status" 
                width={16} 
                height={16} 
                className="flex-shrink-0"
              />
              <div className="flex items-center gap-2">
                <div className="font-small text-gray-400 uppercase tracking-wide">
                  Status:
                </div>
                <span className={`px-2 py-1 rounded-full text-white font-small font-medium ${statusColor}`}>
                  {statusLabel}
                </span>
              </div>
            </div>
          </div>
          
          {/* Active Applications */}
          <div>
            <div className="flex items-start gap-2">
              <Image 
                src="/hand.png" 
                alt="applications" 
                width={16} 
                height={16} 
                className="flex-shrink-0 mt-1"
              />
              <div>
                <div className="font-small text-gray-400 uppercase tracking-wide mb-1">
                  Currently Using
                </div>
                <div className="font-normal text-gray-200 leading-tight">
                  {statusData?.activeApps?.join(', ') || 'Loading...'}
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      {serviceCreditText}
    </div>
  )
}