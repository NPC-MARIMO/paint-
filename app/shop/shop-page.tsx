"use client"

export const dynamic = "force-dynamic"

import { useState, useMemo, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { SlidersHorizontal, Grid3X3, LayoutGrid, ArrowUpDown } from "lucide-react"
import { products as staticProducts } from "@/data/products"
import { ProductCard } from "@/components/product-card"
import { FilterSidebar } from "@/components/filter-sidebar"

type SortOption = "featured" | "price-asc" | "price-desc" | "rating" | "name"

export default function ShopPage() {
  const searchParams = useSearchParams()

  // SAFE INITIAL STATE (no runtime dependency)
  const [filters, setFilters] = useState({
    category: "all",
    finish: "all",
    priceRange: [0, 99999] as [number, number],
  })

  const [sortBy, setSortBy] = useState<SortOption>("featured")
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [gridCols, setGridCols] = useState<2 | 3>(3)

  const [dbProducts, setDbProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/products")
        if (res.ok) {
          const data = await res.json()
          const mapped = data.products.map((p: any) => ({
            ...p,
            id: p._id || p.slug,
            image: p.image && p.image.startsWith('/uploads') ? `http://localhost:8080${p.image}` : p.image
          }))
          setDbProducts(mapped)
        } else {
          setDbProducts(staticProducts)
        }
      } catch (err) {
        console.error("Failed to fetch products:", err)
        setDbProducts(staticProducts)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  // APPLY URL PARAMS AFTER MOUNT (runtime safe)
  useEffect(() => {
    const categoryParam = searchParams.get("category")
    if (categoryParam) {
      setFilters(prev => ({ ...prev, category: categoryParam }))
    }
  }, [searchParams])

  const handleFilterChange = (key: string, value: string | [number, number]) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const filteredProducts = useMemo(() => {
    let result = [...dbProducts]

    if (filters.category !== "all") {
      result = result.filter(p => p.category === filters.category)
    }

    if (filters.finish !== "all") {
      result = result.filter(p => p.finish === filters.finish)
    }

    result = result.filter(
      p => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    )

    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        result.sort((a, b) => b.price - a.price)
        break
      case "rating":
        result.sort((a, b) => b.rating - a.rating)
        break
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        result.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0))
    }

    return result
  }, [filters, sortBy, dbProducts])

  return (
    <div className="min-h-screen bg-warm-gradient pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy">
            Shop All Paints
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Discover premium quality paints for every project
          </p>
        </motion.div>

        <div className="flex gap-8">

          <FilterSidebar
            isOpen={true}
            onClose={() => {}}
            filters={filters}
            onFilterChange={handleFilterChange}
          />

          <FilterSidebar
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
            filters={filters}
            onFilterChange={handleFilterChange}
            isMobile
          />

          <div className="flex-1">

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="card-warm rounded-xl p-4 shadow-sm mb-6 flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsFilterOpen(true)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 border border-stone rounded-lg hover:bg-sand transition-colors"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  <span className="text-sm font-medium">Filters</span>
                </button>

                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-charcoal">
                    {filteredProducts.length}
                  </span>{" "}
                  products
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <ArrowUpDown className="h-4 w-4 text-muted-foreground hidden sm:block" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="text-sm border-0 bg-transparent focus:ring-0 cursor-pointer text-charcoal"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                    <option value="name">Name</option>
                  </select>
                </div>

                <div className="hidden md:flex items-center gap-1 border-l border-border pl-4">
                  <button
                    onClick={() => setGridCols(2)}
                    className={`p-2 rounded-lg ${
                      gridCols === 2 ? "bg-navy text-white" : "hover:bg-sand"
                    }`}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setGridCols(3)}
                    className={`p-2 rounded-lg ${
                      gridCols === 3 ? "bg-navy text-white" : "hover:bg-sand"
                    }`}
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>

            {loading ? (
              <div className="flex justify-center items-center py-20">
                <div className="w-8 h-8 border-4 border-navy border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : filteredProducts.length > 0 ? (
              <div
                className={`grid gap-6 ${
                  gridCols === 2
                    ? "grid-cols-1 sm:grid-cols-2"
                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <p className="text-lg text-muted-foreground">
                  No products match your filters.
                </p>
                <button
                  onClick={() =>
                    setFilters({
                      category: "all",
                      finish: "all",
                      priceRange: [0, 99999],
                    })
                  }
                  className="mt-4 text-navy font-medium hover:text-gold transition-colors"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}