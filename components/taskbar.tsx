"use client"

import { Search, Wifi, Volume2, Battery, BarChart3 } from "lucide-react"

interface TaskBarProps {
  openWindows: string[]
  minimizedWindows: string[]
  activeWindow: string | null
  onWindowClick: (windowId: string) => void
  onOpenWindow: (windowId: string) => void
  onToggleStartMenu: () => void
  isDarkMode: boolean
}

export function TaskBar({
  openWindows,
  minimizedWindows,
  activeWindow,
  onWindowClick,
  onOpenWindow,
  onToggleStartMenu,
  isDarkMode,
}: TaskBarProps) {
  const getWindowTitle = (windowId: string) => {
    const titles: Record<string, string> = {
      overview: "Training Program",
      dashboard: "Dashboard",
      fundamentals: "Fundamentals",
      week1: "Week 1",
      week2: "Week 2",
      week3: "Week 3",
      linear: "Linear",
      resources: "Resources",
    }
    return titles[windowId] || windowId
  }

  const getWindowIcon = (windowId: string) => {
    const icons: Record<string, string> = {
      overview: "📚",
      dashboard: "📊",
      fundamentals: "🌐",
      week1: "⚛️",
      week2: "🚀",
      week3: "🎯",
      linear: "📋",
      resources: "📁",
    }
    return icons[windowId] || "📄"
  }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 h-12 backdrop-blur-md border-t flex items-center px-4 space-x-2 ${
        isDarkMode ? "bg-gray-900/90 border-gray-700" : "bg-black/80 border-white/20"
      }`}
    >
      {/* Start Button */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          onToggleStartMenu()
        }}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 shadow-lg hover:scale-105 ${
          isDarkMode
            ? "bg-gradient-to-b from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white"
            : "bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white"
        }`}
      >
        <div className="w-5 h-5 bg-gradient-to-br from-orange-400 to-red-500 rounded-sm flex items-center justify-center">
          <span className="text-white text-xs font-bold">⊞</span>
        </div>
        <span>Start</span>
      </button>

      {/* Quick Access */}
      <button
        onClick={() => onOpenWindow("dashboard")}
        className={`p-2 rounded-lg transition-all hover:scale-110 ${
          isDarkMode ? "bg-white/10 hover:bg-white/20 text-white" : "bg-white/10 hover:bg-white/20 text-white"
        }`}
      >
        <BarChart3 size={20} />
      </button>

      {/* Search Box */}
      <div
        className={`flex items-center rounded-lg px-3 py-2 min-w-48 ${
          isDarkMode ? "bg-gray-800/50 backdrop-blur-sm border border-gray-600" : "bg-white/10 backdrop-blur-sm"
        }`}
      >
        <Search size={16} className={`mr-2 ${isDarkMode ? "text-gray-400" : "text-white/70"}`} />
        <input
          type="text"
          placeholder="Search programs and files"
          className={`bg-transparent text-sm outline-none flex-1 ${
            isDarkMode ? "text-white placeholder-gray-400" : "text-white placeholder-white/50"
          }`}
        />
      </div>

      {/* Window Buttons */}
      <div className="flex-1 flex space-x-1">
        {openWindows.map((windowId) => (
          <button
            key={windowId}
            onClick={() => onWindowClick(windowId)}
            className={`px-3 py-2 text-sm rounded-lg transition-all duration-200 max-w-40 truncate flex items-center space-x-2 ${
              activeWindow === windowId && !minimizedWindows.includes(windowId)
                ? isDarkMode
                  ? "bg-blue-600/80 text-white border border-blue-500"
                  : "bg-white/20 text-white border border-white/30"
                : minimizedWindows.includes(windowId)
                  ? isDarkMode
                    ? "bg-gray-700/50 text-gray-400 border border-gray-600"
                    : "bg-white/5 text-white/60 border border-transparent"
                  : isDarkMode
                    ? "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-transparent"
                    : "bg-white/5 text-white/80 hover:bg-white/10 border border-transparent"
            }`}
          >
            <span className="text-xs">{getWindowIcon(windowId)}</span>
            <span>{getWindowTitle(windowId)}</span>
          </button>
        ))}
      </div>

      {/* System Tray */}
      <div className={`flex items-center space-x-3 ${isDarkMode ? "text-gray-300" : "text-white/80"}`}>
        <Wifi size={16} className="hover:text-white cursor-pointer transition-colors" />
        <Volume2 size={16} className="hover:text-white cursor-pointer transition-colors" />
        <Battery size={16} className="hover:text-white cursor-pointer transition-colors" />
        <div className={`text-sm px-3 py-1 rounded ${isDarkMode ? "bg-gray-800/50" : "bg-white/10"}`}>
          <div>{new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</div>
          <div className={`text-xs ${isDarkMode ? "text-gray-400" : "text-white/60"}`}>
            {new Date().toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  )
}
