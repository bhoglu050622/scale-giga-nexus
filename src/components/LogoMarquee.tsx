export default function LogoMarquee() {
  const logos = Array.from({ length: 12 }, (_, i) => `Client ${i + 1}`);

  return (
    <div className="relative overflow-hidden py-6" style={{ height: "80px" }}>
      <div className="flex animate-marquee gap-10 whitespace-nowrap">
        {[...logos, ...logos].map((name, i) => (
          <div
            key={i}
            className="inline-flex items-center justify-center shrink-0 opacity-30 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            style={{ width: "140px", height: "60px" }}
          >
            <div
              className="w-full h-full rounded-sm border border-border flex items-center justify-center hover:border-primary/40 transition-colors"
            >
              <span className="text-xs font-body font-medium text-muted-foreground uppercase tracking-wider">{name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
