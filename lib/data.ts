// ---------------------------------------------------------------------------
// FocusOn Interiors — central content store.
// Every entry below is migrated 1:1 from the live site focusoninteriors.com
// (pages: /, /about, /team, /projects, /services, /media, /blog, /career,
// /contact). Do not invent data — placeholders are marked [NEEDS CONTENT].
// ---------------------------------------------------------------------------

const WP = 'https://focusoninteriors.com/wp-content/uploads'

export const company = {
  name: 'FocusOn Interiors',
  legalName: 'FocusOn Interior Decorators Pvt. Ltd.',
  tagline: 'Spaces Styled, Stories Told',
  heroTitle: 'WE ARE STYLISTS OF MODERN-DAY SPACES',
  heroSubtitle:
    'Design, Build, and Style. We transform interiors into curated experiences.',
  intro:
    'From bold ideas to beautiful spaces, we turn every project into a love story of design and detail.',
  copyright: 'Copyright: © 2026 FocusOn Interiors: Spaces Styled, Stories Told',
}

export const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/team', label: 'Team' },
  { href: '/projects', label: 'Projects' },
  { href: '/services', label: 'Services' },
  { href: '/media', label: 'Media' },
  { href: '/blog', label: 'Blog' },
  { href: '/career', label: 'Career' },
  { href: '/contact', label: 'Contact' },
]

export const stats = [
  { value: 15, suffix: 'M+', label: 'Sq. Ft. of Delivered Area' },
  { value: 300, suffix: '+', label: 'Projects' },
  { value: 8, suffix: '+', label: 'Years of Excellence' },
  { value: 250, suffix: '+', label: 'People in Our Company' },
  { value: 99, suffix: '%', label: 'Happy Customers' },
]

export const whyChooseUs = [
  {
    title: 'In-House Execution',
    description:
      'Structural interventions to finishing touches are handled end to end under one roof.',
  },
  {
    title: 'Stylist-Led Vision',
    description:
      'Every project is curated with elegance, coherence, and craft.',
  },
  {
    title: 'Seamless Experience',
    description:
      'One point of contact, one workflow, and one delivered vision.',
  },
]

export const services = [
  {
    title: 'Design-Build & General Contracting',
    description:
      'We integrate both design vision and structural execution to ensure cohesive spaces from foundation to finish.',
  },
  {
    title: 'Interior Fit-Outs and Interior Contracts',
    description:
      'Full-scale interiors for residential, corporate, hospitality, and retail spaces. Furniture, lighting, joinery, and finishes are executed with intentional style.',
  },
  {
    title: 'Remodeling, Renovations, and Refurbishment',
    description:
      'Transform existing spaces with refreshed layouts, materials, and finishes while maintaining harmony with the architecture.',
  },
  {
    title: 'Project Management and Execution Oversight',
    description:
      'Our in-house team manages procurement, quality control, scheduling, site supervision, and post-handover service to ensure seamless delivery.',
  },
  {
    title: 'Construction Works',
    description:
      'Structural changes and build-outs executed with precision, ensuring aesthetics and function are fully integrated.',
  },
]

export const process = [
  {
    step: '01',
    title: 'Discover and Ideate',
    description:
      'We listen, observe, and absorb your vision to shape the initial concept.',
  },
  {
    step: '02',
    title: 'Define the Vision',
    description:
      "Mood boards, spatial studies, and material direction establish your project's unique language.",
  },
  {
    step: '03',
    title: 'Design Development',
    description:
      'Layouts, lighting, finishes, and furniture are refined to create a cohesive plan.',
  },
  {
    step: '04',
    title: 'Procurement and Execution',
    description:
      'We source, manage delivery, and oversee installations with precision and care.',
  },
  {
    step: '05',
    title: 'Styling and Final Reveal',
    description:
      'The finishing touches, including artworks, objects, and accessories, bring the vision to life.',
  },
]

export const industries = [
  'Corporate Offices',
  'Logistics',
  'Industrial Spaces',
  'Educational Institutes',
  'Healthcare',
  "NBFC's",
  'Retail Brands',
]

export type Project = {
  slug: string
  client: string
  area: string
  location: string
  city: string
  category: 'Corporate Office' | 'NBFC' | 'Industrial' | 'Educational'
  cover: string
  images: { src: string; caption: string }[]
}

