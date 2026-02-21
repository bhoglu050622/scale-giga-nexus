import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import {
  WebAppIllustration,
  AdsIllustration,
  SocialIllustration,
  CreativeIllustration,
  AIIllustration,
  PhotoIllustration,
  BrandIllustration,
} from "@/components/Illustrations";

const services = [
  {
    id: "web",
    label: "Web & App Dev",
    title: "Website & App Development",
    subtitle: "Your digital foundation — built to convert and scale.",
    intro:
      "We design and develop fast, scalable, conversion-focused websites and mobile applications tailored to your business goals. Our websites are SEO-ready, mobile-first, and engineered to turn visitors into customers. From landing pages to complex SaaS platforms, we build with performance and growth in mind.",
    benefits: [
      "Custom design tailored to your brand and audience",
      "Mobile-first, SEO-optimized from the ground up",
      "Lightning-fast load times (Core Web Vitals optimized)",
      "Conversion rate optimization built into every page",
      "Scalable architecture for long-term growth",
      "Ongoing maintenance and performance monitoring",
    ],
    illustration: <WebAppIllustration />,
    color: "from-electric-50 to-electric-100/30",
    accent: "text-electric-600",
    tag: "hsl(232 90% 65%)",
  },
  {
    id: "ads",
    label: "Performance Marketing",
    title: "Performance Marketing (Ads)",
    subtitle: "Qualified leads. Measurable revenue. No guesswork.",
    intro:
      "We manage data-driven advertising campaigns across Google, Meta, LinkedIn, and other platforms to drive qualified leads, sales, and revenue. Our performance marketing team combines audience intelligence, creative testing, and relentless optimization to deliver results that compound over time.",
    benefits: [
      "Multi-platform campaign management (Google, Meta, LinkedIn)",
      "Advanced audience targeting and segmentation",
      "Creative A/B testing at scale",
      "Full-funnel attribution and reporting",
      "Dedicated account manager with weekly updates",
      "Average 4.8x ROAS across client campaigns",
    ],
    illustration: <AdsIllustration />,
    color: "from-cyan-50 to-cyan-100/20",
    accent: "text-cyan-600",
    tag: "hsl(190 100% 45%)",
  },
  {
    id: "social",
    label: "Social Media",
    title: "Social Media Marketing",
    subtitle: "Grow your audience. Build your community. Drive engagement.",
    intro:
      "We build brand presence, engagement, and community through strategic content planning, high-quality creatives, and consistent social media management. From content calendars to influencer partnerships, we create social strategies that grow followers and convert them into loyal customers.",
    benefits: [
      "Multi-platform strategy (Instagram, LinkedIn, TikTok, X)",
      "Custom content creation and graphic design",
      "Community management and engagement",
      "Influencer identification and outreach",
      "Monthly performance reporting and insights",
      "Trend-driven content that keeps you relevant",
    ],
    illustration: <SocialIllustration />,
    color: "from-violet-light/10 to-accent/5",
    accent: "text-violet",
    tag: "hsl(260 80% 65%)",
  },
  {
    id: "creative",
    label: "Creative & Design",
    title: "Creative & Design",
    subtitle: "Design that communicates, converts, and captivates.",
    intro:
      "We craft high-impact visual identities, ad creatives, UI/UX designs, and brand assets that communicate your value clearly and beautifully. Great design isn't just aesthetic — it's strategic. Every visual we create is engineered to drive action and build brand recognition.",
    benefits: [
      "Brand identity systems and logo design",
      "UI/UX design for web and mobile products",
      "Ad creatives optimized for each platform",
      "Pitch decks, presentations, and marketing materials",
      "Motion graphics and animated assets",
      "Consistent brand guidelines and asset libraries",
    ],
    illustration: <CreativeIllustration />,
    color: "from-electric-50 to-violet-light/10",
    accent: "text-electric-600",
    tag: "hsl(232 90% 65%)",
  },
  {
    id: "ai",
    label: "AI & Automation",
    title: "AI Agents & Automation",
    subtitle: "Work smarter. Scale faster. Automate intelligently.",
    intro:
      "We build AI-powered chatbots and workflow automation systems that reduce manual work, improve customer experience, and unlock new efficiency. From intelligent lead qualification bots to automated onboarding flows, our AI systems give your team superpowers.",
    benefits: [
      "Custom AI chatbots for sales, support, and onboarding",
      "CRM and workflow automation (Zapier, Make, custom APIs)",
      "AI-powered lead scoring and qualification",
      "Email automation sequences that feel human",
      "Integration with your existing tech stack",
      "Ongoing model training and optimization",
    ],
    illustration: <AIIllustration />,
    color: "from-cyan-50 to-electric-50/50",
    accent: "text-cyan-600",
    tag: "hsl(190 100% 45%)",
  },
  {
    id: "photography",
    label: "Photography",
    title: "Product Photography & Shoots",
    subtitle: "Premium visuals that sell your products and elevate your brand.",
    intro:
      "We create premium product visuals and brand imagery for websites, ads, and social platforms. In a world where attention is scarce, high-quality photography is the difference between a scroll and a sale. Our creative team produces visuals that stop thumbs and drive conversions.",
    benefits: [
      "Studio and on-location product shoots",
      "E-commerce optimized product photography",
      "Lifestyle and brand story imagery",
      "360° product photography for immersive displays",
      "Post-production editing and retouching",
      "Fast turnaround with commercial licensing",
    ],
    illustration: <PhotoIllustration />,
    color: "from-violet-light/10 to-electric-50/30",
    accent: "text-violet",
    tag: "hsl(260 80% 65%)",
  },
  {
    id: "brand",
    label: "Brand Strategy",
    title: "Brand Strategy",
    subtitle: "The thinking behind every great brand.",
    intro:
      "We define positioning, messaging, tone of voice, and identity to create strong, memorable brands that resonate with the right audience. Brand strategy is the foundation that makes every other digital investment more effective. We build brands that people trust, remember, and choose.",
    benefits: [
      "Market positioning and competitive analysis",
      "Brand archetype and personality definition",
      "Messaging hierarchy and tone of voice guide",
      "Target audience research and persona development",
      "Brand naming, tagline, and narrative development",
      "Complete brand playbook for consistent execution",
    ],
    illustration: <BrandIllustration />,
    color: "from-electric-50 to-cyan-50/30",
    accent: "text-electric-600",
    tag: "hsl(232 90% 65%)",
  },
];

