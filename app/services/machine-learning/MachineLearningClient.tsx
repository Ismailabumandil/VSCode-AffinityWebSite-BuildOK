import { Suspense } from "react"
import MachineLearningClient from "./MachineLearningClient"

export default function Page() {
  return (
    <Suspense fallback={null}>
      <MachineLearningClient />
    </Suspense>
  )
}
