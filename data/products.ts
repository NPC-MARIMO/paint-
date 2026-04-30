export interface Product {
  id: string
  name: string
  slug: string
  category: "interior" | "exterior" | "waterproofing" | "primers"
  price: number
  originalPrice?: number
  image: string
  colors: string[]
  finish: "matte" | "satin" | "semi-gloss" | "gloss"
  coverage: string
  rating: number
  reviews: number
  description: string
  features: string[]
  usage: string
  isBestSeller?: boolean
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Interior Matte",
    slug: "premium-interior-matte",
    category: "interior",
    price: 54.99,
    originalPrice: 64.99,
    image: "/images/products/interior-matte.jpg",
    colors: ["Arctic White", "Soft Linen", "Warm Beige", "Cool Gray"],
    finish: "matte",
    coverage: "350-400 sq ft per gallon",
    rating: 4.8,
    reviews: 234,
    description: "Our flagship interior matte paint delivers exceptional coverage with a velvety smooth finish. Perfect for living rooms, bedrooms, and dining areas where a sophisticated, non-reflective look is desired.",
    features: [
      "Zero VOC formula for healthier indoor air",
      "Superior hide in just one coat",
      "Washable and scrubbable surface",
      "Excellent touch-up capability",
      "Mildew resistant"
    ],
    usage: "Apply with brush, roller, or spray equipment. For best results, use a high-quality roller cover with 3/8\" to 1/2\" nap. Recoat after 2-4 hours. Clean up with soap and water.",
    isBestSeller: true
  },
  {
    id: "2",
    name: "Ultra Exterior Shield",
    slug: "ultra-exterior-shield",
    category: "exterior",
    price: 68.99,
    image: "/images/products/exterior-shield.jpg",
    colors: ["Classic White", "Slate Gray", "Sandstone", "Navy Blue"],
    finish: "satin",
    coverage: "300-350 sq ft per gallon",
    rating: 4.9,
    reviews: 189,
    description: "Advanced exterior paint with 15-year durability guarantee. Engineered to withstand extreme weather conditions while maintaining color vibrancy and protection.",
    features: [
      "UV resistant technology",
      "All-weather protection",
      "Resists cracking, peeling, and fading",
      "Self-priming on most surfaces",
      "Mold and mildew resistant"
    ],
    usage: "Surface temperature should be between 50°F and 90°F. Apply to clean, dry surfaces. Use quality acrylic brush or roller. Allow 4 hours between coats.",
    isBestSeller: true
  },
  {
    id: "3",
    name: "Waterproof Basement Sealer",
    slug: "waterproof-basement-sealer",
    category: "waterproofing",
    price: 79.99,
    image: "/images/products/waterproof-sealer.jpg",
    colors: ["White", "Gray"],
    finish: "semi-gloss",
    coverage: "75-125 sq ft per gallon",
    rating: 4.7,
    reviews: 156,
    description: "Heavy-duty waterproofing paint designed for basement walls and masonry surfaces. Stops water penetration and prevents moisture damage.",
    features: [
      "Withstands 12 PSI hydrostatic pressure",
      "Fills minor cracks and imperfections",
      "Prevents efflorescence",
      "Low odor formula",
      "10-year waterproof guarantee"
    ],
    usage: "Apply to bare, clean masonry only. Surface must be damp but not wet. Apply thick coat using a stiff bristle brush. Do not thin.",
    isBestSeller: true
  },
  {
    id: "4",
    name: "Pro-Grade Primer",
    slug: "pro-grade-primer",
    category: "primers",
    price: 42.99,
    image: "/images/products/primer.jpg",
    colors: ["White", "Gray"],
    finish: "matte",
    coverage: "400-450 sq ft per gallon",
    rating: 4.6,
    reviews: 312,
    description: "Professional-quality primer that seals, bonds, and prepares surfaces for topcoat application. Essential for achieving the best finish results.",
    features: [
      "Excellent adhesion to all surfaces",
      "Blocks stains and tannin bleed",
      "Quick dry - recoat in 1 hour",
      "Sandable for smooth finish",
      "Compatible with all topcoats"
    ],
    usage: "Stir thoroughly before use. Apply evenly with brush, roller, or spray. Allow to dry completely before sanding or applying topcoat.",
    isBestSeller: true
  },
  {
    id: "5",
    name: "Kitchen & Bath Semi-Gloss",
    slug: "kitchen-bath-semi-gloss",
    category: "interior",
    price: 58.99,
    image: "/images/products/kitchen-bath.jpg",
    colors: ["Pure White", "Almond", "Light Gray", "Soft Blue"],
    finish: "semi-gloss",
    coverage: "350-400 sq ft per gallon",
    rating: 4.7,
    reviews: 178,
    description: "Specially formulated for high-moisture areas. Features advanced mildew-resistant technology and easy-clean surface perfect for kitchens and bathrooms.",
    features: [
      "Maximum moisture resistance",
      "Anti-microbial formula",
      "Stain and splash resistant",
      "Easy to clean surface",
      "Durable semi-gloss finish"
    ],
    usage: "Ensure proper ventilation. Apply with synthetic brush or foam roller for smoothest finish. Two coats recommended for best moisture protection."
  },
  {
    id: "6",
    name: "Ceiling Flat White",
    slug: "ceiling-flat-white",
    category: "interior",
    price: 38.99,
    image: "/images/products/ceiling-flat.jpg",
    colors: ["Bright White", "Soft White"],
    finish: "matte",
    coverage: "400-450 sq ft per gallon",
    rating: 4.5,
    reviews: 267,
    description: "Ultra-flat finish specifically designed for ceilings. Minimizes surface imperfections and provides a clean, uniform appearance.",
    features: [
      "Spatter-resistant formula",
      "Excellent hide for imperfections",
      "Non-yellowing white",
      "Low odor",
      "Quick drying"
    ],
    usage: "Use a ceiling roller frame and 3/8\" nap cover. Work in 4x4 ft sections. Maintain wet edge to prevent lap marks."
  },
  {
    id: "7",
    name: "Deck & Patio Stain",
    slug: "deck-patio-stain",
    category: "exterior",
    price: 62.99,
    image: "/images/products/deck-stain.jpg",
    colors: ["Natural Cedar", "Redwood", "Walnut", "Gray Wash"],
    finish: "satin",
    coverage: "200-300 sq ft per gallon",
    rating: 4.8,
    reviews: 145,
    description: "Premium solid color stain for wood decks, patios, and outdoor furniture. Penetrates deep to protect against weathering and foot traffic.",
    features: [
      "Deep wood penetration",
      "UV protection",
      "Water repellent",
      "Resists foot traffic wear",
      "No cracking or peeling"
    ],
    usage: "Apply to clean, dry wood. Use brush, roller, or pump sprayer. Back-brush for best penetration. Apply second coat within 4-6 hours while first coat is still tacky."
  },
  {
    id: "8",
    name: "Masonry Waterproofer",
    slug: "masonry-waterproofer",
    category: "waterproofing",
    price: 72.99,
    image: "/images/products/masonry-waterproof.jpg",
    colors: ["Clear", "White"],
    finish: "matte",
    coverage: "100-150 sq ft per gallon",
    rating: 4.6,
    reviews: 98,
    description: "Clear penetrating waterproofer for brick, concrete, and stone surfaces. Protects against water damage while maintaining the natural appearance.",
    features: [
      "Penetrating water barrier",
      "Maintains natural appearance",
      "Prevents freeze-thaw damage",
      "Salt and chemical resistant",
      "Breathable formula"
    ],
    usage: "Apply to clean, dry masonry. Saturate surface thoroughly using garden sprayer or brush. Apply second coat immediately while first coat is still wet."
  },
  {
    id: "9",
    name: "Stain-Blocking Primer",
    slug: "stain-blocking-primer",
    category: "primers",
    price: 48.99,
    image: "/images/products/stain-block-primer.jpg",
    colors: ["White"],
    finish: "matte",
    coverage: "300-350 sq ft per gallon",
    rating: 4.8,
    reviews: 203,
    description: "High-performance stain-blocking primer that seals the toughest stains including water marks, smoke damage, and tannin bleed.",
    features: [
      "Blocks severe stains",
      "Seals odors",
      "Interior/exterior use",
      "Shellac-based power",
      "Quick dry formula"
    ],
    usage: "Ensure good ventilation. Apply thin, even coat. Dry to touch in 15 minutes, recoat in 45 minutes. Clean brushes with denatured alcohol."
  },
  {
    id: "10",
    name: "Trim & Door High-Gloss",
    slug: "trim-door-high-gloss",
    category: "interior",
    price: 52.99,
    image: "/images/products/trim-gloss.jpg",
    colors: ["Brilliant White", "Black", "Navy", "Forest Green"],
    finish: "gloss",
    coverage: "400-450 sq ft per gallon",
    rating: 4.7,
    reviews: 167,
    description: "Stunning high-gloss finish perfect for interior trim, doors, and cabinets. Provides a smooth, hard finish that stands up to daily wear.",
    features: [
      "Mirror-like finish",
      "Hard, durable surface",
      "Excellent flow and leveling",
      "Stain and scratch resistant",
      "Easy soap and water cleanup"
    ],
    usage: "Apply with high-quality brush or foam roller. Use long, even strokes. Lightly sand between coats for smoothest finish. Allow 4 hours between coats."
  },
  {
    id: "11",
    name: "Garage Floor Epoxy",
    slug: "garage-floor-epoxy",
    category: "waterproofing",
    price: 89.99,
    image: "/images/products/garage-epoxy.jpg",
    colors: ["Gray", "Tan", "Tile Red"],
    finish: "semi-gloss",
    coverage: "250-300 sq ft per gallon",
    rating: 4.9,
    reviews: 134,
    description: "Professional-grade epoxy coating for garage floors and concrete surfaces. Creates a tough, chemical-resistant finish that transforms your garage.",
    features: [
      "Chemical and oil resistant",
      "Hot tire pickup resistant",
      "Slip-resistant additives available",
      "Easy to clean surface",
      "Professional appearance"
    ],
    usage: "Etch concrete before application. Mix Part A and Part B thoroughly. Apply within 2 hours of mixing. Use roller designed for epoxy coatings."
  },
  {
    id: "12",
    name: "Multi-Surface Bonding Primer",
    slug: "multi-surface-bonding-primer",
    category: "primers",
    price: 56.99,
    image: "/images/products/bonding-primer.jpg",
    colors: ["White", "Gray"],
    finish: "matte",
    coverage: "350-400 sq ft per gallon",
    rating: 4.6,
    reviews: 189,
    description: "Versatile bonding primer that adheres to difficult surfaces including tile, glass, laminate, and glossy surfaces without sanding.",
    features: [
      "Bonds to slick surfaces",
      "No sanding required",
      "Interior/exterior use",
      "Excellent adhesion",
      "Ready for topcoat in 2 hours"
    ],
    usage: "Clean surface thoroughly with TSP or degreaser. Apply thin, even coat. Do not apply in direct sunlight or temperatures below 50°F."
  }
]

export const categories = [
  { id: "interior", name: "Interior Paints", description: "Transform your indoor spaces", image: "/images/categories/interior.jpg" },
  { id: "exterior", name: "Exterior Paints", description: "Weather-resistant protection", image: "/images/categories/exterior.jpg" },
  { id: "waterproofing", name: "Waterproofing", description: "Seal and protect surfaces", image: "/images/categories/waterproofing.jpg" },
  { id: "primers", name: "Primers & Sealers", description: "Perfect surface preparation", image: "/images/categories/primers.jpg" }
]

export const finishes = [
  { id: "matte", name: "Matte", description: "No shine, hides imperfections" },
  { id: "satin", name: "Satin", description: "Subtle sheen, easy to clean" },
  { id: "semi-gloss", name: "Semi-Gloss", description: "Moderate shine, durable" },
  { id: "gloss", name: "High Gloss", description: "Maximum shine and durability" }
]
