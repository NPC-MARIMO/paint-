"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { Logo } from "@/components/logo"
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { ArrowRight, Play, Sparkles } from "lucide-react"

const FloatingOrb = ({ 
  delay = 0, 
  duration = 4, 
  size = 100, 
  color = "#D4A853",
  left = "10%",
  top = "10%"
}: { 
  delay?: number
  duration?: number
  size?: number
  color?: string
  left?: string
  top?: string
}) => (
  <motion.div
    className="absolute rounded-full blur-3xl pointer-events-none"
    style={{ 
      width: size, 
      height: size, 
      background: `radial-gradient(circle, ${color}40 0%, transparent 70%)`,
      left,
      top,
    }}
    animate={{
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
)

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  // Mouse parallax
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      mouseX.set((clientX - innerWidth / 2) / 50)
      mouseY.set((clientY - innerHeight / 2) / 50)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy"
    >
      {/* Animated gradient background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-[#0D2340] to-charcoal" />
        
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }} />
        </div>
        
        {/* Floating orbs */}
        {mounted && (
          <>
            <FloatingOrb delay={0} duration={5} size={300} color="#D4A853" left="5%" top="10%" />
            <FloatingOrb delay={1} duration={6} size={250} color="#3AAFA9" left="70%" top="5%" />
            <FloatingOrb delay={2} duration={7} size={200} color="#FFFFFF" left="80%" top="60%" />
            <FloatingOrb delay={0.5} duration={8} size={180} color="#D4A853" left="20%" top="70%" />
          </>
        )}

        {/* Geometric shapes */}
        <motion.div
          style={{ x: springX, y: springY }}
          className="absolute top-1/4 right-1/4 w-32 h-32 border border-gold/20 rounded-3xl rotate-45"
        />
        <motion.div
          style={{ x: springX, y: springY }}
          className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-teal/20 rounded-full"
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-gold text-sm font-medium mb-8"
            >
              <Sparkles className="h-4 w-4" />
              Premium Quality Since 1985
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="block"
              >
                Transform Your
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="block"
              >
                Space with{" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="block text-gradient"
              >
                Perfect Colors
              </motion.span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 text-lg sm:text-xl text-white/60 max-w-xl leading-relaxed"
            >
              Discover our premium collection of interior and exterior paints. 
              Expertly crafted for lasting beauty and unmatched protection.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 mt-10"
            >
              <Link
                href="/colors"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-navy font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-gold/30"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                />
                <span className="relative z-10">Explore Colors</span>
                <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/shop"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/10 hover:border-white/30 transition-all duration-300"
              >
                Shop Now
                <ArrowRight className="h-5 w-5 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10"
            >
              {[
                { value: "500+", label: "Colors" },
                { value: "40+", label: "Years" },
                { value: "1M+", label: "Customers" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 1.1 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  className="text-center sm:text-left"
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/40 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square">
              {/* Glow effect behind */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-teal/10 to-transparent rounded-full blur-3xl" />
              
              {/* Floating color samples */}
              <motion.div
                animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 left-8 w-20 h-24 rounded-xl bg-gradient-to-br from-[#F5E6D3] to-[#E8D4B8] shadow-2xl"
              >
                <div className="absolute bottom-2 left-2 right-2 text-[8px] font-medium text-charcoal/60">
                  Warm Beige
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-20 right-4 w-16 h-20 rounded-xl bg-gradient-to-br from-[#3AAFA9] to-[#2E8B87] shadow-2xl"
              >
                <div className="absolute bottom-2 left-2 right-2 text-[8px] font-medium text-white/80">
                  Ocean Teal
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [-5, 15, -5], rotate: [0, 3, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-32 left-16 w-18 h-22 rounded-xl bg-gradient-to-br from-[#0B1F3A] to-[#1C3654] shadow-2xl"
              >
                <div className="absolute bottom-2 left-2 right-2 text-[8px] font-medium text-white/60">
                  Navy
                </div>
              </motion.div>
              
              {/* Central paint can with glass effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: [0, 2, 0, -2, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  {/* Can shadow */}
                  <div className="absolute inset-4 bg-navy/30 rounded-3xl blur-2xl translate-y-8" />
                  
                  {/* Can body */}
                  <div className="relative w-56 h-72 bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
                    {/* Can lid */}
                    <div className="absolute top-0 inset-x-0 h-6 bg-charcoal/70 rounded-t-3xl" />
                    <div className="absolute top-6 inset-x-4 h-3 bg-charcoal/50 rounded-b-lg" />
                    
                    {/* Label area */}
                    <div className="absolute top-16 inset-x-6 bottom-8 bg-white/90 rounded-2xl flex flex-col items-center justify-center p-4">
                      {/* Logo */}
                      <div className="w-12 h-12 rounded-xl overflow-hidden mb-3">
                        <Logo className="h-full w-full object-cover" />
                      </div>
                      <span className="text-xs font-bold text-navy uppercase tracking-[0.2em]">Ashirwaad Coating</span>
                      <span className="text-[10px] text-charcoal/50 mt-1">Premium Paint</span>
                      
                      {/* Color indicator */}
                      <div className="mt-4 w-full h-16 rounded-xl bg-gradient-to-br from-gold/80 to-gold shadow-inner" />
                      <span className="text-[10px] text-charcoal/70 mt-2">Golden Hour</span>
                    </div>
                    
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
                    />
                  </div>
                  
                  {/* Play button */}
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute -bottom-4 -right-4 w-16 h-16 bg-gold rounded-2xl flex items-center justify-center shadow-xl shadow-gold/30"
                  >
                    <Play className="h-6 w-6 text-navy fill-navy ml-1" />
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
        >
          <motion.div 
            animate={{ opacity: [0.5, 1, 0.5], y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-gold rounded-full" 
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
