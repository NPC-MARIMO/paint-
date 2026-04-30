"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronDown } from "lucide-react"
import { useState } from "react"
import { categories, finishes } from "@/data/products"
import { cn } from "@/lib/utils"

interface FilterSidebarProps {
  isOpen: boolean
  onClose: () => void
  filters: {
    category: string
    finish: string
    priceRange: [number, number]
  }
  onFilterChange: (key: string, value: string | [number, number]) => void
  isMobile?: boolean
}

const priceRanges = [
  { label: "All Prices", value: "all" },
  { label: "Under $50", value: "0-50" },
  { label: "$50 - $75", value: "50-75" },
  { label: "$75 - $100", value: "75-100" },
  { label: "Over $100", value: "100-999" },
]

export function FilterSidebar({ 
  isOpen, 
  onClose, 
  filters, 
  onFilterChange,
  isMobile = false 
}: FilterSidebarProps) {
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    finish: true,
    price: true,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const content = (
    <div className="space-y-6">
      {/* Category Filter */}
      <FilterSection
        title="Category"
        isExpanded={expandedSections.category}
        onToggle={() => toggleSection("category")}
      >
        <div className="space-y-2">
          <FilterButton
            label="All Categories"
            isActive={filters.category === "all"}
            onClick={() => onFilterChange("category", "all")}
          />
          {categories.map((cat) => (
            <FilterButton
              key={cat.id}
              label={cat.name}
              isActive={filters.category === cat.id}
              onClick={() => onFilterChange("category", cat.id)}
            />
          ))}
        </div>
      </FilterSection>

      {/* Finish Filter */}
      <FilterSection
        title="Finish"
        isExpanded={expandedSections.finish}
        onToggle={() => toggleSection("finish")}
      >
        <div className="space-y-2">
          <FilterButton
            label="All Finishes"
            isActive={filters.finish === "all"}
            onClick={() => onFilterChange("finish", "all")}
          />
          {finishes.map((finish) => (
            <FilterButton
              key={finish.id}
              label={finish.name}
              description={finish.description}
              isActive={filters.finish === finish.id}
              onClick={() => onFilterChange("finish", finish.id)}
            />
          ))}
        </div>
      </FilterSection>

      {/* Price Filter */}
      <FilterSection
        title="Price Range"
        isExpanded={expandedSections.price}
        onToggle={() => toggleSection("price")}
      >
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <FilterButton
              key={range.value}
              label={range.label}
              isActive={
                range.value === "all" 
                  ? filters.priceRange[0] === 0 && filters.priceRange[1] === 999
                  : `${filters.priceRange[0]}-${filters.priceRange[1]}` === range.value
              }
              onClick={() => {
                if (range.value === "all") {
                  onFilterChange("priceRange", [0, 999])
                } else {
                  const [min, max] = range.value.split("-").map(Number)
                  onFilterChange("priceRange", [min, max])
                }
              }}
            />
          ))}
        </div>
      </FilterSection>
    </div>
  )

  if (isMobile) {
    return (
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-charcoal/50 z-40 lg:hidden"
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-80 bg-warm-white z-50 shadow-2xl lg:hidden overflow-y-auto"
            >
              <div className="sticky top-0 bg-warm-white border-b border-stone px-6 py-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-navy">Filters</h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-sand transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-6">
                {content}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    )
  }

  return (
    <div className="hidden lg:block w-64 flex-shrink-0">
      <div className="sticky top-28 card-warm rounded-2xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-navy mb-6">Filters</h2>
        {content}
      </div>
    </div>
  )
}

function FilterSection({ 
  title, 
  isExpanded, 
  onToggle, 
  children 
}: { 
  title: string
  isExpanded: boolean
  onToggle: () => void
  children: React.ReactNode 
}) {
  return (
    <div className="border-b border-border/50 pb-6 last:border-0">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full text-left mb-4"
      >
        <span className="font-medium text-charcoal">{title}</span>
        <ChevronDown className={cn(
          "h-5 w-5 text-muted-foreground transition-transform",
          isExpanded && "rotate-180"
        )} />
      </button>
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function FilterButton({ 
  label, 
  description,
  isActive, 
  onClick 
}: { 
  label: string
  description?: string
  isActive: boolean
  onClick: () => void 
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full text-left px-3 py-2.5 rounded-lg transition-all",
        isActive 
          ? "bg-navy text-white" 
          : "text-charcoal hover:bg-sand"
      )}
    >
      <span className="text-sm font-medium">{label}</span>
      {description && (
        <span className={cn(
          "block text-xs mt-0.5",
          isActive ? "text-white/70" : "text-muted-foreground"
        )}>
          {description}
        </span>
      )}
    </button>
  )
}
