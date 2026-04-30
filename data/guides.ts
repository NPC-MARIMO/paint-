export interface Guide {
  id: string
  slug: string
  title: string
  excerpt: string
  image: string
  category: string
  readTime: string
  content: string
}

export const guides: Guide[] = [
  {
    id: "1",
    slug: "how-to-choose-paint",
    title: "How to Choose the Right Paint for Your Project",
    excerpt: "A comprehensive guide to selecting the perfect paint type, finish, and color for any room in your home.",
    image: "/images/guides/choose-paint.jpg",
    category: "Getting Started",
    readTime: "8 min read",
    content: "Choosing the right paint involves considering several factors including the room's purpose, lighting conditions, and your personal style preferences. Start by identifying the room's function - high-traffic areas need more durable finishes, while bedrooms can benefit from flat, calming colors."
  },
  {
    id: "2",
    slug: "interior-vs-exterior",
    title: "Interior vs Exterior Paint: What's the Difference?",
    excerpt: "Understanding the key differences between interior and exterior paints and why using the right type matters.",
    image: "/images/guides/interior-exterior.jpg",
    category: "Paint Types",
    readTime: "6 min read",
    content: "While both interior and exterior paints are designed to protect and beautify surfaces, they're formulated very differently. Exterior paints contain additives that resist UV damage, moisture, and temperature fluctuations, while interior paints prioritize low odor and easy cleanup."
  },
  {
    id: "3",
    slug: "paint-finish-guide",
    title: "The Complete Guide to Paint Finishes",
    excerpt: "From flat to high-gloss: learn which finish is best for every surface and room in your home.",
    image: "/images/guides/finishes.jpg",
    category: "Paint Types",
    readTime: "7 min read",
    content: "Paint finishes range from flat (matte) to high-gloss, each with unique properties. Flat finishes hide imperfections but are hard to clean. Eggshell offers subtle sheen with better washability. Satin is versatile and durable. Semi-gloss is ideal for trim and high-moisture areas."
  },
  {
    id: "4",
    slug: "surface-preparation",
    title: "Surface Preparation: The Key to Perfect Results",
    excerpt: "Why proper preparation is essential and step-by-step instructions for preparing any surface.",
    image: "/images/guides/preparation.jpg",
    category: "How-To",
    readTime: "10 min read",
    content: "The most common painting mistake is inadequate surface preparation. Proper prep ensures paint adheres correctly and lasts longer. This includes cleaning, repairing damage, sanding, and priming as needed."
  },
  {
    id: "5",
    slug: "color-psychology",
    title: "Color Psychology: How Paint Colors Affect Mood",
    excerpt: "Discover how different colors influence emotions and create the perfect atmosphere in each room.",
    image: "/images/guides/color-psychology.jpg",
    category: "Design Tips",
    readTime: "5 min read",
    content: "Colors have a profound impact on our emotions and behavior. Blues and greens create calm, relaxing spaces. Warm colors like yellow and orange energize and stimulate. Understanding color psychology helps you choose hues that support each room's purpose."
  },
  {
    id: "6",
    slug: "painting-techniques",
    title: "Professional Painting Techniques for DIYers",
    excerpt: "Master the techniques professionals use to achieve flawless, long-lasting paint jobs.",
    image: "/images/guides/techniques.jpg",
    category: "How-To",
    readTime: "12 min read",
    content: "Professional painters achieve superior results through careful technique. Learn proper brush loading, maintaining wet edges, cutting in efficiently, and rolling techniques that eliminate lap marks and ensure even coverage."
  },
  {
    id: "7",
    slug: "estimate-paint-needed",
    title: "How to Calculate Paint Quantity",
    excerpt: "Never buy too much or too little paint again with our simple calculation guide.",
    image: "/images/guides/calculate-paint.jpg",
    category: "Getting Started",
    readTime: "4 min read",
    content: "Calculate your paint needs by measuring wall height and width to get square footage. Subtract windows and doors. Divide total square footage by the paint's coverage rate (usually 350-400 sq ft per gallon). Add 10% for touch-ups."
  },
  {
    id: "8",
    slug: "paint-small-spaces",
    title: "Painting Tips for Small Spaces",
    excerpt: "Clever color and technique strategies to make small rooms feel larger and more inviting.",
    image: "/images/guides/small-spaces.jpg",
    category: "Design Tips",
    readTime: "6 min read",
    content: "Small spaces benefit from strategic color choices. Light colors reflect more light, making rooms feel larger. Using the same color on walls and trim creates seamless flow. Vertical stripes add height, while horizontal patterns widen narrow rooms."
  }
]

export const guideCategories = [
  "All",
  "Getting Started",
  "Paint Types",
  "How-To",
  "Design Tips"
]
