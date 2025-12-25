import CyberLogoLoader from "@/components/cyber-logo-loader"

export default function Loading() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{
        background: "linear-gradient(135deg, #050a1a 0%, #020617 100%)",
        color: "#ffffff",
      }}
    >
      <div className="text-center">
        <CyberLogoLoader src="/images/affinity-icon-white.svg" />

        <div className="mt-8">
          <div
            className="text-2xl md:text-3xl font-black bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(90deg, #0ea5e9, #22d3ee, #38bdf8)",
            }}
          >
            Loading...
          </div>
          <div className="mt-2 text-sm" style={{ color: "#cbd5e1" }}>
            Preparing your experience
          </div>
        </div>
      </div>
    </div>
  )
}
