"use client"

import type { Profile } from "@/lib/types"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { GlowingStarsBackgroundCard, GlowingStarsTitle, GlowingStarsDescription } from "@/components/ui/glowing-stars"
import Link from "next/link"
import { useState } from "react"
import MapModal from "./map-modal"
import { Badge } from "@/components/ui/badge"

interface ProfileCardProps {
  profile: Profile
}

export default function ProfileCard({ profile }: ProfileCardProps) {
  const [showMap, setShowMap] = useState(false)

  return (
    <>
      <GlowingStarsBackgroundCard className="max-h-none h-full flex flex-col">
        <div className="relative h-48 w-full  rounded-lg mb-4 overflow-hidden">
          <Image
            src={profile.image || "/placeholder.svg?height=192&width=384"}
            alt={profile.name}
            fill
            className="object-cover opacity-80"
          />
          {profile.interests && profile.interests.length > 0 && (
            <div className="absolute top-2 right-2">
              <Badge variant="secondary" className="font-normal bg-gray-800/80 text-white border-none">
                {profile.interests[0]}
              </Badge>
            </div>
          )}
        </div>

        <div className="flex-1">
          <GlowingStarsTitle className="mb-1 line-clamp-1">{profile.name}</GlowingStarsTitle>
          <GlowingStarsDescription className="flex items-center gap-1 mb-3 text-sm text-gray-300">
            {profile.address.city}, {profile.address.country}
          </GlowingStarsDescription>

          <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-3">
            {profile.email && (
              <div className="flex items-center gap-1">
                <span className="truncate max-w-[120px]">{profile.email}</span>
              </div>
            )}

            {profile.phone && (
              <div className="flex items-center gap-1">
                <span>{profile.phone}</span>
              </div>
            )}
          </div>

          <p className="text-sm text-gray-300 line-clamp-3 mb-4">{profile.description}</p>
        </div>

        <div className="flex justify-between mt-auto pt-4 border-t border-gray-700">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowMap(true)}
            className="bg-transparent text-white border-gray-600 hover:bg-gray-800"
          >
            View Map
          </Button>
          <Link href={`/profile/${profile.id}`}>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
              Details
            </Button>
          </Link>
        </div>
      </GlowingStarsBackgroundCard>

      {showMap && <MapModal isOpen={showMap} onClose={() => setShowMap(false)} profile={profile} />}
    </>
  )
}

