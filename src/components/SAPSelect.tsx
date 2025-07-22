import React from 'react'

interface SAPSelectOption {
  value: string
  label: string
  disabled?: boolean
}

interface SAPSelectProps {
  label?: string
  value?: string
  onChange?: (value: string) => void
  options: SAPSelectOption[]
  placeholder?: string
  required?: boolean
  disabled?: boolean
  error?: string
  className?: string
  id?: string
}

export function SAPSelect({
  label,
  value,
  onChange,
  options,
  placeholder = 'Select an option',
  required = false,
  disabled = false,
  error,
  className = '',
  id
}: SAPSelectProps) {
  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`

  return (
    <div className={`sap-input-group ${className}`}>
      {label && (
        <label htmlFor={selectId} className="sap-label">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <select
        id={selectId}
        value={value || ''}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        required={required}
        className={`sap-select ${error ? 'border-red-500' : ''}`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <span className="text-red-500 text-sm mt-1 block">{error}</span>
      )}
    </div>
  )
}

export default SAPSelect