export const projects: Project[] = [
  {
    slug: 'luminous-power-haridwar',
    client: 'Luminous Power Technology Pvt. Ltd.',
    area: '45,000 SQFT',
    location: 'Haridwar',
    city: 'Haridwar',
    category: 'Industrial',
    cover: `${WP}/2025/12/Luminous-scaled.png`,
    images: [
      { src: `${WP}/2025/12/7-1.png`, caption: 'Haridwar' },
      { src: `${WP}/2025/12/8.png`, caption: 'Haridwar' },
      { src: `${WP}/2025/12/9.png`, caption: 'Haridwar' },
      { src: `${WP}/2025/12/10.png`, caption: 'Haridwar' },
      { src: `${WP}/2026/05/Luminous8-scaled.webp`, caption: 'Haridwar' },
      { src: `${WP}/2026/05/Luminous21-scaled.webp`, caption: 'Haridwar' },
      { src: `${WP}/2026/05/Luminous22-scaled.webp`, caption: 'Haridwar' },
      { src: `${WP}/2026/05/Luminous28-scaled.jpg`, caption: 'Haridwar' },
      { src: `${WP}/2026/05/Luminous25-scaled.jpg`, caption: 'Haridwar' },
    ],
  },
  {
    slug: 'lt-finance-navi-mumbai',
    client: 'L&T Finance Limited',
    area: '125,000 SQFT',
    location: 'Navi Mumbai',
    city: 'Mumbai',
    category: 'NBFC',
    cover: `${WP}/2025/12/LT-finance-Mahape-scaled.png`,
    images: [
      { src: `${WP}/2025/12/13.png`, caption: 'Mahape' },
      { src: `${WP}/2025/12/15-1.png`, caption: 'Mahape' },
      { src: `${WP}/2025/12/11.png`, caption: 'Mahape' },
      { src: `${WP}/2025/12/12.png`, caption: 'Mahape' },
      { src: `${WP}/2025/12/14.png`, caption: 'Mahape' },
    ],
  },
  {
    slug: 'emviersity-kochi',
    client: 'Emviersity Beyonds Odds Technology Pvt. Ltd.',
    area: '55,000 SQFT',
    location: 'Kochi',
    city: 'Kochi',
    category: 'Educational',
    cover: `${WP}/2025/12/Emversity-scaled.png`,
    images: [
      { src: `${WP}/2025/12/28.png`, caption: 'Kochi' },
      { src: `${WP}/2025/12/29-1.png`, caption: 'Kochi' },
      { src: `${WP}/2025/12/24.png`, caption: 'Kochi' },
      { src: `${WP}/2025/12/25.png`, caption: 'Kochi' },
    ],
  },
  {
    slug: 'lt-finance-bangalore',
    client: 'L&T Finance Limited',
    area: '25,000 SQFT',
    location: 'Bangalore',
    city: 'Bengaluru',
    category: 'NBFC',
    cover: `${WP}/2026/02/LTFinanceBangaluru.png`,
    images: [
      { src: `${WP}/2026/03/DSC_8911-HDR-scaled.jpg`, caption: 'Bengaluru' },
      { src: `${WP}/2026/03/DSC_8672-HDR-scaled.jpg`, caption: 'Bengaluru' },
      { src: `${WP}/2026/03/DSC_8630-HDR-scaled.jpg`, caption: 'Bengaluru' },
      { src: `${WP}/2026/03/DSC_8562-HDR-scaled.jpg`, caption: 'Bengaluru' },
    ],
  },
  {
    slug: 'ericsson-ahmedabad',
    client: 'Ericsson',
    area: '3,500 SQFT',
    location: 'Ahmedabad',
    city: 'Ahmedabad',
    category: 'Corporate Office',
    cover: `${WP}/2026/02/Group-14-1-scaled.png`,
    images: [
      { src: `${WP}/2026/02/KRN06569-HDR.jpg`, caption: 'Ahmedabad' },
      { src: `${WP}/2026/02/KRN06614-HDR.jpg`, caption: 'Ahmedabad' },
      { src: `${WP}/2026/02/KRN06692-HDR.jpg`, caption: 'Ahmedabad' },
      { src: `${WP}/2026/02/KRN06722-HDR.jpg`, caption: 'Ahmedabad' },
    ],
  },
  {
    slug: 'centricity-mumbai',
    client: 'Centricity',
    area: '3,500 SQFT',
    location: 'Mumbai',
    city: 'Mumbai',
    category: 'Corporate Office',
    cover: `${WP}/2026/03/Centricity-Mumbai-scaled.png`,
    images: [
      {
        src: `${WP}/2026/02/Focuson-Interiors-13-1-scaled.jpg`,
        caption: 'Mumbai',
      },
      {
        src: `${WP}/2026/02/Focuson-Interiors-16-1-scaled.jpg`,
        caption: 'Mumbai',
      },
      {
        src: `${WP}/2026/02/Focuson-Interiors-1-1-scaled.jpg`,
        caption: 'Mumbai',
      },
      {
        src: `${WP}/2026/02/Focuson-Interiors-4-1-scaled.jpg`,
        caption: 'Mumbai',
      },
    ],
  },
  {
    slug: 'centricity-gurugram',
    client: 'Centricity',
    area: '8,000 SQFT',
    location: 'Gurugram',
    city: 'Gurugram',
    category: 'Corporate Office',
    cover: `${WP}/2026/03/Centricity-Gurugram-scaled.png`,
    images: [
      { src: `${WP}/2026/03/MAK_0025-1-scaled.jpg`, caption: 'Gurugram' },
      { src: `${WP}/2026/03/MAK_0114-1-scaled.jpg`, caption: 'Gurugram' },
      { src: `${WP}/2026/03/MAK_0175-scaled.jpg`, caption: 'Gurugram' },
      { src: `${WP}/2026/03/MAK_0198-1-1-scaled.jpg`, caption: 'Gurugram' },
      { src: `${WP}/2026/05/DSC_9164-HDR-scaled.webp`, caption: 'Gurugram' },
      { src: `${WP}/2026/05/DSC_9098-HDR-scaled.webp`, caption: 'Gurugram' },
      { src: `${WP}/2026/05/DSC_8932-HDR-scaled.webp`, caption: 'Gurugram' },
      { src: `${WP}/2026/05/DSC_8782-HDR-scaled.webp`, caption: 'Gurugram' },
      { src: `${WP}/2026/05/DSC_8728-HDR-scaled.jpg`, caption: 'Gurugram' },
      { src: `${WP}/2026/05/DSC_8703-HDR-scaled.jpg`, caption: 'Gurugram' },
    ],
  },
  {
    slug: 'navu-bengaluru',
    client: 'Navu',
    area: '3,500 SQFT',
    location: 'Bengaluru',
    city: 'Bengaluru',
    category: 'Corporate Office',
    cover: `${WP}/2026/03/Navu-Bangaluru-scaled.png`,
    images: [
      { src: `${WP}/2026/03/Navu-1-scaled.jpg`, caption: 'Bengaluru' },
      { src: `${WP}/2026/03/Navu-7-scaled.jpg`, caption: 'Bengaluru' },
      { src: `${WP}/2026/03/Navu-11-scaled.jpg`, caption: 'Bengaluru' },
      { src: `${WP}/2026/03/1-2.png`, caption: 'Bengaluru' },
      { src: `${WP}/2026/03/2-2.png`, caption: 'Bengaluru' },
      { src: `${WP}/2026/03/3-2.png`, caption: 'Bengaluru' },
      { src: `${WP}/2026/03/4-2.png`, caption: 'Bengaluru' },
      { src: `${WP}/2026/03/5-2.png`, caption: 'Bengaluru' },
      { src: `${WP}/2026/03/6-2.png`, caption: 'Bengaluru' },
      { src: `${WP}/2026/03/7-2.png`, caption: 'Bengaluru' },
    ],
  },
]

