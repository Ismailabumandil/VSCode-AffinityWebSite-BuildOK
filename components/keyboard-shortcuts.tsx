"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function KeyboardShortcuts() {
  const router = useRouter()
  const [showHelper, setShowHelper] = useState(false)

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Show helper with '?'
      if (e.key === "?" && !e.ctrlKey && !e.metaKey) {
        e.preventDefault()
        setShowHelper(true)
        return
      }

      // Close helper with Escape
      if (e.key === "Escape") {
        setShowHelper(false)
        return
      }

      // Only process shortcuts with Ctrl/Cmd
      if (!(e.ctrlKey || e.metaKey)) return

      switch (e.key.toLowerCase()) {
        case "h":
          e.preventDefault()
          router.push("/")
          break
        case "m":
          e.preventDefault()
          router.push("/mission")
          break
        case "v":
          e.preventDefault()
          router.push("/vision")
          break
        case "k":
          e.preventDefault()
          // Focus search box
          const searchInput = document.querySelector('input[type="search"]') as HTMLInputElement
          searchInput?.focus()
          break
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [router])

  if (!showHelper) return null

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100000] flex items-center justify-center"
      onClick={() => setShowHelper(false)}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-900">Keyboard Shortcuts</h3>
          <button onClick={() => setShowHelper(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Go to Home</span>
            <kbd className="px-3 py-1 bg-gray-100 rounded-lg text-sm font-mono border border-gray-300">Ctrl+H</kbd>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Go to Mission</span>
            <kbd className="px-3 py-1 bg-gray-100 rounded-lg text-sm font-mono border border-gray-300">Ctrl+M</kbd>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Go to Vision</span>
            <kbd className="px-3 py-1 bg-gray-100 rounded-lg text-sm font-mono border border-gray-300">Ctrl+V</kbd>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Focus Search</span>
            <kbd className="px-3 py-1 bg-gray-100 rounded-lg text-sm font-mono border border-gray-300">Ctrl+K</kbd>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Show Shortcuts</span>
            <kbd className="px-3 py-1 bg-gray-100 rounded-lg text-sm font-mono border border-gray-300">?</kbd>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">Press ESC to close</div>
      </div>
    </div>
  )
}
