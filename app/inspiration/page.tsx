"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowRight } from "lucide-react"
import Link from "next/link"
import { inspirationItems, roomTypes, designStyles, type InspirationItem } from "@/data/inspiration"
import { cn } from "@/lib/utils"

const colorMap: Record<string, string> = {
  "Soft Linen": "#F0E6DC",
  "Warm Gray": "#9E9E9E",
  "Classic White": "#FAFAFA",
  "Ocean Mist": "#87CEEB",
  "Sandy Beige": "#C2B280",
  "Midnight Navy": "#2C3E50",
  "Brass Accents": "#C8A96A",
  "Seafoam": "#93E9BE",
  "Warm Wood": "#B5651D",
  "Forest Pine": "#2D5A45",
  "Warm Honey": "#E5B769",
  "Cream": "#F5E6D3",
  "Powder Blue": "#B0D4E8",
  "Coral Reef": "#E07B6C",
  "Charcoal Depth": "#36454F",
  "Golden Hour": "#D4A574",
  "Terracotta Dream": "#C67D56",
  "Sage Garden": "#9CAF88",
  "Creamy Vanilla": "#F5E6D3",
  "Stone Path": "#8B8680",
  "Rustic Amber": "#B5651D",
  "Swiss Coffee": "#F2E8DC",
}

const gradients = [
  "linear-gradient(135deg, #E8D4B8 0%, #D4CFC4 50%, #9E9E9E 100%)",
  "linear-gradient(135deg, #87CEEB 0%, #B0D4E8 100%)",
  "linear-gradient(135deg, #2C3E50 0%, #0B1F3A 100%)",
  "linear-gradient(135deg, #93E9BE 0%, #3AAFA9 100%)",
  "linear-gradient(135deg, #2D5A45 0%, #1a3c2b 100%)",
  "linear-gradient(135deg, #B0D4E8 0%, #E07B6C 100%)",
  "linear-gradient(135deg, #36454F 0%, #C8A96A 100%)",
  "linear-gradient(135deg, #C67D56 0%, #9CAF88 100%)",
  "linear-gradient(135deg, #FAFAFA 0%, #F0E6DC 100%)",
  "linear-gradient(135deg, #36454F 0%, #8B8680 100%)",
  "linear-gradient(135deg, #F2E8DC 0%, #9CAF88 100%)",
  "linear-gradient(135deg, #2C3E50 0%, #C8A96A 100%)",
]

export default function InspirationPage() {
  const [selectedRoom, setSelectedRoom] = useState("All Rooms")
  const [selectedStyle, setSelectedStyle] = useState("All Styles")
  const [selectedItem, setSelectedItem] = useState<InspirationItem | null>(null)

  const filteredItems = useMemo(() => {
    let result = [...inspirationItems]

    if (selectedRoom !== "All Rooms") {
      result = result.filter(item => item.room === selectedRoom)
    }

    if (selectedStyle !== "All Styles") {
      result = result.filter(item => item.style === selectedStyle)
    }

    return result
  }, [selectedRoom, selectedStyle])

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
            Inspiration Gallery
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-navy text-balance">
            Discover Beautiful Spaces
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our curated collection of stunning room designs and find inspiration for your next project.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          {/* Room Filter */}
          <div className="flex-1">
            <label className="text-sm font-medium text-charcoal mb-2 block">Room Type</label>
            <div className="flex flex-wrap gap-2">
              {roomTypes.map((room) => (
                <button
                  key={room}
                  onClick={() => setSelectedRoom(room)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                    selectedRoom === room
                      ? "bg-navy text-white"
                      : "card-warm text-charcoal hover:bg-navy/10 shadow-sm"
                  )}
                >
                  {room}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Style Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-10"
        >
          <label className="text-sm font-medium text-charcoal mb-2 block">Design Style</label>
          <div className="flex flex-wrap gap-2">
            {designStyles.map((style) => (
              <button
                key={style}
                onClick={() => setSelectedStyle(style)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-xs font-medium transition-all",
                  selectedStyle === style
                    ? "bg-gold text-charcoal"
                    : "card-warm text-charcoal/70 hover:bg-gold/20 shadow-sm"
                )}
              >
                {style}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="break-inside-avoid"
            >
              <button
                onClick={() => setSelectedItem(item)}
                className="group relative w-full rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div 
                  className="aspect-[4/5]"
                  style={{ background: gradients[index % gradients.length] }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white/80 text-sm font-medium mb-1">
                    {item.room} • {item.style}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  
                  {/* Color dots */}
                  <div className="flex gap-2">
                    {item.colors.map((color, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full border-2 border-white/50"
                        style={{ backgroundColor: colorMap[color] || "#E8E8E8" }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>

                {/* Always visible badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full">
                  <span className="text-xs font-medium text-charcoal">{item.style}</span>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-lg text-muted-foreground">
              No inspiration items match your filters.
            </p>
            <button
              onClick={() => {
                setSelectedRoom("All Rooms")
                setSelectedStyle("All Styles")
              }}
              className="mt-4 text-navy font-medium hover:text-gold transition-colors"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm z-50"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-5xl md:h-auto bg-warm-white rounded-3xl overflow-hidden z-50 shadow-2xl"
            >
              <div className="flex flex-col lg:flex-row h-full lg:h-auto">
                {/* Image */}
                <div 
                  className="flex-1 aspect-video lg:aspect-[4/3] lg:h-[500px]"
                  style={{ background: gradients[inspirationItems.findIndex(i => i.id === selectedItem.id) % gradients.length] }}
                />

                {/* Details */}
                <div className="p-8 lg:w-96 flex flex-col">
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors lg:hidden"
                  >
                    <X className="h-5 w-5" />
                  </button>
                  
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 bg-navy/10 text-navy text-xs font-medium rounded-full">
                      {selectedItem.room}
                    </span>
                    <span className="px-3 py-1 bg-gold/20 text-gold text-xs font-medium rounded-full">
                      {selectedItem.style}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-navy mb-4">
                    {selectedItem.title}
                  </h2>

                  <p className="text-muted-foreground mb-6">
                    A beautifully designed space featuring carefully selected colors to create 
                    the perfect {selectedItem.style.toLowerCase()} atmosphere for any {selectedItem.room.toLowerCase()}.
                  </p>

                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-charcoal mb-3">Featured Colors</h3>
                    <div className="space-y-3">
                      {selectedItem.colors.map((color, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div
                            className="w-10 h-10 rounded-lg shadow-sm"
                            style={{ backgroundColor: colorMap[color] || "#E8E8E8" }}
                          />
                          <span className="font-medium text-charcoal">{color}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto space-y-3">
                    <Link
                      href="/colors"
                      className="w-full px-6 py-3 bg-navy text-white font-semibold rounded-xl hover:bg-navy/90 transition-colors flex items-center justify-center gap-2"
                    >
                      Explore These Colors
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <button
                      onClick={() => setSelectedItem(null)}
                      className="w-full px-6 py-3 border-2 border-stone text-charcoal font-semibold rounded-xl hover:bg-sand transition-colors hidden lg:block"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
