"use client"

import { useEffect, useRef } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

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

export default function MapComponent({
  center = [-74.5, 40],
  zoom = 9,
  markers = [],
  interactive = true,
  height = "100%",
}: MapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const leafletMap = useRef<L.Map | null>(null)

  // Initialize map
  useEffect(() => {
    if (!mapRef.current) return

    // Create map if it doesn't exist
    if (!leafletMap.current) {
      leafletMap.current = L.map(mapRef.current).setView([center[1], center[0]], zoom)

      // Add tile layer (OpenStreetMap)
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(leafletMap.current)
    } else {
      // Update view if map already exists
      leafletMap.current.setView([center[1], center[0]], zoom)
    }

    // Add markers
    const markerLayer = L.layerGroup().addTo(leafletMap.current)

    markers.forEach((marker) => {
      const popupContent = document.createElement("div")
      popupContent.className = "p-2"
      popupContent.innerHTML = `
        <div class="font-medium">${marker.name}</div>
      `

      // Create marker with custom icon
      const mapMarker = L.marker([marker.coordinates[1], marker.coordinates[0]], {
        icon: L.divIcon({
          html: `
            <div class="flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full shadow-lg transform -translate-y-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
          `,
          className: "custom-marker-icon",
          iconSize: [0, 0],
          iconAnchor: [12, 12],
        }),
      }).addTo(markerLayer)

      // Add popup
      mapMarker.bindPopup(popupContent)
    })

    // Disable interactions if not interactive
    if (!interactive) {
      leafletMap.current.dragging.disable()
      leafletMap.current.touchZoom.disable()
      leafletMap.current.doubleClickZoom.disable()
      leafletMap.current.scrollWheelZoom.disable()
      leafletMap.current.boxZoom.disable()
      leafletMap.current.keyboard.disable()
    }

    // Cleanup
    return () => {
      markerLayer.clearLayers()
    }
  }, [center, zoom, markers, interactive])

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (leafletMap.current) {
        leafletMap.current.invalidateSize()
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Fix Leaflet icon issues
  useEffect(() => {
    // Only run this once on the client
    if (typeof window !== "undefined") {
      // Fix Leaflet default icon paths
      delete L.Icon.Default.prototype._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "/leaflet/marker-icon-2x.png",
        iconUrl: "/leaflet/marker-icon.png",
        shadowUrl: "/leaflet/marker-shadow.png",
      })
    }
  }, [])

  return (
    <div style={{ height, width: "100%", position: "relative" }}>
      <div
        ref={mapRef}
        style={{ width: "100%", height: "100%" }}
        className="rounded-lg shadow-md overflow-hidden z-0"
      />
    </div>
  )
}

