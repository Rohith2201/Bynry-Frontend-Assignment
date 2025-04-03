import { searchProfiles } from "@/lib/data"
import ProfileCard from "@/components/profile-card"
import { notFound } from "next/navigation"

interface SearchPageProps {
  searchParams: {
    q: string
  }
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q

  if (!query) {
    notFound()
  }

  const profiles = await searchProfiles(query)

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Search Results</h1>
      <p className="text-gray-500 mb-8">
        Found {profiles.length} results for &quot;{query}&quot;
      </p>

      {profiles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-xl font-medium mb-2">No profiles found</h2>
          <p className="text-gray-500">Try searching with different keywords</p>
        </div>
      )}
    </main>
  )
}

