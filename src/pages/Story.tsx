import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Target, Lightbulb, TrendingUp, Cpu, Handshake } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { StoryIllustration } from "@/components/Illustrations";

const values = [
  {
    icon: <TrendingUp size={20} />,
    title: "Outcome-Driven Architecture",
    desc: "Every decision we make is measured against revenue impact. We engineer outcomes, not deliverables.",
  },
  {
    icon: <Lightbulb size={20} />,
    title: "Design as Strategy",
    desc: "Every visual element serves a strategic function — building trust, driving conversions, or communicating value at scale.",
  },
  {
    icon: <Target size={20} />,
    title: "Revenue Over Vanity",
    desc: "We measure success by your bottom line — revenue, LTV, retention — not impressions and follower counts.",
  },
  {
    icon: <Cpu size={20} />,
    title: "Technology Leadership",
    desc: "We adopt emerging technologies — AI, automation, predictive analytics — so our clients maintain competitive advantage.",
  },
  {
    icon: <Handshake size={20} />,
    title: "Growth Board Partnerships",
    desc: "We don't close deals. We become your growth board. Our equity is in your trajectory.",
  },
];

const team = [
  { name: "Alex Rivera", role: "Founder & Growth Strategist", init: "AR" },
  { name: "Priya Nair", role: "Head of Creative", init: "PN" },
  { name: "James Wu", role: "Lead Architect", init: "JW" },
  { name: "Sofia Mendez", role: "Revenue Operations Lead", init: "SM" },
  { name: "Liam Okafor", role: "AI & Automation Engineer", init: "LO" },
  { name: "Emma Chen", role: "Brand Strategist", init: "EC" },
];

export default function Story() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="section-container relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold font-body uppercase text-primary mb-5" style={{ letterSpacing: "3px" }}>Our Process</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mb-7 leading-tight">
              The Methodology Behind{" "}
              <span className="text-gradient">8-Figure Growth</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto font-body">
              ScaleGiga was founded with one belief: luxury brands deserve infrastructure, not agencies. We partner with ambitious brands to engineer growth systems that compound.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline illustration */}
      <section className="py-10">
        <div className="section-container max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="h-[220px] bg-card border border-border p-8" style={{ borderRadius: "4px" }}>
              <StoryIllustration />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Story content */}
      <section className="py-16">
        <div className="section-container max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="prose prose-gray max-w-none">
              <p className="text-muted-foreground text-base leading-relaxed mb-6 font-body">
                We combine strategy, technology, and senior expertise to solve complex growth challenges — not just create websites. Your digital infrastructure, automation systems, and growth channels should work together as one intelligent revenue engine.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-6 font-body">
                Since our founding, we've worked exclusively with brands doing $2M–$50M in revenue — from luxury DTC to enterprise SaaS to high-end professional services. What unites them is ambition and proven product-market fit.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed font-body">
                Every engagement starts with deep discovery — understanding your revenue model, your competitive landscape, and your growth ceiling. Only then do we architect the infrastructure to break through it.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/30">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={0}>
              <div className="p-10 bg-card border border-primary/20 relative overflow-hidden" style={{ borderRadius: "4px" }}>
                <p className="text-xs font-semibold font-body uppercase text-primary mb-4" style={{ letterSpacing: "3px" }}>Our Mission</p>
                <h2 className="font-display text-2xl text-foreground mb-4 leading-tight">
                  Engineer Growth Infrastructure That Compounds
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed font-body">
                  Our mission is to build digital infrastructure that turns revenue into compounding returns — creating the growth engines behind tomorrow's luxury empires.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="p-10 bg-card border border-border relative overflow-hidden" style={{ borderRadius: "4px" }}>
                <p className="text-xs font-semibold font-body uppercase text-primary mb-4" style={{ letterSpacing: "3px" }}>Our Vision</p>
                <h2 className="font-display text-2xl text-foreground mb-4 leading-tight">
                  The Growth Board for Category Leaders
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed font-body">
                  To become the trusted growth board for luxury brands worldwide — building the digital infrastructure of tomorrow's industry leaders.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="section-container">
          <ScrollReveal className="text-center mb-16">
            <p className="text-xs font-semibold font-body uppercase text-primary mb-4" style={{ letterSpacing: "3px" }}>Our Values</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-5">
              The Principles That{" "}
              <span className="text-gradient">Drive Us</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.08}>
                <div className="service-card h-full p-7 bg-card border border-border" style={{ borderRadius: "4px" }}>
                  <div className="w-11 h-11 rounded-sm bg-primary/10 border border-primary/15 flex items-center justify-center text-primary mb-5">
                    {v.icon}
                  </div>
                  <h3 className="font-display text-foreground mb-3 text-lg">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-body">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-muted/30">
        <div className="section-container">
          <ScrollReveal className="text-center mb-16">
            <p className="text-xs font-semibold font-body uppercase text-primary mb-4" style={{ letterSpacing: "3px" }}>Our Team</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-5">
              Senior Strategists.{" "}
              <span className="text-gradient">No Juniors.</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.07} className="text-center">
                <div className="mx-auto w-16 h-16 rounded-sm flex items-center justify-center text-primary-foreground font-display text-lg mb-3" style={{ background: "linear-gradient(135deg, hsl(38 70% 35%), hsl(43 80% 49%))" }}>
                  {member.init}
                </div>
                <p className="font-body font-semibold text-sm text-foreground">{member.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5 leading-tight font-body">{member.role}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="section-container text-center max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-4xl text-foreground mb-5">
              Ready to Join Our Portfolio?
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed font-body">
              We take on a limited number of growth partnerships each quarter. Let's discuss if we're the right fit.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-primary-foreground font-body"
              style={{ background: "hsl(43 80% 49%)", borderRadius: "2px" }}
            >
              Book a Strategy Call <ArrowRight size={17} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