export const clientele = {
  description:
    'Over the years, we have partnered with some of the most respected names across industries. Our clients trust us to deliver spaces that reflect their vision, values, and lifestyle.',
  sectors:
    "Corporate Offices, Logistics, Industrial Spaces, Educational Institutes, Healthcare, NBFC's, Retail Brands",
  names: [
    'L&T Finance Limited',
    'Luminous Power Technology',
    'Ericsson',
    'Centricity',
    'Emviersity Beyonds Odds Technology',
    'Navu',
    'Groww',
    'Postcard',
  ],
  logos: [
    { src: `${WP}/2025/12/19-1-150x150.png`, alt: 'Client logo' },
    { src: `${WP}/2025/12/21-1-150x150.png`, alt: 'Client logo' },
    { src: `${WP}/2025/12/26-1-150x150.png`, alt: 'Client logo' },
    { src: `${WP}/2025/12/27-1-150x150.png`, alt: 'Client logo' },
    { src: `${WP}/2025/12/51-150x150.png`, alt: 'Client logo' },
    { src: `${WP}/2025/12/52-150x150.png`, alt: 'Client logo' },
    { src: `${WP}/2025/12/53-150x150.png`, alt: 'Client logo' },
    { src: `${WP}/2025/12/56-150x150.png`, alt: 'Client logo' },
    { src: `${WP}/2025/12/77-150x150.png`, alt: 'Client logo' },
    { src: `${WP}/2025/12/90-150x150.png`, alt: 'Client logo' },
    { src: `${WP}/2025/12/Untitled-design-9-150x150.png`, alt: 'Client logo' },
    {
      src: `${WP}/2025/12/Untitled-design-1-2-150x150.png`,
      alt: 'Client logo',
    },
    {
      src: `${WP}/2025/12/Untitled-design-2-2-150x150.png`,
      alt: 'Client logo',
    },
    { src: `${WP}/2025/12/groww-150x150.png`, alt: 'Groww logo' },
    { src: `${WP}/2025/12/postcard-150x150.png`, alt: 'Postcard logo' },
    { src: `${WP}/2026/01/1.png`, alt: 'Client logo' },
    { src: `${WP}/2026/01/2.png`, alt: 'Client logo' },
    { src: `${WP}/2026/01/3.png`, alt: 'Client logo' },
    { src: `${WP}/2026/01/4.png`, alt: 'Client logo' },
  ],
}

