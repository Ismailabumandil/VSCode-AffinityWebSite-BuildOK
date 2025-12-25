"use client"

import { useState, useEffect, useRef } from "react"

interface ReadingBookmarkProps {
  currentLang: "en" | "ar"
  currentTheme: {
    bg: string
    text: string
    accent: string
  }
  pageId: string
}

export default function ReadingBookmark({ currentLang, currentTheme, pageId }: ReadingBookmarkProps) {
  const [bookmarks, setBookmarks] = useState<{ pageId: string; position: number; timestamp: number }[]>([])
  const [showTooltip, setShowTooltip] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const bookmarksRef = useRef(bookmarks)

  useEffect(() => {
    bookmarksRef.current = bookmarks
  }, [bookmarks])

  useEffect(() => {
    const saved = localStorage.getItem("readingBookmarks")
    if (saved) {
      const parsed = JSON.parse(saved)
      setBookmarks(parsed)
      setIsBookmarked(parsed.some((b: any) => b.pageId === pageId))
    }
  }, [pageId])

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const percentage = (position / maxScroll) * 100

      if (percentage > 10) {
        const currentBookmarks = bookmarksRef.current
        const existing = currentBookmarks.findIndex((b) => b.pageId === pageId)
        const newBookmark = {
          pageId,
          position,
          timestamp: Date.now(),
        }

        let updated
        if (existing >= 0) {
          updated = [...currentBookmarks]
          updated[existing] = newBookmark
        } else {
          updated = [...currentBookmarks, newBookmark]
        }

        setBookmarks(updated)
        localStorage.setItem("readingBookmarks", JSON.stringify(updated))
        setIsBookmarked(true)
      }
    }

    const debounced = debounce(handleScroll, 1000)
    window.addEventListener("scroll", debounced)

    return () => window.removeEventListener("scroll", debounced)
  }, [pageId])

  const toggleBookmark = () => {
    const existing = bookmarks.findIndex((b) => b.pageId === pageId)

    if (existing >= 0) {
      const updated = bookmarks.filter((b) => b.pageId !== pageId)
      setBookmarks(updated)
      localStorage.setItem("readingBookmarks", JSON.stringify(updated))
      setIsBookmarked(false)
      setShowTooltip(true)
      setTimeout(() => setShowTooltip(false), 2000)
    } else {
      const newBookmark = {
        pageId,
        position: window.scrollY,
        timestamp: Date.now(),
      }
      const updated = [...bookmarks, newBookmark]
      setBookmarks(updated)
      localStorage.setItem("readingBookmarks", JSON.stringify(updated))
      setIsBookmarked(true)
      setShowTooltip(true)
      setTimeout(() => setShowTooltip(false), 2000)
    }
  }

  const resumeReading = () => {
    const bookmark = bookmarks.find((b) => b.pageId === pageId)
    if (bookmark) {
      window.scrollTo({ top: bookmark.position, behavior: "smooth" })
    }
  }

  useEffect(() => {
    const bookmark = bookmarks.find((b) => b.pageId === pageId)
    if (bookmark && window.scrollY < 100) {
      const timer = setTimeout(() => {
        const resume = confirm(
          currentLang === "en"
            ? "Would you like to resume reading from where you left off?"
            : "هل تريد استئناف القراءة من حيث توقفت؟",
        )
        if (resume) {
          resumeReading()
        }
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [bookmarks, currentLang, pageId])

  return (
    <div className="fixed bottom-24 right-6 z-50">
      <button
        onClick={toggleBookmark}
        className="group relative p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
        style={{
          backgroundColor: currentTheme.bg,
          border: `2px solid ${currentTheme.accent}`,
        }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <svg
          className="w-6 h-6 transition-all duration-300"
          fill={isBookmarked ? currentTheme.accent : "none"}
          viewBox="0 0 24 24"
          stroke={currentTheme.accent}
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
        </svg>

        {showTooltip && (
          <div
            className="absolute bottom-full right-0 mb-2 px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap shadow-xl animate-in fade-in slide-in-from-bottom-2"
            style={{
              backgroundColor: currentTheme.accent,
              color: "#fff",
            }}
          >
            {isBookmarked
              ? currentLang === "en"
                ? "Bookmarked!"
                : "تم وضع إشارة مرجعية!"
              : currentLang === "en"
                ? "Bookmark this page"
                : "ضع إشارة مرجعية"}
          </div>
        )}
      </button>
    </div>
  )
}

function debounce(func: Function, wait: number) {
  let timeout: NodeJS.Timeout
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}
