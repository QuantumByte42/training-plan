"use client"

import { useState, useEffect } from "react"
import { Window } from "@/components/window"
import { TaskBar } from "@/components/taskbar"
import { Desktop } from "@/components/desktop"
import { WeekOverview } from "@/components/week-overview"
import { Fundamentals } from "@/components/fundamentals"
import { Resources } from "@/components/resources"
import { ProjectManagement } from "@/components/project-management"
import { Dashboard } from "@/components/dashboard"
import { StartMenu } from "@/components/start-menu"

export default function Home() {
  const [activeWindow, setActiveWindow] = useState<string | null>("overview")
  const [openWindows, setOpenWindows] = useState<string[]>(["overview"])
  const [minimizedWindows, setMinimizedWindows] = useState<string[]>([])
  const [showStartMenu, setShowStartMenu] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [windowAnimations, setWindowAnimations] = useState<Record<string, string>>({})

  const openWindow = (windowId: string) => {
    if (!openWindows.includes(windowId)) {
      setOpenWindows([...openWindows, windowId])
      setWindowAnimations((prev) => ({ ...prev, [windowId]: "animate-slideIn" }))
      setTimeout(() => {
        setWindowAnimations((prev) => ({ ...prev, [windowId]: "" }))
      }, 300)
    }
    if (minimizedWindows.includes(windowId)) {
      setMinimizedWindows(minimizedWindows.filter((id) => id !== windowId))
    }
    setActiveWindow(windowId)
    setShowStartMenu(false)
  }

  const closeWindow = (windowId: string) => {
    setWindowAnimations((prev) => ({ ...prev, [windowId]: "animate-slideOut" }))
    setTimeout(() => {
      setOpenWindows(openWindows.filter((id) => id !== windowId))
      setMinimizedWindows(minimizedWindows.filter((id) => id !== windowId))
      if (activeWindow === windowId) {
        setActiveWindow(openWindows.length > 1 ? openWindows[openWindows.length - 2] : null)
      }
      setWindowAnimations((prev) => {
        const newAnimations = { ...prev }
        delete newAnimations[windowId]
        return newAnimations
      })
    }, 200)
  }

  const minimizeWindow = (windowId: string) => {
    if (!minimizedWindows.includes(windowId)) {
      setMinimizedWindows([...minimizedWindows, windowId])
      setWindowAnimations((prev) => ({ ...prev, [windowId]: "animate-minimize" }))
      setTimeout(() => {
        setWindowAnimations((prev) => ({ ...prev, [windowId]: "" }))
      }, 300)
    }
    if (activeWindow === windowId) {
      const otherWindows = openWindows.filter((id) => id !== windowId && !minimizedWindows.includes(id))
      setActiveWindow(otherWindows.length > 0 ? otherWindows[otherWindows.length - 1] : null)
    }
  }

  const focusWindow = (windowId: string) => {
    if (minimizedWindows.includes(windowId)) {
      setMinimizedWindows(minimizedWindows.filter((id) => id !== windowId))
      setWindowAnimations((prev) => ({ ...prev, [windowId]: "animate-restore" }))
      setTimeout(() => {
        setWindowAnimations((prev) => ({ ...prev, [windowId]: "" }))
      }, 300)
    }
    setActiveWindow(windowId)
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  useEffect(() => {
    const handleClickOutside = () => {
      setShowStartMenu(false)
    }
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [])

  return (
    <div
      className={`h-screen overflow-hidden font-segoe relative transition-all duration-500 ${
        isDarkMode
          ? "bg-gradient-to-b from-gray-800 via-gray-900 to-black"
          : "bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600"
      }`}
    >
      {/* Enhanced Background with Particles */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900"
              : "bg-gradient-to-br from-blue-300 via-blue-400 to-blue-600"
          }`}
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl opacity-30 animate-float"></div>
            <div
              className="absolute top-1/2 right-1/4 w-64 h-64 bg-cyan-200 rounded-full blur-2xl opacity-40 animate-float"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-25 animate-float"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute top-1/3 right-1/3 w-32 h-32 bg-purple-300 rounded-full blur-xl opacity-30 animate-float"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-pink-200 rounded-full blur-2xl opacity-25 animate-float"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </div>
          <div
            className={`absolute inset-0 ${
              isDarkMode
                ? "bg-gradient-to-t from-transparent via-white/2 to-white/5"
                : "bg-gradient-to-t from-transparent via-white/5 to-white/10"
            }`}
          ></div>
        </div>
      </div>

      <Desktop onOpenWindow={openWindow} isDarkMode={isDarkMode} />

      {/* Start Menu */}
      {showStartMenu && (
        <StartMenu
          onOpenWindow={openWindow}
          onToggleDarkMode={toggleDarkMode}
          isDarkMode={isDarkMode}
          onClose={() => setShowStartMenu(false)}
        />
      )}

      {/* Windows */}
      {openWindows.includes("overview") && !minimizedWindows.includes("overview") && (
        <Window
          title="3-Week Web Development Training Program"
          isActive={activeWindow === "overview"}
          onClose={() => closeWindow("overview")}
          onMinimize={() => minimizeWindow("overview")}
          onFocus={() => focusWindow("overview")}
          initialPosition={{ x: 50, y: 50 }}
          isDarkMode={isDarkMode}
          animation={windowAnimations["overview"]}
        >
          <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
            {/* Enhanced overview content with progress indicators */}
            <div
              className={`p-4 rounded-lg border shadow-sm ${
                isDarkMode
                  ? "bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600"
                  : "bg-gradient-to-r from-blue-50 to-white border-blue-200"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-3 animate-glow">
                    <span className="text-white font-bold text-sm">📚</span>
                  </div>
                  <h2 className={`font-semibold text-lg ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                    Executive Summary
                  </h2>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className={`text-xs ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Active</span>
                </div>
              </div>
              <p className={`text-sm leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                This report outlines an intensive 3-week web development training program designed to equip students
                with the foundational knowledge and practical skills necessary to develop full-stack web applications.
                The curriculum focuses on modern JavaScript technologies, utilizing Next.js for front-end development
                and Node.js for back-end services.
              </p>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className={`text-xs font-medium ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                    Program Progress
                  </span>
                  <span className={`text-xs ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Week 1 of 3</span>
                </div>
                <div className={`w-full rounded-full h-2 ${isDarkMode ? "bg-gray-700" : "bg-gray-200"}`}>
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full animate-pulse"
                    style={{ width: "33%" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Rest of the overview content with enhanced styling */}
            <div
              className={`p-4 rounded-lg border shadow-sm ${
                isDarkMode
                  ? "bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600"
                  : "bg-gradient-to-r from-green-50 to-white border-green-200"
              }`}
            >
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">📋</span>
                </div>
                <h3 className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-800"}`}>Program Structure</h3>
              </div>
              <ul className={`text-sm space-y-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                <li className="flex items-center group hover:scale-105 transition-transform">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 group-hover:animate-ping"></div>
                  <strong>Week 1:</strong> React & Next.js Fundamentals
                </li>
                <li className="flex items-center group hover:scale-105 transition-transform">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 group-hover:animate-ping"></div>
                  <strong>Week 2:</strong> Node.js & Express.js Backend
                </li>
                <li className="flex items-center group hover:scale-105 transition-transform">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2 group-hover:animate-ping"></div>
                  <strong>Week 3:</strong> Full-Stack Integration & Capstone Project
                </li>
              </ul>
            </div>

            {/* Technology Stack with Icons */}
            <div
              className={`p-4 rounded-lg border shadow-sm ${
                isDarkMode
                  ? "bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600"
                  : "bg-gradient-to-r from-purple-50 to-white border-purple-200"
              }`}
            >
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">⚡</span>
                </div>
                <h3 className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-800"}`}>Key Technologies</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div
                  className={`p-3 rounded border transition-all hover:scale-105 hover:shadow-lg ${
                    isDarkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-200"
                  }`}
                >
                  <div className="flex items-center mb-2">
                    <span className="text-lg mr-2">🎨</span>
                    <strong className="text-blue-600">Frontend:</strong>
                  </div>
                  <ul className={`ml-2 mt-1 space-y-1 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-orange-500 rounded-full mr-2"></span>HTML/CSS/JavaScript
                    </li>
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-cyan-500 rounded-full mr-2"></span>React
                    </li>
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-black rounded-full mr-2"></span>Next.js
                    </li>
                  </ul>
                </div>
                <div
                  className={`p-3 rounded border transition-all hover:scale-105 hover:shadow-lg ${
                    isDarkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-200"
                  }`}
                >
                  <div className="flex items-center mb-2">
                    <span className="text-lg mr-2">⚙️</span>
                    <strong className="text-green-600">Backend:</strong>
                  </div>
                  <ul className={`ml-2 mt-1 space-y-1 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-green-500 rounded-full mr-2"></span>Node.js
                    </li>
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>Express.js
                    </li>
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-green-600 rounded-full mr-2"></span>MongoDB/Mongoose
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Capstone Project with Timeline */}
            <div
              className={`p-4 rounded-lg border shadow-sm ${
                isDarkMode
                  ? "bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600"
                  : "bg-gradient-to-r from-orange-50 to-white border-orange-200"
              }`}
            >
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">🎯</span>
                </div>
                <h3 className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-800"}`}>Capstone Project</h3>
              </div>
              <p className={`text-sm mb-3 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                Students will collaborate to build a complete "To-Do List" application, demonstrating full-stack
                development skills and modern project management practices using Linear.
              </p>

              {/* Mini Timeline */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mb-1"></div>
                  <span className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Setup</span>
                </div>
                <div className={`flex-1 h-0.5 mx-2 ${isDarkMode ? "bg-gray-600" : "bg-gray-300"}`}></div>
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mb-1 animate-pulse"></div>
                  <span className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Development</span>
                </div>
                <div className={`flex-1 h-0.5 mx-2 ${isDarkMode ? "bg-gray-600" : "bg-gray-300"}`}></div>
                <div className="flex flex-col items-center">
                  <div className={`w-3 h-3 rounded-full mb-1 ${isDarkMode ? "bg-gray-600" : "bg-gray-300"}`}></div>
                  <span className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Deploy</span>
                </div>
              </div>
            </div>
          </div>
        </Window>
      )}

      {/* Dashboard Window */}
      {openWindows.includes("dashboard") && !minimizedWindows.includes("dashboard") && (
        <Window
          title="Training Dashboard"
          isActive={activeWindow === "dashboard"}
          onClose={() => closeWindow("dashboard")}
          onMinimize={() => minimizeWindow("dashboard")}
          onFocus={() => focusWindow("dashboard")}
          initialPosition={{ x: 400, y: 80 }}
          isDarkMode={isDarkMode}
          animation={windowAnimations["dashboard"]}
        >
          <Dashboard isDarkMode={isDarkMode} />
        </Window>
      )}

      {/* Other existing windows with enhanced animations */}
      {openWindows.includes("fundamentals") && !minimizedWindows.includes("fundamentals") && (
        <Window
          title="Web Development Fundamentals"
          isActive={activeWindow === "fundamentals"}
          onClose={() => closeWindow("fundamentals")}
          onMinimize={() => minimizeWindow("fundamentals")}
          onFocus={() => focusWindow("fundamentals")}
          initialPosition={{ x: 100, y: 100 }}
          isDarkMode={isDarkMode}
          animation={windowAnimations["fundamentals"]}
        >
          <Fundamentals isDarkMode={isDarkMode} />
        </Window>
      )}

      {openWindows.includes("week1") && !minimizedWindows.includes("week1") && (
        <Window
          title="Week 1: React & Next.js"
          isActive={activeWindow === "week1"}
          onClose={() => closeWindow("week1")}
          onMinimize={() => minimizeWindow("week1")}
          onFocus={() => focusWindow("week1")}
          initialPosition={{ x: 150, y: 150 }}
          isDarkMode={isDarkMode}
          animation={windowAnimations["week1"]}
        >
          <WeekOverview week={1} isDarkMode={isDarkMode} />
        </Window>
      )}

      {openWindows.includes("week2") && !minimizedWindows.includes("week2") && (
        <Window
          title="Week 2: Node.js & Express"
          isActive={activeWindow === "week2"}
          onClose={() => closeWindow("week2")}
          onMinimize={() => minimizeWindow("week2")}
          onFocus={() => focusWindow("week2")}
          initialPosition={{ x: 200, y: 200 }}
          isDarkMode={isDarkMode}
          animation={windowAnimations["week2"]}
        >
          <WeekOverview week={2} isDarkMode={isDarkMode} />
        </Window>
      )}

      {openWindows.includes("week3") && !minimizedWindows.includes("week3") && (
        <Window
          title="Week 3: Full-Stack Integration"
          isActive={activeWindow === "week3"}
          onClose={() => closeWindow("week3")}
          onMinimize={() => minimizeWindow("week3")}
          onFocus={() => focusWindow("week3")}
          initialPosition={{ x: 250, y: 250 }}
          isDarkMode={isDarkMode}
          animation={windowAnimations["week3"]}
        >
          <WeekOverview week={3} isDarkMode={isDarkMode} />
        </Window>
      )}

      {openWindows.includes("linear") && !minimizedWindows.includes("linear") && (
        <Window
          title="Project Management with Linear"
          isActive={activeWindow === "linear"}
          onClose={() => closeWindow("linear")}
          onMinimize={() => minimizeWindow("linear")}
          onFocus={() => focusWindow("linear")}
          initialPosition={{ x: 300, y: 100 }}
          isDarkMode={isDarkMode}
          animation={windowAnimations["linear"]}
        >
          <ProjectManagement isDarkMode={isDarkMode} />
        </Window>
      )}

      {openWindows.includes("resources") && !minimizedWindows.includes("resources") && (
        <Window
          title="Learning Resources"
          isActive={activeWindow === "resources"}
          onClose={() => closeWindow("resources")}
          onMinimize={() => minimizeWindow("resources")}
          onFocus={() => focusWindow("resources")}
          initialPosition={{ x: 350, y: 150 }}
          isDarkMode={isDarkMode}
          animation={windowAnimations["resources"]}
        >
          <Resources isDarkMode={isDarkMode} />
        </Window>
      )}

      <TaskBar
        openWindows={openWindows}
        minimizedWindows={minimizedWindows}
        activeWindow={activeWindow}
        onWindowClick={focusWindow}
        onOpenWindow={openWindow}
        onToggleStartMenu={() => setShowStartMenu(!showStartMenu)}
        isDarkMode={isDarkMode}
      />
    </div>
  )
}