export const testimonials = [
  {
    quote:
      'FocusOn Interiors delivered the project with meticulous planning and seamless coordination, ensuring timely completion and adherence to quality benchmarks.',
    author: 'L&T Finance, Mumbai',
  },
  {
    quote:
      'Fantastic work by the entire team. The execution has been top-notch, and the client is truly impressed with the outcome. Your efforts and dedication have clearly paid off. The client is very happy with the quality of the project. Great job, team, and thank you to the whole team for the support.',
    author: 'Ericsson, Ahmedabad',
  },
  {
    quote:
      'FocusOn Interior delivered strong execution and professionalism throughout the project. The team demonstrated excellent responsiveness and maintained high standards of quality, making them a reliable partner for future projects.',
    author: 'Pragratiware Housing, Chennai',
  },
]

export const team = {
  intro:
    'Focused, experienced, and collaborative, our leadership team drives every project to perfection across India.',
  groupPhoto: `${WP}/2026/03/Team-picture-focus-on-1-2-e1774966015395.png`,
  leadership: [
    {
      name: 'Raja Khan',
      role: 'Chairman',
      photo: `${WP}/2025/12/4-2048x934.png`,
      tagline: 'Visionary Entrepreneur',
      description:
        'Visionary entrepreneur with sharp business acumen and fearless growth mindset. Driving FocusOn Interiors to new heights, combining practical wisdom with a relentless commitment to quality, innovation, & client satisfaction.',
    },
    {
      name: 'Shanu Khan',
      role: 'Founder',
      photo: `${WP}/2025/12/2-1-scaled.png`,
      tagline: 'Bold Decision-Maker',
      description:
        "Bold decision-maker with unwavering confidence, focused on expanding the company's footprint. Empowers teams and fosters collaboration to achieve collective success.",
    },
  ],
  senior: [
    {
      name: 'Azim Khan',
      role: 'Chief Executive Officer',
      photo: `${WP}/2026/01/4-1.png`,
      tagline: 'Chief Executive Officer',
      description:
        'Drives sustainable growth, client satisfaction, and cross-department collaboration.',
    },
    {
      name: 'Nadeem Khan',
      role: 'Director',
      photo: `${WP}/2026/01/5.png`,
      tagline: 'Director',
      description:
        'Manages the workforce with discipline and harmony, ensuring smooth operations and productivity.',
    },
    {
      name: 'Atif Khan',
      role: 'Director',
      photo: `${WP}/2026/01/3-1.png`,
      tagline: 'Director',
      description:
        'Oversees project delivery, ensures quality standards, and strengthens client partnerships.',
    },
    {
      name: 'Sarim Khan',
      role: 'Project Director',
      photo: `${WP}/2026/01/Untitled-design-3.png`,
      tagline: 'Project Director',
      description:
        'Ensures projects are delivered with precision, timeliness, and excellence.',
    },
  ],
}

export type MediaItem = {
  title: string
  excerpt: string
  href: string
  image?: string
  source: string
}

