export interface InspirationItem {
  id: string
  title: string
  room: string
  style: string
  colors: string[]
  image: string
}

export const inspirationItems: InspirationItem[] = [
  {
    id: "1",
    title: "Modern Minimalist Living Room",
    room: "Living Room",
    style: "Modern",
    colors: ["Soft Linen", "Warm Gray", "Classic White"],
    image: "/images/inspiration/modern-living.jpg"
  },
  {
    id: "2",
    title: "Coastal Bedroom Retreat",
    room: "Bedroom",
    style: "Coastal",
    colors: ["Ocean Mist", "Soft Linen", "Sandy Beige"],
    image: "/images/inspiration/coastal-bedroom.jpg"
  },
  {
    id: "3",
    title: "Bold Kitchen Statement",
    room: "Kitchen",
    style: "Contemporary",
    colors: ["Midnight Navy", "Classic White", "Brass Accents"],
    image: "/images/inspiration/bold-kitchen.jpg"
  },
  {
    id: "4",
    title: "Serene Spa Bathroom",
    room: "Bathroom",
    style: "Spa",
    colors: ["Seafoam", "Classic White", "Warm Wood"],
    image: "/images/inspiration/spa-bathroom.jpg"
  },
  {
    id: "5",
    title: "Warm Traditional Study",
    room: "Home Office",
    style: "Traditional",
    colors: ["Forest Pine", "Warm Honey", "Cream"],
    image: "/images/inspiration/traditional-study.jpg"
  },
  {
    id: "6",
    title: "Playful Kids Room",
    room: "Kids Room",
    style: "Playful",
    colors: ["Powder Blue", "Coral Reef", "Classic White"],
    image: "/images/inspiration/kids-room.jpg"
  },
  {
    id: "7",
    title: "Elegant Dining Space",
    room: "Dining Room",
    style: "Elegant",
    colors: ["Charcoal Depth", "Golden Hour", "Cream"],
    image: "/images/inspiration/elegant-dining.jpg"
  },
  {
    id: "8",
    title: "Bohemian Bedroom",
    room: "Bedroom",
    style: "Bohemian",
    colors: ["Terracotta Dream", "Sage Garden", "Creamy Vanilla"],
    image: "/images/inspiration/boho-bedroom.jpg"
  },
  {
    id: "9",
    title: "Scandinavian Living",
    room: "Living Room",
    style: "Scandinavian",
    colors: ["Classic White", "Soft Linen", "Warm Gray"],
    image: "/images/inspiration/scandi-living.jpg"
  },
  {
    id: "10",
    title: "Industrial Loft",
    room: "Living Room",
    style: "Industrial",
    colors: ["Charcoal Depth", "Stone Path", "Rustic Amber"],
    image: "/images/inspiration/industrial-loft.jpg"
  },
  {
    id: "11",
    title: "French Country Kitchen",
    room: "Kitchen",
    style: "French Country",
    colors: ["Swiss Coffee", "Sage Garden", "Warm Honey"],
    image: "/images/inspiration/french-kitchen.jpg"
  },
  {
    id: "12",
    title: "Art Deco Bathroom",
    room: "Bathroom",
    style: "Art Deco",
    colors: ["Midnight Navy", "Golden Hour", "Classic White"],
    image: "/images/inspiration/artdeco-bath.jpg"
  }
]

export const roomTypes = [
  "All Rooms",
  "Living Room",
  "Bedroom",
  "Kitchen",
  "Bathroom",
  "Home Office",
  "Dining Room",
  "Kids Room"
]

export const designStyles = [
  "All Styles",
  "Modern",
  "Traditional",
  "Coastal",
  "Bohemian",
  "Scandinavian",
  "Industrial",
  "Contemporary",
  "Elegant",
  "Spa",
  "Playful",
  "French Country",
  "Art Deco"
]
