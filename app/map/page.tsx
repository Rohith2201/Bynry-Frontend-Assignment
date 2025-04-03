import { getProfiles } from "@/lib/data"
import MapComponent from "@/components/map-component"
import { Card, CardContent } from "@/components/ui/card"
import { Suspense } from "react"
import { MapSkeleton } from "@/components/skeletons"
import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default async function MapPage() {
  const profiles = await getProfiles()

  // Calculate center point (average of all coordinates)
  const center =
    profiles.length > 0
      ? ([
          profiles.reduce((sum, p) => sum + p.address.coordinates.lng, 0) / profiles.length,
          profiles.reduce((sum, p) => sum + p.address.coordinates.lat, 0) / profiles.length,
        ] as [number, number])
      : ([77.209, 28.6139] as [number, number]) // Default to New Delhi

  const markers = profiles.map((profile) => ({
    id: profile.id,
    name: profile.name,
    coordinates: [profile.address.coordinates.lng, profile.address.coordinates.lat] as [number, number],
  }))

  return (
    <main className="container py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Map Explorer</h1>
          <p className="text-muted-foreground mt-1">Visualize all profiles on an interactive map</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="h-[calc(100vh-200px)] w-full">
                <Suspense fallback={<MapSkeleton />}>
                  <MapComponent center={center} zoom={4} markers={markers} />
                </Suspense>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="sticky top-24">
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Profiles</h2>
                <span className="text-sm text-muted-foreground">{profiles.length} total</span>
              </div>

              <div className="relative mb-4">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Filter profiles..." className="w-full pl-9 pr-4" />
              </div>

              <div className="space-y-2 max-h-[calc(100vh-300px)] overflow-y-auto pr-2">
                {profiles.map((profile) => (
                  <Link href={`/profile/${profile.id}`} key={profile.id}>
                    <div className="flex items-center gap-3 p-2 hover:bg-accent rounded-md transition-colors">
                      <div className="relative h-10 w-10 rounded-full overflow-hidden flex-shrink-0 bg-muted">
                        <Image
                          src={profile.image || "/placeholder.svg?height=40&width=40"}
                          alt={profile.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{profile.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {profile.address.city}, {profile.address.country}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}

