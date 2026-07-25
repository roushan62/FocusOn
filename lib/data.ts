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
      photo: '/images/raja-khan.png',
      photoAspect: 'aspect-[21/10]',
      tagline: 'Visionary Entrepreneur',
      description:
        'Visionary entrepreneur with sharp business acumen and fearless growth mindset. Driving FocusOn Interiors to new heights, combining practical wisdom with a relentless commitment to quality, innovation, & client satisfaction.',
    },
    {
      name: 'Shanu Khan',
      role: 'Founder',
      photo: '/images/shanu-khan.png',
      photoAspect: 'aspect-[21/10]',
      tagline: 'Bold Decision-Maker',
      description:
        "Bold decision-maker with unwavering confidence, focused on expanding the company's footprint. Empowers teams and fosters collaboration to achieve collective success.",
    },
  ],
  senior: [
    {
      name: 'Azim Khan',
      role: 'Chief Executive Officer',
      photo: '/images/azim-khan.png',
      photoAspect: 'aspect-[9/16]',
      tagline: 'Chief Executive Officer',
      description:
        'Drives sustainable growth, client satisfaction, and cross-department collaboration.',
    },
    {
      name: 'Nadeem Khan',
      role: 'Director',
      photo: '/images/nadeem-khan.png',
      photoAspect: 'aspect-[9/16]',
      tagline: 'Director',
      description:
        'Manages the workforce with discipline and harmony, ensuring smooth operations and productivity.',
    },
    {
      name: 'Atif Khan',
      role: 'Director',
      photo: '/images/atif-khan.png',
      photoAspect: 'aspect-[9/16]',
      tagline: 'Director',
      description:
        'Oversees project delivery, ensures quality standards, and strengthens client partnerships.',
    },
    {
      name: 'Sarim Khan',
      role: 'Project Director',
      photo: '/images/sarim-khan.png',
      photoAspect: 'aspect-[9/16]',
      tagline: 'Project Director',
      description:
        'Ensures projects are delivered with precision, timeliness, and excellence.',
    },
  ],
}

export type MediaItem = {
  slug: string
  title: string
  excerpt: string
  href: string
  image?: string
  source: string
  content: string
  originalHref?: string
}

