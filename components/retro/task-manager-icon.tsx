"use client"

import type React from "react"

import { useState } from "react"
import TaskManager from "./task-manager"
import { Calendar } from "lucide-react"

export default function TaskManagerIcon() {
  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = useState({ x: 50, y: 150 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })

  const handleDoubleClick = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isOpen) {
      setIsDragging(true)
      setDragOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      })
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y,
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  return (
    <>
      <div
        className="flex flex-col items-center cursor-pointer p-2 hover:bg-blue-100 hover:bg-opacity-30"
        onDoubleClick={handleDoubleClick}
      >
        <div className="bg-[#c0c0c0] p-1 border border-[#ffffff] border-b-[#808080] border-r-[#808080]">
          <Calendar className="w-8 h-8" />
        </div>
        <span className="text-white text-xs mt-1">Tarefas</span>
      </div>

      {isOpen && (
        <div
          className="fixed z-10"
          style={{ left: `${position.x}px`, top: `${position.y}px` }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div className="w-[800px]">
            <TaskManager />
          </div>
        </div>
      )}
    </>
  )
}
