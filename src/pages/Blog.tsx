import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useRef, useState } from "react";

const blogPosts = [
  {
    title: "How AI Automation Is Transforming Digital Marketing in 2026",
    excerpt: "Discover how intelligent systems are reshaping campaign management, customer engagement, and ROI optimization for forward-thinking brands.",
    category: "AI & Automation",
    date: "Feb 18, 2026",
    readTime: "6 min read",
    slug: "ai-automation-digital-marketing",
  },
  {
    title: "The Ultimate Guide to Performance Marketing That Actually Converts",
    excerpt: "Data-driven strategies across Google, Meta, and LinkedIn that go beyond vanity metrics to deliver measurable business growth.",
    category: "Performance Marketing",
    date: "Feb 12, 2026",
    readTime: "8 min read",
    slug: "performance-marketing-guide",
  },
  {
    title: "Why Your Website Speed Is Killing Your Conversions",
    excerpt: "A deep dive into Core Web Vitals, load time optimization, and the direct impact of site performance on your bottom line.",
    category: "Web Development",
    date: "Feb 5, 2026",
    readTime: "5 min read",
    slug: "website-speed-conversions",
  },
  {
    title: "Building a Brand Identity That Stands Out in a Crowded Market",
    excerpt: "From positioning to visual systems — how to create a brand that resonates with your audience and outlasts trends.",
    category: "Branding",
    date: "Jan 28, 2026",
    readTime: "7 min read",
    slug: "brand-identity-guide",
  },
  {
    title: "Social Media Strategy: Beyond Likes and Followers",
    excerpt: "How to build meaningful community engagement that drives real business outcomes, not just social proof.",
    category: "Social Media",
    date: "Jan 20, 2026",
    readTime: "6 min read",
    slug: "social-media-strategy",
  },
  {
    title: "From MVP to Scale: A Technical Roadmap for Startups",
    excerpt: "The four-phase approach to building digital products that grow with your business — without costly rewrites.",
    category: "Web Development",
    date: "Jan 14, 2026",
    readTime: "9 min read",
    slug: "mvp-to-scale-roadmap",
  },
];

const categories = ["All", "AI & Automation", "Performance Marketing", "Web Development", "Branding", "Social Media"];

// Blog card with diagonal reveal hover effect
function BlogCard({ post, index }: { post: typeof blogPosts[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  return (
    <ScrollReveal delay={index * 0.07}>
      <motion.div
        ref={ref}
        className="relative h-full rounded-2xl border border-border/40 bg-card overflow-hidden group cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {/* Top gradient accent that slides in */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-foreground/0 to-primary"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          style={{ transformOrigin: "left" }}
        />

        {/* Thumbnail with abstract pattern */}
        <div className="h-44 relative overflow-hidden bg-muted/50">
          <div className="absolute inset-0 grid-pattern opacity-[0.06]" />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-primary/[0.06] blur-2xl"
            animate={{ scale: hovered ? 1.4 : 1 }}
            transition={{ duration: 0.5 }}
          />
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-lg bg-primary/[0.1] border border-primary/20 text-primary text-xs font-semibold font-display backdrop-blur-sm">
              {post.category}
            </span>
          </div>
          {/* Decorative lines */}
          <svg className="absolute bottom-0 left-0 w-full h-16 opacity-20" viewBox="0 0 300 60" fill="none">
            <path d="M0,50 Q75,10 150,30 Q225,50 300,20" stroke="hsl(142 80% 45%)" strokeWidth="1" fill="none" />
            <path d="M0,55 Q75,20 150,40 Q225,55 300,30" stroke="hsl(142 80% 45%)" strokeWidth="0.5" fill="none" />
          </svg>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {post.readTime}
            </span>
            <span>{post.date}</span>
          </div>

          <h3 className="font-display font-semibold text-lg text-foreground mb-3 leading-snug group-hover:text-primary transition-colors duration-300">
            {post.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">
            {post.excerpt}
          </p>

          <motion.div
            className="flex items-center gap-1 text-xs font-semibold text-primary"
            animate={{ x: hovered ? 4 : 0, opacity: hovered ? 1 : 0.4 }}
            transition={{ duration: 0.3 }}
          >
            Read article
            <motion.div animate={{ x: hovered ? 3 : 0 }}>
              <ArrowRight size={12} />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

export default function Blog() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/[0.08] to-transparent blur-3xl -translate-y-1/3 translate-x-1/3"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="section-container relative z-10 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-xs font-semibold font-display uppercase tracking-widest text-primary mb-4">
            Insights & Ideas
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight text-foreground mb-6">
            The ScaleGiga{" "}
            <span className="text-gradient">Blog</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Expert insights on digital growth, marketing strategies, web development, and AI automation — written by our team.
          </motion.p>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-8">
        <div className="section-container">
          <ScrollReveal>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((cat, i) => (
                <button
                  key={cat}
                  className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    i === 0
                      ? "bg-primary text-primary-foreground"
                      : "border border-border text-muted-foreground hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-8 pb-24">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {blogPosts.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-24 bg-muted/30 relative overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/[0.06] blur-3xl"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="section-container relative z-10 text-center">
          <ScrollReveal variant="blur">
            <p className="text-xs font-semibold font-display uppercase tracking-widest text-primary mb-5">Stay Updated</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Want More Growth<br />
              <span className="text-gradient">Insights?</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:flex-1 px-5 py-3.5 rounded-2xl bg-card border border-border/60 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
              />
              <button className="btn-glow magnetic-hover inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-semibold text-primary-foreground font-display whitespace-nowrap">
                Subscribe to Newsletter
                <ArrowRight size={15} />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
