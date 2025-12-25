"use client"

import Image from "next/image"

type Props = {
  src?: string
  alt?: string
  size?: number
}

export default function CyberLogoLoader({ src = "/a Icon.svg", alt = "Logo", size = 86 }: Props) {
  const box = size + 90

  return (
    <div className="relative flex items-center justify-center" style={{ width: box, height: box }}>
      {/* Hologram grid */}
      <div
        className="absolute inset-0 rounded-full opacity-40"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.18) 0%, transparent 62%),
            repeating-linear-gradient(0deg,
              transparent 0px,
              transparent 9px,
              rgba(56, 189, 248, 0.12) 10px),
            repeating-linear-gradient(90deg,
              transparent 0px,
              transparent 9px,
              rgba(34, 211, 238, 0.10) 10px)
          `,
          filter: "blur(0.2px)",
        }}
      />

      {/* Outer ring */}
      <div
        className="absolute rounded-full"
        style={{
          inset: 0,
          border: "2px solid rgba(56, 189, 248, 0.35)",
          boxShadow: "0 0 28px rgba(14, 165, 233, 0.20), 0 0 54px rgba(34, 211, 238, 0.20)",
        }}
      />

      {/* Rotating neon ring 1 */}
      <div className="absolute rounded-full cyber-spin-1" style={{ inset: 10 }}>
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: "2px solid transparent",
            borderTopColor: "rgba(56, 189, 248, 0.85)",
            borderRightColor: "rgba(34, 211, 238, 0.70)",
            filter: "drop-shadow(0 0 10px rgba(34, 211, 238, 0.20))",
          }}
        />
      </div>

      {/* Rotating neon ring 2 (dashed) */}
      <div className="absolute rounded-full cyber-spin-2" style={{ inset: 22 }}>
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: "2px dashed rgba(34, 211, 238, 0.45)",
            opacity: 0.85,
          }}
        />
      </div>

      {/* Sweep beam (holo scanner) */}
      <div className="absolute rounded-full overflow-hidden cyber-sweep" style={{ inset: 14 }}>
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.45), transparent)",
            filter: "drop-shadow(0 0 16px rgba(34, 211, 238, 0.20))",
          }}
        />
      </div>

      {/* Pulse aura */}
      <div
        className="absolute rounded-full cyber-pulse"
        style={{
          inset: 30,
          background: "radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.22) 0%, transparent 70%)",
        }}
      />

      {/* Logo card (breathing) */}
      <div
        className="relative rounded-2xl border backdrop-blur flex items-center justify-center cyber-breathe"
        style={{
          width: size + 26,
          height: size + 26,
          borderColor: "rgba(56, 189, 248, 0.35)",
          backgroundColor: "rgba(2, 6, 23, 0.55)",
          boxShadow: "0 18px 60px rgba(14, 165, 233, 0.20)",
        }}
      >
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            boxShadow: "0 0 26px rgba(34, 211, 238, 0.20) inset",
            opacity: 0.55,
          }}
        />

        <Image src={src || "/placeholder.svg"} alt={alt} width={size} height={size} priority className="cyber-logo" />
      </div>

      {/* CSS Keyframes */}
      <style jsx global>{`
        .cyber-logo {
          filter: drop-shadow(0 0 14px rgba(34, 211, 238, 0.35));
          animation: cyberLogoPulse 1.25s ease-in-out infinite;
          will-change: transform, filter;
        }

        .cyber-breathe {
          animation: cyberBreathe 1.25s ease-in-out infinite;
          will-change: transform, box-shadow;
        }

        .cyber-pulse {
          animation: cyberAura 1.25s ease-in-out infinite;
          will-change: transform, opacity;
        }

        .cyber-spin-1 {
          animation: cyberSpin 2.2s linear infinite;
          will-change: transform;
        }

        .cyber-spin-2 {
          animation: cyberSpinReverse 5.2s linear infinite;
          will-change: transform;
        }

        .cyber-sweep {
          animation: cyberSweep 1.9s ease-in-out infinite;
          will-change: transform, opacity;
        }

        @keyframes cyberSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes cyberSpinReverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes cyberSweep {
          0% {
            transform: rotate(0deg);
            opacity: 0.25;
          }
          50% {
            opacity: 0.75;
          }
          100% {
            transform: rotate(360deg);
            opacity: 0.25;
          }
        }

        @keyframes cyberAura {
          0% {
            transform: scale(0.92);
            opacity: 0.35;
          }
          50% {
            transform: scale(1.08);
            opacity: 0.65;
          }
          100% {
            transform: scale(0.92);
            opacity: 0.35;
          }
        }

        @keyframes cyberBreathe {
          0% {
            transform: scale(0.98);
            box-shadow: 0 18px 60px rgba(14, 165, 233, 0.20);
          }
          50% {
            transform: scale(1.03);
            box-shadow: 0 22px 78px rgba(34, 211, 238, 0.20);
          }
          100% {
            transform: scale(0.98);
            box-shadow: 0 18px 60px rgba(14, 165, 233, 0.20);
          }
        }

        @keyframes cyberLogoPulse {
          0% {
            transform: scale(0.98);
            filter: drop-shadow(0 0 12px rgba(34, 211, 238, 0.26));
          }
          50% {
            transform: scale(1.04);
            filter: drop-shadow(0 0 18px rgba(14, 165, 233, 0.42));
          }
          100% {
            transform: scale(0.98);
            filter: drop-shadow(0 0 12px rgba(34, 211, 238, 0.26));
          }
        }
      `}</style>
    </div>
  )
}
