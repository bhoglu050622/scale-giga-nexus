import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCard from "@/components/AnimatedCard";

const blogPosts = [
  {
    title: "The $2M to $8M Playbook: How Luxury Brands Scale Past 7 Figures",
    excerpt: "The three infrastructure shifts that separate 7-figure brands from 8-figure empires — and how to architect each one.",
    category: "Growth Strategy",
    date: "Feb 18, 2026",
    readTime: "8 min read",
    slug: "luxury-brand-scaling-playbook",
  },
  {
    title: "Why Your Website Architecture Is Your Biggest Revenue Bottleneck",
    excerpt: "Most luxury brands lose 40% of potential revenue to poor site architecture. Here's how to fix it in 90 days.",
    category: "Infrastructure",
    date: "Feb 12, 2026",
    readTime: "6 min read",
    slug: "website-architecture-revenue",
  },
  {
    title: "AI Automation for Luxury Brands: Beyond Chatbots",
    excerpt: "How autonomous systems are replacing $2M+ in operational overhead for premium brands — without sacrificing the white-glove experience.",
    category: "AI & Automation",
    date: "Feb 5, 2026",
    readTime: "7 min read",
    slug: "ai-automation-luxury-brands",
  },
  {
    title: "The Partnership Ecosystem Model: 5x Reach Without 5x Spend",
    excerpt: "Why the smartest luxury brands are building distribution ecosystems instead of running ad campaigns.",
    category: "Distribution",
    date: "Jan 28, 2026",
    readTime: "5 min read",
    slug: "partnership-ecosystem-model",
  },
  {
    title: "Conversion Architecture: Engineering 18% Rates for Premium Brands",
    excerpt: "The exact framework we used to take a luxury skincare brand from 3% to 18% conversion — with zero discounting.",
    category: "CRO",
    date: "Jan 20, 2026",
    readTime: "9 min read",
    slug: "conversion-architecture-premium",
  },
  {
    title: "The Senior-Only Model: Why Junior Teams Destroy Luxury Brand Value",
    excerpt: "Why we refuse to hire juniors — and how this counter-intuitive approach delivers 340% better ROI for our clients.",
    category: "Strategy",
    date: "Jan 14, 2026",
    readTime: "6 min read",
    slug: "senior-only-model",
  },
];

const categories = ["All", "Growth Strategy", "Infrastructure", "AI & Automation", "Distribution", "CRO"];

export default function Blog() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="section-container relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold font-body uppercase text-primary mb-4"
            style={{ letterSpacing: "3px" }}
          >
            Insights & Intelligence
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.08] tracking-tight text-foreground mb-6"
          >
            The ScaleGiga{" "}
            <span className="text-gradient">Intelligence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto font-body"
          >
            Strategic insights on growth infrastructure, AI automation, and revenue engineering for luxury brands.
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
                  className={`px-5 py-2 text-sm font-medium font-body transition-all duration-200 ${
                    i === 0
                      ? "bg-primary text-primary-foreground"
                      : "border border-border text-muted-foreground hover:border-primary/40 hover:text-primary"
                  }`}
                  style={{ borderRadius: "2px" }}
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
              <ScrollReveal key={post.slug} delay={i * 0.07}>
                <AnimatedCard className="h-full border border-border bg-card overflow-hidden group" style={{ borderRadius: "4px" }}>
                  <div className="h-48 bg-gradient-hero relative overflow-hidden">
                    <div className="absolute inset-0 dot-pattern opacity-20" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary/[0.15] border border-primary/20 text-primary text-xs font-semibold font-body" style={{ borderRadius: "2px" }}>
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3 font-body">
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="font-display text-lg text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5 font-body">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-1 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 font-body">
                      Read insight <ArrowRight size={12} />
                    </div>
                  </div>
                </AnimatedCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="section-container relative z-10 text-center">
          <ScrollReveal variant="blur">
            <p className="text-xs font-semibold font-body uppercase text-primary mb-5" style={{ letterSpacing: "3px" }}>Stay Informed</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              Weekly Growth{" "}
              <span className="text-gradient">Intelligence</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:flex-1 px-5 py-3.5 bg-card border border-border text-foreground placeholder:text-muted-foreground text-sm font-body focus:outline-none focus:border-primary/50 transition-all"
                style={{ borderRadius: "2px" }}
              />
              <button
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-primary-foreground font-body whitespace-nowrap"
                style={{ background: "hsl(43 80% 49%)", borderRadius: "2px" }}
              >
                Subscribe
                <ArrowRight size={15} />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
