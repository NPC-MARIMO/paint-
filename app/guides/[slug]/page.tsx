"use client"

import { use } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronLeft, Clock, Share2, Bookmark } from "lucide-react"
import { guides } from "@/data/guides"

const gradients = [
  "linear-gradient(135deg, #E8D4B8 0%, #C8A96A 100%)",
  "linear-gradient(135deg, #0B1F3A 0%, #1C1C1C 100%)",
  "linear-gradient(135deg, #87CEEB 0%, #3AAFA9 100%)",
  "linear-gradient(135deg, #9CAF88 0%, #2D5A45 100%)",
  "linear-gradient(135deg, #E07B6C 0%, #C67D56 100%)",
  "linear-gradient(135deg, #B0D4E8 0%, #0B1F3A 100%)",
  "linear-gradient(135deg, #F0E6DC 0%, #E8D4B8 100%)",
  "linear-gradient(135deg, #36454F 0%, #1C1C1C 100%)",
]

export default function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const guideIndex = guides.findIndex(g => g.slug === slug)
  const guide = guides[guideIndex]

  if (!guide) {
    notFound()
  }

  const relatedGuides = guides
    .filter(g => g.category === guide.category && g.id !== guide.id)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-warm-gradient pt-28 pb-20">
      {/* Hero */}
      <div 
        className="h-64 md:h-96"
        style={{ background: gradients[guideIndex % gradients.length] }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 md:-mt-48 relative z-10">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <Link 
            href="/guides" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Guides
          </Link>
        </motion.div>

        {/* Article Card */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card-warm rounded-3xl shadow-xl overflow-hidden"
        >
          {/* Article Header */}
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-gold/20 text-gold text-sm font-medium rounded-full">
                {guide.category}
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {guide.readTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6 text-balance">
              {guide.title}
            </h1>

            <p className="text-lg text-muted-foreground mb-8">
              {guide.excerpt}
            </p>

            {/* Share buttons */}
            <div className="flex items-center gap-4 pb-8 border-b border-border">
              <button className="flex items-center gap-2 px-4 py-2 border border-stone rounded-lg hover:bg-sand transition-colors">
                <Share2 className="h-4 w-4" />
                <span className="text-sm font-medium">Share</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-stone rounded-lg hover:bg-sand transition-colors">
                <Bookmark className="h-4 w-4" />
                <span className="text-sm font-medium">Save</span>
              </button>
            </div>
          </div>

          {/* Article Content */}
          <div className="px-8 md:px-12 pb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-charcoal/80 leading-relaxed mb-6">
                {guide.content}
              </p>

              <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Understanding Your Project</h2>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Before diving into any painting project, it's essential to understand the scope and requirements. 
                Start by assessing the condition of the surfaces you'll be painting. Look for any damage, 
                peeling paint, or areas that may need special attention.
              </p>

              <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Gathering Your Materials</h2>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Having the right tools and materials is crucial for achieving professional results. 
                Here's what you'll typically need:
              </p>
              <ul className="list-disc list-inside text-charcoal/80 space-y-2 mb-6">
                <li>High-quality paint in your chosen color and finish</li>
                <li>Primer (if needed for your surface type)</li>
                <li>Brushes in various sizes for cutting in and detail work</li>
                <li>Rollers and roller covers appropriate for your paint type</li>
                <li>Drop cloths and painter's tape for protection</li>
                <li>Sandpaper and patching compound for surface prep</li>
              </ul>

              <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Step-by-Step Process</h2>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Follow these steps for the best results:
              </p>
              <ol className="list-decimal list-inside text-charcoal/80 space-y-3 mb-6">
                <li><strong>Prepare the surface:</strong> Clean, repair, and sand as needed.</li>
                <li><strong>Protect surrounding areas:</strong> Use drop cloths and tape.</li>
                <li><strong>Apply primer:</strong> If needed, apply an even coat and let dry.</li>
                <li><strong>Cut in edges:</strong> Use a brush around corners and edges.</li>
                <li><strong>Roll main areas:</strong> Apply paint in a "W" pattern for even coverage.</li>
                <li><strong>Apply second coat:</strong> Wait for the first coat to dry, then repeat.</li>
              </ol>

              <div className="bg-sand rounded-2xl p-6 my-8">
                <h3 className="font-semibold text-navy mb-2">Pro Tip</h3>
                <p className="text-charcoal/80">
                  Always maintain a wet edge while painting to avoid lap marks. This means working 
                  quickly enough that the paint doesn't dry before you overlap your next stroke.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Finishing Touches</h2>
              <p className="text-charcoal/80 leading-relaxed">
                Once your paint has dried completely, remove the tape at a 45-degree angle for 
                clean lines. Touch up any areas that need it, and dispose of materials properly. 
                Store leftover paint in a cool, dry place for future touch-ups.
              </p>
            </div>
          </div>
        </motion.article>

        {/* Related Guides */}
        {relatedGuides.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold text-navy mb-8">Related Guides</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {relatedGuides.map((relatedGuide, index) => (
                <Link key={relatedGuide.id} href={`/guides/${relatedGuide.slug}`}>
                  <div className="group card-warm rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
                    <div 
                      className="h-32"
                      style={{ background: gradients[(index + 3) % gradients.length] }}
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-charcoal group-hover:text-navy transition-colors line-clamp-2">
                        {relatedGuide.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-2">{relatedGuide.readTime}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
