import { getProfiles } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { PlusCircle, Users } from "lucide-react"
import Link from "next/link"
import AdminProfileTable from "@/components/admin-profile-table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default async function AdminPage() {
  const profiles = await getProfiles()

  return (
    <main className="container py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Users className="h-8 w-8 text-primary" />
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">Manage profiles and user information</p>
        </div>
        <Link href="/admin/profile/new">
          <Button className="gap-1">
            <PlusCircle className="h-4 w-4" />
            Add New Profile
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">{profiles.length}</CardTitle>
            <CardDescription>Total Profiles</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">{profiles.length} profiles in the database</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">
              {profiles.reduce((acc, p) => acc + (p.interests?.length || 0), 0)}
            </CardTitle>
            <CardDescription>Total Interests</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">Across all profiles</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">{new Set(profiles.map((p) => p.address.country)).size}</CardTitle>
            <CardDescription>Countries</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">Unique countries represented</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Profile Management</CardTitle>
          <CardDescription>View, edit, and delete profiles from the system</CardDescription>
        </CardHeader>
        <CardContent>
          <AdminProfileTable profiles={profiles} />
        </CardContent>
      </Card>
    </main>
  )
}

