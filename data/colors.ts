export interface PaintColor {
  id: string
  name: string
  hex: string
  tone: "warm" | "cool" | "neutral"
  family: string
  roomImage: string
}

export const paintColors: PaintColor[] = [
  // Warm tones
  { id: "1", name: "Sunlit Sand", hex: "#E8D4B8", tone: "warm", family: "Beige", roomImage: "/images/rooms/living-warm.jpg" },
  { id: "2", name: "Terracotta Dream", hex: "#C67D56", tone: "warm", family: "Orange", roomImage: "/images/rooms/bedroom-terracotta.jpg" },
  { id: "3", name: "Golden Hour", hex: "#D4A574", tone: "warm", family: "Gold", roomImage: "/images/rooms/dining-gold.jpg" },
  { id: "4", name: "Warm Honey", hex: "#E5B769", tone: "warm", family: "Yellow", roomImage: "/images/rooms/kitchen-honey.jpg" },
  { id: "5", name: "Blush Rose", hex: "#E8C4C4", tone: "warm", family: "Pink", roomImage: "/images/rooms/bedroom-blush.jpg" },
  { id: "6", name: "Coral Reef", hex: "#E07B6C", tone: "warm", family: "Coral", roomImage: "/images/rooms/living-coral.jpg" },
  { id: "7", name: "Rustic Amber", hex: "#B5651D", tone: "warm", family: "Brown", roomImage: "/images/rooms/study-amber.jpg" },
  { id: "8", name: "Creamy Vanilla", hex: "#F5E6D3", tone: "warm", family: "Cream", roomImage: "/images/rooms/bedroom-vanilla.jpg" },
  
  // Cool tones
  { id: "9", name: "Ocean Mist", hex: "#87CEEB", tone: "cool", family: "Blue", roomImage: "/images/rooms/bathroom-ocean.jpg" },
  { id: "10", name: "Sage Garden", hex: "#9CAF88", tone: "cool", family: "Green", roomImage: "/images/rooms/living-sage.jpg" },
  { id: "11", name: "Arctic Frost", hex: "#E0F0F7", tone: "cool", family: "Blue", roomImage: "/images/rooms/bedroom-frost.jpg" },
  { id: "12", name: "Lavender Haze", hex: "#C4B7D6", tone: "cool", family: "Purple", roomImage: "/images/rooms/bedroom-lavender.jpg" },
  { id: "13", name: "Seafoam", hex: "#93E9BE", tone: "cool", family: "Green", roomImage: "/images/rooms/bathroom-seafoam.jpg" },
  { id: "14", name: "Midnight Navy", hex: "#2C3E50", tone: "cool", family: "Blue", roomImage: "/images/rooms/study-navy.jpg" },
  { id: "15", name: "Forest Pine", hex: "#2D5A45", tone: "cool", family: "Green", roomImage: "/images/rooms/living-forest.jpg" },
  { id: "16", name: "Powder Blue", hex: "#B0D4E8", tone: "cool", family: "Blue", roomImage: "/images/rooms/nursery-powder.jpg" },
  
  // Neutral tones
  { id: "17", name: "Classic White", hex: "#FAFAFA", tone: "neutral", family: "White", roomImage: "/images/rooms/kitchen-white.jpg" },
  { id: "18", name: "Soft Linen", hex: "#F0E6DC", tone: "neutral", family: "White", roomImage: "/images/rooms/living-linen.jpg" },
  { id: "19", name: "Warm Gray", hex: "#9E9E9E", tone: "neutral", family: "Gray", roomImage: "/images/rooms/office-gray.jpg" },
  { id: "20", name: "Charcoal Depth", hex: "#36454F", tone: "neutral", family: "Gray", roomImage: "/images/rooms/bedroom-charcoal.jpg" },
  { id: "21", name: "Greige", hex: "#C5BAA9", tone: "neutral", family: "Gray", roomImage: "/images/rooms/living-greige.jpg" },
  { id: "22", name: "Stone Path", hex: "#8B8680", tone: "neutral", family: "Gray", roomImage: "/images/rooms/hallway-stone.jpg" },
  { id: "23", name: "Swiss Coffee", hex: "#F2E8DC", tone: "neutral", family: "White", roomImage: "/images/rooms/bedroom-swiss.jpg" },
  { id: "24", name: "Barely Black", hex: "#2B2B2B", tone: "neutral", family: "Black", roomImage: "/images/rooms/accent-black.jpg" }
]

export const colorFamilies = [
  "All",
  "White",
  "Beige",
  "Gray",
  "Blue",
  "Green",
  "Pink",
  "Purple",
  "Yellow",
  "Orange",
  "Brown",
  "Black"
]

export const colorTones = [
  { id: "all", name: "All Tones" },
  { id: "warm", name: "Warm" },
  { id: "cool", name: "Cool" },
  { id: "neutral", name: "Neutral" }
]
