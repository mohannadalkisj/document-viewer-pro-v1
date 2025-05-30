"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  File,
  Edit3,
  Eye,
  FileText,
  MousePointer,
  PenTool,
  Settings,
  Upload,
  Download,
  PrinterIcon as Print,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Search,
  ChevronLeft,
  ChevronRight,
  SkipBack,
  SkipForward,
  Columns2,
  Rows3,
  Move,
  Maximize,
  FileImage,
  Menu,
  Save,
  Share2,
  History,
  Cloud,
  Lock,
  Users,
  MoreHorizontal,
} from "lucide-react"
import React from "react"

interface HeaderProps {
  onSidebarToggle: () => void
  currentPage: number
  totalPages: number
  zoomLevel: number
  onPageChange: (page: number) => void
  onZoomChange: (zoom: number) => void
  onAnnotationToggle: () => void
}

export default function Header({
  onSidebarToggle,
  currentPage,
  totalPages,
  zoomLevel,
  onPageChange,
  onZoomChange,
  onAnnotationToggle,
}: HeaderProps) {
  return (
    <TooltipProvider>
      <div className="bg-white border-b border-slate-200 shadow-sm">
        {/* Main Header */}
        <div className="flex items-center justify-between px-6 py-3">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={onSidebarToggle} className="hover:bg-slate-100">
              <Menu className="h-4 w-4" />
            </Button>

            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <FileText className="h-4 w-4 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-slate-900">Document Viewer Pro</h1>
                <p className="text-xs text-slate-500">Enterprise Document Management</p>
              </div>
            </div>
          </div>

          {/* Center Section - Document Info */}
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <p className="text-sm font-medium text-slate-900">sample-document.pdf</p>
              <div className="flex items-center space-x-2 text-xs text-slate-500">
                <Badge variant="secondary" className="text-xs">
                  PDF
                </Badge>
                <span>2.4 MB</span>
                <span>•</span>
                <span>Last modified 2 hours ago</span>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm" className="hover:bg-slate-50">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </TooltipTrigger>
              <TooltipContent>Share document</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm" className="hover:bg-slate-50">
                  <Save className="h-4 w-4 mr-2" />
                  Save
                </Button>
              </TooltipTrigger>
              <TooltipContent>Save document</TooltipContent>
            </Tooltip>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="hover:bg-slate-50">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                  <Users className="h-4 w-4 mr-2" />
                  Collaboration
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <History className="h-4 w-4 mr-2" />
                  Version History
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Lock className="h-4 w-4 mr-2" />
                  Security Settings
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Toolbar */}
        <div className="border-t border-slate-100 bg-slate-50/50">
          {/* Main Menu Bar */}
          <div className="flex items-center px-6 py-2 space-x-1">
            {/* File Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="font-medium hover:bg-white">
                  <File className="h-4 w-4 mr-2" />
                  File
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64">
                <DropdownMenuItem className="py-3">
                  <Upload className="h-4 w-4 mr-3" />
                  <div>
                    <p className="font-medium">Open Document</p>
                    <p className="text-xs text-slate-500">Upload from your device</p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3">
                  <Cloud className="h-4 w-4 mr-3" />
                  <div>
                    <p className="font-medium">Open from Cloud</p>
                    <p className="text-xs text-slate-500">Google Drive, OneDrive, Dropbox</p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <Download className="h-4 w-4 mr-3" />
                    Export Document
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Export as PDF</DropdownMenuItem>
                    <DropdownMenuItem>Export as Word</DropdownMenuItem>
                    <DropdownMenuItem>Export as Image</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuItem className="py-3">
                  <Print className="h-4 w-4 mr-3" />
                  <div>
                    <p className="font-medium">Print Document</p>
                    <p className="text-xs text-slate-500">Print or save as PDF</p>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Edit Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="font-medium hover:bg-white">
                  <Edit3 className="h-4 w-4 mr-2" />
                  Edit
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem>
                  <div className="flex items-center justify-between w-full">
                    Undo
                    <kbd className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">Ctrl+Z</kbd>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="flex items-center justify-between w-full">
                    Redo
                    <kbd className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">Ctrl+Y</kbd>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Select All Text</DropdownMenuItem>
                <DropdownMenuItem>Copy Selected Text</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Search className="h-4 w-4 mr-2" />
                  Find in Document
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* View Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="font-medium hover:bg-white">
                  <Eye className="h-4 w-4 mr-2" />
                  View
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem>
                  <RotateCw className="h-4 w-4 mr-2" />
                  Rotate Clockwise
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Actual Size (100%)</DropdownMenuItem>
                <DropdownMenuItem>Fit to Page</DropdownMenuItem>
                <DropdownMenuItem>Fit to Width</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Full Screen Mode</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Annotations Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="font-medium hover:bg-white" onClick={onAnnotationToggle}>
                  <PenTool className="h-4 w-4 mr-2" />
                  Annotations
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem>Design Mode</DropdownMenuItem>
                <DropdownMenuItem>Review Mode</DropdownMenuItem>
                <DropdownMenuItem>Read-Only Mode</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Show All Annotations</DropdownMenuItem>
                <DropdownMenuItem>Hide All Annotations</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="flex-1" />

            {/* Settings */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="font-medium hover:bg-white">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>Document Preferences</DropdownMenuItem>
                <DropdownMenuItem>Display Options</DropdownMenuItem>
                <DropdownMenuItem>Accessibility Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>About Document Viewer</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Quick Actions Toolbar */}
          <div className="flex items-center justify-between px-6 py-3 bg-white border-t border-slate-100">
            {/* Navigation Controls */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1 bg-slate-50 rounded-lg p-1">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <SkipBack className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>First page</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Previous page</TooltipContent>
                </Tooltip>

                <div className="flex items-center space-x-2 px-3">
                  <Input
                    type="number"
                    value={currentPage}
                    onChange={(e) => onPageChange(Number(e.target.value))}
                    className="w-16 h-8 text-center text-sm border-0 bg-white shadow-sm"
                  />
                  <span className="text-sm text-slate-500 font-medium">of {totalPages}</span>
                </div>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Next page</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <SkipForward className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Last page</TooltipContent>
                </Tooltip>
              </div>

              <Separator orientation="vertical" className="h-8" />

              {/* Zoom Controls */}
              <div className="flex items-center space-x-1 bg-slate-50 rounded-lg p-1">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => onZoomChange(Math.max(25, zoomLevel - 25))}
                    >
                      <ZoomOut className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Zoom out</TooltipContent>
                </Tooltip>

                <Select value={`${zoomLevel}%`} onValueChange={(value) => onZoomChange(Number.parseInt(value))}>
                  <SelectTrigger className="w-20 h-8 border-0 bg-white shadow-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="25">25%</SelectItem>
                    <SelectItem value="50">50%</SelectItem>
                    <SelectItem value="75">75%</SelectItem>
                    <SelectItem value="100">100%</SelectItem>
                    <SelectItem value="125">125%</SelectItem>
                    <SelectItem value="150">150%</SelectItem>
                    <SelectItem value="200">200%</SelectItem>
                    <SelectItem value="300">300%</SelectItem>
                    <SelectItem value="400">400%</SelectItem>
                  </SelectContent>
                </Select>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => onZoomChange(Math.min(400, zoomLevel + 25))}
                    >
                      <ZoomIn className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Zoom in</TooltipContent>
                </Tooltip>
              </div>
            </div>

            {/* View and Layout Controls */}
            <div className="flex items-center space-x-3">
              {/* View Options */}
              <div className="flex items-center space-x-1 bg-slate-50 rounded-lg p-1">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Maximize className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Fit to page</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <FileImage className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Fit to width</TooltipContent>
                </Tooltip>
              </div>

              <Separator orientation="vertical" className="h-8" />

              {/* Layout Options */}
              <div className="flex items-center space-x-1 bg-slate-50 rounded-lg p-1">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 bg-white shadow-sm">
                      <FileText className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Single page</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Columns2 className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Two pages</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Rows3 className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Continuous scroll</TooltipContent>
                </Tooltip>
              </div>

              <Separator orientation="vertical" className="h-8" />

              {/* Interactive Tools */}
              <div className="flex items-center space-x-1 bg-slate-50 rounded-lg p-1">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 bg-white shadow-sm">
                      <Move className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Pan tool</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <MousePointer className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Select text</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Search className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Search in document</TooltipContent>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}
