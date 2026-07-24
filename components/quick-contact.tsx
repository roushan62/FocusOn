import { Reveal } from '@/components/reveal'
import { MessageCircle, Phone } from 'lucide-react'

export function QuickContact() {
  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <Reveal>
        <a
          href="https://wa.me/919910258820?text=Hi%20FocusOn%20Interiors%2C%20I%20would%20like%20to%20discuss%20my%20interior%20design%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center h-14 w-14 rounded-full bg-green-500 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 hover:bg-green-600"
          aria-label="WhatsApp"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </Reveal>

      {/* Phone Button */}
      <Reveal delay={0.1}>
        <a
          href="tel:+919910258820"
          className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-500 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 hover:bg-blue-600"
          aria-label="Call"
          title="Call us"
        >
          <Phone className="h-6 w-6" />
        </a>
      </Reveal>
    </div>
  )
}
