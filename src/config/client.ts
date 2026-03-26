export const client = {
  // Business Details
  name: "T P Sherwood",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Poole.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "01202 386296",
  email: "",
  website: "",

  // Location
  address: "Poole",
  city: "Poole",
  county: "",
  postcode: "",
  basedIn: "Poole",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "10",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Chris Wilkins", rating: 5, text: "I cannot speak highly enough of the service and quality of finished product that we have received from TP Sherwood & Sons. Trevor not only took our brief for the works, but with his knowledge, made suggestions and improvements leaving me …  ", date: "2 months ago" },
    { name: "Timothy Shaw", rating: 5, text: "Thank you Trevor and all your team for such a great job replacing our driveway in Poole with Sigma Urban Slate. The new block paving transformed the appearance of the front of our house and you managed it in just 4 days. The attention to detail was r", date: "11 months ago" },
    { name: "Niall Harper", rating: 5, text: "Trevor and the team have recently done a fantastic job of a path at our office. The initial quote was extremely competitive and once accepted, the works were booked in quickly. On the day the team turned up and got straight to work. The …  ", date: "7 months ago" },
    { name: "J Abass", rating: 5, text: "Right from initial contact to get a quote (which was very reasonable) through to completion, nothing but friendly professionalism. We selected blocks for the driveway from the Sherwood showroom and Trevor explained the pros and cons of each …  ", date: "7 months ago" },
    { name: "James and Helen Green", rating: 5, text: "Trevor and his team completely transformed the front drive and rear patio of our house and all in one week! It was captivating observing their work, as one job was  completed, a truck would roll up, offload supplies and then the work would …  ", date: "11 months ago" },
    { name: "W R", rating: 5, text: "Trevor and his team were absolutely fantastic! They have completely transformed our outdoor space giving a beautiful, yet practical result. Highly recommended with their expertise in groundworks and landscaping. Friendly, knowledgeable and a reassuri", date: "11 months ago" },
    { name: "Majeda Abass", rating: 5, text: "I had no hesitation whatsoever to use Trevor to transform our driveway to the highest standards. The driveway looks amazing . …  ", date: "7 months ago" },
    { name: "Anita Clare", rating: 5, text: "I recently hired T P Sherwood & Sons to landscape my garden, and I couldn't be more pleased with the results. Their team cleared away the old patio slabs and installed beautiful porcelain paving on two patio areas, including a full row of …  ", date: "10 months ago" },
    { name: "Paul Telfer", rating: 5, text: "Trevor and his team worked tirelessly to renew our 100 square metre drive especialĺy in the hot weather. We are really pleased with the end result. What a difference! …  ", date: "7 years ago" },
    { name: "David Norton", rating: 5, text: "It has taken myself & wife years to make a decision on how to proceed with a new driveway & path, we had a number of quotations (as reccommended by Trevor & sons). Trevor was competitive but what we liked was the \"professional no nonsence …  ", date: "3 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "T P Sherwood | Landscaper in Poole",
    description: "Professional landscaper in Poole. 5.0-star rated on Google. Call for a free quote.",
  },
};
