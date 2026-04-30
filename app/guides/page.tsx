"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Clock, ArrowRight, BookOpen } from "lucide-react"
import { guides, guideCategories } from "@/data/guides"
import { cn } from "@/lib/utils"

const gradients = [
  "linear-gradient(135deg, #E8D4B8 0%, #C8A96A 100%)",
  "linear-gradient(135deg, #0B1F3A 0%, #1C1C1C 100%)",
  "linear-gradient(135deg, #87CEEB 0%, #3AAFA9 100%)",
  "linear-gradient(135deg, #9CAF88 0%, #2D5A45 100%)",
  "linear-gradient(135deg, #E07B6C 0%, #C67D56 100%)",
  "linear-gradient(135deg, #B0D4E8 0%, #0B1F3A 100%)",
  "linear-gradient(135deg, #F0E6DC 0%, #E8D4B8 100%)",
  "linear-gradient(135deg, #36454F 0%, #1C1C1C 100%)",
]

export default function GuidesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredGuides = useMemo(() => {
    if (selectedCategory === "All") return guides
    return guides.filter(guide => guide.category === selectedCategory)
  }, [selectedCategory])

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
            Knowledge Base
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-navy text-balance">
            Painting Guides & Tips
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert advice to help you achieve professional results on every project.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {guideCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-5 py-2.5 rounded-xl text-sm font-medium transition-all",
                selectedCategory === category
                  ? "bg-navy text-white shadow-lg shadow-navy/20"
                  : "card-warm text-charcoal hover:bg-navy/10 shadow-sm"
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Guide (first one) */}
        {filteredGuides.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <Link href={`/guides/${filteredGuides[0].slug}`}>
              <div className="group relative card-warm rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="grid lg:grid-cols-2">
                  <div 
                    className="aspect-video lg:aspect-auto lg:h-80"
                    style={{ background: gradients[0] }}
                  />
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-gold/20 text-gold text-xs font-medium rounded-full">
                        {filteredGuides[0].category}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {filteredGuides[0].readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-navy group-hover:text-gold transition-colors mb-4">
                      {filteredGuides[0].title}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {filteredGuides[0].excerpt}
                    </p>
                    <div className="flex items-center text-navy font-medium group-hover:text-gold transition-colors">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Guides Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGuides.slice(1).map((guide, index) => (
            <motion.div
              key={guide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
            >
              <Link href={`/guides/${guide.slug}`}>
                <div className="group h-full card-warm rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                  <div 
                    className="aspect-video"
                    style={{ background: gradients[(index + 1) % gradients.length] }}
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-navy/5 text-navy text-xs font-medium rounded-full">
                        {guide.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {guide.readTime}
                      </span>
                    </div>
                    <h3 className="font-semibold text-charcoal group-hover:text-navy transition-colors mb-2 line-clamp-2">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {guide.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredGuides.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <BookOpen className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
            <p className="text-lg text-muted-foreground">
              No guides found in this category.
            </p>
            <button
              onClick={() => setSelectedCategory("All")}
              className="mt-4 text-navy font-medium hover:text-gold transition-colors"
            >
              View all guides
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
