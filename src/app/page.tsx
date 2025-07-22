'use client'

import { useEffect } from 'react'
import { redirect } from 'next/navigation'

export default function Home() {
  useEffect(() => {
    // Redirect to dashboard on load
    window.location.href = '/dashboard'
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
          <span className="text-white font-bold text-xl">aiK</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">aiKODA Platform</h1>
        <p className="text-gray-600 mb-8">Loading Enterprise Cultural Intelligence Dashboard...</p>
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
      </div>
    </div>
  )
}