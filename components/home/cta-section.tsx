"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Phone, MapPin, Palette, Zap, HeadphonesIcon, Truck } from "lucide-react"

const features = [
  { value: "Free", label: "Color Consultation", icon: Palette, color: "bg-gold text-navy" },
  { value: "Same Day", label: "Mixing Available", icon: Zap, color: "bg-teal text-white" },
  { value: "Expert", label: "Advice & Support", icon: HeadphonesIcon, color: "bg-white/20 text-white" },
  { value: "Fast", label: "Delivery Options", icon: Truck, color: "bg-white/10 text-white" },
]

export function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} className="py-28 bg-navy relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div 
          style={{ y }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-3xl"
        />
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal/10 rounded-full blur-3xl"
        />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-gold text-sm font-medium mb-6"
            >
              Get Started Today
            </motion.span>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Ready to Transform
              <span className="block text-gradient mt-2">Your Space?</span>
            </h2>
            <p className="mt-8 text-xl text-white/60 max-w-lg leading-relaxed">
              Contact our color experts for personalized advice. 
              We&apos;re here to help you find the perfect colors for your project.
            </p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mt-10"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/10 hover:border-white/30 transition-all duration-300"
              >
                <Phone className="h-5 w-5" />
                <span>Contact Us</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats/Feature boxes */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-5"
          >
            {features.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <motion.div 
                  className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-4`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <item.icon className="h-6 w-6" />
                </motion.div>
                <p className="text-2xl font-bold text-white">{item.value}</p>
                <p className="text-white/50 text-sm mt-1">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
