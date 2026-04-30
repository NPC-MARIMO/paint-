"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Star, Quote, MessageSquare } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Interior Designer",
    content: "The color accuracy and coverage quality of Spectrum paints are unmatched. My clients are always thrilled with the results. The Premium Interior Matte is my go-to for every project.",
    rating: 5,
    initials: "SM",
    gradient: "from-gold/20 to-gold/5"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Homeowner",
    content: "I painted my entire exterior with Ultra Exterior Shield two years ago, and it still looks brand new. The durability is incredible, and the color hasn't faded at all despite harsh weather.",
    rating: 5,
    initials: "MC",
    gradient: "from-teal/20 to-teal/5"
  },
  {
    id: 3,
    name: "Jennifer Adams",
    role: "DIY Enthusiast",
    content: "As a first-time painter, I was nervous about my project. The Spectrum team at my local dealer helped me choose the perfect colors and products. The results exceeded my expectations!",
    rating: 5,
    initials: "JA",
    gradient: "from-navy/10 to-navy/5"
  }
]

export function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [-30, 30])

  return (
    <section ref={containerRef} className="py-28 bg-offwhite relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-20 right-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-20 left-20 w-64 h-64 bg-teal/10 rounded-full blur-3xl"
      />
      
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy/5 text-navy text-sm font-semibold mb-4"
          >
            <MessageSquare className="h-4 w-4" />
            Testimonials
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight">
            Loved by
            <span className="block text-gradient">Customers</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            See what professionals and homeowners have to say about our premium paints 
            and exceptional service.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div 
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className={`relative h-full bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-border/50 overflow-hidden group`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Quote icon */}
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="relative w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6"
                >
                  <Quote className="h-7 w-7 text-gold" />
                </motion.div>
                
                {/* Rating */}
                <div className="flex gap-1 mb-5 relative">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <Star className="h-5 w-5 fill-gold text-gold" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-charcoal/80 leading-relaxed mb-8 relative text-base">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 relative">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-navy to-navy/80 flex items-center justify-center shadow-lg"
                  >
                    <span className="text-white font-bold text-lg">
                      {testimonial.initials}
                    </span>
                  </motion.div>
                  <div>
                    <p className="font-bold text-charcoal text-lg">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                
                {/* Decorative corner */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-navy/5 group-hover:bg-navy/10 transition-colors duration-500" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
