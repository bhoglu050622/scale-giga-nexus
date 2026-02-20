// Hero illustration - abstract tech / network sphere
export function HeroIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer rotating ring */}
      <div className="absolute w-[400px] h-[400px] rounded-full border border-electric-200/40 animate-spin-slow" />
      <div className="absolute w-[320px] h-[320px] rounded-full border border-electric-300/30" style={{ animation: "spin-slow 14s linear infinite reverse" }} />

      {/* Center blob */}
      <div className="relative w-[260px] h-[260px] flex items-center justify-center">
        <div
          className="absolute inset-0 animate-blob-morph"
          style={{
            background: "linear-gradient(135deg, hsl(232 90% 65% / 0.12), hsl(260 80% 65% / 0.12), hsl(190 100% 50% / 0.10))",
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          }}
        />

        {/* Center core */}
        <div className="relative w-[140px] h-[140px] rounded-3xl flex items-center justify-center glass-card animate-pulse-glow">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                <stop stopColor="hsl(232, 90%, 65%)" />
                <stop offset="1" stopColor="hsl(260, 80%, 65%)" />
              </linearGradient>
            </defs>
            <path d="M8 48L18 20L32 38L44 26L56 48H8Z" fill="url(#g1)" opacity="0.9" />
            <circle cx="44" cy="18" r="8" fill="hsl(190 100% 55%)" opacity="0.85" />
            <circle cx="18" cy="20" r="3" fill="hsl(232, 90%, 65%)" />
            <circle cx="32" cy="38" r="3" fill="hsl(232, 90%, 65%)" />
            <circle cx="44" cy="26" r="3" fill="hsl(232, 90%, 65%)" />
            <circle cx="56" cy="48" r="3" fill="hsl(190 100% 55%)" />
          </svg>
        </div>
      </div>

      {/* Floating nodes */}
      {[
        { top: "12%", left: "8%", size: 44, delay: "0s", icon: "🌐" },
        { top: "70%", left: "5%", size: 38, delay: "1s", icon: "📱" },
        { top: "10%", right: "6%", size: 40, delay: "2s", icon: "🚀" },
        { top: "68%", right: "4%", size: 42, delay: "1.5s", icon: "🤖" },
        { top: "40%", left: "0%", size: 36, delay: "0.5s", icon: "✦" },
        { top: "35%", right: "0%", size: 36, delay: "2.5s", icon: "⚡" },
      ].map((node, i) => (
        <div
          key={i}
          className="absolute glass-card rounded-2xl flex items-center justify-center text-lg shadow-md-electric"
          style={{
            width: node.size,
            height: node.size,
            top: node.top,
            left: (node as any).left,
            right: (node as any).right,
            animation: `float ${5 + i * 0.7}s ease-in-out ${node.delay} infinite`,
          }}
        >
          {node.icon}
        </div>
      ))}

      {/* Connection lines SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 500 500">
        <line x1="70" y1="70" x2="210" y2="210" stroke="hsl(232 90% 65%)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="430" y1="65" x2="300" y2="200" stroke="hsl(232 90% 65%)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="60" y1="360" x2="200" y2="290" stroke="hsl(190 100% 50%)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="440" y1="355" x2="310" y2="275" stroke="hsl(190 100% 50%)" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
    </div>
  );
}

// Web & App illustration
export function WebAppIllustration() {
  return (
    <svg viewBox="0 0 280 220" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="webg" x1="0" y1="0" x2="280" y2="220" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(232, 90%, 65%)" stopOpacity="0.15" />
          <stop offset="1" stopColor="hsl(260, 80%, 65%)" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      {/* Browser window */}
      <rect x="20" y="20" width="180" height="130" rx="10" fill="url(#webg)" stroke="hsl(232 90% 65%)" strokeOpacity="0.3" strokeWidth="1.5" />
      <rect x="20" y="20" width="180" height="28" rx="10" fill="hsl(232 90% 65%)" fillOpacity="0.15" />
      <circle cx="38" cy="34" r="4.5" fill="hsl(0 85% 65%)" fillOpacity="0.7" />
      <circle cx="52" cy="34" r="4.5" fill="hsl(40 95% 65%)" fillOpacity="0.7" />
      <circle cx="66" cy="34" r="4.5" fill="hsl(140 70% 55%)" fillOpacity="0.7" />
      <rect x="80" y="29" width="80" height="10" rx="5" fill="white" fillOpacity="0.15" />
      {/* Content */}
      <rect x="32" y="60" width="70" height="8" rx="4" fill="hsl(232 90% 65%)" fillOpacity="0.6" />
      <rect x="32" y="74" width="120" height="5" rx="2.5" fill="hsl(220 20% 70%)" fillOpacity="0.4" />
      <rect x="32" y="85" width="100" height="5" rx="2.5" fill="hsl(220 20% 70%)" fillOpacity="0.4" />
      <rect x="32" y="100" width="56" height="22" rx="6" fill="hsl(232 90% 65%)" fillOpacity="0.7" />
      <rect x="32" y="128" width="156" height="4" rx="2" fill="hsl(190 100% 50%)" fillOpacity="0.3" />
      {/* Mobile */}
      <rect x="210" y="50" width="60" height="100" rx="10" fill="url(#webg)" stroke="hsl(232 90% 65%)" strokeOpacity="0.3" strokeWidth="1.5" />
      <rect x="224" y="62" width="32" height="22" rx="4" fill="hsl(232 90% 65%)" fillOpacity="0.3" />
      <rect x="224" y="90" width="32" height="5" rx="2" fill="hsl(220 20% 70%)" fillOpacity="0.4" />
      <rect x="224" y="100" width="24" height="5" rx="2" fill="hsl(220 20% 70%)" fillOpacity="0.4" />
      <rect x="224" y="116" width="32" height="16" rx="5" fill="hsl(190 100% 50%)" fillOpacity="0.5" />
      {/* Stars */}
      <circle cx="220" cy="30" r="3" fill="hsl(232 90% 65%)" fillOpacity="0.6" />
      <circle cx="240" cy="20" r="2" fill="hsl(190 100% 50%)" fillOpacity="0.6" />
      <circle cx="260" cy="170" r="2.5" fill="hsl(260 80% 65%)" fillOpacity="0.6" />
    </svg>
  );
}

