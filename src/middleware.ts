import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Public routes that don't require authentication
const publicRoutes = [
  '/api/auth/login',
  '/api/auth/register',
  '/api/auth/forgot-password',
  '/api/health'
]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Add CORS headers
  const response = NextResponse.next()
  const origin = request.headers.get('origin')
  const allowedOrigins = (process.env.ALLOWED_ORIGINS || 'http://localhost:3000').split(',')
  
  if (origin && allowedOrigins.includes(origin)) {
    response.headers.set('Access-Control-Allow-Origin', origin)
  }
  
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  response.headers.set('Access-Control-Max-Age', '86400')

  // Handle OPTIONS requests
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, { status: 200, headers: response.headers })
  }

  // Check if route requires authentication
  const isApiRoute = pathname.startsWith('/api/')
  const isPublicRoute = publicRoutes.some(route => pathname.startsWith(route))
  
  if (isApiRoute && !isPublicRoute) {
    const authHeader = request.headers.get('authorization')
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Unauthorized - Authentication required' },
        { status: 401, headers: response.headers }
      )
    }
  }

  return response
}

export const config = {
  matcher: '/api/:path*'
}