'use client'
import React, { useState, useRef, useEffect } from 'react'

// Touch-Optimized Button Component
interface TouchButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  fullWidth?: boolean
  className?: string
}

export function TouchButton({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  className = ''
}: TouchButtonProps) {
  const [isPressed, setIsPressed] = useState(false)

  const handleTouchStart = () => {
    if (!disabled) {
      setIsPressed(true)
    }
  }

  const handleTouchEnd = () => {
    setIsPressed(false)
  }

  const sizeClasses = {
    small: 'min-h-[44px] px-4 text-sm',
    medium: 'min-h-[48px] px-6 text-base',
    large: 'min-h-[56px] px-8 text-lg'
  }

  return (
    <button
      className={`
        sap-button ${variant} ${sizeClasses[size]}
        ${fullWidth ? 'w-full' : ''}
        ${isPressed ? 'transform scale-95' : ''}
        transition-transform duration-150 ease-out
        ${className}
      `}
      onClick={onClick}
      disabled={disabled}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleTouchStart}
      onMouseUp={handleTouchEnd}
      onMouseLeave={handleTouchEnd}
    >
      {children}
    </button>
  )
}

// Touch-Optimized Input Component
interface TouchInputProps {
  label?: string
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  type?: 'text' | 'email' | 'tel' | 'password' | 'number'
  required?: boolean
  error?: string
  disabled?: boolean
  autoComplete?: string
  inputMode?: 'text' | 'email' | 'tel' | 'numeric' | 'decimal'
}

export function TouchInput({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  required = false,
  error,
  disabled = false,
  autoComplete,
  inputMode
}: TouchInputProps) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="sap-form-group">
      {label && (
        <label className="sap-label">
          {label}
          {required && <span className="text-sap-error-color ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        autoComplete={autoComplete}
        inputMode={inputMode}
        className={`
          sap-input
          ${isFocused ? 'ring-2 ring-sap-brand-color ring-opacity-20' : ''}
          ${error ? 'border-sap-error-color' : ''}
        `}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {error && (
        <p className="text-sm text-sap-error-color mt-1">{error}</p>
      )}
    </div>
  )
}

// Touch-Optimized Select Component
interface TouchSelectProps {
  label?: string
  value?: string
  onChange?: (value: string) => void
  options: Array<{ value: string; label: string }>
  placeholder?: string
  required?: boolean
  error?: string
  disabled?: boolean
}

export function TouchSelect({
  label,
  value,
  onChange,
  options,
  placeholder,
  required = false,
  error,
  disabled = false
}: TouchSelectProps) {
  return (
    <div className="sap-form-group">
      {label && (
        <label className="sap-label">
          {label}
          {required && <span className="text-sap-error-color ml-1">*</span>}
        </label>
      )}
      <select
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        required={required}
        disabled={disabled}
        className={`
          sap-select
          ${error ? 'border-sap-error-color' : ''}
        `}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-sm text-sap-error-color mt-1">{error}</p>
      )}
    </div>
  )
}

// Swipeable Card Component
interface SwipeableCardProps {
  children: React.ReactNode
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  onTap?: () => void
  className?: string
}