// Performance / Ads illustration
export function AdsIllustration() {
  return (
    <svg viewBox="0 0 280 220" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="adsg" x1="0" y1="220" x2="280" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(232, 90%, 65%)" stopOpacity="0.2" />
          <stop offset="1" stopColor="hsl(190, 100%, 50%)" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      {/* Chart base */}
      <rect x="20" y="160" width="240" height="2" rx="1" fill="hsl(220 20% 80%)" fillOpacity="0.5" />
      {/* Bars */}
      {[
        { x: 40, h: 60, c: "hsl(232 90% 65%)" },
        { x: 80, h: 90, c: "hsl(232 90% 65%)" },
        { x: 120, h: 75, c: "hsl(232 90% 65%)" },
        { x: 160, h: 110, c: "hsl(190 100% 50%)" },
        { x: 200, h: 130, c: "hsl(190 100% 50%)" },
      ].map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={160 - b.h} width="28" height={b.h} rx="6" fill={b.c} fillOpacity="0.25" />
          <rect x={b.x} y={160 - b.h} width="28" height="10" rx="5" fill={b.c} fillOpacity="0.8" />
        </g>
      ))}
      {/* Trend line */}
      <polyline points="54,120 94,90 134,105 174,60 214,40" stroke="hsl(190 100% 50%)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="5 3" />
      {/* ROAS badge */}
      <rect x="170" y="20" width="90" height="42" rx="10" fill="hsl(190 100% 50%)" fillOpacity="0.12" stroke="hsl(190 100% 50%)" strokeOpacity="0.3" strokeWidth="1.5" />
      <text x="215" y="38" textAnchor="middle" fontSize="10" fontFamily="Space Grotesk" fill="hsl(190 100% 40%)" fontWeight="700">ROAS</text>
      <text x="215" y="54" textAnchor="middle" fontSize="14" fontFamily="Space Grotesk" fill="hsl(190 100% 40%)" fontWeight="700">4.8x</text>
      {/* Bubbles */}
      <circle cx="30" cy="50" r="18" fill="hsl(232 90% 65%)" fillOpacity="0.08" stroke="hsl(232 90% 65%)" strokeOpacity="0.2" strokeWidth="1" />
      <circle cx="260" cy="80" r="12" fill="hsl(260 80% 65%)" fillOpacity="0.1" />
    </svg>
  );
}

