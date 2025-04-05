"use client"

import { useState } from "react"
import { Users, MessageSquare, Calendar, FileText, BarChart3, Settings, PlusCircle } from "lucide-react"

export default function DashboardOverview() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg shadow-xl w-full max-w-5xl mx-4 overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="bg-gray-800 p-4 md:w-64 md:min-h-[600px]">
          <h2 className="text-xl font-semibold mb-6 px-2">Dashboard</h2>

          <nav className="space-y-1">
            <button
              onClick={() => setActiveTab("overview")}
              className={`flex items-center w-full px-2 py-2 rounded-lg transition-colors ${
                activeTab === "overview" ? "bg-amber-500 text-white" : "text-gray-300 hover:bg-gray-700"
              }`}
            >
              <BarChart3 className="w-5 h-5 mr-3" />
              Overview
            </button>

            <button
              onClick={() => setActiveTab("teams")}
              className={`flex items-center w-full px-2 py-2 rounded-lg transition-colors ${
                activeTab === "teams" ? "bg-amber-500 text-white" : "text-gray-300 hover:bg-gray-700"
              }`}
            >
              <Users className="w-5 h-5 mr-3" />
              Teams
            </button>

            <button
              onClick={() => setActiveTab("messages")}
              className={`flex items-center w-full px-2 py-2 rounded-lg transition-colors ${
                activeTab === "messages" ? "bg-amber-500 text-white" : "text-gray-300 hover:bg-gray-700"
              }`}
            >
              <MessageSquare className="w-5 h-5 mr-3" />
              Messages
            </button>

            <button
              onClick={() => setActiveTab("calendar")}
              className={`flex items-center w-full px-2 py-2 rounded-lg transition-colors ${
                activeTab === "calendar" ? "bg-amber-500 text-white" : "text-gray-300 hover:bg-gray-700"
              }`}
            >
              <Calendar className="w-5 h-5 mr-3" />
              Calendar
            </button>

            <button
              onClick={() => setActiveTab("documents")}
              className={`flex items-center w-full px-2 py-2 rounded-lg transition-colors ${
                activeTab === "documents" ? "bg-amber-500 text-white" : "text-gray-300 hover:bg-gray-700"
              }`}
            >
              <FileText className="w-5 h-5 mr-3" />
              Documents
            </button>

            <button
              onClick={() => setActiveTab("settings")}
              className={`flex items-center w-full px-2 py-2 rounded-lg transition-colors ${
                activeTab === "settings" ? "bg-amber-500 text-white" : "text-gray-300 hover:bg-gray-700"
              }`}
            >
              <Settings className="w-5 h-5 mr-3" />
              Settings
            </button>
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 p-6  bg-gray-700/70 backdrop-blur-md">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Welcome to Teamify!</h1>
            <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center">JD</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Team Members</h3>
                <Users className="w-5 h-5 text-amber-500" />
              </div>
              <p className="text-2xl font-bold">5</p>
              <p className="text-xs text-gray-400">Active members</p>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Projects</h3>
                <FileText className="w-5 h-5 text-amber-500" />
              </div>
              <p className="text-2xl font-bold">3</p>
              <p className="text-xs text-gray-400">Active projects</p>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Messages</h3>
                <MessageSquare className="w-5 h-5 text-amber-500" />
              </div>
              <p className="text-2xl font-bold">12</p>
              <p className="text-xs text-gray-400">Unread messages</p>
            </div>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg mb-6">
            <h3 className="font-medium mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-xs mr-3 flex-shrink-0">
                  JD
                </div>
                <div>
                  <p className="text-sm">John Doe created a new project</p>
                  <p className="text-xs text-gray-400">2 hours ago</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-green-900 flex items-center justify-center text-xs mr-3 flex-shrink-0">
                  AS
                </div>
                <div>
                  <p className="text-sm">Anna Smith uploaded a document</p>
                  <p className="text-xs text-gray-400">5 hours ago</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-purple-900 flex items-center justify-center text-xs mr-3 flex-shrink-0">
                  RJ
                </div>
                <div>
                  <p className="text-sm">Robert Johnson commented on a task</p>
                  <p className="text-xs text-gray-400">Yesterday</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">Quick Actions</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <button className="flex flex-col items-center justify-center bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-colors">
                <PlusCircle className="w-6 h-6 mb-2 text-amber-500" />
                <span className="text-sm">New Project</span>
              </button>

              <button className="flex flex-col items-center justify-center bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-colors">
                <Users className="w-6 h-6 mb-2 text-amber-500" />
                <span className="text-sm">Invite Team</span>
              </button>

              <button className="flex flex-col items-center justify-center bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-colors">
                <Calendar className="w-6 h-6 mb-2 text-amber-500" />
                <span className="text-sm">Schedule</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

