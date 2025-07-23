// SAP Fiori UI5 Components for aiKODA Platform
// These components follow SAP Fiori design principles

import React from 'react'

interface FioriCardProps {
  children: React.ReactNode
  title?: string
  className?: string
}

export const FioriCard = ({ children, title, className = "" }: FioriCardProps) => (
  <div className={`bg-white border border-gray-200 rounded-lg shadow-sm ${className}`}>
    {title && (
      <div className="px-4 py-3 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      </div>
    )}
    <div className="p-4">{children}</div>
  </div>
)

interface FioriButtonProps {
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  className?: string
}

export const FioriButton = ({ 
  children, 
  onClick, 
  variant = "primary", 
  size = "medium",
  disabled = false,
  className = ""
}: FioriButtonProps) => {
  const baseClasses = "font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
  const variants: Record<FioriButtonProps['variant'] & string, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
    outline: "border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-blue-500"
  }
  const sizes: Record<FioriButtonProps['size'] & string, string> = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-sm",
    large: "px-6 py-3 text-base"
  }
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </button>
  )
}

interface FioriInputProps {
  label?: string
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  type?: string
  placeholder?: string
  required?: boolean
  className?: string
}

export const FioriInput = ({ 
  label, 
  value, 
  onChange, 
  type = "text",
  placeholder,
  required = false,
  className = ""
}: FioriInputProps) => (
  <div className={className}>
    {label && (
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
    )}
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
    />
  </div>
)

interface FioriSelectProps {
  label?: string
  value?: string
  onChange?: React.ChangeEventHandler<HTMLSelectElement>
  options?: Array<{ value: string; label: string }>
  required?: boolean
  className?: string
}

export const FioriSelect = ({ 
  label, 
  value, 
  onChange, 
  options,
  required = false,
  className = ""
}: FioriSelectProps) => (
  <div className={className}>
    {label && (
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
    )}
    <select
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
    >
      {options?.map((option, index: number) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
)

interface FioriTableProps {
  headers?: string[]
  data?: Array<Record<string, any>>
  onRowClick?: (row: Record<string, any>) => void
  className?: string
}

export const FioriTable = ({ 
  headers, 
  data, 
  onRowClick,
  className = ""
}: FioriTableProps) => (
  <div className={`overflow-x-auto ${className}`}>
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          {headers?.map((header, index: number) => (
            <th
              key={index}
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data?.map((row, rowIndex: number) => (
          <tr
            key={rowIndex}
            onClick={() => onRowClick?.(row)}
            className={onRowClick ? "cursor-pointer hover:bg-gray-50" : ""}
          >
            {headers?.map((header, cellIndex: number) => (
              <td key={cellIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {row[header.toLowerCase().replace(/\s+/g, '')]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)