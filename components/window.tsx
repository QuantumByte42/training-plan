"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { X, Minus, Square } from "lucide-react"

interface WindowProps {
  title: string
  children: React.ReactNode
  isActive: boolean
  onClose: () => void
  onMinimize: () => void
  onFocus: () => void
  initialPosition?: { x: number; y: number }
  isDarkMode: boolean
  animation?: string
}

export function Window({
  title,
  children,
  isActive,
  onClose,
  onMinimize,
  onFocus,
  initialPosition = { x: 100, y: 100 },
  isDarkMode,
  animation = "",
}: WindowProps) {
  const [position, setPosition] = useState(initialPosition)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const windowRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget || (e.target as HTMLElement).closest(".title-bar")) {
      setIsDragging(true)
      const rect = windowRef.current?.getBoundingClientRect()
      if (rect) {
        setDragOffset({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
      onFocus()
    }
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: Math.max(0, Math.min(window.innerWidth - 400, e.clientX - dragOffset.x)),
          y: Math.max(0, Math.min(window.innerHeight - 200, e.clientY - dragOffset.y)),
        })
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging, dragOffset])

  return (
    <div
      ref={windowRef}
      className={`absolute backdrop-blur-md border rounded-lg shadow-2xl min-w-80 max-w-2xl transition-all duration-300 ${
        isDarkMode ? "bg-gray-900/95 border-gray-600" : "bg-white/95 border-gray-300"
      } ${isActive ? "shadow-blue-200/50 border-blue-400" : "shadow-gray-200/50"} ${animation}`}
      style={{
        left: position.x,
        top: position.y,
        zIndex: isActive ? 1000 : 999,
      }}
      onMouseDown={handleMouseDown}
    >
      <div
        className={`title-bar flex items-center justify-between px-4 py-3 rounded-t-lg cursor-move transition-all ${
          isActive
            ? isDarkMode
              ? "bg-gradient-to-r from-blue-600 to-purple-700 text-white"
              : "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
            : isDarkMode
              ? "bg-gradient-to-r from-gray-700 to-gray-800 text-gray-300"
              : "bg-gradient-to-r from-gray-400 to-gray-500 text-white"
        }`}
      >
        <div className="flex items-center">
          <div className="w-4 h-4 bg-white/20 rounded-full mr-3 animate-pulse"></div>
          <span className="font-medium text-sm">{title}</span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={onMinimize}
            className="w-6 h-6 bg-yellow-500 hover:bg-yellow-600 rounded flex items-center justify-center transition-all hover:scale-110"
          >
            <Minus size={12} />
          </button>
          <button className="w-6 h-6 bg-green-500 hover:bg-green-600 rounded flex items-center justify-center transition-all hover:scale-110">
            <Square size={10} />
          </button>
          <button
            onClick={onClose}
            className="w-6 h-6 bg-red-500 hover:bg-red-600 rounded flex items-center justify-center transition-all hover:scale-110"
          >
            <X size={12} />
          </button>
        </div>
      </div>
      <div className={`window-content rounded-b-lg ${isDarkMode ? "bg-gray-800/90" : "bg-white/90"} backdrop-blur-sm`}>
        {children}
      </div>
    </div>
  )
}
