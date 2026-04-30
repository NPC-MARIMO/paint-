"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, X, Palette, Download } from "lucide-react"
import { paintColors, colorTones, colorFamilies, type PaintColor } from "@/data/colors"
import { cn } from "@/lib/utils"

export default function ColorsPage() {
  const [selectedTone, setSelectedTone] = useState("all")
  const [selectedFamily, setSelectedFamily] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedColor, setSelectedColor] = useState<PaintColor | null>(null)

  const filteredColors = useMemo(() => {
    let result = [...paintColors]

    // Tone filter
    if (selectedTone !== "all") {
      result = result.filter(c => c.tone === selectedTone)
    }

    // Family filter
    if (selectedFamily !== "All") {
      result = result.filter(c => c.family === selectedFamily)
    }

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(c => 
        c.name.toLowerCase().includes(query) ||
        c.family.toLowerCase().includes(query)
      )
    }

    return result
  }, [selectedTone, selectedFamily, searchQuery])

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
            Color Explorer
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-navy text-balance">
            Find Your Perfect Color
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated palette of over 500 premium paint colors. Click any color to preview it in a room setting.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card-warm rounded-2xl p-6 shadow-sm mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search colors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-stone bg-sand focus:bg-warm-white focus:border-navy focus:ring-1 focus:ring-navy transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    <X className="h-5 w-5 text-muted-foreground hover:text-charcoal" />
                  </button>
                )}
              </div>
            </div>

            {/* Tone Filter */}
            <div className="flex flex-wrap gap-2">
              {colorTones.map((tone) => (
                <button
                  key={tone.id}
                  onClick={() => setSelectedTone(tone.id)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                    selectedTone === tone.id
                      ? "bg-navy text-white"
                      : "bg-sand text-charcoal hover:bg-navy/10"
                  )}
                >
                  {tone.name}
                </button>
              ))}
            </div>
          </div>

          {/* Color Family Filter */}
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/50">
            {colorFamilies.map((family) => (
              <button
                key={family}
                onClick={() => setSelectedFamily(family)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-xs font-medium transition-all",
                  selectedFamily === family
                    ? "bg-gold text-charcoal"
                    : "bg-sand text-charcoal/70 hover:bg-gold/20"
                )}
              >
                {family}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Results count */}
        <p className="text-sm text-muted-foreground mb-6">
          Showing <span className="font-medium text-charcoal">{filteredColors.length}</span> colors
        </p>

        {/* Color Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {filteredColors.map((color, index) => (
            <motion.button
              key={color.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              onClick={() => setSelectedColor(color)}
              className="group flex flex-col items-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "w-full aspect-square rounded-2xl shadow-md transition-shadow group-hover:shadow-xl cursor-pointer",
                  selectedColor?.id === color.id && "ring-4 ring-navy ring-offset-2"
                )}
                style={{ backgroundColor: color.hex }}
              />
              <p className="mt-2 text-xs text-charcoal/70 group-hover:text-navy font-medium text-center line-clamp-1 transition-colors">
                {color.name}
              </p>
            </motion.button>
          ))}
        </div>

        {filteredColors.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Palette className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
            <p className="text-lg text-muted-foreground">
              No colors match your filters.
            </p>
            <button
              onClick={() => {
                setSelectedTone("all")
                setSelectedFamily("All")
                setSearchQuery("")
              }}
              className="mt-4 text-navy font-medium hover:text-gold transition-colors"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </div>

      {/* Color Preview Modal */}
      <AnimatePresence>
        {selectedColor && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedColor(null)}
              className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm z-50"
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-4xl md:h-auto bg-warm-white rounded-3xl overflow-hidden z-50 shadow-2xl"
            >
              <div className="flex flex-col md:flex-row h-full md:h-auto">
                {/* Room Preview */}
                <div className="flex-1 aspect-video md:aspect-auto md:h-96 relative">
                  {/* Room visualization with selected color */}
                  <div 
                    className="absolute inset-0"
                    style={{ backgroundColor: selectedColor.hex }}
                  />
                  <div className="absolute inset-0 flex items-end justify-center pb-8">
                    {/* Simple room mockup */}
                    <div className="w-full max-w-md px-8">
                      {/* Floor */}
                      <div className="h-8 bg-gradient-to-t from-charcoal/20 to-transparent" />
                      {/* Furniture silhouettes */}
                      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-end gap-4">
                        <div className="w-32 h-16 bg-white/30 rounded-lg backdrop-blur-sm" />
                        <div className="w-12 h-24 bg-white/20 rounded-lg backdrop-blur-sm" />
                        <div className="w-20 h-20 bg-white/25 rounded-full backdrop-blur-sm" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedColor(null)}
                    className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Color Details */}
                <div className="p-8 md:w-80 flex flex-col">
                  <div 
                    className="w-20 h-20 rounded-2xl shadow-lg mb-6"
                    style={{ backgroundColor: selectedColor.hex }}
                  />
                  
                  <h2 className="text-2xl font-bold text-navy mb-2">
                    {selectedColor.name}
                  </h2>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Hex Code</span>
                      <span className="font-mono font-medium text-charcoal">{selectedColor.hex}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tone</span>
                      <span className="font-medium text-charcoal capitalize">{selectedColor.tone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Family</span>
                      <span className="font-medium text-charcoal">{selectedColor.family}</span>
                    </div>
                  </div>

                  <div className="mt-auto space-y-3">
                    <button className="w-full px-6 py-3 bg-navy text-white font-semibold rounded-xl hover:bg-navy/90 transition-colors">
                      Shop This Color
                    </button>
                    <button className="w-full px-6 py-3 border-2 border-stone text-charcoal font-semibold rounded-xl hover:bg-sand transition-colors flex items-center justify-center gap-2">
                      <Download className="h-4 w-4" />
                      Save Color
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
