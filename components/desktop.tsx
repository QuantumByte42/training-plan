"use client"

import { Folder, FileText, Monitor, Settings, Code, BookOpen, BarChart3 } from "lucide-react"

interface DesktopProps {
  onOpenWindow: (windowId: string) => void
  isDarkMode: boolean
}

export function Desktop({ onOpenWindow, isDarkMode }: DesktopProps) {
  const desktopIcons = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3, color: "from-purple-500 to-purple-600" },
    { id: "fundamentals", label: "Web Fundamentals", icon: BookOpen, color: "from-blue-500 to-blue-600" },
    { id: "week1", label: "Week 1: React", icon: Code, color: "from-cyan-500 to-cyan-600" },
    { id: "week2", label: "Week 2: Node.js", icon: FileText, color: "from-green-500 to-green-600" },
    { id: "week3", label: "Week 3: Full-Stack", icon: Monitor, color: "from-purple-500 to-purple-600" },
    { id: "linear", label: "Linear PM", icon: Settings, color: "from-orange-500 to-orange-600" },
    { id: "resources", label: "Resources", icon: Folder, color: "from-pink-500 to-pink-600" },
  ]

  return (
    <div className="absolute inset-0 p-6">
      <div className="grid grid-cols-1 gap-6 w-28">
        {desktopIcons.map(({ id, label, icon: Icon, color }) => (
          <button
            key={id}
            onDoubleClick={() => onOpenWindow(id)}
            className={`flex flex-col items-center p-3 rounded-lg text-sm transition-all duration-200 group ${
              isDarkMode ? "text-white hover:bg-white/10" : "text-white hover:bg-white/10"
            }`}
          >
            <div
              className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center mb-2 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 group-hover:shadow-2xl`}
            >
              <Icon size={24} className="text-white" />
            </div>
            <span className="text-center leading-tight text-white drop-shadow-lg font-medium group-hover:scale-105 transition-transform">
              {label}
            </span>
          </button>
        ))}
      </div>

      {/* Enhanced Floating Graphics */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-xl animate-float"></div>
      <div
        className="absolute bottom-40 right-40 w-24 h-24 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-lg animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 w-16 h-16 bg-gradient-to-br from-purple-300/15 to-pink-300/15 rounded-full blur-md animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/4 right-1/3 w-20 h-20 bg-gradient-to-br from-green-300/10 to-emerald-300/10 rounded-full blur-lg animate-float"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute bottom-1/4 left-1/4 w-28 h-28 bg-gradient-to-br from-orange-300/15 to-yellow-300/15 rounded-full blur-xl animate-float"
        style={{ animationDelay: "1.5s" }}
      ></div>
    </div>
  )
}
