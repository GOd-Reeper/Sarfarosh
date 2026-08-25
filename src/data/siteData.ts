export const services = [
  {
    id: 'event-management',
    iconType: 'management',
    title: 'Event Management',
    description: 'End-to-end event planning, coordination, and on-ground execution — from corporate meets to public celebrations.',
  },
  {
    id: 'event-production',
    iconType: 'production',
    title: 'Event Production',
    description: 'Stage design, sound, lighting, LED, AV, and technical infrastructure engineered for impact.',
  },
  {
    id: 'brand-activations',
    iconType: 'activation',
    title: 'Brand Activations',
    description: 'Experiential marketing, flash mobs, roadshows, and consumer engagement that turns audiences into participants.',
  },
  {
    id: 'government-public',
    iconType: 'government',
    title: 'Government & Public',
    description: 'Public programs, awareness campaigns, cultural initiatives, and large-scale community events.',
  },
  {
    id: 'entertainment',
    iconType: 'entertainment',
    title: 'Entertainment',
    description: 'Live performers, bands, DJs, anchors, theatre artists, and cultural acts curated for your event.',
  },
  {
    id: 'creative-content',
    iconType: 'creative',
    title: 'Creative & Content',
    description: 'Concept development, creative direction, photography, videography, and aftermovies.',
  },
];

export const stats = [
  { value: 324, suffix: '+', label: 'Team Members', description: 'Performers, artists, crew, and creative personnel' },
  { value: 30, suffix: 'M+', label: 'Social Reach', description: 'Combined views and engagement across platforms' },
  { value: 50, suffix: '+', label: 'Events Executed', description: 'Government, corporate, cultural, and public events' },
  { value: 15, suffix: '+', label: 'Cities', description: 'Events and performances delivered across India' },
];

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  location: string;
  description: string;
  metrics: { label: string; value: string }[];
  imageBgColor?: string;
}

export const projects: ProjectItem[] = [
  {
    id: 'government-cultural-program',
    title: 'National Cultural Celebration & Public Drive',
    client: 'Government of Madhya Pradesh',
    category: 'Government',
    year: '2024',
    location: 'Indore, MP',
    description: 'Full-scale event production, cultural programming, and mass public engagement designed for high audience mobilization.',
    metrics: [
      { label: 'Attendees', value: '15,000+' },
      { label: 'Duration', value: '3 Days' },
      { label: 'Crew', value: '120+' }
    ],
    imageBgColor: '#1F2421'
  },
  {
    id: 'inox-brand-activation',
    title: 'Experiential Cinema Brand Launch',
    client: 'INOX India',
    category: 'Brand Activation',
    year: '2024',
    location: 'Indore, MP',
    description: 'High-energy flash mobs and interactive performance activations staged in key commercial hubs.',
    metrics: [
      { label: 'Footfall', value: '45,000+' },
      { label: 'Engagements', value: '10K+' },
      { label: 'Social Views', value: '2.5M+' }
    ],
    imageBgColor: '#12141D'
  },
  {
    id: 'chai-sutta-bar-launch',
    title: 'Flagship Store Launch & Campaign',
    client: 'Chai Sutta Bar',
    category: 'Corporate',
    year: '2023',
    location: 'Indore, MP',
    description: 'Youth-centric launch campaign combining street theatre, live music acts, and custom viral content.',
    metrics: [
      { label: 'Reach', value: '5M+' },
      { label: 'On-Ground Crowd', value: '8,000+' },
      { label: 'Influencers', value: '25+' }
    ],
    imageBgColor: '#1E1917'
  },
  {
    id: 'treasure-island-experience',
    title: 'Mall Experiential & Performance Showcase',
    client: 'Treasure Island Mall',
    category: 'Entertainment',
    year: '2023',
    location: 'Indore, MP',
    description: 'Curated weekend performing arts festival featuring dance, drama, and live acoustic stages.',
    metrics: [
      { label: 'Weekend Visitors', value: '60,000+' },
      { label: 'Performers', value: '45+' },
      { label: 'Satisfaction', value: '98%' }
    ],
    imageBgColor: '#181A20'
  },
  {
    id: 'mp09-anthem-launch',
    title: 'MP09 Indore City Anthem Event',
    client: 'Sarfarosh Originals',
    category: 'Cultural',
    year: '2023',
    location: 'Indore, MP',
    description: 'Mass anthem launch event bringing together artists, civic leaders, and thousands of passionate citizens.',
    metrics: [
      { label: 'Total Views', value: '10M+' },
      { label: 'Live Audience', value: '12,000+' },
      { label: 'Media Outlets', value: '40+' }
    ],
    imageBgColor: '#151719'
  },
  {
    id: 'marks-spencer-activation',
    title: 'Premium Retail Activation Drive',
    client: 'Marks & Spencer',
    category: 'Brand Activation',
    year: '2024',
    location: 'Indore, MP',
    description: 'Sleek, subtle retail experience designed to elevate customer engagement and brand visibility.',
    metrics: [
      { label: 'Store Footfall', value: '+35%' },
      { label: 'Sales Bump', value: '+22%' },
      { label: 'Conversion', value: '4.2x' }
    ],
    imageBgColor: '#1A181C'
  },
];

