export interface Profile {
  id: string
  name: string
  email: string
  phone?: string
  website?: string
  description: string
  image?: string
  address: {
    street: string
    city: string
    zipCode: string
    country: string
    coordinates: {
      lat: number
      lng: number
    }
  }
  interests?: string[]
}

