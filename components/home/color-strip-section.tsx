"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { paintColors } from "@/data/colors"

export function ColorStripSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const featuredColors = paintColors.slice(0, 16)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const x1 = useTransform(scrollYProgress, [0, 1], [0, -400])
  const x2 = useTransform(scrollYProgress, [0, 1], [-400, 0])

  return (
    <section ref={containerRef} className="py-28 bg-navy overflow-hidden relative">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-gold text-sm font-semibold mb-4"
          >
            <Sparkles className="h-4 w-4" />
            500+ Colors Available
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Explore Our
            <span className="block text-gradient">Color Palette</span>
          </h2>
          <p className="mt-6 text-lg text-white/50 max-w-xl mx-auto">
            Carefully curated colors to bring your vision to life with precision and elegance
          </p>
        </motion.div>
      </div>

      {/* First row - scrolls left */}
      <motion.div 
        style={{ x: x1 }}
        className="flex gap-4 py-4 mb-4"
      >
        {[...featuredColors, ...featuredColors].map((color, index) => (
          <motion.div
            key={`row1-${color.id}-${index}`}
            whileHover={{ scale: 1.1, y: -10, zIndex: 10 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 group cursor-pointer"
          >
            <div className="relative">
              <div
                className="w-20 h-28 sm:w-24 sm:h-32 rounded-2xl shadow-lg transition-shadow duration-300 group-hover:shadow-2xl overflow-hidden"
                style={{ backgroundColor: color.hex }}
              >
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                />
              </div>
              {/* Tooltip */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                <span className="text-xs text-white/80 font-medium bg-charcoal/80 backdrop-blur-sm px-2 py-1 rounded">
                  {color.name}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Second row - scrolls right */}
      <motion.div 
        style={{ x: x2 }}
        className="flex gap-4 py-4"
      >
        {[...featuredColors.slice().reverse(), ...featuredColors.slice().reverse()].map((color, index) => (
          <motion.div
            key={`row2-${color.id}-${index}`}
            whileHover={{ scale: 1.1, y: -10, zIndex: 10 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 group cursor-pointer"
          >
            <div className="relative">
              <div
                className="w-20 h-28 sm:w-24 sm:h-32 rounded-2xl shadow-lg transition-shadow duration-300 group-hover:shadow-2xl overflow-hidden"
                style={{ backgroundColor: color.hex }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                <span className="text-xs text-white/80 font-medium bg-charcoal/80 backdrop-blur-sm px-2 py-1 rounded">
                  {color.name}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-16"
        >
          <Link
            href="/colors"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gold text-navy font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-gold/30"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
            />
            <span className="relative z-10">Explore All Colors</span>
            <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
