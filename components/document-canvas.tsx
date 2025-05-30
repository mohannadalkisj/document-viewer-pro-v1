"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { RotateCw, Download } from "lucide-react"

interface DocumentCanvasProps {
  currentPage: number
  zoomLevel: number
}

export default function DocumentCanvas({ currentPage, zoomLevel }: DocumentCanvasProps) {
  return (
    <div className="h-full flex flex-col bg-slate-100">
      {/* Canvas Header */}
      <div className="flex items-center justify-between p-4 bg-white border-b border-slate-200">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-sm font-medium text-slate-700">Document loaded successfully</span>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <RotateCw className="h-4 w-4 mr-2" />
            Rotate
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
        </div>
      </div>

      {/* Document Viewer */}
      <div className="flex-1 flex items-center justify-center p-8">
        <ScrollArea className="h-full w-full">
          <div className="flex justify-center min-h-full">
            <div
              className="bg-white shadow-xl border border-slate-200 rounded-lg overflow-hidden"
              style={{
                width: `${(8.5 * 96 * zoomLevel) / 100}px`,
                height: `${(11 * 96 * zoomLevel) / 100}px`,
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            >
              {/* Document content placeholder */}
              <div className="h-full w-full relative bg-white">
                {/* Header */}
                <div className="p-8 pb-6">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-sm">
                      <span className="text-white font-bold text-lg">AB</span>
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold text-slate-900 leading-tight">ACME Corporation</h1>
                      <p className="text-slate-600 text-base">Annual Business Report 2024</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="px-8 pb-8 space-y-8">
                  {/* Executive Summary */}
                  <div>
                    <h2 className="text-xl font-semibold text-slate-900 mb-6 pb-2 border-b border-slate-200">
                      Executive Summary
                    </h2>
                    <div className="space-y-4">
                      <div className="h-4 bg-slate-200 rounded-sm w-full"></div>
                      <div className="h-4 bg-slate-200 rounded-sm w-[85%]"></div>
                      <div className="h-4 bg-slate-200 rounded-sm w-[92%]"></div>
                      <div className="h-4 bg-slate-200 rounded-sm w-full"></div>
                      <div className="h-4 bg-slate-200 rounded-sm w-[78%]"></div>
                    </div>
                  </div>

                  {/* Key Metrics */}
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Key Metrics</h3>
                    <div className="grid grid-cols-2 gap-6 mb-6">
                      <div className="p-6 bg-slate-50 rounded-lg border border-slate-100">
                        <div className="h-3 bg-slate-300 rounded-sm w-[60%] mb-3"></div>
                        <div className="h-8 bg-slate-400 rounded-sm w-[80%]"></div>
                      </div>
                      <div className="p-6 bg-slate-50 rounded-lg border border-slate-100">
                        <div className="h-3 bg-slate-300 rounded-sm w-[55%] mb-3"></div>
                        <div className="h-8 bg-slate-400 rounded-sm w-[70%]"></div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Content */}
                  <div className="space-y-4">
                    <div className="h-4 bg-slate-200 rounded-sm w-full"></div>
                    <div className="h-4 bg-slate-200 rounded-sm w-[88%]"></div>
                    <div className="h-4 bg-slate-200 rounded-sm w-[95%]"></div>
                    <div className="h-4 bg-slate-200 rounded-sm w-full"></div>
                    <div className="h-4 bg-slate-200 rounded-sm w-[82%]"></div>
                    <div className="h-4 bg-slate-200 rounded-sm w-[90%]"></div>
                    <div className="h-4 bg-slate-200 rounded-sm w-[75%]"></div>
                  </div>
                </div>

                {/* Footer */}
                <div className="absolute bottom-6 left-8 right-8 flex justify-between items-center text-sm text-slate-500 border-t border-slate-100 pt-4">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                    <span>Page {currentPage}</span>
                  </div>
                  <span>ACME Corporation - Confidential</span>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                    <span>3 collaborators</span>
                  </div>
                </div>

                {/* Sample annotation */}
                <div className="absolute top-24 right-8">
                  <div className="w-7 h-7 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-yellow-900 cursor-pointer hover:scale-110 transition-transform shadow-sm border-2 border-yellow-500">
                    !
                  </div>
                </div>

                {/* Additional annotation */}
                <div className="absolute top-64 left-12">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold text-white cursor-pointer hover:scale-110 transition-transform shadow-sm">
                    i
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
