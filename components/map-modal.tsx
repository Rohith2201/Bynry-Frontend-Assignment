"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import type { Profile } from "@/lib/types"
import MapComponent from "./map-component"

interface MapModalProps {
  isOpen: boolean
  onClose: () => void
  profile: Profile
}

export default function MapModal({ isOpen, onClose, profile }: MapModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] h-[500px]">
        <DialogHeader>
          <DialogTitle>{profile.name}&apos;s Location</DialogTitle>
        </DialogHeader>
        <div className="h-[400px] w-full">
          <MapComponent
            center={[profile.address.coordinates.lng, profile.address.coordinates.lat]}
            zoom={14}
            markers={[
              {
                id: profile.id,
                name: profile.name,
                coordinates: [profile.address.coordinates.lng, profile.address.coordinates.lat],
              },
            ]}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

