import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, MessageSquare } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { ContactIllustration } from "@/components/Illustrations";

const revenueRanges = [
  "$500K – $2M",
  "$2M – $5M",
  "$5M – $10M",
  "$10M – $25M",
  "$25M – $50M",
  "$50M+",
];

const contactInfo = [
  {
    icon: <Mail size={18} />,
    label: "Email Us",
    value: "hello@scalegiga.com",
    sub: "We reply within 24 hours",
  },
  {
    icon: <MessageSquare size={18} />,
    label: "Strategy Call",
    value: "Book a Session",
    sub: "Private 45-min strategy session",
  },
  {
    icon: <MapPin size={18} />,
    label: "Serving Globally",
    value: "Worldwide",
    sub: "Senior team, always available",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    revenue: "",
    challenge: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold font-body uppercase text-primary mb-5" style={{ letterSpacing: "3px" }}>Get In Touch</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mb-6 leading-tight">
              Let's Engineer Your{" "}
              <span className="text-gradient">Growth Infrastructure</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg leading-relaxed font-body">
              Tell us about your brand and we'll assess whether we're the right growth partner for your next chapter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-16">
        <div className="section-container grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left info */}
          <div className="space-y-6">
            <ScrollReveal>
              <div className="h-[200px] overflow-hidden bg-card border border-border p-6" style={{ borderRadius: "4px" }}>
                <ContactIllustration />
              </div>
            </ScrollReveal>

            {contactInfo.map((info, i) => (
              <ScrollReveal key={info.label} delay={i * 0.08}>
                <div className="flex items-start gap-4 p-5 bg-card border border-border" style={{ borderRadius: "4px" }}>
                  <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/15 flex items-center justify-center text-primary shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold font-body uppercase text-muted-foreground mb-1" style={{ letterSpacing: "2px" }}>{info.label}</p>
                    <p className="font-body font-semibold text-foreground text-sm">{info.value}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 font-body">{info.sub}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}

            <ScrollReveal delay={0.3}>
              <div className="p-5 border-2 border-primary/30 bg-primary/5 relative overflow-hidden" style={{ borderRadius: "4px" }}>
                <p className="font-display text-base text-foreground mb-1.5">Limited Availability</p>
                <p className="text-muted-foreground text-xs leading-relaxed mb-4 font-body">
                  We accept a maximum of 5 new growth partnerships per quarter. Book your strategy session now.
                </p>
                <button
                  className="w-full py-2.5 text-sm font-semibold text-primary-foreground font-body"
                  style={{ background: "hsl(43 80% 49%)", borderRadius: "2px" }}
                >
                  Book a Strategy Call →
                </button>
              </div>
            </ScrollReveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <div className="p-8 md:p-12 bg-card border border-border" style={{ borderRadius: "4px" }}>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-16 h-16 rounded-sm flex items-center justify-center mx-auto mb-6 text-3xl" style={{ background: "linear-gradient(135deg, hsl(38 70% 35%), hsl(43 80% 49%))" }}>
                      🚀
                    </div>
                    <h2 className="font-display text-2xl text-foreground mb-3">
                      Application Received
                    </h2>
                    <p className="text-muted-foreground max-w-md mx-auto leading-relaxed font-body">
                      Our team will review your brand details and respond within 24 hours with an assessment of fit and next steps.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <p className="font-display text-2xl text-foreground mb-2">Book a Strategy Call</p>
                      <p className="text-sm text-muted-foreground font-body">4 questions. 2 minutes. We'll get back to you within 24 hours.</p>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold font-body text-muted-foreground uppercase mb-2" style={{ letterSpacing: "2px" }}>
                        Your Name *
                      </label>
                      <input
                        required
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Full name"
                        className="w-full px-4 py-3 border border-border bg-muted/30 text-foreground text-sm font-body placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-all"
                        style={{ borderRadius: "2px" }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold font-body text-muted-foreground uppercase mb-2" style={{ letterSpacing: "2px" }}>
                        Company / Brand *
                      </label>
                      <input
                        required
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your company or brand name"
                        className="w-full px-4 py-3 border border-border bg-muted/30 text-foreground text-sm font-body placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-all"
                        style={{ borderRadius: "2px" }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold font-body text-muted-foreground uppercase mb-2" style={{ letterSpacing: "2px" }}>
                        Annual Revenue Range *
                      </label>
                      <select
                        required
                        name="revenue"
                        value={form.revenue}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border bg-muted/30 text-foreground text-sm font-body focus:outline-none focus:border-primary/50 transition-all appearance-none cursor-pointer"
                        style={{ borderRadius: "2px" }}
                      >
                        <option value="" disabled>Select your revenue range...</option>
                        {revenueRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold font-body text-muted-foreground uppercase mb-2" style={{ letterSpacing: "2px" }}>
                        Your Biggest Growth Challenge *
                      </label>
                      <textarea
                        required
                        name="challenge"
                        value={form.challenge}
                        onChange={handleChange}
                        rows={4}
                        placeholder="What's the #1 thing preventing you from 2x-ing revenue in the next 12 months?"
                        className="w-full px-4 py-3 border border-border bg-muted/30 text-foreground text-sm font-body placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-all resize-none"
                        style={{ borderRadius: "2px" }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-4 text-base font-semibold text-primary-foreground font-body"
                      style={{ background: "hsl(43 80% 49%)", borderRadius: "2px" }}
                    >
                      Book a Strategy Call
                      <ArrowRight size={17} />
                    </button>

                    <p className="text-xs text-center text-muted-foreground font-body">
                      By submitting, you agree to a confidential assessment. We never share your information.
                    </p>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="section-container text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-xs font-semibold font-body uppercase text-primary mb-4" style={{ letterSpacing: "3px" }}>FAQ</p>
            <h2 className="font-display text-3xl text-foreground mb-10">Common Questions</h2>
          </ScrollReveal>

          <div className="space-y-4 text-left">
            {[
              {
                q: "What size brands do you work with?",
                a: "We work exclusively with brands doing $2M–$50M in annual revenue. Our infrastructure solutions are designed for businesses with proven product-market fit that need to scale.",
              },
              {
                q: "How much does an engagement cost?",
                a: "Our engagements start at $50,000 for strategic infrastructure builds. We work with brands that understand digital infrastructure is an investment, not an expense.",
              },
              {
                q: "What makes ScaleGiga different from agencies?",
                a: "We're not an agency — we're a growth board. No junior teams, no templates, no hourly billing. We engineer outcomes and invest in the growth we create.",
              },
              {
                q: "How long does a typical engagement last?",
                a: "Initial infrastructure builds take 8–12 weeks. Most clients retain us as their ongoing growth board for continuous optimization and scaling.",
              },
            ].map((faq, i) => (
              <ScrollReveal key={faq.q} delay={i * 0.07}>
                <div className="p-6 bg-card border border-border" style={{ borderRadius: "4px" }}>
                  <p className="font-display text-foreground mb-2">{faq.q}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed font-body">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