export function SwipeableCard({
  children,
  onSwipeLeft,
  onSwipeRight,
  onTap,
  className = ''
}: SwipeableCardProps) {
  const [startX, setStartX] = useState(0)
  const [currentX, setCurrentX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX)
    setCurrentX(e.touches[0].clientX)
    setIsDragging(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    setCurrentX(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!isDragging) return
    
    const deltaX = currentX - startX
    const threshold = 100 // Minimum swipe distance
    
    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0 && onSwipeRight) {
        onSwipeRight()
      } else if (deltaX < 0 && onSwipeLeft) {
        onSwipeLeft()
      }
    } else if (Math.abs(deltaX) < 10 && onTap) {
      // Small movement, treat as tap
      onTap()
    }
    
    setIsDragging(false)
    setStartX(0)
    setCurrentX(0)
  }

  const translateX = isDragging ? currentX - startX : 0

  return (
    <div
      ref={cardRef}
      className={`
        sap-card cursor-pointer select-none
        ${isDragging ? 'transition-none' : 'transition-transform duration-200'}
        ${className}
      `}
      style={{
        transform: `translateX(${translateX}px)`,
        opacity: isDragging ? 0.9 : 1
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onClick={!isDragging ? onTap : undefined}
    >
      {children}
    </div>
  )
}

// Pull-to-Refresh Component
interface PullToRefreshProps {
  children: React.ReactNode
  onRefresh: () => Promise<void>
  refreshThreshold?: number
}

export function PullToRefresh({
  children,
  onRefresh,
  refreshThreshold = 80
}: PullToRefreshProps) {
  const [pullDistance, setPullDistance] = useState(0)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [startY, setStartY] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    if (containerRef.current?.scrollTop === 0) {
      setStartY(e.touches[0].clientY)
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (containerRef.current?.scrollTop === 0 && startY > 0) {
      const currentY = e.touches[0].clientY
      const distance = Math.max(0, currentY - startY)
      setPullDistance(Math.min(distance, refreshThreshold * 1.5))
    }
  }

  const handleTouchEnd = async () => {
    if (pullDistance >= refreshThreshold && !isRefreshing) {
      setIsRefreshing(true)
      try {
        await onRefresh()
      } finally {
        setIsRefreshing(false)
      }
    }
    setPullDistance(0)
    setStartY(0)
  }

  const refreshProgress = Math.min(pullDistance / refreshThreshold, 1)

  return (
    <div
      ref={containerRef}
      className="relative overflow-auto h-full"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Pull to refresh indicator */}
      <div
        className="absolute top-0 left-0 right-0 flex items-center justify-center bg-sap-background transition-transform duration-200"
        style={{
          height: `${Math.max(pullDistance, isRefreshing ? 60 : 0)}px`,
          transform: `translateY(-${Math.max(pullDistance, isRefreshing ? 60 : 0) - pullDistance}px)`
        }}
      >
        {isRefreshing ? (
          <div className="flex items-center gap-2 text-sap-text-secondary">
            <div className="sap-loading" />
            <span className="text-sm">Refreshing...</span>
          </div>
        ) : pullDistance > 0 ? (
          <div className="flex items-center gap-2 text-sap-text-secondary">
            <div
              className="w-6 h-6 border-2 border-sap-border-color rounded-full transition-transform duration-200"
              style={{
                transform: `rotate(${refreshProgress * 180}deg)`,
                borderTopColor: refreshProgress >= 1 ? '#0070F2' : 'transparent'
              }}
            />
            <span className="text-sm">
              {refreshProgress >= 1 ? 'Release to refresh' : 'Pull to refresh'}
            </span>
          </div>
        ) : null}
      </div>
      
      {/* Content */}
      <div
        style={{
          transform: `translateY(${pullDistance}px)`,
          transition: pullDistance === 0 ? 'transform 0.2s ease-out' : 'none'
        }}
      >
        {children}
      </div>
    </div>
  )
}

// Touch-Optimized Slider Component
interface TouchSliderProps {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  step?: number
  label?: string
  showValue?: boolean
}

export function TouchSlider({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  label,
  showValue = true
}: TouchSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)

  const updateValue = (clientX: number) => {
    if (!sliderRef.current) return
    
    const rect = sliderRef.current.getBoundingClientRect()
    const percentage = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
    const newValue = min + percentage * (max - min)
    const steppedValue = Math.round(newValue / step) * step
    onChange(Math.max(min, Math.min(max, steppedValue)))
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    updateValue(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      updateValue(e.touches[0].clientX)
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  const percentage = ((value - min) / (max - min)) * 100

  return (
    <div className="sap-form-group">
      {label && (
        <div className="flex justify-between items-center mb-2">
          <label className="sap-label">{label}</label>
          {showValue && (
            <span className="text-sm text-sap-text-secondary">{value}</span>
          )}
        </div>
      )}
      <div
        ref={sliderRef}
        className="relative h-12 flex items-center cursor-pointer"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Track */}
        <div className="absolute inset-x-0 h-2 bg-sap-border-color rounded-full" />
        
        {/* Progress */}
        <div
          className="absolute left-0 h-2 bg-sap-brand-color rounded-full"
          style={{ width: `${percentage}%` }}
        />
        
        {/* Thumb */}
        <div
          className={`
            absolute w-6 h-6 bg-white border-2 border-sap-brand-color rounded-full shadow-md
            transform -translate-x-1/2 transition-transform duration-150
            ${isDragging ? 'scale-125' : 'scale-100'}
          `}
          style={{ left: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

// Touch-Optimized Toggle Switch
interface TouchToggleProps {
  checked: boolean
  onChange: (checked: boolean) => void
  label?: string
  disabled?: boolean
}

export function TouchToggle({
  checked,
  onChange,
  label,
  disabled = false
}: TouchToggleProps) {
  return (
    <div className="flex items-center justify-between">
      {label && (
        <label className="sap-label flex-1">{label}</label>
      )}
      <button
        type="button"
        onClick={() => !disabled && onChange(!checked)}
        disabled={disabled}
        className={`
          relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-200 ease-in-out
          ${checked ? 'bg-sap-brand-color' : 'bg-sap-border-color'}
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
      >
        <span
          className={`
            inline-block h-6 w-6 transform rounded-full bg-white shadow-lg transition-transform duration-200 ease-in-out
            ${checked ? 'translate-x-7' : 'translate-x-1'}
          `}
        />
      </button>
    </div>
  )
}

