"use client"

import type React from "react"

import { useState } from "react"
import SlideCover from "@/components/slides/slide-cover"
import SlideIndex from "@/components/slides/slide-index"
import SlideIntroduction from "@/components/slides/slide-introduction"
import SlideColorPalette from "@/components/slides/slide-color-palette"
import SlideTypography from "@/components/slides/slide-typography"
import SlideButtons from "@/components/slides/slide-buttons"
import SlideCards from "@/components/slides/slide-cards"
import SlideForms from "@/components/slides/slide-forms"
import SlideNavigation from "@/components/slides/slide-navigation"
import SlideLayouts from "@/components/slides/slide-layouts"
import SlideConclusion from "@/components/slides/slide-conclusion"
import SlideThankYou from "@/components/slides/slide-thank-you"

export default function DesignSystemSlides() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    { id: "cover", component: SlideCover },
    { id: "index", component: SlideIndex },
    { id: "introduction", component: SlideIntroduction },
    { id: "color-palette", component: SlideColorPalette },
    { id: "typography", component: SlideTypography },
    { id: "buttons", component: SlideButtons },
    { id: "cards", component: SlideCards },
    { id: "forms", component: SlideForms },
    { id: "navigation", component: SlideNavigation },
    { id: "layouts", component: SlideLayouts },
    { id: "conclusion", component: SlideConclusion },
    { id: "thank-you", component: SlideThankYou },
  ]

  const totalSlides = slides.length

  const goToNextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      goToNextSlide()
    } else if (e.key === "ArrowLeft") {
      goToPrevSlide()
    }
  }

  const CurrentSlideComponent = slides[currentSlide].component

  return (
    <div
      className="w-full h-screen overflow-hidden"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      role="application"
      aria-label="Design System Slides Presentation"
    >
      <CurrentSlideComponent slideNumber={currentSlide + 1} totalSlides={totalSlides} />

      <div className="fixed bottom-4 right-4 flex space-x-2">
        <button
          onClick={goToPrevSlide}
          disabled={currentSlide === 0}
          className="p-2 rounded-full bg-white shadow-md text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Slide anterior"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goToNextSlide}
          disabled={currentSlide === totalSlides - 1}
          className="p-2 rounded-full bg-white shadow-md text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Próximo slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}
