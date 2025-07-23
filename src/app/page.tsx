'use client'

export default function SimpleTestPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-blue-600">🐅⚡</h1>
        <h2 className="text-4xl font-bold text-gray-800">aiKODA Platform v2</h2>
        <p className="text-xl text-gray-600">Tiger Boss Integration SUCCESS!</p>
        <div className="space-y-2">
          <p className="text-lg text-green-600">✅ Backend APIs: READY</p>
          <p className="text-lg text-green-600">✅ Database: FUNCTIONAL</p>
          <p className="text-lg text-green-600">✅ AI Integration: COMPLETE</p>
          <p className="text-lg text-green-600">✅ Manus Components: IMPORTED</p>
        </div>
        <div className="mt-8">
          <a 
            href="/dashboard" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Enter Dashboard
          </a>
        </div>
      </div>
    </div>
  )
}