export const processSteps = [
  { number: '01', title: 'Discover', description: 'Understand your objective, audience, budget, and vision.' },
  { number: '02', title: 'Concept', description: 'Develop the creative direction, experience design, and programming.' },
  { number: '03', title: 'Plan', description: 'Build production, operations, staffing, and logistics plans.' },
  { number: '04', title: 'Produce', description: 'Execute creative, technical, and infrastructure requirements.' },
  { number: '05', title: 'Execute', description: 'Manage the live event — teams, guests, artists, production.' },
  { number: '06', title: 'Deliver', description: 'Documentation, content, reporting, and post-event handover.' },
];

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
}

export interface VideoShowcaseItem {
  id: string;
  title: string;
  client: string;
  bgColor: string;
}

export const spotlightCards: VideoShowcaseItem[] = [
  {
    id: 'spotlight-1',
    title: 'How Sarfarosh Executed 15K+ Crowd Cultural Drive',
    client: 'Govt of MP & Culture Dept',
    bgColor: '#16181C',
  },
  {
    id: 'spotlight-2',
    title: 'Scaling Brand Activation with Live Performance Art',
    client: 'INOX & Chai Sutta Bar',
    bgColor: '#181619',
  },
];

export const testimonials: TestimonialItem[] = [
  {
    id: '1',
    name: 'David Lee',
    role: 'Founder',
    company: 'Atodio Studio',
    quote: 'Sarfarosh brought an energy to our event that no other team could have delivered. Their performance background gives them an unmatched edge in audience engagement and crowd management.',
  },
  {
    id: '2',
    name: 'Sarah Mitchell',
    role: 'COO',
    company: 'BrightPath Experiential',
    quote: 'We struggled with inconsistent on-ground coordination during multi-city activations. Sarfarosh gave us clarity first, then flawless execution. Now our events run seamlessly without operational friction.',
  },
  {
    id: '3',
    name: 'Daniel Kim',
    role: 'Founder',
    company: 'ScaleLabs Education',
    quote: 'From stage production to live artist management, every detail was handled with extreme precision. The production quality exceeded our highest expectations for a public initiative of this scale.',
  },
  {
    id: '4',
    name: 'Alex Johnson',
    role: 'Head of Operations',
    company: 'Finovate Consulting',
    quote: 'Safety, crowd control, and stage infrastructure were critical for our annual summit. They designed a production architecture that was not only visually stunning but enterprise-grade secure.',
  },
  {
    id: '5',
    name: 'Jonathan Reed',
    role: 'Managing Director',
    company: 'Nexora Digital',
    quote: 'We were scaling fast but drowning in event logistics. Sarfarosh connected our creative vision, artist lineup, and technical ops into one intelligent, synchronized flow. Result: 100% attendee satisfaction.',
  },
  {
    id: '6',
    name: 'Michael Tran',
    role: 'Founder & CEO',
    company: 'Skyline Events Group',
    quote: 'Working with Sarfarosh reduced our on-site management overhead by nearly 50% while doubling attendee participation. Their team’s energy and commitment is unmatched.',
  },
  {
    id: '7',
    name: 'Laura Martinez',
    role: 'CMO',
    company: 'Elevate Commerce Co',
    quote: 'Experiential marketing always felt fragmented — too many vendors, not enough cohesion. Sarfarosh unified everything into one seamless experience: flash mobs, stage, lighting, and aftermovie.',
  },
];

export const clients = [
  'INOX India',
  'Chai Sutta Bar',
  'Treasure Island',
  'Marks & Spencer',
  'Playin',
  'MP Police',
];
