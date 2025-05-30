"use client"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MousePointer,
  Minus,
  Square,
  Circle,
  PenTool,
  Type,
  Highlighter,
  MessageSquare,
  Stamp,
  Eraser,
  X,
  Palette,
  Settings,
  Undo,
  Redo,
  Save,
} from "lucide-react"

interface AnnotationPanelProps {
  isOpen: boolean
  onClose: () => void
}

export default function AnnotationPanel({ isOpen, onClose }: AnnotationPanelProps) {
  if (!isOpen) return null

  return (
    <div className="w-80 border-l border-slate-200 bg-white flex flex-col shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-100">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
            <PenTool className="h-4 w-4 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Annotation Tools</h3>
            <p className="text-xs text-slate-500">Design & Review Mode</p>
          </div>
        </div>
        <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0">
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Quick Actions */}
      <div className="p-4 border-b border-slate-100 bg-slate-50/50">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-slate-700">Quick Actions</span>
          <Badge variant="secondary" className="text-xs">
            Active
          </Badge>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="flex-1">
            <Undo className="h-4 w-4 mr-1" />
            Undo
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            <Redo className="h-4 w-4 mr-1" />
            Redo
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            <Save className="h-4 w-4 mr-1" />
            Save
          </Button>
        </div>
      </div>

      <ScrollArea className="flex-1">
        <Tabs defaultValue="tools" className="w-full">
          <TabsList className="grid w-full grid-cols-2 m-4 mb-0">
            <TabsTrigger value="tools">Tools</TabsTrigger>
            <TabsTrigger value="properties">Properties</TabsTrigger>
          </TabsList>

          <TabsContent value="tools" className="mt-0">
            <div className="p-4 space-y-6">
              {/* Selection Tools */}
              <div>
                <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center">
                  <MousePointer className="h-4 w-4 mr-2" />
                  Selection
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-16 flex flex-col bg-blue-50 border-blue-200 text-blue-700"
                  >
                    <MousePointer className="h-5 w-5 mb-1" />
                    <span className="text-xs font-medium">Select</span>
                  </Button>
                  <Button variant="outline" size="sm" className="h-16 flex flex-col hover:bg-slate-50">
                    <Eraser className="h-5 w-5 mb-1" />
                    <span className="text-xs font-medium">Erase</span>
                  </Button>
                </div>
              </div>

              <Separator />

              {/* Drawing Tools */}
              <div>
                <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center">
                  <PenTool className="h-4 w-4 mr-2" />
                  Drawing
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" className="h-16 flex flex-col hover:bg-slate-50">
                    <PenTool className="h-5 w-5 mb-1" />
                    <span className="text-xs font-medium">Pen</span>
                  </Button>
                  <Button variant="outline" size="sm" className="h-16 flex flex-col hover:bg-slate-50">
                    <Highlighter className="h-5 w-5 mb-1" />
                    <span className="text-xs font-medium">Highlight</span>
                  </Button>
                  <Button variant="outline" size="sm" className="h-16 flex flex-col hover:bg-slate-50">
                    <Minus className="h-5 w-5 mb-1" />
                    <span className="text-xs font-medium">Line</span>
                  </Button>
                  <Button variant="outline" size="sm" className="h-16 flex flex-col hover:bg-slate-50">
                    <Square className="h-5 w-5 mb-1" />
                    <span className="text-xs font-medium">Rectangle</span>
                  </Button>
                  <Button variant="outline" size="sm" className="h-16 flex flex-col hover:bg-slate-50">
                    <Circle className="h-5 w-5 mb-1" />
                    <span className="text-xs font-medium">Circle</span>
                  </Button>
                  <Button variant="outline" size="sm" className="h-16 flex flex-col hover:bg-slate-50">
                    <PenTool className="h-5 w-5 mb-1" />
                    <span className="text-xs font-medium">Freehand</span>
                  </Button>
                </div>
              </div>

              <Separator />

              {/* Text & Notes */}
              <div>
                <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center">
                  <Type className="h-4 w-4 mr-2" />
                  Text & Notes
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" className="h-16 flex flex-col hover:bg-slate-50">
                    <Type className="h-5 w-5 mb-1" />
                    <span className="text-xs font-medium">Text Box</span>
                  </Button>
                  <Button variant="outline" size="sm" className="h-16 flex flex-col hover:bg-slate-50">
                    <MessageSquare className="h-5 w-5 mb-1" />
                    <span className="text-xs font-medium">Comment</span>
                  </Button>
                  <Button variant="outline" size="sm" className="h-16 flex flex-col hover:bg-slate-50">
                    <Stamp className="h-5 w-5 mb-1" />
                    <span className="text-xs font-medium">Stamp</span>
                  </Button>
                  <Button variant="outline" size="sm" className="h-16 flex flex-col hover:bg-slate-50">
                    <MessageSquare className="h-5 w-5 mb-1" />
                    <span className="text-xs font-medium">Sticky Note</span>
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="properties" className="mt-0">
            <div className="p-4 space-y-6">
              {/* Color Palette */}
              <div>
                <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center">
                  <Palette className="h-4 w-4 mr-2" />
                  Colors
                </h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-slate-600 mb-2">Stroke Color</p>
                    <div className="grid grid-cols-8 gap-1">
                      {[
                        "#000000",
                        "#374151",
                        "#6B7280",
                        "#9CA3AF",
                        "#EF4444",
                        "#F97316",
                        "#EAB308",
                        "#22C55E",
                        "#3B82F6",
                        "#6366F1",
                        "#8B5CF6",
                        "#EC4899",
                        "#06B6D4",
                        "#10B981",
                        "#F59E0B",
                        "#84CC16",
                      ].map((color) => (
                        <button
                          key={color}
                          className="w-8 h-8 rounded-lg border-2 border-slate-200 hover:border-slate-400 transition-colors shadow-sm"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-slate-600 mb-2">Fill Color</p>
                    <div className="grid grid-cols-8 gap-1">
                      {[
                        "transparent",
                        "#F8FAFC",
                        "#F1F5F9",
                        "#E2E8F0",
                        "#FEF2F2",
                        "#FFF7ED",
                        "#FEFCE8",
                        "#F0FDF4",
                        "#EFF6FF",
                        "#EEF2FF",
                        "#FAF5FF",
                        "#FDF2F8",
                        "#ECFEFF",
                        "#ECFDF5",
                        "#FFFBEB",
                        "#F7FEE7",
                      ].map((color, i) => (
                        <button
                          key={i}
                          className="w-8 h-8 rounded-lg border-2 border-slate-200 hover:border-slate-400 transition-colors shadow-sm"
                          style={{
                            backgroundColor: color === "transparent" ? "transparent" : color,
                            backgroundImage:
                              color === "transparent"
                                ? "linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)"
                                : "none",
                            backgroundSize: color === "transparent" ? "8px 8px" : "auto",
                            backgroundPosition: color === "transparent" ? "0 0, 0 4px, 4px -4px, -4px 0px" : "auto",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Stroke Properties */}
              <div>
                <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center">
                  <Settings className="h-4 w-4 mr-2" />
                  Stroke Properties
                </h4>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs text-slate-600 mb-1 block">Line Width</label>
                    <div className="grid grid-cols-4 gap-1">
                      {[1, 2, 4, 8].map((width) => (
                        <Button key={width} variant="outline" size="sm" className="h-10 flex flex-col justify-center">
                          <div className="bg-slate-900 rounded" style={{ width: "20px", height: `${width}px` }} />
                          <span className="text-xs mt-1">{width}px</span>
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-slate-600 mb-1 block">Line Style</label>
                    <div className="grid grid-cols-2 gap-1">
                      <Button variant="outline" size="sm" className="h-10 flex flex-col justify-center">
                        <div className="w-5 h-0.5 bg-slate-900 rounded" />
                        <span className="text-xs mt-1">Solid</span>
                      </Button>
                      <Button variant="outline" size="sm" className="h-10 flex flex-col justify-center">
                        <div
                          className="w-5 h-0.5 bg-slate-900 rounded"
                          style={{
                            backgroundImage:
                              "repeating-linear-gradient(to right, transparent, transparent 2px, #1f2937 2px, #1f2937 4px)",
                          }}
                        />
                        <span className="text-xs mt-1">Dashed</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Opacity */}
              <div>
                <h4 className="text-sm font-semibold text-slate-900 mb-3">Opacity</h4>
                <div className="grid grid-cols-4 gap-1">
                  {[25, 50, 75, 100].map((opacity) => (
                    <Button key={opacity} variant="outline" size="sm" className="h-10 flex flex-col justify-center">
                      <div className="w-4 h-4 bg-blue-500 rounded" style={{ opacity: opacity / 100 }} />
                      <span className="text-xs mt-1">{opacity}%</span>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </ScrollArea>
    </div>
  )
}