export default function Services() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/[0.06] blur-3xl -translate-y-1/2 translate-x-1/2"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold font-display uppercase tracking-widest text-primary mb-4">
              What We Offer
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Digital Services Built for{" "}
              <span className="text-gradient">Real Growth</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed mb-10">
              We're a full-service digital growth agency offering everything from website development and performance marketing to AI automation and brand strategy. One team, every capability.
            </p>
            {/* Quick links */}
            <div className="flex flex-wrap justify-center gap-2">
              {services.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="px-4 py-2 rounded-full border border-border text-sm font-medium text-muted-foreground hover:border-primary hover:text-primary transition-all bg-card"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 ${i % 2 === 1 ? "bg-muted/30" : ""}`}
        >
          <div className="section-container">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                i % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Illustration */}
              <ScrollReveal direction={i % 2 === 1 ? "right" : "left"} className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className={`relative h-[320px] rounded-3xl bg-gradient-to-br ${service.color} border border-border/50 shadow-card p-8 flex items-center justify-center overflow-hidden`}>
                  <div className="absolute top-4 right-4 w-16 h-16 rounded-full blur-2xl" style={{ background: service.tag, opacity: 0.2 }} />
                  <div className="w-full h-full">
                    {service.illustration}
                  </div>
                </div>
              </ScrollReveal>

              {/* Content */}
              <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <ScrollReveal direction={i % 2 === 1 ? "left" : "right"}>
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold font-display uppercase tracking-widest mb-5 border"
                    style={{
                      color: service.tag,
                      borderColor: `${service.tag}30`,
                      background: `${service.tag}10`,
                    }}
                  >
                    {service.label}
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3 leading-tight">
                    {service.title}
                  </h2>
                  <p className="font-display text-base text-muted-foreground mb-5 font-medium">
                    {service.subtitle}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
                    {service.intro}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                          style={{ background: `${service.tag}15` }}
                        >
                          <Check size={11} style={{ color: service.tag }} />
                        </div>
                        <span className="text-sm text-foreground/80 leading-snug">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="btn-glow inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white font-display"
                  >
                    Get Started <ArrowRight size={15} />
                  </Link>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-24 bg-foreground">
        <div className="section-container text-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-black mb-5">
              Not Sure Where to Start?
            </h2>
            <p className="text-black max-w-lg mx-auto mb-10 text-base leading-relaxed">
              Book a free discovery call and we'll map out the exact services that will drive the most growth for your business.
            </p>
            <Link
              to="/contact"
              className="btn-glow inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold text-white font-display"
            >
              Book a Free Discovery Call <ArrowRight size={17} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
