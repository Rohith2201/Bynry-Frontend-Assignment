import ProfileList from "@/components/profile-list"
import { Suspense } from "react"
import { ProfileListSkeleton } from "@/components/skeletons"

export default function Home() {
  return (
    <main className="container py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Profile Explorer</h1>
          <p className="text-muted-foreground mt-1">Discover professionals and their locations across India</p>
        </div>
      </div>

      <Suspense fallback={<ProfileListSkeleton />}>
        <ProfileList />
      </Suspense>
    </main>
  )
}

