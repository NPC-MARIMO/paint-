"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Truck, Shield, Tag } from "lucide-react"
import { useCartStore, type CartItem } from "@/lib/cart-store"
import { cn } from "@/lib/utils"

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
}

export default function CartPage() {
  const { items, updateQuantity, removeItem, getTotalPrice, clearCart } = useCartStore()
  const [promoCode, setPromoCode] = useState("")
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const subtotal = getTotalPrice()
  const shipping = subtotal >= 99 ? 0 : 9.99
  const tax = subtotal * 0.0875 // 8.75% tax
  const total = subtotal + shipping + tax

  const handleCheckout = async () => {
    setIsCheckingOut(true)
    // Simulate checkout process
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsCheckingOut(false)
    // In a real app, this would redirect to a checkout page or payment processor
    alert("Checkout functionality would be implemented with a payment processor.")
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-warm-gradient pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="w-24 h-24 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="h-12 w-12 text-navy/40" />
            </div>
            <h1 className="text-3xl font-bold text-navy mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Looks like you haven&apos;t added any products to your cart yet. Explore our collection and find the perfect paint for your project.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-8 py-4 bg-navy text-white font-semibold rounded-xl hover:bg-navy/90 transition-colors"
            >
              Start Shopping
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-warm-gradient pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-navy">Shopping Cart</h1>
            <p className="text-muted-foreground mt-1">
              {items.length} {items.length === 1 ? "item" : "items"} in your cart
            </p>
          </div>
          <button
            onClick={clearCart}
            className="text-sm text-muted-foreground hover:text-destructive transition-colors"
          >
            Clear Cart
          </button>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="card-warm rounded-2xl shadow-sm overflow-hidden">
              <AnimatePresence mode="popLayout">
                {items.map((item, index) => (
                  <CartItemRow 
                    key={`${item.product.id}-${item.selectedColor}`} 
                    item={item}
                    onUpdateQuantity={(qty) => updateQuantity(item.product.id, item.selectedColor, qty)}
                    onRemove={() => removeItem(item.product.id, item.selectedColor)}
                    isLast={index === items.length - 1}
                  />
                ))}
              </AnimatePresence>
            </div>

            {/* Continue Shopping */}
            <div className="mt-6">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 text-navy font-medium hover:text-gold transition-colors"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
                Continue Shopping
              </Link>
            </div>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="card-warm rounded-2xl shadow-sm p-6 sticky top-28">
              <h2 className="text-lg font-semibold text-navy mb-6">Order Summary</h2>

              {/* Promo Code */}
              <div className="mb-6">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone bg-sand focus:bg-warm-white focus:border-navy focus:ring-1 focus:ring-navy transition-all text-sm"
                    />
                  </div>
                  <button className="px-4 py-3 bg-navy/10 text-navy font-medium rounded-xl hover:bg-navy/20 transition-colors text-sm">
                    Apply
                  </button>
                </div>
              </div>

              {/* Totals */}
              <div className="space-y-4 border-t border-border pt-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium text-charcoal">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className={cn(
                    "font-medium",
                    shipping === 0 ? "text-teal" : "text-charcoal"
                  )}>
                    {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax (8.75%)</span>
                  <span className="font-medium text-charcoal">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-4 border-t border-border">
                  <span className="font-semibold text-navy">Total</span>
                  <span className="text-2xl font-bold text-navy">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Free Shipping Banner */}
              {subtotal < 99 && (
                <div className="mt-4 p-3 bg-gold/10 rounded-xl">
                  <p className="text-sm text-charcoal">
                    Add <span className="font-semibold text-gold">${(99 - subtotal).toFixed(2)}</span> more for free shipping!
                  </p>
                </div>
              )}

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full mt-6 px-8 py-4 bg-navy text-white font-semibold rounded-xl hover:bg-navy/90 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isCheckingOut ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Proceed to Checkout
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>

              {/* Trust Badges */}
              <div className="flex justify-center gap-6 mt-6 pt-6 border-t border-border">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Truck className="h-4 w-4" />
                  <span>Fast Delivery</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Shield className="h-4 w-4" />
                  <span>Secure Payment</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function CartItemRow({ 
  item, 
  onUpdateQuantity, 
  onRemove,
  isLast 
}: { 
  item: CartItem
  onUpdateQuantity: (qty: number) => void
  onRemove: () => void
  isLast: boolean
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "p-6",
        !isLast && "border-b border-border"
      )}
    >
      <div className="flex gap-6">
        {/* Product Image */}
        <div className="w-24 h-24 rounded-xl bg-sand flex items-center justify-center flex-shrink-0">
          <div 
            className="w-16 h-20 rounded-lg shadow-sm"
            style={{
              background: `linear-gradient(to bottom, #E8E8E8 30%, ${colorMap[item.selectedColor] || "#F5F5F5"} 30%)`
            }}
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between gap-4">
            <div>
              <Link 
                href={`/shop/${item.product.slug}`}
                className="font-semibold text-charcoal hover:text-navy transition-colors line-clamp-1"
              >
                {item.product.name}
              </Link>
              <div className="flex items-center gap-2 mt-1">
                <div
                  className="w-4 h-4 rounded-full border border-border"
                  style={{ backgroundColor: colorMap[item.selectedColor] || "#E8E8E8" }}
                />
                <span className="text-sm text-muted-foreground">{item.selectedColor}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1 capitalize">{item.product.finish} finish</p>
            </div>
            <button
              onClick={onRemove}
              className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition-colors h-fit"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>

          <div className="flex items-center justify-between mt-4">
            {/* Quantity */}
            <div className="flex items-center border border-border rounded-lg">
              <button
                onClick={() => onUpdateQuantity(item.quantity - 1)}
                className="p-2 hover:bg-sand transition-colors rounded-l-lg"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-10 text-center text-sm font-medium">{item.quantity}</span>
              <button
                onClick={() => onUpdateQuantity(item.quantity + 1)}
                className="p-2 hover:bg-sand transition-colors rounded-r-lg"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>

            {/* Price */}
            <div className="text-right">
              <p className="font-semibold text-navy">
                ${(item.product.price * item.quantity).toFixed(2)}
              </p>
              <p className="text-xs text-muted-foreground">
                ${item.product.price.toFixed(2)} each
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
