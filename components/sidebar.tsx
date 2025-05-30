"use client"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  FileImage,
  Bookmark,
  Paperclip,
  FilePenLineIcon as Signature,
  MessageSquare,
  Search,
  X,
  ChevronRight,
  File,
  Calendar,
  User,
} from "lucide-react"

interface SidebarProps {
  isOpen: boolean
  activePanel: string
  onPanelChange: (panel: string) => void
  onClose: () => void
}

export default function Sidebar({ isOpen, activePanel, onPanelChange, onClose }: SidebarProps) {
  if (!isOpen) return null

  return (
    <div className="w-80 bg-white border-r border-slate-200 flex flex-col shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-900">Document Navigator</h2>
        <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0">
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Navigation Tabs */}
      <Tabs value={activePanel} onValueChange={onPanelChange} className="flex-1 flex flex-col">
        <TabsList className="grid w-full grid-cols-5 h-14 bg-slate-50 m-0 rounded-none border-b border-slate-100">
          <TabsTrigger
            value="thumbnails"
            className="flex flex-col items-center gap-1 text-xs py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            <FileImage className="h-4 w-4" />
            <span>Pages</span>
          </TabsTrigger>
          <TabsTrigger
            value="bookmarks"
            className="flex flex-col items-center gap-1 text-xs py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            <Bookmark className="h-4 w-4" />
            <span>Bookmarks</span>
          </TabsTrigger>
          <TabsTrigger
            value="attachments"
            className="flex flex-col items-center gap-1 text-xs py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            <Paperclip className="h-4 w-4" />
            <span>Files</span>
          </TabsTrigger>
          <TabsTrigger
            value="signatures"
            className="flex flex-col items-center gap-1 text-xs py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            <Signature className="h-4 w-4" />
            <span>Signatures</span>
          </TabsTrigger>
          <TabsTrigger
            value="annotations"
            className="flex flex-col items-center gap-1 text-xs py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Comments</span>
          </TabsTrigger>
        </TabsList>

        <div className="flex-1 overflow-hidden">
          <TabsContent value="thumbnails" className="mt-0 h-full">
            <div className="p-4 h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-slate-900">Document Pages</h3>
                <Badge variant="secondary" className="text-xs">
                  24 pages
                </Badge>
              </div>

              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input placeholder="Search pages..." className="pl-10 h-9 bg-slate-50 border-slate-200" />
              </div>

              <ScrollArea className="flex-1">
                <div className="grid grid-cols-2 gap-3">
                  {Array.from({ length: 24 }, (_, i) => (
                    <div
                      key={i}
                      className="group border border-slate-200 rounded-lg p-3 hover:border-blue-300 hover:shadow-sm cursor-pointer transition-all duration-200 bg-white"
                    >
                      <div className="aspect-[3/4] bg-gradient-to-br from-slate-50 to-slate-100 rounded-md mb-2 flex items-center justify-center border border-slate-100 group-hover:border-blue-200">
                        <div className="text-center">
                          <File className="h-6 w-6 text-slate-400 mx-auto mb-1" />
                          <span className="text-xs text-slate-500 font-medium">{i + 1}</span>
                        </div>
                      </div>
                      <p className="text-xs text-center text-slate-600 font-medium">Page {i + 1}</p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </TabsContent>

          <TabsContent value="bookmarks" className="mt-0 h-full">
            <div className="p-4 h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-slate-900">Bookmarks</h3>
                <Badge variant="secondary" className="text-xs">
                  3 items
                </Badge>
              </div>

              <ScrollArea className="flex-1">
                <div className="space-y-2">
                  {[
                    { title: "Executive Summary", page: 1, level: 0 },
                    { title: "Introduction", page: 3, level: 0 },
                    { title: "Market Analysis", page: 8, level: 1 },
                    { title: "Financial Projections", page: 15, level: 1 },
                    { title: "Conclusion", page: 22, level: 0 },
                  ].map((bookmark, i) => (
                    <div
                      key={i}
                      className="group p-3 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors duration-200 border border-transparent hover:border-slate-200"
                      style={{ marginLeft: `${bookmark.level * 16}px` }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Bookmark className="h-4 w-4 text-blue-500" />
                          <div>
                            <p className="text-sm font-medium text-slate-900">{bookmark.title}</p>
                            <p className="text-xs text-slate-500">Page {bookmark.page}</p>
                          </div>
                        </div>
                        <ChevronRight className="h-4 w-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </TabsContent>

          <TabsContent value="attachments" className="mt-0 h-full">
            <div className="p-4 h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-slate-900">Attachments</h3>
                <Badge variant="secondary" className="text-xs">
                  2 files
                </Badge>
              </div>

              <ScrollArea className="flex-1">
                <div className="space-y-3">
                  {[
                    { name: "financial-data.xlsx", type: "Excel Spreadsheet", size: "2.4 MB", date: "2 hours ago" },
                    { name: "market-research.pdf", type: "PDF Document", size: "1.8 MB", date: "1 day ago" },
                  ].map((file, i) => (
                    <div
                      key={i}
                      className="group p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm cursor-pointer transition-all duration-200 bg-white"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center border border-blue-200">
                          <Paperclip className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-slate-900 truncate">{file.name}</p>
                          <p className="text-xs text-slate-500 mt-1">{file.type}</p>
                          <div className="flex items-center space-x-2 mt-2 text-xs text-slate-400">
                            <span>{file.size}</span>
                            <span>•</span>
                            <span>{file.date}</span>
                          </div>
                        </div>
                        <ChevronRight className="h-4 w-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </TabsContent>

          <TabsContent value="signatures" className="mt-0 h-full">
            <div className="p-4 h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-slate-900">Digital Signatures</h3>
                <Badge variant="secondary" className="text-xs">
                  1 signed
                </Badge>
              </div>

              <div className="space-y-3 mb-6">
                <Button className="w-full justify-start bg-blue-600 hover:bg-blue-700" size="sm">
                  <Signature className="h-4 w-4 mr-2" />
                  Add Signature Field
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <User className="h-4 w-4 mr-2" />
                  Add Initial Field
                </Button>
              </div>

              <ScrollArea className="flex-1">
                <div className="space-y-3">
                  <div className="p-4 border border-slate-200 rounded-lg bg-white">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-50 to-green-100 rounded-lg flex items-center justify-center border border-green-200">
                        <Signature className="h-5 w-5 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <p className="text-sm font-medium text-slate-900">John Doe</p>
                          <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                            Signed
                          </Badge>
                        </div>
                        <p className="text-xs text-slate-500 mb-2">CEO & Founder</p>
                        <div className="flex items-center space-x-2 text-xs text-slate-400">
                          <Calendar className="h-3 w-3" />
                          <span>Signed on Page 5</span>
                          <span>•</span>
                          <span>2 hours ago</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border border-slate-200 rounded-lg bg-white border-dashed">
                    <div className="text-center text-slate-500">
                      <Signature className="h-8 w-8 mx-auto mb-2 text-slate-300" />
                      <p className="text-sm">Awaiting signature</p>
                      <p className="text-xs">Jane Smith - CFO</p>
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </div>
          </TabsContent>

          <TabsContent value="annotations" className="mt-0 h-full">
            <div className="p-4 h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-slate-900">Comments & Notes</h3>
                <Badge variant="secondary" className="text-xs">
                  5 items
                </Badge>
              </div>

              <ScrollArea className="flex-1">
                <div className="space-y-3">
                  {[
                    {
                      type: "comment",
                      author: "Sarah Wilson",
                      content: "This section needs more detail about market trends.",
                      page: 3,
                      time: "2 hours ago",
                      color: "blue",
                    },
                    {
                      type: "highlight",
                      author: "Mike Johnson",
                      content: "Important financial data highlighted",
                      page: 7,
                      time: "4 hours ago",
                      color: "yellow",
                    },
                    {
                      type: "note",
                      author: "You",
                      content: "Follow up with legal team on this clause",
                      page: 12,
                      time: "1 day ago",
                      color: "green",
                    },
                  ].map((annotation, i) => (
                    <div
                      key={i}
                      className="group p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm cursor-pointer transition-all duration-200 bg-white"
                    >
                      <div className="flex items-start space-x-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
                            annotation.color === "blue"
                              ? "bg-blue-100 text-blue-700"
                              : annotation.color === "yellow"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-green-100 text-green-700"
                          }`}
                        >
                          {annotation.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <p className="text-sm font-medium text-slate-900">{annotation.author}</p>
                            <Badge variant="outline" className="text-xs">
                              Page {annotation.page}
                            </Badge>
                          </div>
                          <p className="text-sm text-slate-700 mb-2">{annotation.content}</p>
                          <p className="text-xs text-slate-400">{annotation.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
