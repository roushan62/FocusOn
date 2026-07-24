'use client'

import { useState } from 'react'
import { Reveal } from '@/components/reveal'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'What is the typical timeline for an interior project?',
    answer:
      'Project timelines vary based on scope and scale. Residential projects typically take 3-6 months, while commercial projects may take 6-12 months. We provide detailed timelines during the consultation phase.',
  },
  {
    question: 'Do you provide design consultations before committing to a project?',
    answer:
      'Yes! We offer initial consultations to understand your vision, discuss requirements, and provide preliminary design concepts. This helps ensure a perfect fit for your project.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We operate across India with major presence in Delhi, Gurugram, Mumbai, Bangalore, Chennai, Ahmedabad, and Kochi. We also undertake projects in other locations based on scope and feasibility.',
  },
  {
    question: 'Do you offer post-project maintenance?',
    answer:
      'Absolutely! We provide post-handover support and maintenance services to ensure your spaces remain perfect. Our team is always available for touch-ups and adjustments.',
  },
  {
    question: 'What makes FocusOn Interiors different?',
    answer:
      'We combine in-house design, execution, and styling under one roof. This integrated approach ensures consistency, quality, and seamless project delivery. Our stylist-led vision ensures every space tells a story.',
  },
  {
    question: 'How much does an interior project cost?',
    answer:
      'Costs vary significantly based on project scope, location, materials, and complexity. We provide transparent quotations after understanding your requirements. No hidden charges.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 md:py-36">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <Reveal>
          <div className="mb-16 text-center">
            <p className="font-heading text-xs font-bold uppercase tracking-[0.35em] text-primary mb-4">
              FAQ
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-black uppercase tracking-tight text-balance">
              Frequently Asked Questions
            </h2>
          </div>
        </Reveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Reveal key={index} delay={index * 0.05}>
              <div className="border border-border rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 md:p-8 flex items-center justify-between bg-card hover:bg-card/80 transition-colors text-left"
                >
                  <span className="font-heading text-lg md:text-xl font-bold tracking-tight pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-border"
                    >
                      <div className="p-6 md:p-8 bg-muted/50 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
