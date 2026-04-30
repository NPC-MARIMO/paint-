export interface Dealer {
  id: string
  name: string
  address: string
  city: string
  state: string
  zip: string
  phone: string
  hours: string
  distance?: string
  services: string[]
}

export const dealers: Dealer[] = [
  {
    id: "1",
    name: "ColorCraft Paint & Supply",
    address: "1234 Main Street",
    city: "San Francisco",
    state: "CA",
    zip: "94102",
    phone: "(415) 555-0123",
    hours: "Mon-Sat: 7AM-6PM, Sun: 9AM-5PM",
    distance: "0.8 mi",
    services: ["Color Matching", "Paint Mixing", "Delivery", "Spray Rental"]
  },
  {
    id: "2",
    name: "Bay Area Paint Center",
    address: "5678 Oak Avenue",
    city: "San Francisco",
    state: "CA",
    zip: "94118",
    phone: "(415) 555-0456",
    hours: "Mon-Fri: 6AM-7PM, Sat-Sun: 8AM-6PM",
    distance: "2.3 mi",
    services: ["Color Matching", "Paint Mixing", "Expert Advice"]
  },
  {
    id: "3",
    name: "Premium Coatings Warehouse",
    address: "910 Industrial Blvd",
    city: "Oakland",
    state: "CA",
    zip: "94607",
    phone: "(510) 555-0789",
    hours: "Mon-Sat: 7AM-5PM",
    distance: "5.1 mi",
    services: ["Bulk Orders", "Contractor Accounts", "Delivery", "Color Matching"]
  },
  {
    id: "4",
    name: "Home & Color Design Studio",
    address: "2468 Sunset Boulevard",
    city: "San Francisco",
    state: "CA",
    zip: "94122",
    phone: "(415) 555-0246",
    hours: "Mon-Sat: 9AM-7PM, Sun: 10AM-5PM",
    distance: "3.7 mi",
    services: ["Design Consultation", "Color Matching", "Sample Pots", "Delivery"]
  },
  {
    id: "5",
    name: "Pro Paint Supply Co",
    address: "1357 Market Street",
    city: "San Francisco",
    state: "CA",
    zip: "94103",
    phone: "(415) 555-1357",
    hours: "Mon-Fri: 5:30AM-6PM, Sat: 7AM-4PM",
    distance: "1.2 mi",
    services: ["Contractor Pricing", "Equipment Rental", "Bulk Orders", "Color Matching"]
  },
  {
    id: "6",
    name: "Coastal Paint & Decor",
    address: "3691 Beach Road",
    city: "Pacifica",
    state: "CA",
    zip: "94044",
    phone: "(650) 555-3691",
    hours: "Mon-Sat: 8AM-6PM, Sun: 10AM-4PM",
    distance: "12.5 mi",
    services: ["Color Matching", "Paint Mixing", "Wallpaper", "Design Services"]
  }
]
