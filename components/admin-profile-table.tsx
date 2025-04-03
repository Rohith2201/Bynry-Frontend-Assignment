"use client"

import type { Profile } from "@/lib/types"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Edit, Trash2, Eye, MoreHorizontal } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { deleteProfile } from "@/lib/actions"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface AdminProfileTableProps {
  profiles: Profile[]
}

export default function AdminProfileTable({ profiles: initialProfiles }: AdminProfileTableProps) {
  const [profiles, setProfiles] = useState<Profile[]>(initialProfiles)
  const [profileToDelete, setProfileToDelete] = useState<string | null>(null)
  const { toast } = useToast()

  const handleDelete = async () => {
    if (!profileToDelete) return

    try {
      await deleteProfile(profileToDelete)
      setProfiles(profiles.filter((p) => p.id !== profileToDelete))
      toast({
        title: "Profile deleted",
        description: "The profile has been successfully deleted.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete the profile. Please try again.",
        variant: "destructive",
      })
    } finally {
      setProfileToDelete(null)
    }
  }

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Interests</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {profiles.map((profile) => (
              <TableRow key={profile.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden flex-shrink-0 bg-muted">
                      <Image
                        src={profile.image || "/placeholder.svg?height=40&width=40"}
                        alt={profile.name}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <div className="font-medium">{profile.name}</div>
                      <span className="mt-0.5 text-xs text-muted-foreground">ID: {profile.id}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{profile.email}</TableCell>
                <TableCell>
                  {profile.address.city}, {profile.address.country}
                </TableCell>
                <TableCell>
                  {profile.interests && profile.interests.length > 0 ? (
                    <div className="flex flex-wrap gap-1">
                      {profile.interests.map((interest, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  ) : (
                    <span className="text-muted-foreground text-sm">None</span>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <Link href={`/profile/${profile.id}`}>
                        <DropdownMenuItem>
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </DropdownMenuItem>
                      </Link>
                      <Link href={`/admin/profile/${profile.id}`}>
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                      </Link>
                      <DropdownMenuItem
                        className="text-destructive focus:text-destructive"
                        onClick={() => setProfileToDelete(profile.id)}
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <AlertDialog open={!!profileToDelete} onOpenChange={() => setProfileToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the profile and all associated data.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive hover:bg-destructive/90">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

