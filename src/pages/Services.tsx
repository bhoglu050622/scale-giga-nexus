import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";
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
import { useRef } from "react";

const services = [
  {
    id: "web",
    label: "Web & App Dev",
    title: "Website & App Development",
    subtitle: "Your digital foundation — built to convert and scale.",
    intro: "We design and develop fast, scalable, conversion-focused websites and mobile applications tailored to your business goals.",
    benefits: [
      "Custom design tailored to your brand and audience",
      "Mobile-first, SEO-optimized from the ground up",
      "Lightning-fast load times (Core Web Vitals optimized)",
      "Conversion rate optimization built into every page",
      "Scalable architecture for long-term growth",
      "Ongoing maintenance and performance monitoring",
    ],
    illustration: <WebAppIllustration />,
  },
  {
    id: "ads",
    label: "Performance Marketing",
    title: "Performance Marketing (Ads)",
    subtitle: "Qualified leads. Measurable revenue. No guesswork.",
    intro: "We manage data-driven advertising campaigns across Google, Meta, LinkedIn, and other platforms to drive qualified leads, sales, and revenue.",
    benefits: [
      "Multi-platform campaign management (Google, Meta, LinkedIn)",
      "Advanced audience targeting and segmentation",
      "Creative A/B testing at scale",
      "Full-funnel attribution and reporting",
      "Dedicated account manager with weekly updates",
      "Average 4.8x ROAS across client campaigns",
    ],
    illustration: <AdsIllustration />,
  },
  {
    id: "social",
    label: "Social Media",
    title: "Social Media Marketing",
    subtitle: "Grow your audience. Build your community. Drive engagement.",
    intro: "We build brand presence, engagement, and community through strategic content planning, high-quality creatives, and consistent social media management.",
    benefits: [
      "Multi-platform strategy (Instagram, LinkedIn, TikTok, X)",
      "Custom content creation and graphic design",
      "Community management and engagement",
      "Influencer identification and outreach",
      "Monthly performance reporting and insights",
      "Trend-driven content that keeps you relevant",
    ],
    illustration: <SocialIllustration />,
  },
  {
    id: "creative",
    label: "Creative & Design",
    title: "Creative & Design",
    subtitle: "Design that communicates, converts, and captivates.",
    intro: "We craft high-impact visual identities, ad creatives, UI/UX designs, and brand assets that communicate your value clearly and beautifully.",
    benefits: [
      "Brand identity systems and logo design",
      "UI/UX design for web and mobile products",
      "Ad creatives optimized for each platform",
      "Pitch decks, presentations, and marketing materials",
      "Motion graphics and animated assets",
      "Consistent brand guidelines and asset libraries",
    ],
    illustration: <CreativeIllustration />,
  },
  {
    id: "ai",
    label: "AI & Automation",
    title: "AI Agents & Automation",
    subtitle: "Work smarter. Scale faster. Automate intelligently.",
    intro: "We build AI-powered chatbots and workflow automation systems that reduce manual work, improve customer experience, and unlock new efficiency.",
    benefits: [
      "Custom AI chatbots for sales, support, and onboarding",
      "CRM and workflow automation (Zapier, Make, custom APIs)",
      "AI-powered lead scoring and qualification",
      "Email automation sequences that feel human",
      "Integration with your existing tech stack",
      "Ongoing model training and optimization",
    ],
    illustration: <AIIllustration />,
  },
  {
    id: "photography",
    label: "Photography",
    title: "Product Photography & Shoots",
    subtitle: "Premium visuals that sell your products and elevate your brand.",
    intro: "We create premium product visuals and brand imagery for websites, ads, and social platforms.",
    benefits: [
      "Studio and on-location product shoots",
      "E-commerce optimized product photography",
      "Lifestyle and brand story imagery",
      "360° product photography for immersive displays",
      "Post-production editing and retouching",
      "Fast turnaround with commercial licensing",
    ],
    illustration: <PhotoIllustration />,
  },
  {
    id: "brand",
    label: "Brand Strategy",
    title: "Brand Strategy",
    subtitle: "The thinking behind every great brand.",
    intro: "We define positioning, messaging, tone of voice, and identity to create strong, memorable brands that resonate with the right audience.",
    benefits: [
      "Market positioning and competitive analysis",
      "Brand archetype and personality definition",
      "Messaging hierarchy and tone of voice guide",
      "Target audience research and persona development",
      "Brand naming, tagline, and narrative development",
      "Complete brand playbook for consistent execution",
    ],
    illustration: <BrandIllustration />,
  },
];

// Service illustration with floating 3D animation — no outer box
function ServiceVisual({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useTransform(mouseY, [0, 1], [5, -5]);
  const rotateY = useTransform(mouseX, [0, 1], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  // Alternate float direction per card for visual variety
  const floatY = index % 2 === 0 ? [0, -10, 0] : [0, 8, 0];
  const floatRotate = index % 3 === 0 ? [0, 1.5, 0] : index % 3 === 1 ? [0, -1, 0] : [0, 0.8, 0];

  return (
    <motion.div
      ref={ref}
      className="relative h-[320px] overflow-visible"
      style={{ rotateX, rotateY, transformPerspective: 900, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="w-full h-full"
        animate={{
          y: floatY,
          rotateZ: floatRotate,
        }}
        transition={{
          duration: 5 + index * 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/[0.06] blur-3xl -translate-y-1/2 translate-x-1/2"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="section-container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 24, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.7 }}>
            <p className="text-xs font-semibold font-display uppercase tracking-widest text-primary mb-4">What We Offer</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Digital Services Built for{" "}
              <span className="text-gradient">Real Growth</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed mb-10">
              We're a full-service digital growth agency offering everything from website development and performance marketing to AI automation and brand strategy.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {services.map((s) => (
                <a key={s.id} href={`#${s.id}`} className="px-4 py-2 rounded-full border border-border text-sm font-medium text-muted-foreground hover:border-primary hover:text-primary transition-all bg-card">
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      {services.map((service, i) => (
        <section key={service.id} id={service.id} className={`py-12 sm:py-20 ${i % 2 === 1 ? "bg-muted/30" : ""}`}>
          <div className="section-container">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
              <ScrollReveal direction={i % 2 === 1 ? "right" : "left"} className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                <ServiceVisual index={i}>
                  {service.illustration}
                </ServiceVisual>
              </ScrollReveal>

              <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <ScrollReveal direction={i % 2 === 1 ? "left" : "right"}>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold font-display uppercase tracking-widest mb-5 border border-primary/30 bg-primary/[0.06] text-primary">
                    {service.label}
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3 leading-tight">{service.title}</h2>
                  <p className="font-display text-base text-muted-foreground mb-5 font-medium">{service.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed mb-8 text-sm">{service.intro}</p>

                  <ul className="space-y-2.5 mb-8">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-primary/[0.08]">
                          <Check size={11} className="text-primary" />
                        </div>
                        <span className="text-sm text-foreground/80 leading-snug">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact" className="btn-glow inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-primary-foreground font-display">
                    Get Started <ArrowRight size={15} />
                  </Link>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-12 sm:py-24 bg-foreground">
        <div className="section-container text-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-5">
              Not Sure Where to Start?
            </h2>
            <p className="text-primary-foreground/60 max-w-lg mx-auto mb-10 text-base leading-relaxed">
              Book a free discovery call and we'll map out the exact services that will drive the most growth for your business.
            </p>
            <Link to="/contact" className="btn-glow inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold text-primary-foreground font-display">
              Book a Free Discovery Call <ArrowRight size={17} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
