import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, MessageSquare } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { ContactIllustration } from "@/components/Illustrations";

const projectTypes = [
  "Website Development", "App Development", "Performance Marketing",
  "Social Media Marketing", "Brand Strategy", "AI Automation",
  "Creative & Design", "Photography", "Full Digital Package", "Other",
];

const contactInfo = [
  { icon: <Mail size={18} />, label: "Email Us", value: "hello@scalegiga.com", sub: "We reply within 24 hours" },
  { icon: <MessageSquare size={18} />, label: "Chat With Us", value: "Schedule a Call", sub: "Book a free 30-min discovery call" },
  { icon: <MapPin size={18} />, label: "Serving Globally", value: "Worldwide", sub: "Remote-first team, always on" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", projectType: "", message: "" });
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
      <section className="relative py-12 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
        <motion.div
          className="absolute top-0 left-0 w-[500px] h-[400px] rounded-full bg-primary/[0.04] blur-3xl -translate-x-1/3 -translate-y-1/2"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="section-container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 24, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.7 }}>
            <p className="text-xs font-semibold font-display uppercase tracking-widest text-primary mb-5">Get In Touch</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Let's Build Something<br />
              <span className="text-gradient">That Scales</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg leading-relaxed">
              Tell us about your project and we'll get back to you within 24 hours with a tailored growth plan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-10 sm:py-16">
        <div className="section-container grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Left info */}
          <div className="space-y-6">
            <ScrollReveal>
              <motion.div
                className="h-[260px] sm:h-[280px]"
                animate={{ y: [0, -6, 0], rotateX: [0, 1.5, 0], rotateY: [0, -2, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{ perspective: 800, transformStyle: "preserve-3d" }}
              >
                <ContactIllustration />
              </motion.div>
            </ScrollReveal>

            {contactInfo.map((info, i) => (
              <ScrollReveal key={info.label} delay={i * 0.08}>
                <motion.div
                  className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border/40 group"
                  whileHover={{ x: 4, borderColor: "hsl(142 80% 45% / 0.25)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/[0.08] border border-primary/[0.15] flex items-center justify-center text-primary shrink-0 group-hover:bg-primary/[0.12] transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold font-display uppercase tracking-widest text-muted-foreground mb-1">{info.label}</p>
                    <p className="font-display font-semibold text-foreground text-sm">{info.value}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{info.sub}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}

            <ScrollReveal delay={0.3}>
              <div className="p-5 rounded-2xl bg-gradient-primary text-primary-foreground relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-primary-foreground/5 blur-2xl" />
                <p className="font-display font-bold text-base mb-1.5">Free Discovery Call</p>
                <p className="text-primary-foreground/70 text-xs leading-relaxed mb-4">
                  Not sure where to start? Book a free 30-minute call to map out your growth strategy.
                </p>
                <button className="w-full py-2.5 rounded-xl bg-primary-foreground/15 border border-primary-foreground/20 text-primary-foreground text-sm font-semibold font-display hover:bg-primary-foreground/20 transition-colors">
                  Book a Call →
                </button>
              </div>
            </ScrollReveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <div className="p-8 md:p-12 rounded-2xl bg-card border border-border/40">
                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
                    <div className="w-16 h-16 rounded-3xl bg-gradient-primary flex items-center justify-center mx-auto mb-6 text-3xl">🚀</div>
                    <h2 className="font-display text-2xl font-bold text-foreground mb-3">Message Received!</h2>
                    <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
                      Thanks for reaching out. Our team will review your project details and get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <p className="font-display text-2xl font-bold text-foreground mb-2">Start Your Growth Journey</p>
                      <p className="text-sm text-muted-foreground">Fill in the details below and we'll get back to you within 24 hours.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold font-display text-muted-foreground uppercase tracking-widest mb-2">Full Name *</label>
                        <input required name="name" value={form.name} onChange={handleChange} placeholder="Your full name"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold font-display text-muted-foreground uppercase tracking-widest mb-2">Email Address *</label>
                        <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@company.com"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold font-display text-muted-foreground uppercase tracking-widest mb-2">Company / Brand Name</label>
                      <input name="company" value={form.company} onChange={handleChange} placeholder="Your company or brand name"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold font-display text-muted-foreground uppercase tracking-widest mb-2">Project Type *</label>
                      <select required name="projectType" value={form.projectType} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all appearance-none cursor-pointer">
                        <option value="" disabled>Select a service type...</option>
                        {projectTypes.map((type) => (<option key={type} value={type}>{type}</option>))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold font-display text-muted-foreground uppercase tracking-widest mb-2">Tell Us About Your Project *</label>
                      <textarea required name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Describe your goals, challenges, and what success looks like..."
                        className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none" />
                    </div>

                    <button type="submit" className="btn-glow w-full flex items-center justify-center gap-2 py-4 rounded-2xl text-base font-semibold text-primary-foreground font-display">
                      Send Message <ArrowRight size={17} />
                    </button>
                    <p className="text-xs text-center text-muted-foreground">
                      By submitting this form, you agree to be contacted by the ScaleGiga team. We never share your information.
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
            <p className="text-xs font-semibold font-display uppercase tracking-widest text-primary mb-4">FAQ</p>
            <h2 className="font-display text-3xl font-bold text-foreground mb-10">Common Questions</h2>
          </ScrollReveal>

          <div className="space-y-4 text-left">
            {[
              { q: "How long does a typical project take?", a: "Project timelines vary by scope. A standard website takes 4–8 weeks. Performance marketing campaigns can launch within 1–2 weeks. Full brand strategy and identity projects typically take 6–10 weeks." },
              { q: "Do you work with startups and small businesses?", a: "Absolutely. We work with businesses at every stage — from early-stage startups building their first digital presence to established brands looking to scale." },
              { q: "What makes ScaleGiga different from other digital agencies?", a: "We're a full-stack digital growth partner. Strategy, design, development, marketing, and AI automation are all under one roof and aligned to your business goals." },
              { q: "Do you offer retainer-based partnerships?", a: "Yes. Most of our clients engage us on a monthly retainer basis for ongoing marketing, optimization, and growth management." },
            ].map((faq, i) => (
              <ScrollReveal key={faq.q} delay={i * 0.07}>
                <motion.div
                  className="p-6 rounded-2xl bg-card border border-border/40 group"
                  whileHover={{ borderColor: "hsl(142 80% 45% / 0.2)" }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-display font-semibold text-foreground mb-2">{faq.q}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
