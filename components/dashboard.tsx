"use client"

import { useState, useEffect } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts"

interface DashboardProps {
  isDarkMode: boolean
}

export function Dashboard({ isDarkMode }: DashboardProps) {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [activeTab, setActiveTab] = useState("overview")

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const weeklyProgress = [
    { week: "Week 1", completed: 85, total: 100, color: "#3b82f6" },
    { week: "Week 2", completed: 60, total: 100, color: "#10b981" },
    { week: "Week 3", completed: 25, total: 100, color: "#8b5cf6" },
  ]

  const skillsData = [
    { name: "React", value: 75, color: "#61dafb" },
    { name: "Node.js", value: 60, color: "#68a063" },
    { name: "JavaScript", value: 85, color: "#f7df1e" },
    { name: "CSS", value: 70, color: "#1572b6" },
    { name: "MongoDB", value: 45, color: "#47a248" },
  ]

  const dailyActivity = [
    { day: "Mon", hours: 6 },
    { day: "Tue", hours: 8 },
    { day: "Wed", hours: 7 },
    { day: "Thu", hours: 9 },
    { day: "Fri", hours: 5 },
    { day: "Sat", hours: 3 },
    { day: "Sun", hours: 2 },
  ]

  const tabs = [
    { id: "overview", label: "Overview", icon: "📊" },
    { id: "progress", label: "Progress", icon: "📈" },
    { id: "skills", label: "Skills", icon: "🎯" },
    { id: "activity", label: "Activity", icon: "⏰" },
  ]

  return (
    <div className="p-6 space-y-6 max-h-96 overflow-y-auto">
      {/* Header with Live Clock */}
      <div
        className={`p-4 rounded-lg border shadow-sm ${
          isDarkMode
            ? "bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600"
            : "bg-gradient-to-r from-blue-50 to-white border-blue-200"
        }`}
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}>Training Dashboard</h2>
            <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Real-time progress tracking</p>
          </div>
          <div className="text-right">
            <div className={`text-lg font-mono ${isDarkMode ? "text-white" : "text-gray-800"}`}>
              {currentTime.toLocaleTimeString()}
            </div>
            <div className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              {currentTime.toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === tab.id
                ? isDarkMode
                  ? "bg-blue-600 text-white"
                  : "bg-blue-500 text-white"
                : isDarkMode
                  ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "overview" && (
        <div className="grid grid-cols-2 gap-4">
          <div
            className={`p-4 rounded-lg border ${
              isDarkMode ? "bg-gray-800 border-gray-600" : "bg-white border-gray-200"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-800"}`}>Overall Progress</h3>
              <span className="text-2xl">🎓</span>
            </div>
            <div className="text-3xl font-bold text-blue-500 mb-1">67%</div>
            <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Completed</p>
            <div className={`w-full rounded-full h-2 mt-2 ${isDarkMode ? "bg-gray-700" : "bg-gray-200"}`}>
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                style={{ width: "67%" }}
              ></div>
            </div>
          </div>

          <div
            className={`p-4 rounded-lg border ${
              isDarkMode ? "bg-gray-800 border-gray-600" : "bg-white border-gray-200"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-800"}`}>Study Streak</h3>
              <span className="text-2xl">🔥</span>
            </div>
            <div className="text-3xl font-bold text-orange-500 mb-1">12</div>
            <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Days</p>
          </div>

          <div
            className={`p-4 rounded-lg border ${
              isDarkMode ? "bg-gray-800 border-gray-600" : "bg-white border-gray-200"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-800"}`}>Projects</h3>
              <span className="text-2xl">💼</span>
            </div>
            <div className="text-3xl font-bold text-green-500 mb-1">3</div>
            <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Completed</p>
          </div>

          <div
            className={`p-4 rounded-lg border ${
              isDarkMode ? "bg-gray-800 border-gray-600" : "bg-white border-gray-200"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-800"}`}>Next Milestone</h3>
              <span className="text-2xl">🎯</span>
            </div>
            <div className={`text-sm font-medium ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>Week 3 Final</div>
            <p className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>In 5 days</p>
          </div>
        </div>
      )}

      {activeTab === "progress" && (
        <div
          className={`p-4 rounded-lg border ${isDarkMode ? "bg-gray-800 border-gray-600" : "bg-white border-gray-200"}`}
        >
          <h3 className={`font-semibold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}>Weekly Progress</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={weeklyProgress}>
              <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? "#374151" : "#e5e7eb"} />
              <XAxis dataKey="week" stroke={isDarkMode ? "#9ca3af" : "#6b7280"} />
              <YAxis stroke={isDarkMode ? "#9ca3af" : "#6b7280"} />
              <Tooltip
                contentStyle={{
                  backgroundColor: isDarkMode ? "#1f2937" : "#ffffff",
                  border: `1px solid ${isDarkMode ? "#374151" : "#e5e7eb"}`,
                  borderRadius: "8px",
                  color: isDarkMode ? "#ffffff" : "#000000",
                }}
              />
              <Bar dataKey="completed" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      {activeTab === "skills" && (
        <div
          className={`p-4 rounded-lg border ${isDarkMode ? "bg-gray-800 border-gray-600" : "bg-white border-gray-200"}`}
        >
          <h3 className={`font-semibold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}>Skill Development</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={skillsData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {skillsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: isDarkMode ? "#1f2937" : "#ffffff",
                  border: `1px solid ${isDarkMode ? "#374151" : "#e5e7eb"}`,
                  borderRadius: "8px",
                  color: isDarkMode ? "#ffffff" : "#000000",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}

      {activeTab === "activity" && (
        <div
          className={`p-4 rounded-lg border ${isDarkMode ? "bg-gray-800 border-gray-600" : "bg-white border-gray-200"}`}
        >
          <h3 className={`font-semibold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}>Daily Study Hours</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={dailyActivity}>
              <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? "#374151" : "#e5e7eb"} />
              <XAxis dataKey="day" stroke={isDarkMode ? "#9ca3af" : "#6b7280"} />
              <YAxis stroke={isDarkMode ? "#9ca3af" : "#6b7280"} />
              <Tooltip
                contentStyle={{
                  backgroundColor: isDarkMode ? "#1f2937" : "#ffffff",
                  border: `1px solid ${isDarkMode ? "#374151" : "#e5e7eb"}`,
                  borderRadius: "8px",
                  color: isDarkMode ? "#ffffff" : "#000000",
                }}
              />
              <Line
                type="monotone"
                dataKey="hours"
                stroke="#8b5cf6"
                strokeWidth={3}
                dot={{ fill: "#8b5cf6", strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8, stroke: "#8b5cf6", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  )
}
