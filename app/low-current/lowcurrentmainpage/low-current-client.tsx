import { Suspense } from "react"
import LowCurrentClient from "./low-current-client"

export default function Page() {
  return (
    <Suspense fallback={null}>
      <LowCurrentClient />
    </Suspense>
  )
}
