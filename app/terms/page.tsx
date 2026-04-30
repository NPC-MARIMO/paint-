"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-warm-gradient pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
            Terms & Conditions
          </h1>
          <p className="text-muted-foreground">
            Last updated: January 1, 2024
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card-warm rounded-3xl p-8 md:p-12 shadow-sm prose prose-lg max-w-none"
        >
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">Agreement to Terms</h2>
            <p className="text-charcoal/80 leading-relaxed">
              By accessing and using the Ashirwaad Coating Paints website and services, you agree to be 
              bound by these Terms and Conditions and all applicable laws and regulations. If 
              you do not agree with any of these terms, you are prohibited from using or 
              accessing this site.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">Use License</h2>
            <p className="text-charcoal/80 leading-relaxed mb-4">
              Permission is granted to temporarily view and use the materials on our website 
              for personal, non-commercial transitory viewing only. This is the grant of a 
              license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-charcoal/80 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or proprietary notations</li>
              <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">Products and Orders</h2>
            <p className="text-charcoal/80 leading-relaxed mb-4">
              All products shown on our website are subject to availability. We reserve the 
              right to discontinue any product at any time.
            </p>
            <p className="text-charcoal/80 leading-relaxed mb-4">
              We strive to display accurate colors in product images, but actual paint colors 
              may vary due to monitor settings and lighting conditions. We recommend testing 
              paint samples before making large purchases.
            </p>
            <p className="text-charcoal/80 leading-relaxed">
              Prices for our products are subject to change without notice. We reserve the 
              right to refuse or cancel orders at our discretion, including orders with 
              incorrect pricing.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">Shipping and Delivery</h2>
            <p className="text-charcoal/80 leading-relaxed mb-4">
              We ship to addresses within the United States. Shipping times and costs vary 
              based on location and order size. While we strive to meet estimated delivery 
              dates, we are not responsible for delays caused by carriers or circumstances 
              beyond our control.
            </p>
            <p className="text-charcoal/80 leading-relaxed">
              Risk of loss and title for items purchased pass to you upon delivery of the 
              items to the carrier.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">Returns and Refunds</h2>
            <p className="text-charcoal/80 leading-relaxed mb-4">
              We accept returns of unopened products within 30 days of purchase. To be 
              eligible for a return:
            </p>
            <ul className="list-disc list-inside text-charcoal/80 space-y-2">
              <li>Products must be in original, unopened packaging</li>
              <li>Products must not be custom-tinted or mixed colors</li>
              <li>You must have the original receipt or proof of purchase</li>
            </ul>
            <p className="text-charcoal/80 leading-relaxed mt-4">
              Refunds will be processed to the original payment method within 5-7 business 
              days after we receive the returned product.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">Product Warranty</h2>
            <p className="text-charcoal/80 leading-relaxed">
              Our paints come with specific warranties as noted on individual product pages. 
              Warranty claims must be submitted with proof of purchase and documentation of 
              the issue. Warranty coverage is limited to the cost of the paint product and 
              does not cover labor or consequential damages.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">Limitation of Liability</h2>
            <p className="text-charcoal/80 leading-relaxed">
              In no event shall Ashirwaad Coating Paints or its suppliers be liable for any damages 
              (including, without limitation, damages for loss of data or profit, or due to 
              business interruption) arising out of the use or inability to use the materials 
              on our website, even if we have been notified of the possibility of such damage.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">Intellectual Property</h2>
            <p className="text-charcoal/80 leading-relaxed">
              All content on this website, including text, graphics, logos, images, and 
              software, is the property of Ashirwaad Coating Paints or its content suppliers and is 
              protected by international copyright laws. The compilation of all content on 
              this site is our exclusive property.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">Governing Law</h2>
            <p className="text-charcoal/80 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with 
              the laws of the State of California, and you irrevocably submit to the 
              exclusive jurisdiction of the courts in that state.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">Changes to Terms</h2>
            <p className="text-charcoal/80 leading-relaxed">
              We reserve the right to modify these terms at any time. Changes will be 
              effective immediately upon posting on this page. Your continued use of the 
              website following the posting of changes constitutes your acceptance of such 
              changes.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">Contact Information</h2>
            <p className="text-charcoal/80 leading-relaxed">
              Questions about the Terms of Service should be sent to us at:
            </p>
            <div className="mt-4 p-4 bg-sand rounded-xl">
              <p className="text-charcoal font-medium">Ashirwaad Coating Paints</p>
              <p className="text-charcoal/80">Plot 1461, sector 38, HSIIDC, Phase 1, IndL. Estate Rai</p>
              <p className="text-charcoal/80">Sonipat Haryana 131029</p>
              <p className="text-charcoal/80">Email: legal@Ashirwaad Coatingpaints.com</p>
              <p className="text-charcoal/80">Phone: 9835256295</p>
            </div>
          </section>
        </motion.div>

        {/* Related Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex justify-center gap-4"
        >
          <Link
            href="/privacy"
            className="text-navy font-medium hover:text-gold transition-colors"
          >
            Privacy Policy
          </Link>
          <span className="text-border">|</span>
          <Link
            href="/contact"
            className="text-navy font-medium hover:text-gold transition-colors"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
