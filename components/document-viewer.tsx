"use client"

import { useState } from "react"
import Header from "./header"
import Sidebar from "./sidebar"
import DocumentCanvas from "./document-canvas"
import AnnotationPanel from "./annotation-panel"
import StatusBar from "./status-bar"

export default function DocumentViewer() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activePanel, setActivePanel] = useState("thumbnails")
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages] = useState(24)
  const [zoomLevel, setZoomLevel] = useState(100)
  const [annotationPanelOpen, setAnnotationPanelOpen] = useState(true)

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        activePanel={activePanel}
        onPanelChange={setActivePanel}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <Header
          onSidebarToggle={() => setSidebarOpen(!sidebarOpen)}
          currentPage={currentPage}
          totalPages={totalPages}
          zoomLevel={zoomLevel}
          onPageChange={setCurrentPage}
          onZoomChange={setZoomLevel}
          onAnnotationToggle={() => setAnnotationPanelOpen(!annotationPanelOpen)}
        />

        {/* Document Area */}
        <div className="flex-1 flex min-h-0">
          {/* Document Canvas */}
          <div className="flex-1 bg-slate-100">
            <DocumentCanvas currentPage={currentPage} zoomLevel={zoomLevel} />
          </div>

          {/* Annotation Panel */}
          <AnnotationPanel isOpen={annotationPanelOpen} onClose={() => setAnnotationPanelOpen(false)} />
        </div>

        {/* Status Bar */}
        <StatusBar currentPage={currentPage} totalPages={totalPages} zoomLevel={zoomLevel} />
      </div>
    </div>
  )
}
