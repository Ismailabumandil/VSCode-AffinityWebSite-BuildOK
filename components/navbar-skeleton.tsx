"use client"

export function NavbarSkeleton() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[50000] h-16 bg-gradient-to-b from-[#050a1a] to-transparent backdrop-blur-md border-b border-[rgba(56,189,248,0.2)]">
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        {/* Logo Skeleton */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[rgba(14,165,233,0.2)] animate-pulse" />
          <div className="h-4 w-32 bg-[rgba(14,165,233,0.2)] rounded animate-pulse" />
        </div>

        {/* Menu Items Skeleton */}
        <div className="hidden lg:flex items-center gap-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-4 w-20 bg-[rgba(14,165,233,0.2)] rounded animate-pulse" />
          ))}
        </div>

        {/* Controls Skeleton */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[rgba(14,165,233,0.2)] animate-pulse" />
          <div className="w-8 h-8 rounded-full bg-[rgba(14,165,233,0.2)] animate-pulse" />
        </div>
      </div>
    </div>
  )
}
