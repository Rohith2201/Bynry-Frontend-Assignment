import { getProfileById } from "@/lib/data"
import { notFound } from "next/navigation"
import ProfileForm from "@/components/profile-form"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface EditProfilePageProps {
  params: {
    id: string
  }
}

export default async function EditProfilePage({ params }: EditProfilePageProps) {
  // Special case for new profile
  if (params.id === "new") {
    return (
      <main className="container mx-auto px-4 py-8">
        <Link href="/admin" className="flex items-center gap-1 text-sm mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to admin
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Create New Profile</h1>
        <ProfileForm />
      </main>
    )
  }

  const profile = await getProfileById(params.id)

  if (!profile) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <Link href="/admin" className="flex items-center gap-1 text-sm mb-6">
        <ArrowLeft className="h-4 w-4" /> Back to admin
      </Link>

      <h1 className="text-3xl font-bold text-gray-900 mb-8">Edit Profile: {profile.name}</h1>
      <ProfileForm profile={profile} />
    </main>
  )
}