export const media: MediaItem[] = [
  {
    title: 'Crafting Workspaces That Work',
    excerpt: "Inside FocusOn's path to market leadership.",
    href: 'https://startuptalky.com/focuson-interiors-success-story/',
    image: `${WP}/2025/12/Screenshot-2025-12-11-at-11.16.29-PM-1-2048x1263.png`,
    source: 'StartupTalky',
  },
  {
    title: 'FocusOn Interiors: Designing the Future of Workspaces',
    excerpt:
      'Where sustainability and technology come together for employee wellbeing.',
    href: 'https://www.bhaskarhindi.com/real%20estate/the-future-environment-where-environmental-balance-and-technology-converge-to-drive-employee-well-being-1216978',
    image: `${WP}/2025/12/2-2048x2048.png`,
    source: 'Bhaskar Hindi',
  },
  {
    title:
      'When creativity meets code – The rise of smart office technology in office design',
    excerpt: 'The modern workplace is no longer defined by fixed desks.',
    href: 'https://www.commercialdesignindia.com/insights/smart-office-technology',
    image: `${WP}/2025/12/Untitled-design-14-2048x2048.png`,
    source: 'Commercial Design India',
  },
  {
    title: 'Redefining Workspaces, One Purpose-Built Environment at a Time',
    excerpt:
      "How FocusOn is championing India's new era of functional, experience-driven fit-outs.",
    href: 'https://www.businessworld.in/article/beyond-aesthetics-how-india-s-fit-out-industry-is-quietly-redesigning-work-itself-579306',
    image: `${WP}/2025/12/Screenshot-2025-11-13-at-4.10.07-PM.png`,
    source: 'BW Businessworld',
  },
  {
    title: 'Blend of environmental sustainability and technology',
    excerpt:
      "How FocusOn is championing India's new era of functional, experience-driven fit-outs.",
    href: 'https://www.bhaskarhindi.com/real%20estate/the-future-environment-where-environmental-balance-and-technology-converge-to-drive-employee-well-being-1216978',
    image: `${WP}/2026/01/Untitled-design-1-1.png`,
    source: 'Bhaskar Hindi',
  },
  {
    title:
      'Strengthens Market Position with the acquisition of Riya Enterprises',
    excerpt: "Inside FocusOn's path to market leadership.",
    href: 'https://www.business-standard.com/amp/content/press-releases-ani/focuson-interiors-strengthens-market-position-with-the-acquisition-of-riya-enterprises-125121700513_1.html',
    image: `${WP}/2026/01/www.business-standard.com_amp_content_press-releases-ani_focuson-interiors-strengthens-market-position-with-the-acquisition-of-riya-enterprises-125121700513_1.html.png`,
    source: 'Business Standard',
  },
  {
    title:
      'Strengthens Market Position with the acquisition of Riya Enterprises',
    excerpt:
      'Where sustainability and technology come together for employee wellbeing.',
    href: 'https://www.tribuneindia.com/news/business/focuson-interiors-strengthens-market-position-with-the-acquisition-of-riya-enterprises/',
    image: `${WP}/2026/01/www.tribuneindia.com_news_business_focuson-interiors-strengthens-market-position-with-the-acquisition-of-riya-enterprises_.png`,
    source: 'The Tribune',
  },
  {
    title:
      'Strengthens Market Position with the acquisition of Riya Enterprises',
    excerpt: "Inside FocusOn's path to market leadership.",
    href: 'https://www.lokmattimes.com/business/focuson-interiors-strengthens-market-position-with-the-acquisition-of-riya-enterprises/',
    image: `${WP}/2026/01/www.lokmattimes.com_business_focuson-interiors-strengthens-market-position-with-the-acquisition-of-riya-enterprises_.png`,
    source: 'Lokmat Times',
  },
  {
    title:
      'Strengthens Market Position with the acquisition of Riya Enterprises',
    excerpt:
      "How FocusOn is championing India's new era of functional, experience-driven fit-outs.",
    href: 'https://www.latestly.com/agency-news/business-news-focuson-interiors-strengthens-market-position-with-the-acquisition-of-riya-enterprises-7241916.html',
    image: `${WP}/2026/01/www.latestly.com_agency-news_business-news-focuson-interiors-strengthens-market-position-with-the-acquisition-of-riya-enterprises-7241916.html.png`,
    source: 'LatestLY',
  },
  {
    title:
      'Strengthens Market Position with the acquisition of Riya Enterprises',
    excerpt: "Inside FocusOn's path to market leadership.",
    href: 'https://karnatakanewsnetwork.in/focuson-interiors-strengthens-market-position-with-the-acquisition-of-riya-enterprises/',
    image: `${WP}/2026/01/karnatakanewsnetwork.in_focuson-interiors-strengthens-market-position-with-the-acquisition-of-riya-enterprises_.png`,
    source: 'Karnataka News Network',
  },
  {
    title:
      'Strengthens Market Position with the acquisition of Riya Enterprises',
    excerpt:
      'Where sustainability and technology come together for employee wellbeing.',
    href: 'https://keralanewsjournal.in/focuson-interiors-strengthens-market-position-with-the-acquisition-of-riya-enterprises/',
    image: `${WP}/2026/01/keralanewsjournal.in_focuson-interiors-strengthens-market-position-with-the-acquisition-of-riya-enterprises_.png`,
    source: 'Kerala News Journal',
  },
  {
    title:
      'Strengthens Market Position with the acquisition of Riya Enterprises',
    excerpt: "Inside FocusOn's path to market leadership.",
    href: 'https://odishanewsvoice.in/focuson-interiors-strengthens-market-position-with-the-acquisition-of-riya-enterprises/',
    image: `${WP}/2026/01/odishanewsvoice.in_focuson-interiors-strengthens-market-position-with-the-acquisition-of-riya-enterprises_.png`,
    source: 'Odisha News Voice',
  },
  {
    title: 'Transform Corporate and Industrial Space Design',
    excerpt:
      'Where sustainability and technology come together for employee wellbeing.',
    href: 'https://urbanacres.in/focuson-interiors-acquires-riya-enterprises-to-transform-corporate-and-industrial-space-design/',
    image: `${WP}/2026/01/urbanacres.in_focuson-interiors-acquires-riya-enterprises-to-transform-corporate-and-industrial-space-design_.png`,
    source: 'Urban Acres',
  },
  {
    title: "How Data, Design and Technology Are Reshaping India's Workplaces",
    excerpt: "Inside FocusOn's path to market leadership.",
    href: 'https://www.homesindiamagazine.com/viewpoint/how-data-design-and-technology-are-reshaping-india-s-workplaces-nwid-6504.html',
    image: `${WP}/2026/01/www.homesindiamagazine.com_viewpoint_how-data-design-and-technology-are-reshaping-india-s-workplaces-nwid-6504.html.png`,
    source: 'Homes India Magazine',
  },
  {
    title: 'FocusOn Interiors names Azim Khan as CEO',
    excerpt:
      "Azim Khan has been instrumental in FocusOn Interiors' evolution into a pan-India workplace and industrial interior solutions provider.",
    href: 'https://www.medianews4u.com/focuson-interiors-names-azim-khan-as-ceo/',
    image: `${WP}/2026/04/unnamed-2.png`,
    source: 'MediaNews4U',
  },
  {
    title: 'FocusOn Interiors appoints Azim Khan as Chief Executive Officer',
    excerpt: 'Azim has fostered long-term partnerships through his tenure.',
    href: 'https://karnatakanewsnetwork.in/focuson-interiors-strengthens-market-position-with-the-acquisition-of-riya-enterprises/',
    image: `${WP}/2026/04/unnamed-1-1.png`,
    source: 'Karnataka News Network',
  },
  {
    title:
      'FocusOn Interiors Decorators appoints Azim Khan as Chief Executive Officer',
    excerpt: 'Azim has fostered long-term partnerships.',
    href: 'https://www.commercialdesignindia.com/insights/focuson-interiors-decorators-appoints-azim-khan-as-chief-executive-officer',
    image: `${WP}/2026/04/unnamed-3.png`,
    source: 'Commercial Design India',
  },
  {
    title: 'FocusOn Interiors Appoints Azim Khan as CEO',
    excerpt: 'Azim is a result-oriented person with a strong track record.',
    href: 'https://architectureupdate.in/focuson-interiors-appoints-azim-khan-as-ceo/',
    image: `${WP}/2026/04/unnamed-4.png`,
    source: 'Architecture Update',
  },
  {
    title: 'FocusOn Interiors Names Azim Khan CEO to Drive National Expansion',
    excerpt: 'FocusOn Interiors Decorators Pvt. Ltd.',
    href: 'https://www.rprealtyplus.com/article/focuson-interiors-names-azim-khan-ceo-to-drive-national-expansion-123855.html',
    image: `${WP}/2026/04/unnamed-5.png`,
    source: 'Realty Plus',
  },
  {
    title:
      'FocusOn Interiors Appoints Azim Khan as CEO to Spearhead the Next Phase of Growth',
    excerpt: 'Azim has fostered long-term partnerships.',
    href: 'https://businessnewsforprofit.com/business/focuson-interiors-appoints-azim-khan-as-ceo-to-spearhead-the-next-phase-of-growth/',
    image: `${WP}/2026/04/Screenshot-2026-04-11-112656.png`,
    source: 'Business News For Profit',
  },
  {
    title:
      'FocusOn Interiors Appoints Azim Khan as CEO to Spearhead the Next Phase of Growth',
    excerpt: 'Under his leadership, FocusOn Interior aims to scale nationally.',
    href: 'https://mediabulletins.com/business/focuson-interiors-appoints-azim-khan-as-ceo-to-spearhead-the-next-phase-of-growth/',
    image: `${WP}/2026/04/Screenshot-2026-04-11-113113.png`,
    source: 'Media Bulletins',
  },
  {
    title:
      'FocusOn Interiors Appoints Azim Khan as CEO to Spearhead the Next Phase of Growth',
    excerpt: 'Azim is a result-oriented person with a strong track record.',
    href: 'https://biznewsdesk.com/business/focuson-interiors-appoints-azim-khan-as-ceo-to-spearhead-the-next-phase-of-growth/',
    image: `${WP}/2026/04/Screenshot-2026-04-11-113343.png`,
    source: 'Biz News Desk',
  },
  {
    title:
      'FocusOn Interiors Appoints Azim Khan as CEO to Spearhead the Next Phase of Growth',
    excerpt: 'New Delhi, Jan 27: FocusOn Interiors Decorators Pvt. Ltd.',
    href: 'https://onlinemediacafe.com/business/focuson-interiors-appoints-azim-khan-as-ceo-to-spearhead-the-next-phase-of-growth/',
    image: `${WP}/2026/04/Screenshot-2026-04-11-120355.png`,
    source: 'Online Media Cafe',
  },
  {
    title: 'FocusOn Interiors Names Azim Khan CEO to Drive National Expansion',
    excerpt: 'FocusOn Interiors has appointed Azim Khan as CEO.',
    href: 'https://www.interiors-now.com/article/140828/focuson-interiors-names-azim-khan-ceo-to-drive-national-expansion',
    image: `${WP}/2026/04/Screenshot-2026-04-11-120747.png`,
    source: 'Interiors Now',
  },
  {
    title:
      "FocusOn Interiors' Strategic Pivot: From Design Studio to Delivery-Led Solutions Firm",
    excerpt: "India's commercial interiors industry is evolving.",
    href: 'https://www.lokmattimes.com/business/focuson-interiors-strategic-pivot-from-design-studio-to-delivery-led-solutions-firm-a475/',
    image: `${WP}/2026/04/unnamed-1-2.png`,
    source: 'Lokmat Times',
  },
  {
    title:
      'Republic Day 2026: Indian Leaders Driving the Vision of a Stronger Bharat',
    excerpt: 'As India celebrates its 77th Republic Day.',
    href: 'https://www.mid-day.com/buzz/article/republic-day-2026-indian-leaders-driving-the-vision-of-a-stronger-bharat-8716',
    image: `${WP}/2026/04/Screenshot-2026-04-11-122229.png`,
    source: 'Mid-Day',
  },
  {
    title:
      'From Walls to Ceilings: How Colour Quietly Rewired the Modern Office',
    excerpt: 'For much of corporate history, colour was an afterthought.',
    href: 'https://architectureupdate.in/from-walls-to-ceilings-how-colour-quietly-rewired-the-modern-office/',
    image: `${WP}/2026/04/unnamed-2-1.png`,
    source: 'Architecture Update',
  },
  {
    title:
      'The Role of Technology in Interior Design: From VR to AI-Driven Space Planning',
    excerpt: 'From immersive virtual walkthroughs to AI-driven planning.',
    href: 'https://www.siliconindia.com/news/general/the-role-of-technology-in-interior-design-from-vr-to-aidriven-space-planning-nid-239637-cid-1.html',
    image: `${WP}/2026/04/unnamed-3-1.png`,
    source: 'SiliconIndia',
  },
  {
    title:
      'When creativity meets code – The rise of smart office technology in office design',
    excerpt: 'The modern workplace is no longer defined by fixed layouts.',
    href: 'https://www.commercialdesignindia.com/insights/smart-office-technology',
    image: `${WP}/2026/04/unnamed-4-1.png`,
    source: 'Commercial Design India',
  },
]

