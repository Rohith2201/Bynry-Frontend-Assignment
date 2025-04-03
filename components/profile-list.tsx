import { getProfiles } from "@/lib/data"
import ProfileCard from "./profile-card"

export default async function ProfileList() {
  const profiles = await getProfiles()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {profiles.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
    </div>
  )
}

