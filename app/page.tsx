import { Hero } from '@/components/home/hero'
import { Intro } from '@/components/home/intro'
import { ServicesPreview } from '@/components/home/services-preview'
import { WhyChooseUs } from '@/components/home/why-choose-us'
import { FeaturedProjects } from '@/components/home/featured-projects'
import { Industries } from '@/components/home/industries'
import { ProcessTimeline } from '@/components/home/process-timeline'
import { Clients } from '@/components/home/clients'
import { Testimonials } from '@/components/home/testimonials'
import { AwardsRecognition } from '@/components/home/awards-recognition'
import { FAQ } from '@/components/home/faq'
import { NewsletterSignup } from '@/components/home/newsletter-signup'
import { Cta } from '@/components/home/cta'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <ServicesPreview />
      <WhyChooseUs />
      <FeaturedProjects />
      <Industries />
      <ProcessTimeline />
      <Clients />
      <Testimonials />
      <AwardsRecognition />
      <FAQ />
      <NewsletterSignup />
      <Cta />
    </>
  )
}
