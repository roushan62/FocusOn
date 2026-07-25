import { Hero } from '@/components/home/hero'
import { Intro } from '@/components/home/intro'
import { ServicesPreview } from '@/components/home/services-preview'
import { WhyChooseUs } from '@/components/home/why-choose-us'
import { FeaturedProjects } from '@/components/home/featured-projects'
import { Industries } from '@/components/home/industries'
import { ProcessTimeline } from '@/components/home/process-timeline'
import { Clients } from '@/components/home/clients'
import { Testimonials } from '@/components/home/testimonials'
import { MediaPreview } from '@/components/home/media-preview'
import { BlogPreview } from '@/components/home/blog-preview'
import { Cta } from '@/components/home/cta'
import { ProfileViewer } from '@/components/home/profile-viewer'

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
      <MediaPreview />
      <BlogPreview />
      <Cta />
      <ProfileViewer />
    </>
  )
}
