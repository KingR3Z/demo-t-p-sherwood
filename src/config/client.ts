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
    { name: "Chris Wilkins", rating: 5, text: "I cannot speak highly enough of the service and quality of finished product that we have received from TP Sherwood & Sons. Trevor not only took our brief for the works, but with his knowledge, made suggestions and improvements leaving me amazed at the outcome. There was never any 'hard sell' during the quoting process, rather honest discussions about different materials and their strengths and weaknesses. To help, Trevor has created a showroom locally where you can view the product range in person - something I've not encountered before and was valuable in our decision making process. The team Trevor has assembled were a joy to have on site. Polite, hard working, good with our neighbours and all extremely skilled in their trade. The end result was beyond anything I could have imagined (driveway, fencing, front boundary wall, side gate wall and porcelain paving). If you are considering similar works, then I simply cannot recommend TP Sherwood & Sons highly enough. Do give them a call - you won't regret it! We're looking forward to having them back again in the summer to complete works to our rear garden.", date: "2 months ago" },
    { name: "Niall Harper", rating: 5, text: "Trevor and the team have recently done a fantastic job of a path at our office. The initial quote was extremely competitive and once accepted, the works were booked in quickly. On the day the team turned up and got straight to work. The team worked extremely hard and the results are fantastic. The attention to detail is great and they left the site clean tidy, and looking better than when they arrived.  I’d highly recommend using TP Sherwood.", date: "7 months ago", badge: "Local Guide" },
    { name: "J Abass", rating: 5, text: "Right from initial contact to get a quote (which was very reasonable) through to completion, nothing but friendly professionalism. We selected blocks for the driveway from the Sherwood showroom and Trevor explained the pros and cons of each type of block. The whole driveway was completed in under a week and Trevor and his team were fantastic. It was fascinating watching them work and the deliveries, vans and trucks came in with precision clockwork. The attention to little details and the ideas they came up with were excellent. The driveway has completely transformed and the finish is wonderful. Thank you all so much.", date: "7 months ago", badge: "Local Guide" },
    { name: "Majeda Abass", rating: 5, text: "I had no hesitation whatsoever to use Trevor to transform our driveway to the highest standards. The driveway looks amazing . All the team are very hard working, polite and professional. Thanks Trevor 🙏", date: "7 months ago" },
    { name: "Anita Clare", rating: 5, text: "I recently hired T P Sherwood & Sons to landscape my garden, and I couldn't be more pleased with the results. Their team cleared away the old patio slabs and installed beautiful porcelain paving on two patio areas, including a full row of steps leading down to the lower patio. They also installed artificial grass and constructed two planting beds.  From start to finish, the team was fast, efficient, and highly professional. The quality of their workmanship was excellent, and they paid great attention to detail. When the project was completed, the garden looked absolutely fabulous and was left spotless.  I would highly recommend T P Sherwood & Sons to anyone looking for top-quality landscaping work. They exceeded my expectations in every way.", date: "10 months ago" },
    { name: "Timothy Shaw", rating: 5, text: "Thank you Trevor and all your team for such a great job replacing our driveway in Poole with Sigma Urban Slate. The new block paving transformed the appearance of the front of our house and you managed it in just 4 days. The attention to detail was really impressive and this has given a high quality finish.", date: "11 months ago", badge: "Local Guide" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "T P Sherwood | Landscaper in Poole",
    description: "Professional landscaper in Poole. 5.0-star rated on Google. Call for a free quote.",
  },
};
