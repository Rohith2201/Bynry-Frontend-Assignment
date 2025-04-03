import { Skeleton } from "@/components/ui/skeleton"
import { GlowingStarsBackgroundCard } from "@/components/ui/glowing-stars"

export function ProfileListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <GlowingStarsBackgroundCard key={i} className="max-h-none h-full">
          <Skeleton className="h-48 w-full rounded-lg mb-4 bg-gray-700" />

          <Skeleton className="h-6 w-3/4 mb-2 bg-gray-700" />
          <Skeleton className="h-4 w-1/2 mb-4 bg-gray-700" />

          <div className="flex gap-4 mb-4">
            <Skeleton className="h-4 w-20 bg-gray-700" />
            <Skeleton className="h-4 w-20 bg-gray-700" />
          </div>

          <Skeleton className="h-4 w-full mb-2 bg-gray-700" />
          <Skeleton className="h-4 w-full mb-2 bg-gray-700" />
          <Skeleton className="h-4 w-2/3 mb-6 bg-gray-700" />

          <div className="flex justify-between pt-4 border-t border-gray-700">
            <Skeleton className="h-9 w-28 bg-gray-700" />
            <Skeleton className="h-9 w-28 bg-gray-700" />
          </div>
        </GlowingStarsBackgroundCard>
      ))}
    </div>
  )
}

export function MapSkeleton() {
  return (
    <div className="h-[calc(100vh-200px)] w-full bg-muted animate-pulse flex items-center justify-center rounded-lg">
      <div className="flex flex-col items-center gap-2">
        <div className="text-muted-foreground">Loading map...</div>
      </div>
    </div>
  )
}

