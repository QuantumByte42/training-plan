"use client"

import { Settings, Power, Moon, Sun, BarChart3, BookOpen, Code, Folder, FileText } from "lucide-react"

interface StartMenuProps {
  onOpenWindow: (windowId: string) => void
  onToggleDarkMode: () => void
  isDarkMode: boolean
  onClose: () => void
}

export function StartMenu({ onOpenWindow, onToggleDarkMode, isDarkMode, onClose }: StartMenuProps) {
  const menuItems = [
    { id: "overview", label: "Training Program", icon: BookOpen, category: "Programs" },
    { id: "dashboard", label: "Dashboard", icon: BarChart3, category: "Programs" },
    { id: "fundamentals", label: "Web Fundamentals", icon: Code, category: "Learning" },
    { id: "week1", label: "Week 1: React", icon: FileText, category: "Learning" },
    { id: "week2", label: "Week 2: Node.js", icon: FileText, category: "Learning" },
    { id: "week3", label: "Week 3: Full-Stack", icon: FileText, category: "Learning" },
    { id: "linear", label: "Linear PM", icon: Settings, category: "Tools" },
    { id: "resources", label: "Resources", icon: Folder, category: "Tools" },
  ]

  const categories = ["Programs", "Learning", "Tools"]

  return (
    <div className="fixed bottom-12 left-4 z-50 animate-slideUp" onClick={(e) => e.stopPropagation()}>
      <div
        className={`w-80 rounded-lg shadow-2xl border backdrop-blur-md ${
          isDarkMode ? "bg-gray-900/95 border-gray-700" : "bg-white/95 border-gray-300"
        }`}
      >
        {/* Header */}
        <div className={`p-4 border-b ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">👨‍💻</span>
            </div>
            <div>
              <div className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-800"}`}>Web Dev Student</div>
              <div className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Learning Mode</div>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="p-2 max-h-80 overflow-y-auto">
          {categories.map((category) => (
            <div key={category} className="mb-4">
              <div
                className={`px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {category}
              </div>
              <div className="space-y-1">
                {menuItems
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        onOpenWindow(item.id)
                        onClose()
                      }}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-all hover:scale-105 ${
                        isDarkMode
                          ? "hover:bg-gray-800 text-gray-300 hover:text-white"
                          : "hover:bg-gray-100 text-gray-700 hover:text-gray-900"
                      }`}
                    >
                      <item.icon size={16} />
                      <span className="text-sm">{item.label}</span>
                    </button>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          className={`p-3 border-t flex items-center justify-between ${
            isDarkMode ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <button
            onClick={onToggleDarkMode}
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all hover:scale-105 ${
              isDarkMode ? "hover:bg-gray-800 text-gray-300" : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
            <span className="text-sm">{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
          </button>

          <button
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all hover:scale-105 ${
              isDarkMode ? "hover:bg-red-900 text-gray-300" : "hover:bg-red-100 text-gray-700"
            }`}
          >
            <Power size={16} />
            <span className="text-sm">Shutdown</span>
          </button>
        </div>
      </div>
    </div>
  )
}