export type BlogPost = {
  title: string
  excerpt: string
  href: string
  image: string
}

export const blogPosts: BlogPost[] = [
  {
    title: "Your guide to 2026's most anticipated design trends",
    excerpt:
      'In 2026, office interiors are becoming more human-centric, sustainable, flexible, and technology-driven than ever before.',
    href: 'https://focusoninteriors.com/your-guide-to-2026s-most-anticipated-design-trends/',
    image: `${WP}/2026/05/Your-guide-to-2026s-most-anticipated-design-trends.webp`,
  },
  {
    title: 'Checklist for Planning Your Office Interior Project',
    excerpt:
      'A well-planned office interior project can improve productivity, enhance brand image, and optimize daily operations. At FocusOn Interiors, we believe that successful corporate office interior design begins with a clear, strategic checklist.',
    href: 'https://focusoninteriors.com/checklist-for-planning-your-office-interior-project/',
    image: `${WP}/2026/05/Checklist-for-Planning-Your-Office-Interior-Project.webp`,
  },
  {
    title: 'Importance of Ergonomics in Office Interior Design',
    excerpt:
      "Ergonomics is the science of designing workspaces that fit the user's needs. When applied correctly in modern office interior design, it can significantly improve efficiency, reduce health issues, and create a more engaging work environment.",
    href: 'https://focusoninteriors.com/importance-of-ergonomics-in-office-interior-design/',
    image: `${WP}/2026/05/Importance-of-Ergonomics-in-Office-Interior-Design.webp`,
  },
  {
    title: 'Sustainable Office Interiors: The Future of Workspaces',
    excerpt:
      'Today, businesses are shifting towards sustainable office interiors that prioritize environmental responsibility, employee well-being, and long-term cost efficiency. What was once a trend is now becoming a necessity.',
    href: 'https://focusoninteriors.com/sustainable-office-interiors-the-future-of-workspaces/',
    image: `${WP}/2026/05/Sustainable-Office-Interiors-The-Future-of-Workspaces.webp`,
  },
  {
    title: 'Small Office Interior Design Ideas That Maximize Space',
    excerpt:
      "Designing a small office is not about limitations – it's about smart creativity and efficient planning. With the right approach, even a compact workspace can feel spacious, functional, and premium.",
    href: 'https://focusoninteriors.com/small-office-interior-design-ideas-that-maximize-space/',
    image: `${WP}/2026/04/Small-Office-Interior-Design-Ideas-That-Maximize-Space.webp`,
  },
  {
    title: 'Corporate Office Interior Design: Trends & Best Practices',
    excerpt:
      "In today's fast-evolving business landscape, corporate office interior design is no longer just about desks and chairs—it's about creating productive, inspiring, and brand-driven environments.",
    href: 'https://focusoninteriors.com/corporate-office-interior-design-trends-best-practices/',
    image: `${WP}/2026/04/Corporate-Office-Interior-Design-Trends-Best-Practices.webp`,
  },
  {
    title: 'Budget vs Premium Office Interiors: What Should You Choose',
    excerpt:
      "Premium office interiors are all about quality, brand identity, and experience. These spaces are designed to reflect your company's values and leave a lasting impression.",
    href: 'https://focusoninteriors.com/budget-vs-premium-office-interiors-what-should-you-choose/',
    image: `${WP}/2026/04/Budget-vs-Premium-Office-Interiors-What-Should-You-Choose.webp`,
  },
  {
    title:
      'The Future of Workspaces: Where Sustainability, Technology, and Human Wellness Converge',
    excerpt:
      'The modern workplace is going through a major transformation. Offices today are no longer just functional spaces with desks, meeting rooms, and workstations.',
    href: 'https://focusoninteriors.com/the-future-of-workspaces-where-sustainability-technology-and-human-wellness-converge/',
    image: `${WP}/2026/04/The-Future-of-Workspaces-Where-Sustainability-Technology-and-Human-Wellness-Converge.png`,
  },
  {
    title: 'How Technology is Enhancing the Creative World of Office Interiors',
    excerpt:
      'The modern workplace is no longer just a physical setting where work happens: it has become a technology-enhanced ecosystem that reflects organizational culture, employee well-being, and operational efficiency.',
    href: 'https://focusoninteriors.com/how-technology-is-enhancing-the-creative-world-of-office-interiors/',
    image: `${WP}/2026/04/How-Technology-is-Enhancing-the-Creative-World-of-Office-Interiors.webp`,
  },
  {
    title:
      'From Walls to Ceilings: Creative Uses of Color in Modern Office Interiors',
    excerpt:
      "In today's modern workplace, color is no longer a finishing touch added at the end of a design process. It has become a strategic tool—one that influences productivity, supports brand identity, and shapes how employees experience the workplace on a daily basis.",
    href: 'https://focusoninteriors.com/from-walls-to-ceilings-creative-uses-of-color-in-modern-office-interiors/',
    image: `${WP}/2026/04/From-Walls-to-Ceilings-Creative-Uses-of-Color-in-Modern-Office-Interiors.png`,
  },
]

