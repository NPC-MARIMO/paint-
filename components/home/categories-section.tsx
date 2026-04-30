"use client"

import Link from "next/link"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { ArrowRight, Home, Sun, Droplets, Layers } from "lucide-react"
import { categories } from "@/data/products"

const categoryIcons = {
  interior: Home,
  exterior: Sun,
  waterproofing: Droplets,
  primers: Layers,
}

const categoryGradients = {
  interior: "from-gold/30 via-gold/10 to-transparent",
  exterior: "from-teal/30 via-teal/10 to-transparent",
  waterproofing: "from-sky-400/30 via-sky-400/10 to-transparent",
  primers: "from-slate-400/30 via-slate-400/10 to-transparent",
}

const categoryAccents = {
  interior: "bg-gold text-navy",
  exterior: "bg-teal text-white",
  waterproofing: "bg-sky-500 text-white",
  primers: "bg-slate-600 text-white",
}

function CategoryCard({ category, index }: { category: typeof categories[0], index: number }) {
  const Icon = categoryIcons[category.id as keyof typeof categoryIcons]
  const gradient = categoryGradients[category.id as keyof typeof categoryGradients]
  const accent = categoryAccents[category.id as keyof typeof categoryAccents]

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/shop?category=${category.id}`}>
        <motion.div 
          onMouseMove={handleMouseMove}
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
          className="group relative h-full bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-border/50"
        >
          {/* Spotlight effect */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, rgba(212, 168, 83, 0.1), transparent 80%)`
            }}
          />
          
          {/* Background gradient on hover */}
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
          
          <div className="relative">
            {/* Icon with animated background */}
            <motion.div 
              className={`relative w-16 h-16 rounded-2xl ${accent} flex items-center justify-center mb-6 overflow-hidden`}
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <Icon className="h-8 w-8 relative z-10" />
            </motion.div>

            {/* Content */}
            <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-navy transition-colors">
              {category.name}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {category.description}
            </p>

            {/* Arrow indicator */}
            <motion.div 
              className="mt-6 flex items-center text-sm font-semibold text-navy"
              initial={{ opacity: 0.5 }}
              whileHover={{ opacity: 1 }}
            >
              <span className="relative">
                Shop Now
                <motion.span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"
                />
              </span>
              <motion.div
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </motion.div>
          </div>
          
          {/* Corner decoration */}
          <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-navy/5 group-hover:bg-navy/10 transition-colors duration-500" />
        </motion.div>
      </Link>
    </motion.div>
  )
}

export function CategoriesSection() {
  return (
    <section className="py-28 bg-offwhite relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
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
            transition={{ duration: 0.4 }}
            className="inline-block px-4 py-2 rounded-full bg-gold/10 text-gold text-sm font-semibold uppercase tracking-wider mb-4"
          >
            Our Products
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy text-balance leading-tight">
            Paint for Every
            <span className="block text-gradient">Project</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From interior elegance to exterior durability, discover the perfect paint 
            for your next transformation.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
