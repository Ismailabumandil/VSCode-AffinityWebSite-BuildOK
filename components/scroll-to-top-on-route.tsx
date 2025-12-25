"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export default function ScrollToTopOnRoute() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // 🔹 لو فيه hash (#section) لا نسوي scroll
    if (window.location.hash) return

    // 🔹 غير كذا ارجع لبداية الصفحة
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // أو "instant" لو الصفحات الثقيلة تحب
    })
  }, [pathname, searchParams])

  return null
}
