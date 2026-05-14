"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Package, ArrowRight, Clock, CheckCircle2, Truck } from "lucide-react"
import { useUserStore } from "@/lib/user-store"

interface OrderItem {
  name: string
  price: number
  quantity: number
  selectedColor: string
  image: string
}

interface Order {
  _id: string
  orderNumber: string
  createdAt: string
  total: number
  orderStatus: string
  paymentStatus: string
  items: OrderItem[]
}

export default function MyOrdersPage() {
  const router = useRouter()
  const { user, token } = useUserStore()
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user || !token) {
      router.push("/login")
      return
    }

    const fetchOrders = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/orders/my-orders", {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        })
        if (res.ok) {
          const data = await res.json()
          setOrders(data.orders)
        }
      } catch (err) {
        console.error("Failed to fetch orders", err)
      } finally {
        setLoading(false)
      }
    }

    fetchOrders()
  }, [user, token, router])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'text-blue-500 bg-blue-500/10'
      case 'processing': return 'text-orange-500 bg-orange-500/10'
      case 'shipped': return 'text-purple-500 bg-purple-500/10'
      case 'delivered': return 'text-teal bg-teal/10'
      case 'cancelled': return 'text-destructive bg-destructive/10'
      default: return 'text-gray-500 bg-gray-500/10'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered': return <CheckCircle2 className="h-4 w-4" />
      case 'shipped': return <Truck className="h-4 w-4" />
      default: return <Clock className="h-4 w-4" />
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-warm-gradient pt-28 pb-20 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-navy border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  if (orders.length === 0) {
    return (
      <div className="min-h-screen bg-warm-gradient pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="w-24 h-24 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Package className="h-12 w-12 text-navy/40" />
            </div>
            <h1 className="text-3xl font-bold text-navy mb-4">No Orders Yet</h1>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              You haven&apos;t placed any orders yet. Explore our premium paint collection to get started.
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-navy">My Orders</h1>
          <p className="text-muted-foreground mt-1">
            Track and manage your recent purchases
          </p>
        </motion.div>

        <div className="space-y-6">
          {orders.map((order, index) => (
            <motion.div
              key={order._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card-warm rounded-2xl p-6 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone mb-4 gap-4">
                <div>
                  <h3 className="font-semibold text-lg text-navy">{order.orderNumber || 'Order'}</h3>
                  <p className="text-sm text-muted-foreground">
                    Placed on {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className={`px-3 py-1 rounded-full flex items-center gap-1.5 text-sm font-medium capitalize ${getStatusColor(order.orderStatus)}`}>
                    {getStatusIcon(order.orderStatus)}
                    {order.orderStatus}
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Total</p>
                    <p className="font-semibold text-charcoal">${order.total.toFixed(2)}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {order.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-sand rounded-xl flex items-center justify-center overflow-hidden shrink-0 border border-stone">
                      {item.image ? (
                        <img 
                          src={item.image.startsWith('/uploads') ? `http://localhost:8080${item.image}` : item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-10 h-12 rounded shadow-sm bg-stone" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-navy truncate">{item.name}</p>
                      <p className="text-sm text-muted-foreground">Color: {item.selectedColor}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-medium text-charcoal">${item.price.toFixed(2)}</p>
                      <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