export const career = {
  title: 'Join The FocusOn Team',
  intro:
    'We are always looking for passionate designers, project managers, and thinkers who want to create impact through design.',
  resumeEmail: 'admin.head@focusoninterior.in',
  resumeNote: "Can't find a suitable position? Send us your resume.",
  // The live site currently lists placeholder openings only
  // ("DESIGNATION NAME | LOCATION | REMOTE/ONSITE | START DATE").
  openings: [] as { title: string; location: string; type: string }[],
}

export const contact = {
  email: 'info@focusoninterior.in',
  phones: [
    { label: '+91 011 4928 7589', href: 'tel:01149287589' },
    { label: '+91 99 1025 8820', href: 'tel:9910258820' },
  ],
  whatsapp:
    'https://wa.me/919910258820?text=Hi%20FocusOn%20Interiors%2C%20I%20would%20like%20to%20discuss%20my%20interior%20design%20project.',
  address: 'UN- 150, Near Shiv Mandir, Sikanderpur, Gurugram, 122002',
  mapsUrl:
    'https://www.google.com/maps/place/h,+150,+Shiv+Mandir+Marg,+Block+H,+DLF+Phase+1,+Sector+26,+Gurugram,+Haryana+122002/@28.4812721,77.0976949,1273m/data=!3m1!1e3!4m5!3m4!1s0x390d192c05e16c4f:0x8488805df6e19a8a!8m2!3d28.4803072!4d77.0974478',
}
