import { getProfileById } from "@/lib/data"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Phone, Globe, ArrowLeft, Calendar, Briefcase, GraduationCap } from "lucide-react"
import Link from "next/link"
import MapComponent from "@/components/map-component"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface ProfilePageProps {
  params: {
    id: string
  }
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const profile = await getProfileById(params.id)

  if (!profile) {
    notFound()
  }

  return (
    <main className="container py-10">
      <Link href="/" className="inline-flex items-center gap-1 text-sm mb-8 hover:text-primary transition-colors">
        <ArrowLeft className="h-4 w-4" /> Back to profiles
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="overflow-hidden">
            <div className="relative h-64 w-full bg-muted">
              <Image
                src={profile.image || "/placeholder.svg?height=256&width=768"}
                alt={profile.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{profile.name}</h1>
                  <p className="text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    {profile.address.street}, {profile.address.city}, {profile.address.country}
                  </p>
                </div>

                {profile.interests && profile.interests.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {profile.interests.map((interest, index) => (
                      <Badge key={index} variant="secondary">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-4 bg-muted/50 rounded-lg">
                {profile.email && (
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-sm">{profile.email}</span>
                  </div>
                )}

                {profile.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-sm">{profile.phone}</span>
                  </div>
                )}

                {profile.website && (
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-primary" />
                    <a
                      href={profile.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      Website
                    </a>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" /> About
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">{profile.description}</p>
                </div>

                {/* Example additional sections - would come from expanded profile data */}
                <Separator />

                <div>
                  <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" /> Experience
                  </h2>
                  <div className="space-y-4">
                    <div className="border-l-2 border-primary/20 pl-4">
                      <h3 className="font-medium">Senior Developer</h3>
                      <p className="text-sm text-muted-foreground">TechCorp Inc. • 2020 - Present</p>
                      <p className="text-sm mt-1">
                        Led development of multiple web applications using React and Node.js.
                      </p>
                    </div>
                    <div className="border-l-2 border-primary/20 pl-4">
                      <h3 className="font-medium">Web Developer</h3>
                      <p className="text-sm text-muted-foreground">Digital Solutions • 2017 - 2020</p>
                      <p className="text-sm mt-1">Developed responsive websites and e-commerce solutions.</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" /> Education
                  </h2>
                  <div className="border-l-2 border-primary/20 pl-4">
                    <h3 className="font-medium">Bachelor of Computer Science</h3>
                    <p className="text-sm text-muted-foreground">University of Technology • 2013 - 2017</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-5">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" /> Location
              </h2>
              <div className="h-[300px] w-full mb-4 rounded-lg overflow-hidden">
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
              <div className="p-4 bg-muted/50 rounded-lg mb-4">
                <p className="text-sm">
                  {profile.address.street}
                  <br />
                  {profile.address.city}, {profile.address.zipCode}
                  <br />
                  {profile.address.country}
                </p>
              </div>
              <Button className="w-full gap-2">
                <MapPin className="h-4 w-4" />
                Get Directions
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5">
              <h2 className="text-xl font-semibold mb-4">Contact {profile.name.split(" ")[0]}</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Interested in connecting with {profile.name.split(" ")[0]}? Send a message directly.
              </p>
              <Button className="w-full">Send Message</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}

