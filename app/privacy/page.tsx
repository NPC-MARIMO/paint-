"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function PrivacyPage() {
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
            Privacy Policy
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
            <h2 className="text-2xl font-bold text-navy mb-4">Introduction</h2>
            <p className="text-charcoal/80 leading-relaxed">
              Ashirwaad Coating Paints (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your 
              information when you visit our website, mobile application, or make a purchase 
              from us.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">Information We Collect</h2>
            <p className="text-charcoal/80 leading-relaxed mb-4">
              We collect information you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside text-charcoal/80 space-y-2 mb-4">
              <li>Personal identification information (name, email address, phone number)</li>
              <li>Billing and shipping address</li>
              <li>Payment information (processed securely through our payment provider)</li>
              <li>Account preferences and settings</li>
              <li>Communication history with our customer service</li>
              <li>Product reviews and feedback</li>
            </ul>
            <p className="text-charcoal/80 leading-relaxed">
              We also automatically collect certain information when you visit our website, 
              including your IP address, browser type, operating system, referring URLs, 
              and information about how you interact with our website.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">How We Use Your Information</h2>
            <p className="text-charcoal/80 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-charcoal/80 space-y-2">
              <li>Process and fulfill your orders</li>
              <li>Send you order confirmations and updates</li>
              <li>Respond to your comments, questions, and provide customer service</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Personalize your experience on our website</li>
              <li>Improve our products and services</li>
              <li>Detect and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">Information Sharing</h2>
            <p className="text-charcoal/80 leading-relaxed mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc list-inside text-charcoal/80 space-y-2">
              <li>Service providers who assist in our operations (shipping, payment processing, analytics)</li>
              <li>Professional advisors (lawyers, accountants, auditors)</li>
              <li>Government authorities when required by law</li>
              <li>Business partners with your consent</li>
            </ul>
            <p className="text-charcoal/80 leading-relaxed mt-4">
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">Cookies and Tracking</h2>
            <p className="text-charcoal/80 leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our website 
              and hold certain information. Cookies are files with a small amount of data which 
              may include an anonymous unique identifier. You can instruct your browser to refuse 
              all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">Data Security</h2>
            <p className="text-charcoal/80 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your 
              personal information against unauthorized access, alteration, disclosure, or 
              destruction. However, no method of transmission over the Internet or electronic 
              storage is 100% secure.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">Your Rights</h2>
            <p className="text-charcoal/80 leading-relaxed mb-4">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc list-inside text-charcoal/80 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to processing of your personal information</li>
              <li>Request data portability</li>
              <li>Withdraw consent where applicable</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">Contact Us</h2>
            <p className="text-charcoal/80 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-sand rounded-xl">
              <p className="text-charcoal font-medium">Ashirwaad Coating Paints</p>
              <p className="text-charcoal/80">Plot 1461, sector 38, HSIIDC, Phase 1, IndL. Estate Rai</p>
              <p className="text-charcoal/80">Sonipat Haryana 131029</p>
              <p className="text-charcoal/80">Email: ashirwad.coating@rediffmail.com</p>
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
            href="/terms"
            className="text-navy font-medium hover:text-gold transition-colors"
          >
            Terms & Conditions
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
