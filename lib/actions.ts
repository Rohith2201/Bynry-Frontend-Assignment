"use server"

import { revalidatePath } from "next/cache"
import type { Profile } from "./types"

// In a real application, these functions would interact with a database
// For this demo, we're just simulating the actions

export async function createProfile(profileData: Omit<Profile, "id">): Promise<Profile> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Generate a random ID
  const newProfile: Profile = {
    ...profileData,
    id: Math.random().toString(36).substring(2, 9),
  }

  // In a real app, you would save this to a database
  console.log("Created profile:", newProfile)

  revalidatePath("/")
  revalidatePath("/admin")
  revalidatePath("/map")

  return newProfile
}

export async function updateProfile(id: string, profileData: Omit<Profile, "id">): Promise<Profile> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const updatedProfile: Profile = {
    ...profileData,
    id,
  }

  // In a real app, you would update this in a database
  console.log("Updated profile:", updatedProfile)

  revalidatePath("/")
  revalidatePath(`/profile/${id}`)
  revalidatePath("/admin")
  revalidatePath("/map")

  return updatedProfile
}

export async function deleteProfile(id: string): Promise<void> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // In a real app, you would delete this from a database
  console.log("Deleted profile:", id)

  revalidatePath("/")
  revalidatePath("/admin")
  revalidatePath("/map")
}

