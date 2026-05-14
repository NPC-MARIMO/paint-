"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ShoppingCart, ChevronDown, Sparkles, UserCircle, LogOut, Package } from "lucide-react"
import { useCartStore } from "@/lib/cart-store"
import { useUserStore } from "@/lib/user-store"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { 
    name: "Shop", 
    href: "/shop",
    children: [
      { name: "All Products", href: "/shop" },
      { name: "Interior Paints", href: "/shop?category=interior" },
      { name: "Exterior Paints", href: "/shop?category=exterior" },
      { name: "Waterproofing", href: "/shop?category=waterproofing" },
      { name: "Primers", href: "/shop?category=primers" },
    ]
  },
  { name: "Colors", href: "/colors" },
  { name: "Inspiration", href: "/inspiration" },
  { name: "Guides", href: "/guides" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const totalItems = useCartStore((state) => state.getTotalItems())
  const { user, logout } = useUserStore()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "bg-navy/95 backdrop-blur-xl shadow-xl shadow-navy/20" 
          : "bg-navy/80 backdrop-blur-md"
      )}
    >
      {/* Animated gradient border */}
      <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-transparent via-gold to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <motion.div 
              className="relative h-11 w-11 rounded-xl bg-gradient-to-br from-gold to-gold/80 flex items-center justify-center overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              />
              <span className="text-navy font-bold text-xl relative z-10">S</span>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white tracking-tight">
                Ashirwaad Coating
              </span>
              <span className="text-[10px] text-gold/80 uppercase tracking-widest font-medium -mt-1">
                Premium Paints
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 flex items-center gap-1 group",
                    pathname === item.href || pathname.startsWith(item.href + "/")
                      ? "text-gold"
                      : "text-white/80 hover:text-white"
                  )}
                >
                  {item.name}
                  {item.children && (
                    <ChevronDown className={cn(
                      "h-4 w-4 transition-transform duration-300",
                      activeDropdown === item.name && "rotate-180"
                    )} />
                  )}
                  {/* Hover glow */}
                  <span className="absolute inset-0 rounded-lg bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
                  {/* Active indicator */}
                  {(pathname === item.href || pathname.startsWith(item.href + "/")) && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-2 right-2 h-0.5 bg-gold rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute top-full left-0 mt-2 w-56 bg-navy/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/10 py-2 overflow-hidden"
                    >
                      {/* Gradient accent */}
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
                      {item.children.map((child, childIndex) => (
                        <motion.div
                          key={child.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: childIndex * 0.05 }}
                        >
                          <Link
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-white/70 hover:text-gold hover:bg-white/5 transition-all duration-200"
                          >
                            {child.name}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Auth */}
            {isClient && (
              <div className="hidden sm:flex items-center mr-2">
                {user ? (
                  <div className="relative group/auth">
                    <button className="flex items-center gap-2 text-white hover:text-gold transition-colors">
                      <UserCircle className="h-5 w-5" />
                      <span className="text-sm font-medium max-w-[100px] truncate">{user.name.split(' ')[0]}</span>
                    </button>
                    <div className="absolute top-full right-0 mt-2 w-48 bg-navy/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/10 overflow-hidden opacity-0 invisible group-hover/auth:opacity-100 group-hover/auth:visible transition-all duration-200">
                      <div className="px-4 py-3 border-b border-white/10">
                        <p className="text-sm text-white font-medium truncate">{user.name}</p>
                        <p className="text-xs text-white/50 truncate">{user.email}</p>
                      </div>
                      <Link
                        href="/orders"
                        className="w-full flex items-center gap-2 px-4 py-3 text-sm text-white hover:bg-white/5 hover:text-gold transition-colors text-left"
                      >
                        <Package className="h-4 w-4" />
                        My Orders
                      </Link>
                      <button
                        onClick={logout}
                        className="w-full flex items-center gap-2 px-4 py-3 text-sm text-red-400 hover:bg-white/5 transition-colors text-left"
                      >
                        <LogOut className="h-4 w-4" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                ) : (
                  <Link
                    href="/login"
                    className="flex items-center gap-2 text-white/80 hover:text-gold transition-colors text-sm font-medium"
                  >
                    <UserCircle className="h-5 w-5" />
                    Sign In
                  </Link>
                )}
              </div>
            )}

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="hidden sm:block"
            >
              <Link
                href="/colors"
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-navy text-sm font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-gold/25"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                />
                <Sparkles className="h-4 w-4 relative z-10" />
                <span className="relative z-10">Explore Colors</span>
              </Link>
            </motion.div>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
            >
              <ShoppingCart className="h-5 w-5 text-white group-hover:text-gold transition-colors" />
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gold text-xs font-bold text-navy flex items-center justify-center shadow-lg"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="lg:hidden p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 px-2 space-y-1 border-t border-white/10">
                {/* Mobile Auth */}
                {isClient && (
                  <div className="px-4 py-3 mb-2 border-b border-white/10">
                    {user ? (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-white">
                          <UserCircle className="h-8 w-8 text-gold" />
                          <div>
                            <p className="text-sm font-medium">{user.name}</p>
                            <p className="text-xs text-white/50">{user.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Link href="/orders" className="p-2 text-white hover:text-gold hover:bg-white/5 rounded-lg transition-colors">
                            <Package className="h-5 w-5" />
                          </Link>
                          <button onClick={logout} className="p-2 text-red-400 hover:bg-white/5 rounded-lg transition-colors">
                            <LogOut className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <Link href="/login" className="flex items-center justify-center gap-2 w-full py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-xl transition-colors font-medium">
                        <UserCircle className="h-5 w-5" />
                        Sign In / Register
                      </Link>
                    )}
                  </div>
                )}

                {navigation.map((item, index) => (
                  <motion.div 
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "block px-4 py-3 text-base font-medium rounded-xl transition-all duration-200",
                        pathname === item.href
                          ? "text-gold bg-gold/10"
                          : "text-white/80 hover:text-gold hover:bg-white/5"
                      )}
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className="pl-4 space-y-1 mt-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-white/50 hover:text-gold transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
