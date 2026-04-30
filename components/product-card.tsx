"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, useMotionValue, useMotionTemplate, useSpring } from "framer-motion"
import { Star, ShoppingCart, Eye } from "lucide-react"
import type { Product } from "@/data/products"
import { useCartStore } from "@/lib/cart-store"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  product: Product
  index?: number
}

const colorMap: Record<string, string> = {
  "Arctic White": "#F8F8F8",
  "Soft Linen": "#F0E6DC",
  "Warm Beige": "#E8D4B8",
  "Cool Gray": "#9E9E9E",
  "Classic White": "#FAFAFA",
  "Slate Gray": "#708090",
  "Sandstone": "#C2B280",
  "Navy Blue": "#0B1F3A",
  "White": "#FFFFFF",
  "Gray": "#808080",
  "Clear": "#E0F4F4",
  "Tinted": "#F0E8D8",
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const addItem = useCartStore((state) => state.addItem)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.colors[0])
  }

  // Dynamic rotation based on mouse position
  const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 })

  const handleMouseMoveRotate = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const x = e.clientX - rect.left - centerX
    const y = e.clientY - rect.top - centerY
    rotateX.set(y / 20)
    rotateY.set(-x / 20)
    handleMouseMove(e)
  }

  const handleMouseLeaveRotate = () => {
    rotateX.set(0)
    rotateY.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        perspective: 1000,
      }}
    >
      <Link href={`/shop/${product.slug}`}>
        <motion.div
          className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500 border border-border/50"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeaveRotate}
          onMouseMove={handleMouseMoveRotate}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Spotlight effect */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
            style={{
              background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(212, 168, 83, 0.15), transparent 80%)`
            }}
          />

          {/* Image */}
          <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-offwhite to-muted/30">
            {/* Animated background pattern */}
            <motion.div 
              className="absolute inset-0 opacity-30"
              animate={{ 
                backgroundPosition: isHovered ? ["0% 0%", "100% 100%"] : "0% 0%"
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, ${colorMap[product.colors[0]] || "#F5F5F5"}40 0%, transparent 50%),
                                  radial-gradient(circle at 80% 50%, ${colorMap[product.colors[1] || product.colors[0]] || "#E8E4DC"}40 0%, transparent 50%)`
              }}
            />
            
            {/* Paint can visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="relative w-28 h-36"
                animate={{ y: isHovered ? -5 : 0, scale: isHovered ? 1.05 : 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Can shadow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-4 bg-charcoal/10 rounded-full blur-md" />
                
                {/* Can body */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-white rounded-xl shadow-lg overflow-hidden border border-border/20">
                  <div 
                    className="absolute inset-x-0 bottom-0 h-24 transition-colors duration-300"
                    style={{ backgroundColor: colorMap[product.colors[0]] || "#F5F5F5" }}
                  />
                  <div className="absolute inset-x-3 top-3 h-5 bg-navy/10 rounded flex items-center justify-center">
                    <span className="text-[7px] font-bold text-navy uppercase tracking-wider">Ashirwaad Coating</span>
                  </div>
                </div>
                
                {/* Can lid */}
                <div className="absolute inset-x-3 -top-1 h-3 bg-charcoal rounded-t shadow-md" />
              </motion.div>
            </div>
            
            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
              {product.isBestSeller && (
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="px-3 py-1.5 bg-gold text-navy text-xs font-bold rounded-full shadow-lg"
                >
                  Best Seller
                </motion.div>
              )}
              
              {product.originalPrice && (
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="px-3 py-1.5 bg-teal text-white text-xs font-bold rounded-full shadow-lg"
                >
                  Sale
                </motion.div>
              )}
            </div>

            {/* Quick actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-4 left-4 right-4 flex gap-2 z-20"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                className="flex-1 px-4 py-3 bg-navy text-white text-sm font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-navy/90 transition-colors shadow-xl"
              >
                <ShoppingCart className="h-4 w-4" />
                Add to Cart
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white/90 backdrop-blur-sm text-navy rounded-xl hover:bg-white transition-colors shadow-xl"
              >
                <Eye className="h-4 w-4" />
              </motion.button>
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-5">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1 font-medium">
                  {product.category}
                </p>
                <h3 className="font-bold text-charcoal group-hover:text-navy transition-colors line-clamp-1 text-lg">
                  {product.name}
                </h3>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1.5 mt-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={cn(
                      "h-4 w-4",
                      i < Math.floor(product.rating) 
                        ? "fill-gold text-gold" 
                        : "fill-muted text-muted"
                    )} 
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-charcoal">{product.rating}</span>
              <span className="text-sm text-muted-foreground">({product.reviews})</span>
            </div>

            {/* Color swatches */}
            <div className="flex items-center gap-1.5 mt-4">
              {product.colors.slice(0, 5).map((color, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-6 h-6 rounded-full border-2 border-white shadow-md cursor-pointer"
                  style={{ backgroundColor: colorMap[color] || "#CCCCCC" }}
                />
              ))}
              {product.colors.length > 5 && (
                <span className="text-xs font-medium text-muted-foreground ml-1">
                  +{product.colors.length - 5} more
                </span>
              )}
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2 mt-4">
              <span className="text-xl font-bold text-navy">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}
