import { Suspense } from "react"
import FASClient from "./FASClient"

export default function Page() {
  return (
    <Suspense fallback={null}>
      <FASClient />
    </Suspense>
  )
}
