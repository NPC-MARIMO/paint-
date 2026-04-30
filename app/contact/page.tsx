"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send, Check } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-warm-gradient pt-28 pb-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center card-warm rounded-3xl p-12 shadow-lg max-w-md mx-4"
        >
          <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-navy mb-4">Message Sent!</h2>
          <p className="text-muted-foreground mb-6">
            Thank you for reaching out. Our team will get back to you within 24 hours.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false)
              setFormState({ name: "", email: "", phone: "", subject: "", message: "" })
            }}
            className="px-6 py-3 bg-navy text-white font-semibold rounded-xl hover:bg-navy/90 transition-colors"
          >
            Send Another Message
          </button>
        </motion.div>
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
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-gold uppercase tracking-wider">
            Get in Touch
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-navy text-balance">
            We'd Love to Hear From You
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our products or need expert advice? Our team is here to help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1 space-y-8"
          >
            {/* Contact Cards */}
            {[
              { icon: Phone, title: "Phone", info: "1-800-555-0123", subInfo: "Mon-Fri 8AM-6PM EST" },
              { icon: Mail, title: "Email", info: "hello@spectrumpaints.com", subInfo: "We reply within 24 hours" },
              { icon: MapPin, title: "Headquarters", info: "123 Color Street", subInfo: "San Francisco, CA 94102" },
              { icon: Clock, title: "Business Hours", info: "Monday - Friday", subInfo: "8:00 AM - 6:00 PM EST" },
            ].map((item, index) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-6 w-6 text-navy" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal">{item.title}</h3>
                  <p className="text-navy font-medium">{item.info}</p>
                  <p className="text-sm text-muted-foreground">{item.subInfo}</p>
                </div>
              </div>
            ))}

            {/* Map Placeholder */}
            <div className="card-warm rounded-2xl overflow-hidden shadow-sm">
              <div className="aspect-video bg-sand flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-navy/30 mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Map View</p>
                  <p className="text-xs text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="card-warm rounded-3xl p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl font-bold text-navy mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-stone bg-sand focus:bg-warm-white focus:border-navy focus:ring-1 focus:ring-navy transition-all"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-stone bg-sand focus:bg-warm-white focus:border-navy focus:ring-1 focus:ring-navy transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-stone bg-sand focus:bg-warm-white focus:border-navy focus:ring-1 focus:ring-navy transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-charcoal mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-stone bg-sand focus:bg-warm-white focus:border-navy focus:ring-1 focus:ring-navy transition-all"
                    >
                      <option value="">Select a topic</option>
                      <option value="product">Product Question</option>
                      <option value="color">Color Advice</option>
                      <option value="order">Order Support</option>
                      <option value="dealer">Dealer Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-stone bg-sand focus:bg-warm-white focus:border-navy focus:ring-1 focus:ring-navy transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-navy text-white font-semibold rounded-xl hover:bg-navy/90 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
