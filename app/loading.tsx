import { Loader } from "@/components/ui/loader"

export default function Loading() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <Loader size="large" intent="primary" variant="spin" />
      <p className="mt-4 text-muted-fg">Loading content...</p>
    </div>
  )
}
