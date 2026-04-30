"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Product } from "@/data/products"

export interface CartItem {
  product: Product
  quantity: number
  selectedColor: string
}

interface CartStore {
  items: CartItem[]
  addItem: (product: Product, color: string, quantity?: number) => void
  removeItem: (productId: string, color: string) => void
  updateQuantity: (productId: string, color: string, quantity: number) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product, color, quantity = 1) => {
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.product.id === product.id && item.selectedColor === color
          )
          
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.product.id === product.id && item.selectedColor === color
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            }
          }
          
          return {
            items: [...state.items, { product, quantity, selectedColor: color }],
          }
        })
      },
      
      removeItem: (productId, color) => {
        set((state) => ({
          items: state.items.filter(
            (item) => !(item.product.id === productId && item.selectedColor === color)
          ),
        }))
      },
      
      updateQuantity: (productId, color, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId, color)
          return
        }
        
        set((state) => ({
          items: state.items.map((item) =>
            item.product.id === productId && item.selectedColor === color
              ? { ...item, quantity }
              : item
          ),
        }))
      },
      
      clearCart: () => set({ items: [] }),
      
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0)
      },
      
      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0
        )
      },
    }),
    {
      name: "paint-cart-storage",
    }
  )
)
