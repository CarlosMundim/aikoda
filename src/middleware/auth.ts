// Authentication Middleware for API Routes
import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'development-secret'

export interface AuthUser {
  id: string
  email: string
  role: string
}

export async function verifyAuth(req: NextRequest): Promise<AuthUser | null> {
  try {
    // Check for Authorization header
    const authHeader = req.headers.get('authorization')
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return null
    }

    // Extract token
    const token = authHeader.substring(7)
    
    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET) as AuthUser
    
    return decoded
  } catch (error) {
    return null
  }
}

export function requireAuth() {
  return async function middleware(req: NextRequest) {
    const user = await verifyAuth(req)
    
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized - Invalid or missing authentication token' },
        { status: 401 }
      )
    }
    
    // Add user to request headers for use in route handlers
    const requestHeaders = new Headers(req.headers)
    requestHeaders.set('x-user-id', user.id)
    requestHeaders.set('x-user-email', user.email)
    requestHeaders.set('x-user-role', user.role)
    
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    })
  }
}

export function generateToken(user: { id: string; email: string; role: string }): string {
  return jwt.sign(user, JWT_SECRET, { expiresIn: '24h' })
}