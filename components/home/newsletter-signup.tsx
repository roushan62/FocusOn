import { Reveal } from '@/components/reveal'

export function NewsletterSignup() {
  return (
    <section className="bg-primary py-16 md:py-20 text-primary-foreground">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <Reveal>
          <div className="text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">
              Stay Updated
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Get insights on interior design trends, project updates, and exclusive offers
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 rounded-lg px-6 py-3 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-foreground text-primary font-semibold rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm mt-4 opacity-75">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