// Social Media illustration
export function SocialIllustration() {
  return (
    <svg viewBox="0 0 280 220" fill="none" className="w-full h-full">
      {/* Phone shape */}
      <rect x="85" y="15" width="110" height="190" rx="18" fill="hsl(232 90% 65%)" fillOpacity="0.07" stroke="hsl(232 90% 65%)" strokeOpacity="0.25" strokeWidth="1.5" />
      <rect x="100" y="30" width="80" height="45" rx="8" fill="hsl(260 80% 65%)" fillOpacity="0.18" />
      <circle cx="118" cy="90" r="14" fill="hsl(232 90% 65%)" fillOpacity="0.3" />
      <rect x="138" y="84" width="36" height="5" rx="2.5" fill="hsl(220 20% 70%)" fillOpacity="0.5" />
      <rect x="138" y="94" width="26" height="4" rx="2" fill="hsl(220 20% 70%)" fillOpacity="0.4" />
      <rect x="100" y="114" width="80" height="4" rx="2" fill="hsl(220 20% 70%)" fillOpacity="0.4" />
      <rect x="100" y="124" width="66" height="4" rx="2" fill="hsl(220 20% 70%)" fillOpacity="0.4" />
      <rect x="100" y="138" width="36" height="16" rx="8" fill="hsl(232 90% 65%)" fillOpacity="0.4" />
      <rect x="142" y="138" width="24" height="16" rx="8" fill="hsl(190 100% 50%)" fillOpacity="0.3" />
      {/* Engagement bubbles */}
      <rect x="10" y="40" width="64" height="32" rx="10" fill="hsl(190 100% 50%)" fillOpacity="0.1" stroke="hsl(190 100% 50%)" strokeOpacity="0.25" strokeWidth="1" />
      <text x="42" y="57" textAnchor="middle" fontSize="9" fontFamily="Space Grotesk" fill="hsl(190 100% 40%)" fontWeight="600">+2.4K ❤</text>
      <rect x="206" y="80" width="64" height="32" rx="10" fill="hsl(232 90% 65%)" fillOpacity="0.1" stroke="hsl(232 90% 65%)" strokeOpacity="0.25" strokeWidth="1" />
      <text x="238" y="97" textAnchor="middle" fontSize="9" fontFamily="Space Grotesk" fill="hsl(232 90% 55%)" fontWeight="600">+8K 👁</text>
      <rect x="16" y="150" width="64" height="32" rx="10" fill="hsl(260 80% 65%)" fillOpacity="0.1" stroke="hsl(260 80% 65%)" strokeOpacity="0.25" strokeWidth="1" />
      <text x="48" y="167" textAnchor="middle" fontSize="9" fontFamily="Space Grotesk" fill="hsl(260 80% 55%)" fontWeight="600">+410 💬</text>
    </svg>
  );
}

// AI / Automation illustration
export function AIIllustration() {
  return (
    <svg viewBox="0 0 280 220" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="aig" x1="0" y1="0" x2="280" y2="220" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(232, 90%, 65%)" stopOpacity="0.18" />
          <stop offset="1" stopColor="hsl(190, 100%, 50%)" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      {/* Brain outline */}
      <ellipse cx="140" cy="100" rx="70" ry="60" fill="url(#aig)" stroke="hsl(232 90% 65%)" strokeOpacity="0.3" strokeWidth="1.5" />
      {/* Neural pathways */}
      {[
        [140, 60, 100, 85], [140, 60, 180, 85], [100, 85, 90, 115], [100, 85, 130, 115],
        [180, 85, 170, 115], [180, 85, 200, 110], [130, 115, 140, 140], [170, 115, 140, 140],
      ].map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="hsl(232 90% 65%)" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="3 2" />
      ))}
      {/* Nodes */}
      {[
        [140, 60], [100, 85], [180, 85], [90, 115], [130, 115], [170, 115], [200, 110], [140, 140],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={i === 0 || i === 7 ? 8 : 5} fill={i % 3 === 0 ? "hsl(190 100% 50%)" : "hsl(232 90% 65%)"} fillOpacity="0.8" />
      ))}
      {/* Floating chat bubbles */}
      <rect x="10" y="30" width="70" height="28" rx="8" fill="hsl(190 100% 50%)" fillOpacity="0.1" stroke="hsl(190 100% 50%)" strokeOpacity="0.3" strokeWidth="1" />
      <text x="45" y="45" textAnchor="middle" fontSize="8.5" fontFamily="Space Grotesk" fill="hsl(190 100% 40%)" fontWeight="600">AI Response ✦</text>
      <rect x="200" y="160" width="70" height="28" rx="8" fill="hsl(260 80% 65%)" fillOpacity="0.1" stroke="hsl(260 80% 65%)" strokeOpacity="0.3" strokeWidth="1" />
      <text x="235" y="175" textAnchor="middle" fontSize="8.5" fontFamily="Space Grotesk" fill="hsl(260 80% 55%)" fontWeight="600">Automated ✦</text>
      {/* Orbit circles */}
      <circle cx="140" cy="100" r="85" stroke="hsl(232 90% 65%)" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="6 4" />
    </svg>
  );
}

