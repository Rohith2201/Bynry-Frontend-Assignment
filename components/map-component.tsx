"use client"
import dynamic from "next/dynamic"

interface MapMarker {
  id: string
  name: string
  coordinates: [number, number] // [longitude, latitude]
}

interface MapComponentProps {
  center?: [number, number]
  zoom?: number
  markers?: MapMarker[]
  interactive?: boolean
  height?: string
}

// Dynamically import Leaflet with no SSR to prevent window is not defined errors
const MapComponentWithNoSSR = dynamic(() => import("./map-implementation"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex items-center justify-center bg-muted rounded-lg">
      <p className="text-muted-foreground">Loading map...</p>
    </div>
  ),
})

export default function MapComponent(props: MapComponentProps) {
  return <MapComponentWithNoSSR {...props} />
}

