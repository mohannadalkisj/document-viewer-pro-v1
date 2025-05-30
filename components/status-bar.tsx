"use client"

import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Wifi, Shield, Clock, Users, Eye, CheckCircle } from "lucide-react"

interface StatusBarProps {
  currentPage: number
  totalPages: number
  zoomLevel: number
}

export default function StatusBar({ currentPage, totalPages, zoomLevel }: StatusBarProps) {
  return (
    <div className="h-8 bg-slate-50 border-t border-slate-200 flex items-center justify-between px-4 text-xs">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <CheckCircle className="h-3 w-3 text-green-500" />
          <span className="text-slate-600">Document loaded</span>
        </div>

        <Separator orientation="vertical" className="h-4" />

        <div className="flex items-center space-x-2">
          <Eye className="h-3 w-3 text-slate-500" />
          <span className="text-slate-600">
            Page {currentPage} of {totalPages}
          </span>
        </div>

        <Separator orientation="vertical" className="h-4" />

        <div className="flex items-center space-x-2">
          <span className="text-slate-600">Zoom: {zoomLevel}%</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Users className="h-3 w-3 text-slate-500" />
          <span className="text-slate-600">3 collaborators</span>
        </div>

        <Separator orientation="vertical" className="h-4" />

        <div className="flex items-center space-x-2">
          <Shield className="h-3 w-3 text-green-500" />
          <Badge variant="secondary" className="text-xs h-5">
            Secure
          </Badge>
        </div>

        <Separator orientation="vertical" className="h-4" />

        <div className="flex items-center space-x-2">
          <Clock className="h-3 w-3 text-slate-500" />
          <span className="text-slate-600">Last saved: 2 min ago</span>
        </div>

        <Separator orientation="vertical" className="h-4" />

        <div className="flex items-center space-x-2">
          <Wifi className="h-3 w-3 text-green-500" />
          <span className="text-slate-600">Connected</span>
        </div>
      </div>
    </div>
  )
}
