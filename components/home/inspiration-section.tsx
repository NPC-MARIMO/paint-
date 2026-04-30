"use client"

import Link from "next/link"
import { motion, useMotionValue, useMotionTemplate } from "framer-motion"
import { ArrowRight, Eye, Lightbulb } from "lucide-react"
import { inspirationItems } from "@/data/inspiration"

const gradients = [
  "linear-gradient(135deg, #E8D4B8 0%, #D4CFC4 50%, #9E9E9E 100%)",
  "linear-gradient(135deg, #87CEEB 0%, #B0D4E8 100%)",
  "linear-gradient(135deg, #2C3E50 0%, #0B1F3A 100%)",
  "linear-gradient(135deg, #93E9BE 0%, #3AAFA9 100%)",
]

const colorHexMap: Record<string, string> = {
  "Soft Linen": "#F0E6DC",
  "Warm Gray": "#9E9E9E",
  "Classic White": "#FAFAFA",
  "Ocean Mist": "#87CEEB",
  "Sandy Beige": "#C2B280",
  "Midnight Navy": "#2C3E50",
  "Brass Accents": "#C8A96A",
  "Seafoam": "#93E9BE",
  "Warm Wood": "#B5651D",
}

function InspirationCard({ item, index }: { item: typeof inspirationItems[0], index: number }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  const isLarge = index === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={isLarge ? "md:col-span-2 md:row-span-2" : ""}
    >
      <Link href="/inspiration">
        <motion.div 
          onMouseMove={handleMouseMove}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          className={`group relative h-full ${isLarge ? 'min-h-[480px]' : 'min-h-[280px]'} rounded-3xl overflow-hidden cursor-pointer`}
        >
          {/* Spotlight effect */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
            style={{
              background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.15), transparent 80%)`
            }}
          />
          
          {/* Background gradient */}
          <div 
            className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
            style={{ background: gradients[index] || gradients[0] }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent opacity-70 group-hover:opacity-90 transition-all duration-500" />

          {/* Decorative elements */}
          <motion.div
            className="absolute top-4 right-4 w-20 h-20 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          {/* Content */}
          <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end z-10">
            {/* Room tag */}
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-xs font-medium w-fit mb-3"
            >
              {item.room}
            </motion.span>
            
            <h3 className={`${isLarge ? 'text-2xl sm:text-3xl' : 'text-xl'} font-bold text-white group-hover:text-gold transition-colors duration-300`}>
              {item.title}
            </h3>
            
            {/* Color swatches */}
            <div className="flex items-center gap-3 mt-4">
              <div className="flex -space-x-2">
                {item.colors.slice(0, 3).map((color, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                    className="w-8 h-8 rounded-full border-2 border-white/50 shadow-lg cursor-pointer"
                    style={{ backgroundColor: colorHexMap[color] || "#E8E8E8" }}
                  />
                ))}
              </div>
              
              {/* View more indicator */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 text-white/70 text-sm ml-2"
              >
                <Eye className="h-4 w-4" />
                View Details
              </motion.div>
            </div>
          </div>
          
          {/* Corner arrow */}
          <motion.div
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <ArrowRight className="h-5 w-5 text-white" />
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  )
}

export function InspirationSection() {
  const featured = inspirationItems.slice(0, 4)

  return (
    <section className="py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
        >
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold text-sm font-semibold mb-4"
            >
              <Lightbulb className="h-4 w-4" />
              Get Inspired
            </motion.span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight">
              Room
              <span className="block text-gradient">Inspiration</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              See how our colors transform real spaces and find ideas for your next project.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/inspiration"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-xl hover:bg-navy/90 transition-all duration-300 hover:shadow-lg hover:shadow-navy/20"
            >
              View Gallery
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Inspiration Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((item, index) => (
            <InspirationCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