export const media: MediaItem[] = [
  {
    slug: 'crafting-workspaces-that-work',
    originalHref: 'https://startuptalky.com/focuson-interiors-success-story/',
    title: 'Crafting Workspaces That Work',
    excerpt: "Inside FocusOn's path to market leadership.",
    href: '/media/crafting-workspaces-that-work',
    image: `${WP}/2025/12/Screenshot-2025-12-11-at-11.16.29-PM-1-2048x1263.png`,
    source: 'StartupTalky',
    content: "FocusOn Interiors has carved a distinct identity in India's competitive commercial interiors market by combining design excellence with robust project management. This feature explores how the company evolved from a small design studio into a pan-India interior solutions provider.\\n\\nKey insights include FocusOn's in-house execution model ensures quality control, the company focuses on understanding client culture before designing, and case studies of transformative workspace projects.",
  },
  {
    slug: 'designing-the-future-of-workspaces',
    originalHref: 'https://www.bhaskarhindi.com/real%20estate/the-future-environment-where-environmental-balance-and-technology-converge-to-drive-employee-well-being-1216978',
    title: 'FocusOn Interiors: Designing the Future of Workspaces',
    excerpt: 'Where sustainability and technology come together for employee wellbeing.',
    href: '/media/designing-the-future-of-workspaces',
    image: `${WP}/2025/12/2-2048x2048.png`,
    source: 'Bhaskar Hindi',
    content: "This comprehensive feature in Bhaskar Hindi examines how FocusOn Interiors is reshaping the commercial interior design landscape in India. The article focuses on three key pillars: sustainability, technology integration, and employee well-being.\\n\\nWith projects spanning across multiple cities, FocusOn demonstrates that well-designed spaces drive business success while promoting environmental stewardship.",
  },
  {
    slug: 'smart-office-technology-rise',
    originalHref: 'https://www.commercialdesignindia.com/insights/smart-office-technology',
    title: 'When creativity meets code \u2013 The rise of smart office technology in office design',
    excerpt: 'The modern workplace is no longer defined by fixed desks.',
    href: '/media/smart-office-technology-rise',
    image: `${WP}/2025/12/Untitled-design-14-2048x2048.png`,
    source: 'Commercial Design India',
    content: "This feature explores how smart office technology is transforming workspace design. From automated lighting and climate control to space utilization analytics, technology is reshaping every aspect of office design.\\n\\nFocusOn Interiors creates workspaces that are not only beautiful but also intelligent and responsive to user needs.",
  },
  {
    slug: 'redefining-workspaces-purpose-built',
    originalHref: 'https://www.businessworld.in/article/beyond-aesthetics-how-india-s-fit-out-industry-is-quietly-redesigning-work-itself-579306',
    title: 'Redefining Workspaces, One Purpose-Built Environment at a Time',
    excerpt: "How FocusOn is championing India's new era of functional, experience-driven fit-outs.",
    href: '/media/redefining-workspaces-purpose-built',
    image: `${WP}/2025/12/Screenshot-2025-11-13-at-4.10.07-PM.png`,
    source: 'BW Businessworld',
    content: "BW Businessworld examines FocusOn's philosophy of creating purpose-built environments. Key highlights include the design-build model, understanding organizational culture in design, and managing complex multi-location projects. FocusOn is positioned as a thought leader in India's commercial interiors industry.",
  },
  {
    slug: 'sustainability-and-technology-blend',
    originalHref: 'https://www.bhaskarhindi.com/real%20estate/the-future-environment-where-environmental-balance-and-technology-converge-to-drive-employee-well-being-1216978',
    title: 'Blend of environmental sustainability and technology',
    excerpt: "How FocusOn is championing India's new era of functional, experience-driven fit-outs.",
    href: '/media/sustainability-and-technology-blend',
    image: `${WP}/2026/01/Untitled-design-1-1.png`,
    source: 'Bhaskar Hindi',
    content: "This article explores FocusOn Interiors' commitment to blending environmental sustainability with cutting-edge technology. Practices include recycled materials, energy-efficient systems, green certifications, and waste reduction, creating workspaces that are responsible and forward-thinking.",
  },
  {
    slug: 'riya-enterprises-acquisition-business-standard',
    originalHref: 'https://www.business-standard.com/amp/content/press-releases-ani/focuson-interiors-strengthens-market-position-with-the-acquisition-of-riya-enterprises-125121700513_1.html',
    title: 'Strengthens Market Position with the acquisition of Riya Enterprises',
    excerpt: "Inside FocusOn's path to market leadership.",
    href: '/media/riya-enterprises-acquisition-business-standard',
    image: `${WP}/2026/01/www.business-standard.com_amp_content_press-releases-ani_focuson-interiors-strengthens-market-position-with-the-acquisition-of-riya-enterprises-125121700513_1.html.png`,
    source: 'Business Standard',
    content: "Business Standard reports on FocusOn Interiors' strategic acquisition of Riya Enterprises. This milestone expands operational capacity, enhances service portfolio, and strengthens FocusOn's position in the Indian interior design market.",
  },
  {
    slug: 'riya-enterprises-acquisition-tribune',
    originalHref: 'https://www.tribuneindia.com/news/business/focuson-interiors-strengthens-market-position-with-the-acquisition-of-riya-enterprises/',
    title: 'Strengthens Market Position with the acquisition of Riya Enterprises',
    excerpt: 'Where sustainability and technology come together for employee wellbeing.',
    href: '/media/riya-enterprises-acquisition-tribune',
    image: `${WP}/2026/01/www.tribuneindia.com_news_business_focuson-interiors-strengthens-market-position-with-the-acquisition-of-riya-enterprises_.png`,
    source: 'The Tribune',
    content: "The Tribune covers FocusOn Interiors' acquisition of Riya Enterprises, strengthening the company's position in India's competitive interior design market and enabling scaled operations across new geographies.",
  },
  {
    slug: 'riya-enterprises-acquisition-lokmat',
    originalHref: 'https://www.lokmattimes.com/business/focuson-interiors-strengthens-market-position-with-the-acquisition-of-riya-enterprises/',
    title: 'Strengthens Market Position with the acquisition of Riya Enterprises',
    excerpt: "Inside FocusOn's path to market leadership.",
    href: '/media/riya-enterprises-acquisition-lokmat',
    image: `${WP}/2026/01/www.lokmattimes.com_business_focuson-interiors-strengthens-market-position-with-the-acquisition-of-riya-enterprises_.png`,
    source: 'Lokmat Times',
    content: "Lokmat Times features FocusOn Interiors' acquisition of Riya Enterprises, enhancing the company's ability to deliver larger projects and serve clients across multiple cities.",
  },
  {
    slug: 'riya-enterprises-acquisition-latestly',
    originalHref: 'https://www.latestly.com/agency-news/business-news-focuson-interiors-strengthens-market-position-with-the-acquisition-of-riya-enterprises-7241916.html',
    title: 'Strengthens Market Position with the acquisition of Riya Enterprises',
    excerpt: "How FocusOn is championing India's new era of functional, experience-driven fit-outs.",
    href: '/media/riya-enterprises-acquisition-latestly',
    image: `${WP}/2026/01/www.latestly.com_agency-news_business-news-focuson-interiors-strengthens-market-position-with-the-acquisition-of-riya-enterprises-7241916.html.png`,
    source: 'LatestLY',
    content: "LatestLY reports on FocusOn Interiors' acquisition strengthening market position and operational capabilities, with enhanced project execution capacity and broader geographic coverage.",
  },
  {
    slug: 'riya-enterprises-acquisition-karnataka',
    originalHref: 'https://karnatakanewsnetwork.in/focuson-interiors-strengthens-market-position-with-the-acquisition-of-riya-enterprises/',
    title: 'Strengthens Market Position with the acquisition of Riya Enterprises',
    excerpt: "Inside FocusOn's path to market leadership.",
    href: '/media/riya-enterprises-acquisition-karnataka',
    image: `${WP}/2026/01/karnatakanewsnetwork.in_focuson-interiors-strengthens-market-position-with-the-acquisition-of-riya-enterprises_.png`,
    source: 'Karnataka News Network',
    content: "Karnataka News Network covers the acquisition enabling FocusOn to expand service offerings, increase operational capacity, and strengthen market leadership in commercial interior design.",
  },
  {
    slug: 'riya-enterprises-acquisition-kerala',
    originalHref: 'https://keralanewsjournal.in/focuson-interiors-strengthens-market-position-with-the-acquisition-of-riya-enterprises/',
    title: 'Strengthens Market Position with the acquisition of Riya Enterprises',
    excerpt: 'Where sustainability and technology come together for employee wellbeing.',
    href: '/media/riya-enterprises-acquisition-kerala',
    image: `${WP}/2026/01/keralanewsjournal.in_focuson-interiors-strengthens-market-position-with-the-acquisition-of-riya-enterprises_.png`,
    source: 'Kerala News Journal',
    content: "Kerala News Journal highlights the strategic importance of the acquisition for FocusOn's growth, bringing combined expertise and expanded geographic footprint.",
  },
  {
    slug: 'riya-enterprises-acquisition-odisha',
    originalHref: 'https://odishanewsvoice.in/focuson-interiors-strengthens-market-position-with-the-acquisition-of-riya-enterprises/',
    title: 'Strengthens Market Position with the acquisition of Riya Enterprises',
    excerpt: "Inside FocusOn's path to market leadership.",
    href: '/media/riya-enterprises-acquisition-odisha',
    image: `${WP}/2026/01/odishanewsvoice.in_focuson-interiors-strengthens-market-position-with-the-acquisition-of-riya-enterprises_.png`,
    source: 'Odisha News Voice',
    content: "Odisha News Voice reports on the acquisition strengthening FocusOn's ability to handle larger projects and deliver integrated interior solutions across India.",
  },
  {
    slug: 'transform-corporate-industrial-design',
    originalHref: 'https://urbanacres.in/focuson-interiors-acquires-riya-enterprises-to-transform-corporate-and-industrial-space-design/',
    title: 'Transform Corporate and Industrial Space Design',
    excerpt: 'Where sustainability and technology come together for employee wellbeing.',
    href: '/media/transform-corporate-industrial-design',
    image: `${WP}/2026/01/urbanacres.in_focuson-interiors-acquires-riya-enterprises-to-transform-corporate-and-industrial-space-design_.png`,
    source: 'Urban Acres',
    content: "Urban Acres explores how the Riya Enterprises acquisition will transform corporate and industrial space design, bringing enhanced capabilities to serve clients across sectors.",
  },
  {
    slug: 'data-design-technology-reshaping-workplaces',
    originalHref: 'https://www.homesindiamagazine.com/viewpoint/how-data-design-and-technology-are-reshaping-india-s-workplaces-nwid-6504.html',
    title: "How Data, Design and Technology Are Reshaping India's Workplaces",
    excerpt: "Inside FocusOn's path to market leadership.",
    href: '/media/data-design-technology-reshaping-workplaces',
    image: `${WP}/2026/01/www.homesindiamagazine.com_viewpoint_how-data-design-and-technology-are-reshaping-india-s-workplaces-nwid-6504.html.png`,
    source: 'Homes India Magazine',
    content: "Homes India Magazine features FocusOn's perspective on data analytics in space planning, technology-enabled flexible workspaces, and design strategies that enhance employee experience.",
  },
  {
    slug: 'azim-khan-ceo-medianews4u',
    originalHref: 'https://www.medianews4u.com/focuson-interiors-names-azim-khan-as-ceo/',
    title: 'FocusOn Interiors names Azim Khan as CEO',
    excerpt: "Azim Khan has been instrumental in FocusOn Interiors' evolution into a pan-India workplace and industrial interior solutions provider.",
    href: '/media/azim-khan-ceo-medianews4u',
    image: `${WP}/2026/04/unnamed-2.png`,
    source: 'MediaNews4U',
    content: "MediaNews4U reports on Azim Khan's appointment as CEO. He will drive strategic growth initiatives, oversee operational excellence, and lead expansion into new markets.",
  },
  {
    slug: 'azim-khan-ceo-karnataka',
    originalHref: 'https://karnatakanewsnetwork.in/focuson-interiors-strengthens-market-position-with-the-acquisition-of-riya-enterprises/',
    title: 'FocusOn Interiors appoints Azim Khan as Chief Executive Officer',
    excerpt: 'Azim has fostered long-term partnerships through his tenure.',
    href: '/media/azim-khan-ceo-karnataka',
    image: `${WP}/2026/04/unnamed-1-1.png`,
    source: 'Karnataka News Network',
    content: "Karnataka News Network covers Azim Khan's appointment as CEO, highlighting his long-term partnerships and extensive experience in the interior design industry.",
  },
  {
    slug: 'azim-khan-ceo-commercial-design-india',
    originalHref: 'https://www.commercialdesignindia.com/insights/focuson-interiors-decorators-appoints-azim-khan-as-chief-executive-officer',
    title: 'FocusOn Interiors Decorators appoints Azim Khan as Chief Executive Officer',
    excerpt: 'Azim has fostered long-term partnerships.',
    href: '/media/azim-khan-ceo-commercial-design-india',
    image: `${WP}/2026/04/unnamed-3.png`,
    source: 'Commercial Design India',
    content: "Commercial Design India reports on the appointment of Azim Khan as CEO, marking a new chapter for FocusOn Interiors as it strengthens its market position.",
  },
  {
    slug: 'azim-khan-ceo-architecture-update',
    originalHref: 'https://architectureupdate.in/focuson-interiors-appoints-azim-khan-as-ceo/',
    title: 'FocusOn Interiors Appoints Azim Khan as CEO',
    excerpt: 'Azim is a result-oriented person with a strong track record.',
    href: '/media/azim-khan-ceo-architecture-update',
    image: `${WP}/2026/04/unnamed-4.png`,
    source: 'Architecture Update',
    content: "Architecture Update features Azim Khan's appointment as CEO, highlighting his result-oriented leadership and strong track record in delivering business growth.",
  },
  {
    slug: 'azim-khan-ceo-realty-plus',
    originalHref: 'https://www.rprealtyplus.com/article/focuson-interiors-names-azim-khan-ceo-to-drive-national-expansion-123855.html',
    title: 'FocusOn Interiors Names Azim Khan CEO to Drive National Expansion',
    excerpt: 'FocusOn Interiors Decorators Pvt. Ltd.',
    href: '/media/azim-khan-ceo-realty-plus',
    image: `${WP}/2026/04/unnamed-5.png`,
    source: 'Realty Plus',
    content: "Realty Plus reports on Azim Khan's appointment as CEO to drive national expansion, with FocusOn poised for significant growth under his leadership.",
  },
  {
    slug: 'azim-khan-ceo-business-news-profit',
    originalHref: 'https://businessnewsforprofit.com/business/focuson-interiors-appoints-azim-khan-as-ceo-to-spearhead-the-next-phase-of-growth/',
    title: 'FocusOn Interiors Appoints Azim Khan as CEO to Spearhead the Next Phase of Growth',
    excerpt: 'Azim has fostered long-term partnerships.',
    href: '/media/azim-khan-ceo-business-news-profit',
    image: `${WP}/2026/04/Screenshot-2026-04-11-112656.png`,
    source: 'Business News For Profit',
    content: "Business News For Profit covers the appointment of Azim Khan as CEO, positioning FocusOn for its next phase of growth under experienced leadership.",
  },
  {
    slug: 'azim-khan-ceo-media-bulletins',
    originalHref: 'https://mediabulletins.com/business/focuson-interiors-appoints-azim-khan-as-ceo-to-spearhead-the-next-phase-of-growth/',
    title: 'FocusOn Interiors Appoints Azim Khan as CEO to Spearhead the Next Phase of Growth',
    excerpt: 'Under his leadership, FocusOn Interior aims to scale nationally.',
    href: '/media/azim-khan-ceo-media-bulletins',
    image: `${WP}/2026/04/Screenshot-2026-04-11-113113.png`,
    source: 'Media Bulletins',
    content: "Media Bulletins features Azim Khan's appointment, under whose leadership FocusOn Interior aims to scale nationally.",
  },
  {
    slug: 'azim-khan-ceo-biz-news-desk',
    originalHref: 'https://biznewsdesk.com/business/focuson-interiors-appoints-azim-khan-as-ceo-to-spearhead-the-next-phase-of-growth/',
    title: 'FocusOn Interiors Appoints Azim Khan as CEO to Spearhead the Next Phase of Growth',
    excerpt: 'Azim is a result-oriented person with a strong track record.',
    href: '/media/azim-khan-ceo-biz-news-desk',
    image: `${WP}/2026/04/Screenshot-2026-04-11-113343.png`,
    source: 'Biz News Desk',
    content: "Biz News Desk reports on Azim Khan's appointment, highlighting his result-oriented approach and strong track record in driving business growth.",
  },
  {
    slug: 'azim-khan-ceo-online-media-cafe',
    originalHref: 'https://onlinemediacafe.com/business/focuson-interiors-appoints-azim-khan-as-ceo-to-spearhead-the-next-phase-of-growth/',
    title: 'FocusOn Interiors Appoints Azim Khan as CEO to Spearhead the Next Phase of Growth',
    excerpt: 'New Delhi, Jan 27: FocusOn Interiors Decorators Pvt. Ltd.',
    href: '/media/azim-khan-ceo-online-media-cafe',
    image: `${WP}/2026/04/Screenshot-2026-04-11-120355.png`,
    source: 'Online Media Cafe',
    content: "Online Media Cafe covers FocusOn Interiors' appointment of Azim Khan as CEO, reflecting the company's commitment to strong leadership.",
  },
  {
    slug: 'azim-khan-ceo-interiors-now',
    originalHref: 'https://www.interiors-now.com/article/140828/focuson-interiors-names-azim-khan-ceo-to-drive-national-expansion',
    title: 'FocusOn Interiors Names Azim Khan CEO to Drive National Expansion',
    excerpt: 'FocusOn Interiors has appointed Azim Khan as CEO.',
    href: '/media/azim-khan-ceo-interiors-now',
    image: `${WP}/2026/04/Screenshot-2026-04-11-120747.png`,
    source: 'Interiors Now',
    content: "Interiors Now reports on Azim Khan's appointment as CEO to drive national expansion plans for FocusOn Interiors.",
  },
  {
    slug: 'strategic-pivot-delivery-led-solutions',
    originalHref: 'https://www.lokmattimes.com/business/focuson-interiors-strategic-pivot-from-design-studio-to-delivery-led-solutions-firm-a475/',
    title: "FocusOn Interiors' Strategic Pivot: From Design Studio to Delivery-Led Solutions Firm",
    excerpt: "India's commercial interiors industry is evolving.",
    href: '/media/strategic-pivot-delivery-led-solutions',
    image: `${WP}/2026/04/unnamed-1-2.png`,
    source: 'Lokmat Times',
    content: "Lokmat Times explores FocusOn Interiors' transformation from a design studio to a delivery-led solutions firm, capable of handling complex large-scale projects across India.",
  },
  {
    slug: 'republic-day-2026-indian-leaders',
    originalHref: 'https://www.mid-day.com/buzz/article/republic-day-2026-indian-leaders-driving-the-vision-of-a-stronger-bharat-8716',
    title: 'Republic Day 2026: Indian Leaders Driving the Vision of a Stronger Bharat',
    excerpt: 'As India celebrates its 77th Republic Day.',
    href: '/media/republic-day-2026-indian-leaders',
    image: `${WP}/2026/04/Screenshot-2026-04-11-122229.png`,
    source: 'Mid-Day',
    content: "Mid-Day's Republic Day 2026 feature recognizes FocusOn Interiors among companies contributing to India's growth story through excellence in commercial interior design.",
  },
  {
    slug: 'from-walls-to-ceilings-colour',
    originalHref: 'https://architectureupdate.in/from-walls-to-ceilings-how-colour-quietly-rewired-the-modern-office/',
    title: 'From Walls to Ceilings: How Colour Quietly Rewired the Modern Office',
    excerpt: 'For much of corporate history, colour was an afterthought.',
    href: '/media/from-walls-to-ceilings-colour',
    image: `${WP}/2026/04/unnamed-2-1.png`,
    source: 'Architecture Update',
    content: "Architecture Update explores how colour has transformed the modern workplace. FocusOn Interiors leverages colour as a strategic design element, creating visually stunning and functionally effective workspaces.",
  },
  {
    slug: 'technology-in-interior-design-vr-ai',
    originalHref: 'https://www.siliconindia.com/news/general/the-role-of-technology-in-interior-design-from-vr-to-aidriven-space-planning-nid-239637-cid-1.html',
    title: 'The Role of Technology in Interior Design: From VR to AI-Driven Space Planning',
    excerpt: 'From immersive virtual walkthroughs to AI-driven planning.',
    href: '/media/technology-in-interior-design-vr-ai',
    image: `${WP}/2026/04/unnamed-3-1.png`,
    source: 'SiliconIndia',
    content: "SiliconIndia explores technology's transformative role in interior design. FocusOn Interiors embraces VR, AI, and BIM to enhance design accuracy and deliver superior project outcomes.",
  },
  {
    slug: 'smart-office-technology-rise-2',
    originalHref: 'https://www.commercialdesignindia.com/insights/smart-office-technology',
    title: 'When creativity meets code \u2013 The rise of smart office technology in office design',
    excerpt: 'The modern workplace is no longer defined by fixed layouts.',
    href: '/media/smart-office-technology-rise-2',
    image: `${WP}/2026/04/unnamed-4-1.png`,
    source: 'Commercial Design India',
    content: "This feature examines how smart office technology reshapes workplace design. By combining creative design with smart technology, FocusOn creates efficient, comfortable, and future-ready workspaces.",
  },
]

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  href: string
  image: string
  content: string
  originalHref?: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'your-guide-to-2026s-most-anticipated-design-trends',
    originalHref: 'https://focusoninteriors.com/your-guide-to-2026s-most-anticipated-design-trends/',
    title: "Your guide to 2026's most anticipated design trends",
    excerpt: 'In 2026, office interiors are becoming more human-centric, sustainable, flexible, and technology-driven than ever before.',
    href: '/blog/your-guide-to-2026s-most-anticipated-design-trends',
    image: `${WP}/2026/05/Your-guide-to-2026s-most-anticipated-design-trends.webp`,
    content: "As we step into 2026, office interiors are undergoing a remarkable transformation. The modern workplace is no longer just a place to work \u2014 it has become a destination that inspires creativity, fosters collaboration, and supports well-being.\\n\\n**Human-Centric Design**\\nThe biggest trend of 2026 is the focus on human experience. Offices are being designed with employee well-being at the core, incorporating natural light, improved air quality, ergonomic furniture, and spaces that support both focused work and collaboration.\\n\\n**Sustainable Materials**\\nEco-friendly materials are no longer optional. From recycled content to low-VOC finishes, sustainability is driving material selection in corporate interiors.\\n\\n**Flexible Layouts**\\nThe hybrid work model has permanently changed how we think about space. Offices now feature adaptable layouts that can be reconfigured for different activities.\\n\\n**Technology Integration**\\nSmart building technologies are becoming standard. Automated lighting, climate control, and space utilization sensors help create efficient, comfortable environments.\\n\\nAt FocusOn, we help clients create workspaces that are future-ready, inspiring, and truly human-centric.",
  },
  {
    slug: 'checklist-for-planning-your-office-interior-project',
    originalHref: 'https://focusoninteriors.com/checklist-for-planning-your-office-interior-project/',
    title: 'Checklist for Planning Your Office Interior Project',
    excerpt: 'A well-planned office interior project can improve productivity, enhance brand image, and optimize daily operations.',
    href: '/blog/checklist-for-planning-your-office-interior-project',
    image: `${WP}/2026/05/Checklist-for-Planning-Your-Office-Interior-Project.webp`,
    content: "Planning an office interior project can feel overwhelming, but with the right checklist, you can ensure a smooth and successful execution.\\n\\n**Phase 1: Discovery & Planning**\\nDefine project goals and vision, establish budget parameters, identify key stakeholders, set timeline expectations, research and select a design-build partner.\\n\\n**Phase 2: Design Development**\\nSpace planning and layout optimization, material and finish selection, lighting design strategy, furniture planning and ergonomics, technology infrastructure planning, brand integration.\\n\\n**Phase 3: Pre-Construction**\\nFinalize design documents, obtain necessary approvals, procurement planning, contractor coordination, site preparation.\\n\\n**Phase 4: Execution**\\nDemolition and site preparation, structural work, MEP installation, interior finishes and carpentry, furniture installation, technology setup.\\n\\n**Phase 5: Handover**\\nQuality inspection and punch list, final cleaning, occupancy certificate, post-handover support.\\n\\nFollowing this checklist ensures your project is delivered on time, within budget, and to the highest quality standards.",
  },
  {
    slug: 'importance-of-ergonomics-in-office-interior-design',
    originalHref: 'https://focusoninteriors.com/importance-of-ergonomics-in-office-interior-design/',
    title: 'Importance of Ergonomics in Office Interior Design',
    excerpt: "Ergonomics is the science of designing workspaces that fit the user's needs. When applied correctly, it can significantly improve efficiency and reduce health issues.",
    href: '/blog/importance-of-ergonomics-in-office-interior-design',
    image: `${WP}/2026/05/Importance-of-Ergonomics-in-Office-Interior-Design.webp`,
    content: "Ergonomics is the science of designing workspaces that fit the user\u2019s needs. When applied correctly in modern office interior design, it can significantly improve efficiency, reduce health issues, and create a more engaging work environment.\\n\\n**Why Ergonomics Matters**\\nStudies show that poor workplace ergonomics leads to decreased productivity, increased absenteeism, and higher healthcare costs.\\n\\n**Key Considerations**\\nSeating: Ergonomic chairs with adjustable height and lumbar support.\\nDesk Height: Adjustable desks allow alternating between sitting and standing.\\nMonitor Placement: Screens at eye level, an arm's length away.\\nLighting: Proper lighting reduces eye strain and headaches.\\nKeyboard and Mouse: Ergonomic options reduce repetitive strain injuries.\\n\\nAt FocusOn, we integrate ergonomic principles into every project, creating workspaces that support employee health and productivity.",
  },
  {
    slug: 'sustainable-office-interiors-the-future-of-workspaces',
    originalHref: 'https://focusoninteriors.com/sustainable-office-interiors-the-future-of-workspaces/',
    title: 'Sustainable Office Interiors: The Future of Workspaces',
    excerpt: 'Today, businesses are shifting towards sustainable office interiors that prioritize environmental responsibility, employee well-being, and long-term cost efficiency.',
    href: '/blog/sustainable-office-interiors-the-future-of-workspaces',
    image: `${WP}/2026/05/Sustainable-Office-Interiors-The-Future-of-Workspaces.webp`,
    content: "Sustainability in office interior design has evolved from a niche consideration to a core requirement for modern businesses. Sustainable workspaces benefit the environment, the bottom line, and the people who use them.\\n\\n**Key Elements**\\nEnergy Efficiency: LED lighting, smart HVAC systems, natural light optimization.\\nSustainable Materials: Recycled and locally sourced materials, low-VOC finishes.\\nWaste Reduction: Modular furniture, construction waste management.\\nBiophilic Design: Plants, natural materials, views of nature.\\nWater Conservation: Low-flow fixtures.\\n\\nAt FocusOn, we help clients create sustainable workspaces that are good for people, planet, and profitability.",
  },
  {
    slug: 'small-office-interior-design-ideas-that-maximize-space',
    originalHref: 'https://focusoninteriors.com/small-office-interior-design-ideas-that-maximize-space/',
    title: 'Small Office Interior Design Ideas That Maximize Space',
    excerpt: "Designing a small office is not about limitations \u2013 it's about smart creativity and efficient planning.",
    href: '/blog/small-office-interior-design-ideas-that-maximize-space',
    image: `${WP}/2026/04/Small-Office-Interior-Design-Ideas-That-Maximize-Space.webp`,
    content: "Designing a small office is about smart creativity and efficient planning. Even a compact workspace can feel spacious, functional, and premium.\\n\\n**Key Strategies**\\nOpen Layout with Defined Zones: Remove unnecessary walls, use furniture to define areas.\\nVertical Space: Maximize wall space with shelving and wall-mounted storage.\\nMulti-Functional Furniture: Storage ottomans, foldable tables, modular seating.\\nLight Colors and Mirrors: Make spaces feel larger and brighter.\\nGlass Partitions: Privacy while maintaining visual openness.\\nBuilt-in Storage: Custom solutions maximize every inch.\\n\\nAt FocusOn, we specialize in maximizing every square foot to create efficient, beautiful workspaces.",
  },
  {
    slug: 'corporate-office-interior-design-trends-best-practices',
    originalHref: 'https://focusoninteriors.com/corporate-office-interior-design-trends-best-practices/',
    title: 'Corporate Office Interior Design: Trends and Best Practices',
    excerpt: "In today's fast-evolving business landscape, corporate office interior design is about creating productive, inspiring, and brand-driven environments.",
    href: '/blog/corporate-office-interior-design-trends-best-practices',
    image: `${WP}/2026/04/Corporate-Office-Interior-Design-Trends-Best-Practices.webp`,
    content: "Corporate office interior design is about creating productive, inspiring, and brand-driven environments.\\n\\n**Current Trends**\\nActivity-Based Working: Employees choose spaces based on tasks.\\nBrand Integration: Design reflects company culture and values.\\nWellness-Focused Design: Standing desks, ergonomic furniture, natural light, indoor plants.\\nTechnology-Enabled Spaces: Smart meeting rooms, wireless presentation systems.\\nSustainable Practices: Green materials, energy-efficient systems.\\n\\nAt FocusOn, we help corporations create workspaces that drive business success and employee satisfaction.",
  },
  {
    slug: 'budget-vs-premium-office-interiors-what-should-you-choose',
    originalHref: 'https://focusoninteriors.com/budget-vs-premium-office-interiors-what-should-you-choose/',
    title: 'Budget vs Premium Office Interiors: What Should You Choose',
    excerpt: "Premium office interiors are all about quality, brand identity, and experience. These spaces are designed to reflect your company's values.",
    href: '/blog/budget-vs-premium-office-interiors-what-should-you-choose',
    image: `${WP}/2026/04/Budget-vs-Premium-Office-Interiors-What-Should-You-Choose.webp`,
    content: "One of the most common questions is whether to invest in premium office interiors or opt for a budget-friendly approach.\\n\\n**Budget Office Interiors**\\nPros: Lower initial investment, faster implementation, functional and efficient.\\nCons: May lack brand differentiation, higher maintenance costs over time.\\n\\n**Premium Office Interiors**\\nPros: Strong brand representation, higher quality, better employee experience, longer lifespan.\\nCons: Higher upfront investment, longer timeline.\\n\\n**Making the Right Choice**\\nConsider business goals, employee needs, duration of occupancy, and expected ROI.\\n\\nAt FocusOn, we help clients find the right balance between budget and quality.",
  },
  {
    slug: 'the-future-of-workspaces-where-sustainability-technology-and-human-wellness-converge',
    originalHref: 'https://focusoninteriors.com/the-future-of-workspaces-where-sustainability-technology-and-human-wellness-converge/',
    title: 'The Future of Workspaces: Where Sustainability, Technology, and Human Wellness Converge',
    excerpt: 'The modern workplace is going through a major transformation. Offices today are no longer just functional spaces with desks and meeting rooms.',
    href: '/blog/the-future-of-workspaces-where-sustainability-technology-and-human-wellness-converge',
    image: `${WP}/2026/04/The-Future-of-Workspaces-Where-Sustainability-Technology-and-Human-Wellness-Converge.png`,
    content: "The modern workplace is going through a major transformation. Offices have become strategic assets that drive business performance, attract talent, and reflect organizational culture.\\n\\n**The Three Pillars**\\nSustainability: Energy-efficient systems, sustainable materials, green certifications.\\nTechnology: IoT sensors, AI-powered systems, digital collaboration tools.\\nHuman Wellness: Biophilic elements, natural light, ergonomic furniture, spaces for movement and relaxation.\\n\\n**The Convergence**\\nThe most successful workplaces integrate all three pillars, creating powerful competitive advantage.\\n\\nAt FocusOn, we help clients create future-ready workspaces that balance sustainability, technology, and human needs.",
  },
  {
    slug: 'how-technology-is-enhancing-the-creative-world-of-office-interiors',
    originalHref: 'https://focusoninteriors.com/how-technology-is-enhancing-the-creative-world-of-office-interiors/',
    title: 'How Technology is Enhancing the Creative World of Office Interiors',
    excerpt: 'The modern workplace has become a technology-enhanced ecosystem that reflects organizational culture, employee well-being, and operational efficiency.',
    href: '/blog/how-technology-is-enhancing-the-creative-world-of-office-interiors',
    image: `${WP}/2026/04/How-Technology-is-Enhancing-the-Creative-World-of-Office-Interiors.webp`,
    content: "The modern workplace has become a technology-enhanced ecosystem.\\n\\n**Digital Design Tools**\\nBIM enables precise 3D modeling, while virtual reality allows clients to experience spaces before they are built.\\n\\n**Smart Building Systems**\\nIntelligent systems automate lighting, climate control, and security, learning from occupant behavior.\\n\\n**Space Utilization Analytics**\\nSensors provide insights into actual space usage, informing layout and furniture decisions.\\n\\n**Collaboration Technology**\\nVideo conferencing, digital whiteboards, and wireless presentation systems enable seamless collaboration.\\n\\nAt FocusOn, we carefully select technology that enhances rather than overwhelms the workplace experience.",
  },
  {
    slug: 'from-walls-to-ceilings-creative-uses-of-color-in-modern-office-interiors',
    originalHref: 'https://focusoninteriors.com/from-walls-to-ceilings-creative-uses-of-color-in-modern-office-interiors/',
    title: 'From Walls to Ceilings: Creative Uses of Color in Modern Office Interiors',
    excerpt: 'Color is no longer a finishing touch. It has become a strategic tool that influences productivity, supports brand identity, and shapes how employees experience the workplace.',
    href: '/blog/from-walls-to-ceilings-creative-uses-of-color-in-modern-office-interiors',
    image: `${WP}/2026/04/From-Walls-to-Ceilings-Creative-Uses-of-Color-in-Modern-Office-Interiors.png`,
    content: "Color has become a strategic tool in workplace design.\\n\\n**The Psychology of Color**\\nBlue: Focus and calm.\\nGreen: Balance and connection to nature.\\nYellow: Creativity and optimism.\\nOrange: Energy and collaboration.\\nRed: Excitement and urgency.\\nNeutral: Calm, professional backdrop.\\n\\n**Creative Applications**\\nAccent Walls: Define spaces with bold colors.\\nColor Zones: Different palettes for different activities.\\nCeiling Design: The fifth wall adds drama and warmth.\\nWayfinding: Use color to guide people through the space.\\nBrand Integration: Incorporate brand colors throughout.\\n\\nAt FocusOn, we use color strategically to create workspaces that are beautiful, functional, and emotionally engaging.",
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

export type OfficeBranch = {
  city: string
  isHq?: boolean
  address: string[]
  email: string
  name?: string
  phone?: string
}

export const offices: OfficeBranch[] = [
  {
    city: 'Delhi',
    isHq: true,
    email: 'info@focusoninterior.in',
    phone: '+91 011 4928 7589',
    address: [
      'C-19, Second Floor, Above SBI Bank',
      'Dilshad Colony',
      'New Delhi - 110095',
    ],
  },
  {
    city: 'Gurugram',
    email: 'faijal.khan@focusoninterior.in',
    name: 'Regional Head - Faijal Khan',
    address: [
      '5th Floor, WeWork Two Horizon Centre',
      'One Horizon Center Driveway, Near Banaaras',
      'Sector 43, Gurugram, Haryana - 122002',
    ],
  },
  {
    city: 'Mumbai',
    email: 'sourabh.pandey@focusoninterior.in',
    name: 'Regional Head - Sourabh Pandey',
    address: [
      '1st Floor, B/22, Raj Industrial Complex',
      'Marol Maroshi Military Road, Andheri East',
      'Mumbai, Maharashtra - 400059',
    ],
  },
  {
    city: 'Bengaluru',
    email: 'sourabh.pandey@focusoninterior.in',
    name: 'Corporate Office',
    address: [
      'FOCUSON INTERIOR DECORATORS PRIVATE LIMITED',
      '2nd Floor, L3-09, Assayee Road',
      'Municipal Corporation No.5/1, Assaye Road, Ulsoor',
      'Bengaluru, Karnataka - 560004',
    ],
  },
]

export const vendorEmail = 'purchase@focusoninterior.in'

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
  social: {
    whatsapp: 'https://wa.me/919910258820?text=Hi%20FocusOn%20Interiors%2C%20I%20would%20like%20to%20discuss%20my%20interior%20design%20project.',
    youtube: 'https://youtube.com/@FocusOnInteriors',
    facebook: 'https://facebook.com/FocusOnInteriors',
    instagram: 'https://instagram.com/focuson_interiors',
    linkedin: 'https://linkedin.com/company/focuson-interiors',
    twitter: 'https://x.com/FocusOnInterior',
    email: 'info@focusoninterior.in',
  },
}
