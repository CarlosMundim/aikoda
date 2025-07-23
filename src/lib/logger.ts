// Secure logging utility for production
type LogLevel = 'debug' | 'info' | 'warn' | 'error'

interface LogEntry {
  level: LogLevel
  message: string
  timestamp: string
  context?: Record<string, any>
}

class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development'
  
  private log(level: LogLevel, message: string, context?: Record<string, any>) {
    if (!this.isDevelopment && level === 'debug') {
      return // Skip debug logs in production
    }
    
    const entry: LogEntry = {
      level,
      message,
      timestamp: new Date().toISOString(),
      context
    }
    
    // In production, send to logging service
    if (!this.isDevelopment) {
      // TODO: Send to logging service (e.g., Sentry, LogRocket)
      // For now, just format for structured logging
      const sanitizedEntry = this.sanitize(entry)
      console[level](JSON.stringify(sanitizedEntry))
    } else {
      // In development, use console for readability
      console[level](`[${entry.timestamp}] ${message}`, context || '')
    }
  }
  
  private sanitize(entry: LogEntry): LogEntry {
    // Remove sensitive data from logs
    if (entry.context) {
      const sanitized = { ...entry.context }
      const sensitiveKeys = ['password', 'token', 'key', 'secret', 'authorization']
      
      Object.keys(sanitized).forEach(key => {
        if (sensitiveKeys.some(sensitive => key.toLowerCase().includes(sensitive))) {
          sanitized[key] = '[REDACTED]'
        }
      })
      
      return { ...entry, context: sanitized }
    }
    
    return entry
  }
  
  debug(message: string, context?: Record<string, any>) {
    this.log('debug', message, context)
  }
  
  info(message: string, context?: Record<string, any>) {
    this.log('info', message, context)
  }
  
  warn(message: string, context?: Record<string, any>) {
    this.log('warn', message, context)
  }
  
  error(message: string, context?: Record<string, any>) {
    this.log('error', message, context)
  }
}

export const logger = new Logger()