// Creative / Design illustration
export function CreativeIllustration() {
  return (
    <svg viewBox="0 0 280 220" fill="none" className="w-full h-full">
      {/* Color palette circles */}
      {[
        { cx: 70, cy: 100, r: 50, color: "hsl(232 90% 65%)", op: 0.18 },
        { cx: 140, cy: 90, r: 50, color: "hsl(190 100% 50%)", op: 0.14 },
        { cx: 200, cy: 110, r: 45, color: "hsl(260 80% 65%)", op: 0.18 },
      ].map((c, i) => (
        <circle key={i} cx={c.cx} cy={c.cy} r={c.r} fill={c.color} fillOpacity={c.op} stroke={c.color} strokeOpacity="0.3" strokeWidth="1.5" />
      ))}
      {/* Design elements */}
      <rect x="55" y="150" width="170" height="40" rx="10" fill="hsl(232 90% 65%)" fillOpacity="0.07" stroke="hsl(232 90% 65%)" strokeOpacity="0.2" strokeWidth="1.5" />
      <text x="140" y="173" textAnchor="middle" fontSize="11" fontFamily="Space Grotesk" fill="hsl(232 90% 55%)" fontWeight="600">ScaleGiga™ Brand System</text>
      {/* Typography sample */}
      <text x="50" y="55" fontSize="22" fontFamily="Space Grotesk" fill="hsl(232 90% 65%)" fontWeight="700" fillOpacity="0.7">Aa</text>
      <text x="95" y="55" fontSize="16" fontFamily="Space Grotesk" fill="hsl(260 80% 65%)" fontWeight="400" fillOpacity="0.6">Bb</text>
      {/* Pen tool icon */}
      <path d="M230 40 L250 20 L265 35 L245 55 Z" fill="hsl(190 100% 50%)" fillOpacity="0.4" stroke="hsl(190 100% 50%)" strokeOpacity="0.5" strokeWidth="1" />
      <line x1="245" y1="55" x2="240" y2="70" stroke="hsl(190 100% 50%)" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// Brand Strategy illustration
export function BrandIllustration() {
  return (
    <svg viewBox="0 0 280 220" fill="none" className="w-full h-full">
      {/* Central star/compass */}
      <circle cx="140" cy="100" r="55" fill="hsl(232 90% 65%)" fillOpacity="0.07" stroke="hsl(232 90% 65%)" strokeOpacity="0.2" strokeWidth="1.5" />
      <circle cx="140" cy="100" r="30" fill="hsl(260 80% 65%)" fillOpacity="0.1" stroke="hsl(260 80% 65%)" strokeOpacity="0.3" strokeWidth="1" />
      {/* Compass arrows */}
      <line x1="140" y1="50" x2="140" y2="72" stroke="hsl(232 90% 65%)" strokeWidth="2" strokeLinecap="round" />
      <line x1="140" y1="128" x2="140" y2="150" stroke="hsl(232 90% 65%)" strokeWidth="2" strokeLinecap="round" />
      <line x1="88" y1="100" x2="112" y2="100" stroke="hsl(190 100% 50%)" strokeWidth="2" strokeLinecap="round" />
      <line x1="168" y1="100" x2="192" y2="100" stroke="hsl(190 100% 50%)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="140" cy="100" r="8" fill="hsl(232 90% 65%)" fillOpacity="0.9" />
      {/* Pillars */}
      {[
        { x: 20, y: 60, label: "Mission" },
        { x: 220, y: 60, label: "Vision" },
        { x: 20, y: 155, label: "Values" },
        { x: 220, y: 155, label: "Voice" },
      ].map((p, i) => (
        <g key={i}>
          <rect x={p.x} y={p.y} width="52" height="22" rx="7" fill="hsl(232 90% 65%)" fillOpacity="0.1" stroke="hsl(232 90% 65%)" strokeOpacity="0.25" strokeWidth="1" />
          <text x={p.x + 26} y={p.y + 14} textAnchor="middle" fontSize="8.5" fontFamily="Space Grotesk" fill="hsl(232 90% 55%)" fontWeight="600">{p.label}</text>
        </g>
      ))}
      {/* Connecting lines */}
      <line x1="72" y1="71" x2="108" y2="90" stroke="hsl(232 90% 65%)" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="208" y1="71" x2="172" y2="90" stroke="hsl(232 90% 65%)" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="3 3" />
    </svg>
  );
}

// Photography illustration
export function PhotoIllustration() {
  return (
    <svg viewBox="0 0 280 220" fill="none" className="w-full h-full">
      {/* Camera body */}
      <rect x="50" y="70" width="180" height="110" rx="16" fill="hsl(220 20% 12%)" fillOpacity="0.08" stroke="hsl(232 90% 65%)" strokeOpacity="0.3" strokeWidth="1.5" />
      <rect x="90" y="52" width="60" height="22" rx="8" fill="hsl(220 20% 12%)" fillOpacity="0.08" stroke="hsl(232 90% 65%)" strokeOpacity="0.2" strokeWidth="1" />
      {/* Lens */}
      <circle cx="140" cy="130" r="36" fill="hsl(232 90% 65%)" fillOpacity="0.1" stroke="hsl(232 90% 65%)" strokeOpacity="0.3" strokeWidth="1.5" />
      <circle cx="140" cy="130" r="26" fill="hsl(232 90% 65%)" fillOpacity="0.12" />
      <circle cx="140" cy="130" r="16" fill="hsl(232 90% 65%)" fillOpacity="0.25" />
      <circle cx="140" cy="130" r="7" fill="hsl(232 90% 65%)" fillOpacity="0.7" />
      {/* Flash */}
      <rect x="200" y="80" width="20" height="12" rx="4" fill="hsl(190 100% 50%)" fillOpacity="0.5" />
      {/* Viewfinder */}
      <rect x="62" y="82" width="22" height="16" rx="4" fill="hsl(260 80% 65%)" fillOpacity="0.25" />
      {/* Sparkles */}
      <circle cx="42" cy="50" r="4" fill="hsl(190 100% 50%)" fillOpacity="0.6" />
      <circle cx="240" cy="48" r="3" fill="hsl(232 90% 65%)" fillOpacity="0.5" />
      <circle cx="252" cy="175" r="5" fill="hsl(260 80% 65%)" fillOpacity="0.4" />
    </svg>
  );
}

// Process timeline illustration
export function ProcessIllustration() {
  return (
    <svg viewBox="0 0 320 120" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="pg" x1="0" y1="0" x2="320" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(232, 90%, 65%)" />
          <stop offset="0.5" stopColor="hsl(260, 80%, 65%)" />
          <stop offset="1" stopColor="hsl(190, 100%, 50%)" />
        </linearGradient>
      </defs>
      <line x1="40" y1="60" x2="280" y2="60" stroke="url(#pg)" strokeWidth="2" strokeDasharray="6 3" />
      {[
        { x: 40, label: "Strategy", icon: "🎯", color: "hsl(232 90% 65%)" },
        { x: 120, label: "Build", icon: "🔧", color: "hsl(260 80% 65%)" },
        { x: 200, label: "Launch", icon: "🚀", color: "hsl(200 90% 55%)" },
        { x: 280, label: "Scale", icon: "📈", color: "hsl(190 100% 45%)" },
      ].map((step, i) => (
        <g key={i}>
          <circle cx={step.x} cy={60} r={18} fill={step.color} fillOpacity="0.15" stroke={step.color} strokeOpacity="0.5" strokeWidth="1.5" />
          <text x={step.x} y={65} textAnchor="middle" fontSize="14">{step.icon}</text>
          <text x={step.x} y={94} textAnchor="middle" fontSize="9" fontFamily="Space Grotesk" fill="hsl(220 20% 30%)" fontWeight="600">{step.label}</text>
          <text x={step.x} y={104} textAnchor="middle" fontSize="7.5" fontFamily="Space Grotesk" fill="hsl(220 15% 55%)" fontWeight="400">0{i + 1}</text>
        </g>
      ))}
    </svg>
  );
}

// Work / Portfolio illustration
export function WorkIllustration() {
  return (
    <svg viewBox="0 0 280 220" fill="none" className="w-full h-full">
      {/* Grid of project cards */}
      {[
        { x: 20, y: 20, w: 110, h: 80, color: "hsl(232 90% 65%)" },
        { x: 145, y: 20, w: 115, h: 80, color: "hsl(190 100% 50%)" },
        { x: 20, y: 115, w: 75, h: 85, color: "hsl(260 80% 65%)" },
        { x: 110, y: 115, w: 150, h: 85, color: "hsl(232 90% 65%)" },
      ].map((c, i) => (
        <g key={i}>
          <rect x={c.x} y={c.y} width={c.w} height={c.h} rx="10" fill={c.color} fillOpacity="0.08" stroke={c.color} strokeOpacity="0.25" strokeWidth="1.5" />
          <rect x={c.x + 10} y={c.y + 10} width={c.w - 20} height={c.h * 0.5} rx="6" fill={c.color} fillOpacity="0.15" />
          <rect x={c.x + 10} y={c.y + c.h * 0.65} width={60} height="5" rx="2.5" fill={c.color} fillOpacity="0.4" />
          <rect x={c.x + 10} y={c.y + c.h * 0.65 + 10} width={40} height="4" rx="2" fill="hsl(220 20% 70%)" fillOpacity="0.35" />
        </g>
      ))}
    </svg>
  );
}

// Story / Timeline illustration
export function StoryIllustration() {
  return (
    <svg viewBox="0 0 300 200" fill="none" className="w-full h-full">
      {/* Vertical timeline */}
      <line x1="80" y1="20" x2="80" y2="180" stroke="hsl(232 90% 65%)" strokeOpacity="0.25" strokeWidth="2" strokeDasharray="5 4" />
      {[
        { y: 35, label: "Founded", sub: "2020", color: "hsl(232 90% 65%)" },
        { y: 80, label: "First 50 Clients", sub: "2021", color: "hsl(260 80% 65%)" },
        { y: 125, label: "AI Services Launch", sub: "2023", color: "hsl(190 100% 50%)" },
        { y: 165, label: "Global Scale", sub: "2024", color: "hsl(200 90% 55%)" },
      ].map((item, i) => (
        <g key={i}>
          <circle cx="80" cy={item.y} r="8" fill={item.color} fillOpacity="0.85" />
          <circle cx="80" cy={item.y} r="14" stroke={item.color} strokeOpacity="0.25" strokeWidth="1" fill="none" />
          <rect x="104" y={item.y - 14} width="140" height="28" rx="8" fill={item.color} fillOpacity="0.08" stroke={item.color} strokeOpacity="0.2" strokeWidth="1" />
          <text x="116" y={item.y - 2} fontSize="9" fontFamily="Space Grotesk" fill="hsl(220 20% 20%)" fontWeight="600">{item.label}</text>
          <text x="116" y={item.y + 10} fontSize="8" fontFamily="Space Grotesk" fill="hsl(220 15% 55%)">{item.sub}</text>
        </g>
      ))}
      {/* Decorative elements */}
      <circle cx="260" cy="40" r="20" fill="hsl(232 90% 65%)" fillOpacity="0.07" stroke="hsl(232 90% 65%)" strokeOpacity="0.15" strokeWidth="1" />
      <circle cx="30" cy="140" r="14" fill="hsl(190 100% 50%)" fillOpacity="0.08" />
    </svg>
  );
}

// Contact illustration
export function ContactIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" className="w-full h-full">
      {/* Envelope */}
      <rect x="40" y="55" width="200" height="130" rx="14" fill="hsl(232 90% 65%)" fillOpacity="0.08" stroke="hsl(232 90% 65%)" strokeOpacity="0.25" strokeWidth="1.5" />
      <path d="M40 70 L140 130 L240 70" stroke="hsl(232 90% 65%)" strokeOpacity="0.5" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      {/* Decorative dots */}
      <circle cx="140" cy="30" r="8" fill="hsl(190 100% 50%)" fillOpacity="0.6" />
      <circle cx="120" cy="25" r="4" fill="hsl(232 90% 65%)" fillOpacity="0.5" />
      <circle cx="160" cy="25" r="4" fill="hsl(260 80% 65%)" fillOpacity="0.5" />
      {/* Signal waves */}
      {[14, 24, 34].map((r, i) => (
        <circle key={i} cx="240" cy="160" r={r} stroke="hsl(190 100% 50%)" strokeOpacity={0.15 + i * 0.05} strokeWidth="1" fill="none" />
      ))}
      <circle cx="240" cy="160" r="5" fill="hsl(190 100% 50%)" fillOpacity="0.7" />
    </svg>
  );
}
