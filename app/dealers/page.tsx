"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Search, MapPin, Phone, Clock, Navigation, Star, X } from "lucide-react"
import { dealers } from "@/data/dealers"
import { cn } from "@/lib/utils"

export default function DealersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDealer, setSelectedDealer] = useState<string | null>(null)

  const filteredDealers = useMemo(() => {
    if (!searchQuery) return dealers
    const query = searchQuery.toLowerCase()
    return dealers.filter(dealer =>
      dealer.name.toLowerCase().includes(query) ||
      dealer.city.toLowerCase().includes(query) ||
      dealer.zip.includes(query) ||
      dealer.address.toLowerCase().includes(query)
    )
  }, [searchQuery])

  return (
    <div className="min-h-screen bg-warm-gradient pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-gold uppercase tracking-wider">
            Find a Store
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-navy text-balance">
            Dealer Locator
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Find authorized Spectrum Paints dealers near you for expert advice and premium products.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by city, zip code, or store name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-12 py-4 rounded-2xl border border-stone bg-warm-white shadow-sm focus:border-navy focus:ring-2 focus:ring-navy/10 transition-all text-lg"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-5 top-1/2 -translate-y-1/2"
              >
                <X className="h-5 w-5 text-muted-foreground hover:text-charcoal" />
              </button>
            )}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-3">
            Showing {filteredDealers.length} locations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <div className="sticky top-28 card-warm rounded-3xl overflow-hidden shadow-sm">
              <div className="aspect-square lg:aspect-auto lg:h-[600px] bg-navy/5 flex items-center justify-center relative">
                {/* Simplified map visualization */}
                <div className="absolute inset-0 p-8">
                  <div className="w-full h-full bg-gradient-to-br from-navy/5 to-teal/5 rounded-2xl relative">
                    {/* Map pins */}
                    {filteredDealers.map((dealer, index) => (
                      <button
                        key={dealer.id}
                        onClick={() => setSelectedDealer(dealer.id)}
                        className={cn(
                          "absolute transform -translate-x-1/2 -translate-y-1/2 transition-all",
                          selectedDealer === dealer.id && "scale-125 z-10"
                        )}
                        style={{
                          left: `${20 + (index % 3) * 30}%`,
                          top: `${20 + Math.floor(index / 3) * 25}%`
                        }}
                      >
                        <div className={cn(
                          "w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors",
                          selectedDealer === dealer.id 
                            ? "bg-gold text-charcoal" 
                            : "bg-navy text-white hover:bg-gold hover:text-charcoal"
                        )}>
                          <MapPin className="h-5 w-5" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-white rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-4 h-4 rounded-full bg-navy" />
                    <span className="text-charcoal">Authorized Dealer</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Dealers List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="order-1 lg:order-2 space-y-4"
          >
            {filteredDealers.map((dealer, index) => (
              <motion.button
                key={dealer.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => setSelectedDealer(selectedDealer === dealer.id ? null : dealer.id)}
                className={cn(
                  "w-full text-left card-warm rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all",
                  selectedDealer === dealer.id && "ring-2 ring-gold shadow-lg"
                )}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-navy">
                      {dealer.name}
                    </h3>
                    <div className="flex items-center gap-1 mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                      ))}
                      <span className="text-sm text-muted-foreground ml-1">5.0</span>
                    </div>
                  </div>
                  {dealer.distance && (
                    <span className="px-3 py-1 bg-navy/10 text-navy text-sm font-medium rounded-full">
                      {dealer.distance}
                    </span>
                  )}
                </div>

                <div className="space-y-2 text-sm text-charcoal/80">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <span>{dealer.address}, {dealer.city}, {dealer.state} {dealer.zip}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <span>{dealer.phone}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <span>{dealer.hours}</span>
                  </div>
                </div>

                {/* Services */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {dealer.services.map((service) => (
                    <span 
                      key={service}
                      className="px-2 py-1 bg-sand text-xs font-medium text-charcoal/70 rounded-md"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                {/* Expanded content */}
                {selectedDealer === dealer.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-6 pt-6 border-t border-border flex gap-3"
                  >
                    <a
                      href={`tel:${dealer.phone.replace(/\D/g, '')}`}
                      className="flex-1 px-4 py-3 bg-navy text-white text-sm font-semibold rounded-xl hover:bg-navy/90 transition-colors text-center"
                    >
                      Call Store
                    </a>
                    <a
                      href={`https://maps.google.com?q=${encodeURIComponent(`${dealer.address}, ${dealer.city}, ${dealer.state} ${dealer.zip}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-3 border-2 border-navy text-navy text-sm font-semibold rounded-xl hover:bg-navy/5 transition-colors flex items-center justify-center gap-2"
                    >
                      <Navigation className="h-4 w-4" />
                      Directions
                    </a>
                  </motion.div>
                )}
              </motion.button>
            ))}

            {filteredDealers.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <MapPin className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
                <p className="text-lg text-muted-foreground">
                  No dealers found matching your search.
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="mt-4 text-navy font-medium hover:text-gold transition-colors"
                >
                  Clear search
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
