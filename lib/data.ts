import type { Profile } from "./types"

// This is a mock database for demonstration purposes
// In a real application, you would use a database like MongoDB, PostgreSQL, etc.
const profiles: Profile[] = [
  {
    id: "1",
    name: "Arjun Sharma",
    email: "arjun.sharma@example.com",
    phone: "+91 98765 43210",
    website: "https://arjunsharma.com",
    description:
      "Arjun is a software engineer with over 10 years of experience in web development. He specializes in React and Node.js, and has worked on numerous high-profile projects for major tech companies in Bangalore.",
    image: "/placeholder.svg?height=400&width=400",
    address: {
      street: "123 MG Road",
      city: "Bangalore",
      zipCode: "560001",
      country: "India",
      coordinates: {
        lat: 12.9716,
        lng: 77.5946,
      },
    },
    interests: ["Programming", "Cricket", "Photography"],
  },
  {
    id: "2",
    name: "Priya Patel",
    email: "priya.patel@example.com",
    phone: "+91 87654 32109",
    description:
      "Priya is a UX designer who believes in creating intuitive and accessible user experiences. She has a background in psychology and applies user-centered design principles to all her projects for clients in Mumbai.",
    image: "/placeholder.svg?height=400&width=400",
    address: {
      street: "456 Linking Road",
      city: "Mumbai",
      zipCode: "400050",
      country: "India",
      coordinates: {
        lat: 19.076,
        lng: 72.8777,
      },
    },
    interests: ["Design", "Art", "Travel"],
  },
  {
    id: "3",
    name: "Vikram Singh",
    email: "vikram.singh@example.com",
    phone: "+91 76543 21098",
    website: "https://vikramsingh.dev",
    description:
      "Vikram is a full-stack developer based in Delhi. He specializes in building scalable web applications and has contributed to several open-source projects that are used by developers across India.",
    image: "/placeholder.svg?height=400&width=400",
    address: {
      street: "789 Connaught Place",
      city: "New Delhi",
      zipCode: "110001",
      country: "India",
      coordinates: {
        lat: 28.6139,
        lng: 77.209,
      },
    },
    interests: ["Coding", "Cricket", "Music"],
  },
  {
    id: "4",
    name: "Ananya Desai",
    email: "ananya.desai@example.com",
    description:
      "Ananya is a data scientist with expertise in machine learning and AI. She has worked on projects ranging from predictive analytics to natural language processing for major financial institutions in Hyderabad.",
    image: "/placeholder.svg?height=400&width=400",
    address: {
      street: "101 Jubilee Hills",
      city: "Hyderabad",
      zipCode: "500033",
      country: "India",
      coordinates: {
        lat: 17.385,
        lng: 78.4867,
      },
    },
    interests: ["Data Science", "Reading", "Yoga"],
  },
  {
    id: "5",
    name: "Rajesh Kumar",
    email: "rajesh.kumar@example.com",
    phone: "+91 65432 10987",
    website: "https://rajeshkumar.tech",
    description:
      "Rajesh is a mobile app developer specializing in iOS and Android development. He has launched several successful apps and is passionate about creating intuitive mobile experiences for users in Chennai.",
    image: "/placeholder.svg?height=400&width=400",
    address: {
      street: "234 Anna Salai",
      city: "Chennai",
      zipCode: "600002",
      country: "India",
      coordinates: {
        lat: 13.0827,
        lng: 80.2707,
      },
    },
    interests: ["Mobile Development", "Gaming", "Photography"],
  },
  {
    id: "6",
    name: "Meera Agarwal",
    email: "meera.agarwal@example.com",
    phone: "+91 54321 09876",
    description:
      "Meera is a marketing specialist with a focus on digital strategies. She has helped numerous startups in Kolkata grow their online presence and increase their customer base through innovative campaigns.",
    image: "/placeholder.svg?height=400&width=400",
    address: {
      street: "567 Park Street",
      city: "Kolkata",
      zipCode: "700016",
      country: "India",
      coordinates: {
        lat: 22.5726,
        lng: 88.3639,
      },
    },
    interests: ["Marketing", "Classical Dance", "Fashion"],
  },
  // Additional Indian profiles
  {
    id: "7",
    name: "Karthik Rajan",
    email: "karthik.rajan@example.com",
    phone: "+91 98765 12345",
    website: "https://karthikrajan.dev",
    description:
      "Karthik is a DevOps engineer with expertise in cloud infrastructure and automation. He has helped several companies in Pune implement CI/CD pipelines and optimize their deployment processes.",
    image: "/placeholder.svg?height=400&width=400",
    address: {
      street: "123 Koregaon Park",
      city: "Pune",
      zipCode: "411001",
      country: "India",
      coordinates: {
        lat: 18.5204,
        lng: 73.8567,
      },
    },
    interests: ["DevOps", "Cloud Computing", "Hiking"],
  },
  {
    id: "8",
    name: "Divya Menon",
    email: "divya.menon@example.com",
    phone: "+91 87654 56789",
    description:
      "Divya is a content strategist and copywriter based in Kochi. She specializes in creating engaging content for tech startups and has worked with clients across South India to improve their brand messaging.",
    image: "/placeholder.svg?height=400&width=400",
    address: {
      street: "456 Marine Drive",
      city: "Kochi",
      zipCode: "682001",
      country: "India",
      coordinates: {
        lat: 9.9312,
        lng: 76.2673,
      },
    },
    interests: ["Writing", "Photography", "Cooking"],
  },
  {
    id: "9",
    name: "Sanjay Gupta",
    email: "sanjay.gupta@example.com",
    phone: "+91 76543 98765",
    website: "https://sanjaygupta.co",
    description:
      "Sanjay is a blockchain developer and consultant from Jaipur. He has worked on several cryptocurrency projects and smart contract implementations, helping businesses leverage blockchain technology.",
    image: "/placeholder.svg?height=400&width=400",
    address: {
      street: "789 Tonk Road",
      city: "Jaipur",
      zipCode: "302015",
      country: "India",
      coordinates: {
        lat: 26.9124,
        lng: 75.7873,
      },
    },
    interests: ["Blockchain", "Cryptocurrency", "Chess"],
  },
  {
    id: "10",
    name: "Lakshmi Krishnan",
    email: "lakshmi.krishnan@example.com",
    phone: "+91 65432 56789",
    description:
      "Lakshmi is an AI researcher specializing in natural language processing. Based in Ahmedabad, she has published several papers on machine learning algorithms and works with a leading research institute.",
    image: "/placeholder.svg?height=400&width=400",
    address: {
      street: "101 SG Highway",
      city: "Ahmedabad",
      zipCode: "380054",
      country: "India",
      coordinates: {
        lat: 23.0225,
        lng: 72.5714,
      },
    },
    interests: ["Artificial Intelligence", "Research", "Classical Music"],
  },
  // International profiles
  {
    id: "11",
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "+1 212-555-1234",
    website: "https://johnsmith.dev",
    description:
      "John is a senior software architect based in New York City. With over 15 years of experience, he specializes in designing scalable systems for financial institutions and has led teams at several Fortune 500 companies.",
    image: "/placeholder.svg?height=400&width=400",
    address: {
      street: "123 Broadway",
      city: "New York",
      zipCode: "10007",
      country: "United States",
      coordinates: {
        lat: 40.7128,
        lng: -74.006,
      },
    },
    interests: ["Architecture", "Jazz", "Running"],
  },
  {
    id: "12",
    name: "Sophia Chen",
    email: "sophia.chen@example.com",
    phone: "+65 9123 4567",
    description:
      "Sophia is a product manager at a leading tech company in Singapore. She has a background in user experience design and has successfully launched multiple digital products across Southeast Asia.",
    image: "/placeholder.svg?height=400&width=400",
    address: {
      street: "456 Orchard Road",
      city: "Singapore",
      zipCode: "238877",
      country: "Singapore",
      coordinates: {
        lat: 1.3521,
        lng: 103.8198,
      },
    },
    interests: ["Product Management", "Travel", "Food"],
  },
  {
    id: "13",
    name: "Mohammed Al-Farsi",
    email: "mohammed.alfarsi@example.com",
    phone: "+971 50 123 4567",
    website: "https://alfarsitech.com",
    description:
      "Mohammed is a cybersecurity expert based in Dubai. He consults with government agencies and private corporations on security infrastructure and has spoken at numerous international conferences on digital security.",
    image: "/placeholder.svg?height=400&width=400",
    address: {
      street: "789 Sheikh Zayed Road",
      city: "Dubai",
      zipCode: "12345",
      country: "United Arab Emirates",
      coordinates: {
        lat: 25.2048,
        lng: 55.2708,
      },
    },
    interests: ["Cybersecurity", "Technology Policy", "Desert Camping"],
  },
  {
    id: "14",
    name: "Emma Wilson",
    email: "emma.wilson@example.com",
    phone: "+44 20 7123 4567",
    description:
      "Emma is a front-end developer specializing in accessible web design. Based in London, she advocates for inclusive technology and has contributed to several open-source projects focused on web accessibility.",
    image: "/placeholder.svg?height=400&width=400",
    address: {
      street: "101 Oxford Street",
      city: "London",
      zipCode: "W1D 1LL",
      country: "United Kingdom",
      coordinates: {
        lat: 51.5074,
        lng: -0.1278,
      },
    },
    interests: ["Accessibility", "Web Standards", "Urban Gardening"],
  },
  {
    id: "15",
    name: "Hiroshi Tanaka",
    email: "hiroshi.tanaka@example.com",
    phone: "+81 3 1234 5678",
    website: "https://tanaka-tech.jp",
    description:
      "Hiroshi is a game developer from Tokyo with experience in both mobile and console platforms. He has worked on several popular titles and specializes in graphics programming and game engine development.",
    image: "/placeholder.svg?height=400&width=400",
    address: {
      street: "2-3-1 Shibuya",
      city: "Tokyo",
      zipCode: "150-0002",
      country: "Japan",
      coordinates: {
        lat: 35.6762,
        lng: 139.6503,
      },
    },
    interests: ["Game Development", "Anime", "Traditional Crafts"],
  },
  {
    id: "16",
    name: "Maria Rodriguez",
    email: "maria.rodriguez@example.com",
    phone: "+55 11 91234 5678",
    description:
      "Maria is a data engineer based in São Paulo. She specializes in big data processing and has implemented data pipelines for several multinational companies across Latin America.",
    image: "/placeholder.svg?height=400&width=400",
    address: {
      street: "Av. Paulista, 1000",
      city: "São Paulo",
      zipCode: "01310-100",
      country: "Brazil",
      coordinates: {
        lat: -23.5505,
        lng: -46.6333,
      },
    },
    interests: ["Data Engineering", "Samba", "Beach Volleyball"],
  },
  {
    id: "17",
    name: "Ahmed Hassan",
    email: "ahmed.hassan@example.com",
    phone: "+20 2 1234 5678",
    description:
      "Ahmed is a mobile app developer from Cairo with expertise in cross-platform frameworks. He has built applications for various industries including healthcare, education, and e-commerce.",
    image: "/placeholder.svg?height=400&width=400",
    address: {
      street: "123 Tahrir Square",
      city: "Cairo",
      zipCode: "11511",
      country: "Egypt",
      coordinates: {
        lat: 30.0444,
        lng: 31.2357,
      },
    },
    interests: ["Mobile Development", "Ancient History", "Calligraphy"],
  },
  {
    id: "18",
    name: "Olivia Kim",
    email: "olivia.kim@example.com",
    phone: "+82 2 1234 5678",
    description:
      "Olivia is a UX researcher based in Seoul. She conducts user studies and usability testing to improve digital products, with a focus on e-commerce and financial applications.",
    image: "/placeholder.svg?height=400&width=400",
    address: {
      street: "456 Gangnam-daero",
      city: "Seoul",
      zipCode: "06000",
      country: "South Korea",
      coordinates: {
        lat: 37.5665,
        lng: 126.978,
      },
    },
    interests: ["User Research", "K-pop", "Street Photography"],
  },
  {
    id: "19",
    name: "Carlos Mendoza",
    email: "carlos.mendoza@example.com",
    phone: "+52 55 1234 5678",
    website: "https://carlosmendoza.mx",
    description:
      "Carlos is a backend developer from Mexico City specializing in microservices architecture. He has helped several startups scale their infrastructure and optimize their API performance.",
    image: "/placeholder.svg?height=400&width=400",
    address: {
      street: "789 Reforma Avenue",
      city: "Mexico City",
      zipCode: "06500",
      country: "Mexico",
      coordinates: {
        lat: 19.4326,
        lng: -99.1332,
      },
    },
    interests: ["Microservices", "Salsa Dancing", "Mexican Cuisine"],
  },
  {
    id: "20",
    name: "Aisha Mbeki",
    email: "aisha.mbeki@example.com",
    phone: "+27 21 123 4567",
    description:
      "Aisha is a tech entrepreneur from Cape Town who founded an ed-tech startup focused on making coding education accessible across Africa. She is passionate about bridging the digital divide.",
    image: "/placeholder.svg?height=400&width=400",
    address: {
      street: "101 Long Street",
      city: "Cape Town",
      zipCode: "8001",
      country: "South Africa",
      coordinates: {
        lat: -33.9249,
        lng: 18.4241,
      },
    },
    interests: ["Education Technology", "Social Entrepreneurship", "African Art"],
  },
]

// Get all profiles
export async function getProfiles(): Promise<Profile[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))
  return profiles
}

// Get a profile by ID
export async function getProfileById(id: string): Promise<Profile | undefined> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))
  return profiles.find((profile) => profile.id === id)
}

// Search profiles
export async function searchProfiles(query: string): Promise<Profile[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  const lowercaseQuery = query.toLowerCase()

  return profiles.filter(
    (profile) =>
      profile.name.toLowerCase().includes(lowercaseQuery) ||
      profile.description.toLowerCase().includes(lowercaseQuery) ||
      profile.address.city.toLowerCase().includes(lowercaseQuery) ||
      profile.address.country.toLowerCase().includes(lowercaseQuery) ||
      (profile.interests && profile.interests.some((interest) => interest.toLowerCase().includes(lowercaseQuery))),
  )
}

