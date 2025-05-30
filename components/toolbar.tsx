"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
  Grid3X3,
  Columns2,
  Rows3,
  Move,
  Maximize,
  FileImage,
  Menu,
} from "lucide-react"

interface ToolbarProps {
  onSidebarToggle: () => void
  currentPage: number
  totalPages: number
  zoomLevel: number
  onPageChange: (page: number) => void
  onZoomChange: (zoom: number) => void
}

export default function Toolbar({
  onSidebarToggle,
  currentPage,
  totalPages,
  zoomLevel,
  onPageChange,
  onZoomChange,
}: ToolbarProps) {
  return (
    <div className="border-b bg-white">
      {/* Main Menu Bar */}
      <div className="flex items-center px-4 py-2 space-x-1">
        <Button variant="ghost" size="sm" onClick={onSidebarToggle}>
          <Menu className="h-4 w-4" />
        </Button>

        <Separator orientation="vertical" className="h-6" />

        {/* File Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
              <File className="h-4 w-4 mr-2" />
              File
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuItem>
              <Upload className="h-4 w-4 mr-2" />
              Open local file...
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FileImage className="h-4 w-4 mr-2" />
              Open from URL...
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Download className="h-4 w-4 mr-2" />
              Export...
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Print className="h-4 w-4 mr-2" />
              Print...
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Edit Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
              <Edit3 className="h-4 w-4 mr-2" />
              Edit
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuItem>Undo</DropdownMenuItem>
            <DropdownMenuItem>Redo</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Select all</DropdownMenuItem>
            <DropdownMenuItem>Copy text...</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Search className="h-4 w-4 mr-2" />
              Find text
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* View Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
              <Eye className="h-4 w-4 mr-2" />
              View
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuItem>
              <RotateCw className="h-4 w-4 mr-2" />
              Rotate clockwise
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Actual size</DropdownMenuItem>
            <DropdownMenuItem>Fit page</DropdownMenuItem>
            <DropdownMenuItem>Fit width</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Page Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
              <FileText className="h-4 w-4 mr-2" />
              Page
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuItem>First page</DropdownMenuItem>
            <DropdownMenuItem>Previous page</DropdownMenuItem>
            <DropdownMenuItem>Next page</DropdownMenuItem>
            <DropdownMenuItem>Last page</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Interactive Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
              <MousePointer className="h-4 w-4 mr-2" />
              Interactive
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuItem>Pan/Zoom</DropdownMenuItem>
            <DropdownMenuItem>Pan</DropdownMenuItem>
            <DropdownMenuItem>Zoom</DropdownMenuItem>
            <DropdownMenuItem>Select text</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Annotations Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
              <PenTool className="h-4 w-4 mr-2" />
              Annotations
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuItem>Run mode</DropdownMenuItem>
            <DropdownMenuItem>Design mode</DropdownMenuItem>
            <DropdownMenuItem>Render mode</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="flex-1" />

        {/* Settings */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Preferences
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem>User name</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Show text indicators</DropdownMenuItem>
            <DropdownMenuItem>Show links</DropdownMenuItem>
            <DropdownMenuItem>Document viewer options...</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Quick Actions Bar */}
      <div className="flex items-center px-4 py-2 bg-gray-50/50 border-t space-x-2">
        {/* Navigation */}
        <div className="flex items-center space-x-1">
          <Button variant="ghost" size="sm">
            <SkipBack className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="flex items-center space-x-2">
            <Input
              type="number"
              value={currentPage}
              onChange={(e) => onPageChange(Number(e.target.value))}
              className="w-16 h-8 text-center text-sm"
            />
            <span className="text-sm text-muted-foreground">of {totalPages}</span>
          </div>
          <Button variant="ghost" size="sm">
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <SkipForward className="h-4 w-4" />
          </Button>
        </div>

        <Separator orientation="vertical" className="h-6" />

        {/* Zoom Controls */}
        <div className="flex items-center space-x-1">
          <Button variant="ghost" size="sm" onClick={() => onZoomChange(Math.max(25, zoomLevel - 25))}>
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Select value={`${zoomLevel}%`} onValueChange={(value) => onZoomChange(Number.parseInt(value))}>
            <SelectTrigger className="w-24 h-8">
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
            </SelectContent>
          </Select>
          <Button variant="ghost" size="sm" onClick={() => onZoomChange(Math.min(400, zoomLevel + 25))}>
            <ZoomIn className="h-4 w-4" />
          </Button>
        </div>

        <Separator orientation="vertical" className="h-6" />

        {/* View Options */}
        <div className="flex items-center space-x-1">
          <Button variant="ghost" size="sm">
            <Maximize className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <FileImage className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Grid3X3 className="h-4 w-4" />
          </Button>
        </div>

        <Separator orientation="vertical" className="h-6" />

        {/* Layout Options */}
        <div className="flex items-center space-x-1">
          <Button variant="ghost" size="sm">
            <FileText className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Columns2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Rows3 className="h-4 w-4" />
          </Button>
        </div>

        <Separator orientation="vertical" className="h-6" />

        {/* Interactive Tools */}
        <div className="flex items-center space-x-1">
          <Button variant="ghost" size="sm">
            <Move className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
