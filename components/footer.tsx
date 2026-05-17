"use client"

import Link from "next/link"
import { Logo } from "@/components/logo"
import { motion } from "framer-motion"
import { Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin, ArrowRight, Sparkles } from "lucide-react"

const footerLinks = {
  products: [
    { name: "Interior Paints", href: "/shop?category=interior" },
    { name: "Exterior Paints", href: "/shop?category=exterior" },
    { name: "Waterproofing", href: "/shop?category=waterproofing" },
    { name: "Primers & Sealers", href: "/shop?category=primers" },
  ],
  resources: [
    { name: "Color Explorer", href: "/colors" },
    { name: "Inspiration Gallery", href: "/inspiration" },
    { name: "Painting Guides", href: "/guides" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
]

export function Footer() {
  return (
    <footer className="bg-charcoal text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />
      
      {/* Newsletter Section */}
      <div className="border-b border-white/5 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <div className="text-center lg:text-left">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 text-gold text-xs font-semibold mb-4"
              >
                <Sparkles className="h-3 w-3" />
                Newsletter
              </motion.span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white text-balance">
                Stay inspired with color trends
              </h3>
              <p className="text-white/50 mt-2 max-w-md">
                Join our newsletter for exclusive offers, design tips, and painting inspiration.
              </p>
            </div>
            <motion.form 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex w-full lg:w-auto gap-3"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-80 px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="px-6 py-4 bg-gold text-navy font-semibold rounded-xl hover:bg-gold/90 transition-all duration-300 flex items-center gap-2"
              >
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="h-12 w-12 rounded-xl bg-gradient-to-br from-gold to-gold/80 flex items-center justify-center overflow-hidden"
              >
                <Logo className="h-full w-full object-cover" containerClassName="h-full w-full" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">Ashirwaad Coating</span>
                <span className="text-[10px] text-white/40 uppercase tracking-widest">Premium Paints</span>
              </div>
            </Link>
            <p className="mt-6 text-white/50 max-w-xs leading-relaxed">
              Premium quality paints and coatings for every project. Transform your space with colors that inspire.
            </p>
            
            {/* Contact Info */}
            <div className="mt-8 space-y-4">
              <motion.a 
                href="tel:9835256295" 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-white/50 hover:text-gold transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <span>9835256295</span>
              </motion.a>
              <motion.a 
                href="mailto:ashirwad.coating@rediffmail.com" 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-white/50 hover:text-gold transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <span>ashirwad.coating@rediffmail.com</span>
              </motion.a>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 text-white/50 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <span>Plot 1461, sector 38, HSIIDC, Phase 1, IndL. Estate Rai<br />Sonipat Haryana 131029</span>
              </motion.div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-white mb-6">Products</h4>
            <ul className="space-y-4">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-white/50 hover:text-gold transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-white mb-6">Resources</h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-white/50 hover:text-gold transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-white/50 hover:text-gold transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-white mb-6">Legal</h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-white/50 hover:text-gold transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-sm">
              © {new Date().getFullYear()} Ashirwaad Coating Paints. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl bg-white/5 text-white/50 hover:text-gold hover:bg-gold/10 transition-all duration-300"
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
