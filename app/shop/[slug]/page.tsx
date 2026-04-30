"use client"

import { useState, use } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { Star, Minus, Plus, ShoppingCart, Check, ChevronLeft, Truck, Shield, RefreshCw } from "lucide-react"
import { products } from "@/data/products"
import { useCartStore } from "@/lib/cart-store"
import { ProductCard } from "@/components/product-card"
import { cn } from "@/lib/utils"

type TabType = "description" | "usage" | "reviews"

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const product = products.find(p => p.slug === slug)
  
  if (!product) {
    notFound()
  }

  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState<TabType>("description")
  const [isAdded, setIsAdded] = useState(false)
  
  const addItem = useCartStore((state) => state.addItem)

  const handleAddToCart = () => {
    addItem(product, selectedColor, quantity)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

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
    "Pure White": "#FFFFFF",
    "Almond": "#EFDECD",
    "Light Gray": "#D3D3D3",
    "Soft Blue": "#B0D4E8",
    "Bright White": "#FFFFFF",
    "Natural Cedar": "#B87333",
    "Redwood": "#A45A52",
    "Walnut": "#5D432C",
    "Gray Wash": "#A9A9A9",
    "Clear": "#FFFFFF",
    "Tan": "#D2B48C",
    "Tile Red": "#B22222",
    "Brilliant White": "#FFFFFF",
    "Black": "#000000",
    "Navy": "#0B1F3A",
    "Forest Green": "#228B22",
  }

  return (
    <div className="min-h-screen bg-warm-gradient pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link 
            href="/shop" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-navy transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Shop
          </Link>
        </motion.div>

        {/* Product Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-warm-white shadow-lg">
              <div 
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${colorMap[selectedColor] || "#E8E4DC"}22 0%, ${colorMap[selectedColor] || "#D4CFC4"}44 100%)`
                }}
              >
                {/* Large paint can visualization */}
                <div className="relative w-48 h-64 sm:w-56 sm:h-72">
                  <div className="absolute inset-x-0 bottom-0 h-56 sm:h-64 bg-white rounded-xl shadow-xl overflow-hidden">
                    <div 
                      className="absolute inset-x-0 bottom-0 h-44 sm:h-52 transition-colors duration-300"
                      style={{ backgroundColor: colorMap[selectedColor] || "#F5F5F5" }}
                    />
                    <div className="absolute inset-x-6 top-6 h-10 bg-navy/10 rounded flex items-center justify-center">
                      <span className="text-sm font-bold text-navy uppercase tracking-wider">Ashirwaad Coating</span>
                    </div>
                    <div className="absolute inset-x-6 top-18 text-center">
                      <p className="text-[10px] text-charcoal/60 uppercase tracking-wide">{product.finish}</p>
                    </div>
                  </div>
                  <div className="absolute inset-x-8 -top-1 h-6 bg-charcoal/80 rounded-t" />
                </div>
              </div>

              {/* Badges */}
              {product.isBestSeller && (
                <div className="absolute top-6 left-6 px-4 py-2 bg-gold text-charcoal text-sm font-semibold rounded-full">
                  Best Seller
                </div>
              )}
              {product.originalPrice && (
                <div className="absolute top-6 right-6 px-4 py-2 bg-teal text-white text-sm font-semibold rounded-full">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </div>
              )}
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-sm font-medium text-gold uppercase tracking-wider mb-2">
              {product.category}
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className={cn(
                      "h-5 w-5",
                      i < Math.floor(product.rating) 
                        ? "fill-gold text-gold" 
                        : "text-border"
                    )} 
                  />
                ))}
              </div>
              <span className="font-medium text-charcoal">{product.rating}</span>
              <span className="text-muted-foreground">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-8">
              <span className="text-4xl font-bold text-navy">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
              <span className="text-muted-foreground">/ gallon</span>
            </div>

            {/* Color Selector */}
            <div className="mb-8">
              <p className="text-sm font-medium text-charcoal mb-3">
                Color: <span className="text-navy">{selectedColor}</span>
              </p>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={cn(
                      "relative w-12 h-12 rounded-full border-2 transition-all",
                      selectedColor === color 
                        ? "border-navy ring-2 ring-navy/20" 
                        : "border-white shadow-md hover:scale-110"
                    )}
                    style={{ backgroundColor: colorMap[color] || "#E8E8E8" }}
                    title={color}
                  >
                    {selectedColor === color && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Check className={cn(
                          "h-5 w-5",
                          ["White", "Arctic White", "Classic White", "Bright White", "Pure White", "Brilliant White", "Clear"].includes(color)
                            ? "text-navy"
                            : "text-white"
                        )} />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Coverage */}
            <div className="bg-sand rounded-xl p-4 mb-8">
              <p className="text-sm text-muted-foreground">Coverage</p>
              <p className="font-semibold text-charcoal">{product.coverage}</p>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border border-border rounded-xl">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-sand transition-colors rounded-l-xl"
                >
                  <Minus className="h-5 w-5" />
                </button>
                <span className="w-16 text-center font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-sand transition-colors rounded-r-xl"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={isAdded}
                className={cn(
                  "flex-1 flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300",
                  isAdded
                    ? "bg-teal text-white"
                    : "bg-navy text-white hover:bg-navy/90"
                )}
              >
                {isAdded ? (
                  <>
                    <Check className="h-5 w-5" />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingCart className="h-5 w-5" />
                    Add to Cart
                  </>
                )}
              </button>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              {[
                { icon: Truck, label: "Free Shipping", desc: "On orders $99+" },
                { icon: Shield, label: "Guaranteed", desc: "Quality assurance" },
                { icon: RefreshCw, label: "Easy Returns", desc: "30-day policy" },
              ].map((benefit) => (
                <div key={benefit.label} className="text-center">
                  <benefit.icon className="h-6 w-6 mx-auto text-gold mb-2" />
                  <p className="text-sm font-medium text-charcoal">{benefit.label}</p>
                  <p className="text-xs text-muted-foreground">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tabs Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-20"
        >
          <div className="card-warm rounded-2xl shadow-sm overflow-hidden">
            {/* Tab Headers */}
            <div className="flex border-b border-border">
              {[
                { id: "description", label: "Description" },
                { id: "usage", label: "How to Use" },
                { id: "reviews", label: `Reviews (${product.reviews})` },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabType)}
                  className={cn(
                    "flex-1 px-6 py-4 text-sm font-medium transition-colors relative",
                    activeTab === tab.id
                      ? "text-navy"
                      : "text-muted-foreground hover:text-charcoal"
                  )}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-navy"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-8">
              {activeTab === "description" && (
                <div>
                  <p className="text-charcoal/80 leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <h4 className="font-semibold text-navy mb-4">Key Features</h4>
                  <ul className="space-y-3">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-teal flex-shrink-0 mt-0.5" />
                        <span className="text-charcoal/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === "usage" && (
                <div>
                  <h4 className="font-semibold text-navy mb-4">Application Instructions</h4>
                  <p className="text-charcoal/80 leading-relaxed">
                    {product.usage}
                  </p>
                </div>
              )}

              {activeTab === "reviews" && (
                <div className="space-y-6">
                  {[
                    { name: "John D.", rating: 5, comment: "Excellent coverage and the color is exactly as shown. Very happy with this purchase!", date: "2 weeks ago" },
                    { name: "Sarah M.", rating: 5, comment: "Professional quality paint at a reasonable price. Will definitely buy again.", date: "1 month ago" },
                    { name: "Mike R.", rating: 4, comment: "Great product, easy to apply. Took a bit longer to dry than expected but the finish is perfect.", date: "2 months ago" },
                  ].map((review, i) => (
                    <div key={i} className="border-b border-border/50 pb-6 last:border-0">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
                          <span className="font-semibold text-navy text-sm">
                            {review.name.split(" ").map(n => n[0]).join("")}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-charcoal">{review.name}</p>
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {Array.from({ length: review.rating }).map((_, i) => (
                                <Star key={i} className="h-3 w-3 fill-gold text-gold" />
                              ))}
                            </div>
                            <span className="text-xs text-muted-foreground">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-charcoal/80 ml-13">{review.comment}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-navy mb-8">Related Products</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
