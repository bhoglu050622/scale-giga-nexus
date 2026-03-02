// ─── HIGH-TECH ILLUSTRATIONS for ScaleGiga ───
// Abstract, technical, sophisticated — no cartoon characters
import { motion } from "framer-motion";

// WEB APP: Abstract code/architecture visualization
export function WebAppIllustration() {
  return (
    <svg viewBox="0 0 300 240" fill="none" className="w-full h-full">
      {/* Terminal window */}
      <rect x="20" y="20" width="260" height="200" rx="12" fill="hsl(0 0% 5%)" stroke="hsl(142 80% 45% / 0.3)" strokeWidth="1.5" />
      {/* Title bar */}
      <rect x="20" y="20" width="260" height="28" rx="12" fill="hsl(0 0% 8%)" />
      <circle cx="38" cy="34" r="5" fill="hsl(0 70% 50%)" fillOpacity="0.8" />
      <circle cx="54" cy="34" r="5" fill="hsl(45 90% 55%)" fillOpacity="0.8" />
      <circle cx="70" cy="34" r="5" fill="hsl(142 80% 45%)" fillOpacity="0.8" />
      <text x="150" y="38" textAnchor="middle" fontSize="8" fill="hsl(0 0% 40%)" fontFamily="Space Grotesk">scalegiga.app — Production Build</text>
      
      {/* Code lines */}
      <rect x="34" y="58" width="60" height="4" rx="2" fill="hsl(260 70% 65%)" fillOpacity="0.8" />
      <rect x="100" y="58" width="30" height="4" rx="2" fill="hsl(142 80% 45%)" fillOpacity="0.7" />
      <rect x="34" y="68" width="40" height="4" rx="2" fill="hsl(200 70% 55%)" fillOpacity="0.6" />
      <rect x="80" y="68" width="80" height="4" rx="2" fill="hsl(0 0% 30%)" />
      <rect x="50" y="78" width="55" height="4" rx="2" fill="hsl(30 90% 65%)" fillOpacity="0.7" />
      <rect x="110" y="78" width="40" height="4" rx="2" fill="hsl(142 80% 45%)" fillOpacity="0.5" />
      <rect x="50" y="88" width="90" height="4" rx="2" fill="hsl(0 0% 25%)" />
      <rect x="34" y="98" width="45" height="4" rx="2" fill="hsl(260 70% 65%)" fillOpacity="0.6" />
      <rect x="34" y="108" width="70" height="4" rx="2" fill="hsl(200 70% 55%)" fillOpacity="0.5" />
      <rect x="110" y="108" width="50" height="4" rx="2" fill="hsl(142 80% 45%)" fillOpacity="0.4" />
      
      {/* Cursor blink */}
      <motion.rect x="34" y="118" width="2" height="12" rx="1" fill="hsl(142 80% 45%)"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      />
      
      {/* Performance panel */}
      <rect x="180" y="58" width="88" height="80" rx="8" fill="hsl(0 0% 7%)" stroke="hsl(142 80% 45% / 0.2)" strokeWidth="1" />
      <text x="224" y="72" textAnchor="middle" fontSize="6" fill="hsl(0 0% 45%)" fontFamily="Space Grotesk">LIGHTHOUSE</text>
      <text x="224" y="108" textAnchor="middle" fontSize="28" fontWeight="800" fill="hsl(142 80% 45%)" fontFamily="Space Grotesk">98</text>
      <text x="224" y="130" textAnchor="middle" fontSize="7" fill="hsl(142 60% 55%)" fontFamily="Space Grotesk">Performance Score</text>
      {/* Score ring */}
      <circle cx="224" cy="103" r="28" fill="none" stroke="hsl(0 0% 12%)" strokeWidth="3" />
      <motion.circle cx="224" cy="103" r="28" fill="none" stroke="hsl(142 80% 45%)" strokeWidth="3"
        strokeDasharray="176" strokeDashoffset="4" strokeLinecap="round"
        style={{ transform: "rotate(-90deg)", transformOrigin: "224px 103px" }}
      />
      
      {/* Build status */}
      <rect x="34" y="150" width="232" height="36" rx="6" fill="hsl(142 80% 45% / 0.06)" stroke="hsl(142 80% 45% / 0.2)" strokeWidth="1" />
      <circle cx="50" cy="168" r="6" fill="hsl(142 80% 45%)" fillOpacity="0.2" />
      <circle cx="50" cy="168" r="3" fill="hsl(142 80% 45%)" />
      <text x="62" y="165" fontSize="7" fill="hsl(142 80% 45%)" fontFamily="Space Grotesk" fontWeight="600">Build Successful</text>
      <text x="62" y="175" fontSize="6" fill="hsl(0 0% 40%)" fontFamily="Space Grotesk">Deployed to production • 1.2s build time</text>
      
      {/* Deployment indicator */}
      <rect x="220" y="158" width="36" height="16" rx="4" fill="hsl(142 80% 45%)" fillOpacity="0.15" stroke="hsl(142 80% 45% / 0.3)" strokeWidth="1" />
      <text x="238" y="169" textAnchor="middle" fontSize="6" fill="hsl(142 80% 45%)" fontWeight="700" fontFamily="Space Grotesk">LIVE</text>
      
      {/* Bottom metrics */}
      <text x="34" y="205" fontSize="6" fill="hsl(0 0% 35%)" fontFamily="Space Grotesk">Bundle: 142kb</text>
      <text x="120" y="205" fontSize="6" fill="hsl(0 0% 35%)" fontFamily="Space Grotesk">FCP: 0.8s</text>
      <text x="190" y="205" fontSize="6" fill="hsl(0 0% 35%)" fontFamily="Space Grotesk">TTI: 1.1s</text>
    </svg>
  );
}

// ADS: Data dashboard with charts
export function AdsIllustration() {
  return (
    <svg viewBox="0 0 300 240" fill="none" className="w-full h-full">
      {/* Dashboard frame */}
      <rect x="15" y="15" width="270" height="210" rx="12" fill="hsl(0 0% 5%)" stroke="hsl(142 80% 45% / 0.25)" strokeWidth="1.5" />
      
      {/* Header */}
      <text x="30" y="40" fontSize="10" fill="hsl(0 0% 70%)" fontFamily="Space Grotesk" fontWeight="600">Campaign Performance</text>
      <rect x="220" y="28" width="50" height="18" rx="6" fill="hsl(142 80% 45% / 0.12)" stroke="hsl(142 80% 45% / 0.3)" strokeWidth="1" />
      <text x="245" y="40" textAnchor="middle" fontSize="7" fill="hsl(142 80% 45%)" fontWeight="600" fontFamily="Space Grotesk">LIVE</text>
      
      {/* KPI row */}
      {[
        { x: 30, label: "ROAS", value: "4.8x", color: "hsl(142 80% 45%)" },
        { x: 105, label: "CTR", value: "3.2%", color: "hsl(142 80% 45%)" },
        { x: 180, label: "CPA", value: "₹240", color: "hsl(142 80% 45%)" },
      ].map((kpi, i) => (
        <g key={i}>
          <rect x={kpi.x} y="52" width="65" height="40" rx="6" fill="hsl(0 0% 7%)" stroke="hsl(142 80% 45% / 0.15)" strokeWidth="1" />
          <text x={kpi.x + 8} y="66" fontSize="6" fill="hsl(0 0% 45%)" fontFamily="Space Grotesk">{kpi.label}</text>
          <text x={kpi.x + 8} y="82" fontSize="16" fontWeight="800" fill={kpi.color} fontFamily="Space Grotesk">{kpi.value}</text>
        </g>
      ))}
      
      {/* Bar chart */}
      {[
        { x: 40, h: 35 }, { x: 62, h: 48 }, { x: 84, h: 42 }, { x: 106, h: 58 },
        { x: 128, h: 52 }, { x: 150, h: 68 }, { x: 172, h: 62 }, { x: 194, h: 78 },
      ].map((bar, i) => (
        <g key={i}>
          <rect x={bar.x} y={192 - bar.h} width="16" height={bar.h} rx="3" fill="hsl(142 80% 45%)" fillOpacity={0.15 + i * 0.05} />
          <rect x={bar.x} y={192 - bar.h} width="16" height={8} rx="3" fill="hsl(142 80% 45%)" fillOpacity={0.6 + i * 0.05} />
        </g>
      ))}
      
      {/* Trend line */}
      <polyline points="48,162 70,148 92,155 114,138 136,142 158,128 180,132 202,118" stroke="hsl(142 90% 60%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {[48, 70, 92, 114, 136, 158, 180, 202].map((x, i) => (
        <circle key={i} cx={x} cy={[162, 148, 155, 138, 142, 128, 132, 118][i]} r="3" fill="hsl(142 80% 45%)" stroke="hsl(0 0% 5%)" strokeWidth="1.5" />
      ))}
      
      {/* X-axis */}
      <line x1="30" y1="194" x2="260" y2="194" stroke="hsl(0 0% 15%)" strokeWidth="1" />
      
      {/* Side metric */}
      <rect x="224" y="110" width="46" height="82" rx="6" fill="hsl(0 0% 7%)" stroke="hsl(142 80% 45% / 0.15)" strokeWidth="1" />
      <text x="247" y="128" textAnchor="middle" fontSize="5" fill="hsl(0 0% 40%)" fontFamily="Space Grotesk">SPEND</text>
      <text x="247" y="142" textAnchor="middle" fontSize="10" fontWeight="700" fill="hsl(0 0% 70%)" fontFamily="Space Grotesk">₹1.2L</text>
      <text x="247" y="160" textAnchor="middle" fontSize="5" fill="hsl(0 0% 40%)" fontFamily="Space Grotesk">REVENUE</text>
      <text x="247" y="174" textAnchor="middle" fontSize="10" fontWeight="700" fill="hsl(142 80% 45%)" fontFamily="Space Grotesk">₹5.8L</text>
    </svg>
  );
}

// SOCIAL: Social analytics grid
export function SocialIllustration() {
  return (
    <svg viewBox="0 0 300 240" fill="none" className="w-full h-full">
      {/* Grid of content cards */}
      <rect x="15" y="15" width="270" height="210" rx="12" fill="hsl(0 0% 5%)" stroke="hsl(142 80% 45% / 0.2)" strokeWidth="1.5" />
      
      {/* Header */}
      <text x="30" y="38" fontSize="10" fill="hsl(0 0% 70%)" fontFamily="Space Grotesk" fontWeight="600">Content Analytics</text>
      
      {/* Engagement meter */}
      <rect x="195" y="25" width="78" height="22" rx="6" fill="hsl(0 0% 7%)" stroke="hsl(142 80% 45% / 0.2)" strokeWidth="1" />
      <text x="208" y="39" fontSize="6" fill="hsl(0 0% 45%)" fontFamily="Space Grotesk">ENG</text>
      <text x="240" y="39" fontSize="9" fontWeight="700" fill="hsl(142 80% 45%)" fontFamily="Space Grotesk">8.4%</text>
      <text x="265" y="39" fontSize="6" fill="hsl(142 80% 45%)" fontFamily="Space Grotesk">↑</text>
      
      {/* Content grid - abstract post thumbnails */}
      {[
        { x: 30, y: 50, w: 75, h: 75 },
        { x: 112, y: 50, w: 75, h: 75 },
        { x: 194, y: 50, w: 75, h: 75 },
        { x: 30, y: 132, w: 75, h: 75 },
        { x: 112, y: 132, w: 75, h: 75 },
        { x: 194, y: 132, w: 75, h: 75 },
      ].map((card, i) => (
        <g key={i}>
          <rect x={card.x} y={card.y} width={card.w} height={card.h} rx="8" fill="hsl(0 0% 7%)" stroke="hsl(142 80% 45% / 0.1)" strokeWidth="1" />
          {/* Abstract content placeholder */}
          <rect x={card.x + 8} y={card.y + 8} width={card.w - 16} height={card.h - 30} rx="4" fill={`hsl(142 ${30 + i * 10}% ${8 + i * 2}%)`} />
          {/* Engagement stats */}
          <text x={card.x + 8} y={card.y + card.h - 8} fontSize="6" fill="hsl(0 0% 50%)" fontFamily="Space Grotesk">
            {["2.4K", "5.1K", "3.8K", "8.2K", "1.9K", "6.5K"][i]} views
          </text>
          <text x={card.x + card.w - 8} y={card.y + card.h - 8} textAnchor="end" fontSize="6" fill="hsl(142 80% 45%)" fontFamily="Space Grotesk">
            {["12%", "8.4%", "15%", "9.2%", "6.8%", "11%"][i]}
          </text>
        </g>
      ))}
    </svg>
  );
}

// CREATIVE: Design system / brand grid
export function CreativeIllustration() {
  return (
    <svg viewBox="0 0 300 240" fill="none" className="w-full h-full">
      <rect x="15" y="15" width="270" height="210" rx="12" fill="hsl(0 0% 5%)" stroke="hsl(142 80% 45% / 0.2)" strokeWidth="1.5" />
      
      <text x="30" y="38" fontSize="10" fill="hsl(0 0% 70%)" fontFamily="Space Grotesk" fontWeight="600">Design System</text>
      
      {/* Color palette */}
      <rect x="30" y="50" width="240" height="35" rx="6" fill="hsl(0 0% 7%)" stroke="hsl(142 80% 45% / 0.1)" strokeWidth="1" />
      <circle cx="50" cy="68" r="10" fill="hsl(142 80% 45%)" />
      <circle cx="76" cy="68" r="10" fill="hsl(142 40% 22%)" />
      <circle cx="102" cy="68" r="10" fill="hsl(160 70% 35%)" />
      <circle cx="128" cy="68" r="10" fill="hsl(0 0% 92%)" />
      <circle cx="154" cy="68" r="10" fill="hsl(0 0% 7%)" stroke="hsl(0 0% 25%)" strokeWidth="1" />
      <text x="180" y="65" fontSize="6" fill="hsl(0 0% 40%)" fontFamily="Space Grotesk">Primary</text>
      <text x="180" y="75" fontSize="6" fill="hsl(142 80% 45%)" fontFamily="Space Grotesk">#22C55E</text>
      
      {/* Typography section */}
      <rect x="30" y="92" width="115" height="60" rx="6" fill="hsl(0 0% 7%)" stroke="hsl(142 80% 45% / 0.1)" strokeWidth="1" />
      <text x="40" y="106" fontSize="6" fill="hsl(0 0% 40%)" fontFamily="Space Grotesk">TYPOGRAPHY</text>
      <text x="40" y="122" fontSize="16" fontWeight="800" fill="hsl(0 0% 85%)" fontFamily="Space Grotesk">Aa</text>
      <text x="68" y="118" fontSize="7" fill="hsl(0 0% 50%)" fontFamily="Space Grotesk">Space Grotesk</text>
      <text x="68" y="130" fontSize="7" fill="hsl(0 0% 35%)" fontFamily="Inter">Inter — Body</text>
      <text x="40" y="145" fontSize="5" fill="hsl(0 0% 30%)" fontFamily="Space Grotesk">ABCDEFGHIJ 0123456789</text>
      
      {/* Grid / spacing */}
      <rect x="155" y="92" width="115" height="60" rx="6" fill="hsl(0 0% 7%)" stroke="hsl(142 80% 45% / 0.1)" strokeWidth="1" />
      <text x="165" y="106" fontSize="6" fill="hsl(0 0% 40%)" fontFamily="Space Grotesk">SPACING</text>
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <rect x={165} y={112 + i * 7} width={12 + i * 12} height={4} rx="2" fill="hsl(142 80% 45%)" fillOpacity={0.15 + i * 0.1} />
          <text x={182 + i * 12} y={116 + i * 7} fontSize="5" fill="hsl(0 0% 35%)" fontFamily="Space Grotesk">{[4, 8, 16, 24, 32][i]}px</text>
        </g>
      ))}
      
      {/* Component preview */}
      <rect x="30" y="160" width="240" height="54" rx="6" fill="hsl(0 0% 7%)" stroke="hsl(142 80% 45% / 0.1)" strokeWidth="1" />
      <text x="40" y="174" fontSize="6" fill="hsl(0 0% 40%)" fontFamily="Space Grotesk">COMPONENTS</text>
      {/* Button variants */}
      <rect x="40" y="182" width="60" height="22" rx="6" fill="hsl(142 80% 45%)" />
      <text x="70" y="196" textAnchor="middle" fontSize="7" fill="hsl(0 0% 4%)" fontWeight="700" fontFamily="Space Grotesk">Primary</text>
      <rect x="108" y="182" width="60" height="22" rx="6" fill="none" stroke="hsl(142 80% 45% / 0.5)" strokeWidth="1.5" />
      <text x="138" y="196" textAnchor="middle" fontSize="7" fill="hsl(142 80% 45%)" fontWeight="600" fontFamily="Space Grotesk">Secondary</text>
      <rect x="176" y="182" width="60" height="22" rx="6" fill="hsl(0 0% 12%)" />
      <text x="206" y="196" textAnchor="middle" fontSize="7" fill="hsl(0 0% 60%)" fontWeight="600" fontFamily="Space Grotesk">Ghost</text>
    </svg>
  );
}

// AI: Neural network / automation workflow
export function AIIllustration() {
  return (
    <svg viewBox="0 0 300 240" fill="none" className="w-full h-full">
      <rect x="15" y="15" width="270" height="210" rx="12" fill="hsl(0 0% 5%)" stroke="hsl(142 80% 45% / 0.25)" strokeWidth="1.5" />
      
      <text x="30" y="38" fontSize="10" fill="hsl(0 0% 70%)" fontFamily="Space Grotesk" fontWeight="600">AI Workflow Engine</text>
      
      {/* Node network */}
      {/* Input nodes */}
      {[
        { x: 50, y: 80, label: "INPUT" },
        { x: 50, y: 130, label: "DATA" },
        { x: 50, y: 180, label: "RULES" },
      ].map((n, i) => (
        <g key={i}>
          <rect x={n.x - 20} y={n.y - 14} width="40" height="28" rx="8" fill="hsl(0 0% 8%)" stroke="hsl(142 80% 45% / 0.4)" strokeWidth="1.5" />
          <text x={n.x} y={n.y + 3} textAnchor="middle" fontSize="5.5" fill="hsl(142 80% 45%)" fontWeight="700" fontFamily="Space Grotesk">{n.label}</text>
        </g>
      ))}
      
      {/* Processing layer */}
      {[
        { x: 150, y: 95 },
        { x: 150, y: 145 },
        { x: 150, y: 195 },
      ].map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="14" fill="hsl(0 0% 7%)" stroke="hsl(142 80% 45% / 0.5)" strokeWidth="1.5" />
          <circle cx={n.x} cy={n.y} r="5" fill="hsl(142 80% 45%)" fillOpacity="0.3" />
          <circle cx={n.x} cy={n.y} r="2" fill="hsl(142 80% 45%)" />
        </g>
      ))}
      
      {/* AI core */}
      <rect x="210" y="110" width="56" height="56" rx="14" fill="hsl(0 0% 7%)" stroke="hsl(142 80% 45%)" strokeWidth="2" />
      <text x="238" y="134" textAnchor="middle" fontSize="7" fill="hsl(142 60% 55%)" fontFamily="Space Grotesk" fontWeight="700">AI</text>
      <text x="238" y="148" textAnchor="middle" fontSize="5" fill="hsl(0 0% 40%)" fontFamily="Space Grotesk">ENGINE</text>
      {/* Pulse ring */}
      <motion.rect x="210" y="110" width="56" height="56" rx="14" fill="none" stroke="hsl(142 80% 45% / 0.3)" strokeWidth="1"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        style={{ transformOrigin: "238px 138px" }}
      />
      
      {/* Connection lines */}
      {[80, 130, 180].map((y, i) => (
        <line key={i} x1="70" y1={y} x2="136" y2={[95, 145, 195][i]} stroke="hsl(142 80% 45% / 0.2)" strokeWidth="1" strokeDasharray="4 3" />
      ))}
      {[95, 145, 195].map((y, i) => (
        <line key={i} x1="164" y1={y} x2="210" y2={138} stroke="hsl(142 80% 45% / 0.25)" strokeWidth="1" strokeDasharray="4 3" />
      ))}
      
      {/* Output */}
      <rect x="210" y="180" width="56" height="24" rx="6" fill="hsl(142 80% 45% / 0.08)" stroke="hsl(142 80% 45% / 0.3)" strokeWidth="1" />
      <text x="238" y="195" textAnchor="middle" fontSize="6" fill="hsl(142 80% 45%)" fontWeight="600" fontFamily="Space Grotesk">✓ Automated</text>
      
      {/* Status */}
      <rect x="30" y="198" width="80" height="18" rx="5" fill="hsl(142 80% 45% / 0.06)" stroke="hsl(142 80% 45% / 0.2)" strokeWidth="1" />
      <circle cx="42" cy="207" r="3" fill="hsl(142 80% 45%)" />
      <text x="50" y="210" fontSize="5.5" fill="hsl(142 60% 55%)" fontFamily="Space Grotesk">Processing 24/7</text>
    </svg>
  );
}

// PHOTO: Camera viewfinder / shot composition
export function PhotoIllustration() {
  return (
    <svg viewBox="0 0 300 240" fill="none" className="w-full h-full">
      <rect x="15" y="15" width="270" height="210" rx="12" fill="hsl(0 0% 5%)" stroke="hsl(142 80% 45% / 0.2)" strokeWidth="1.5" />
      
      {/* Viewfinder frame */}
      <rect x="35" y="35" width="230" height="155" rx="4" fill="hsl(0 0% 3%)" />
      
      {/* Rule of thirds grid */}
      <line x1="112" y1="35" x2="112" y2="190" stroke="hsl(142 80% 45% / 0.15)" strokeWidth="0.5" />
      <line x1="188" y1="35" x2="188" y2="190" stroke="hsl(142 80% 45% / 0.15)" strokeWidth="0.5" />
      <line x1="35" y1="87" x2="265" y2="87" stroke="hsl(142 80% 45% / 0.15)" strokeWidth="0.5" />
      <line x1="35" y1="138" x2="265" y2="138" stroke="hsl(142 80% 45% / 0.15)" strokeWidth="0.5" />
      
      {/* Focus brackets - corners */}
      <path d="M45 50 L45 42 L53 42" stroke="hsl(142 80% 45%)" strokeWidth="1.5" fill="none" />
      <path d="M255 50 L255 42 L247 42" stroke="hsl(142 80% 45%)" strokeWidth="1.5" fill="none" />
      <path d="M45 180 L45 188 L53 188" stroke="hsl(142 80% 45%)" strokeWidth="1.5" fill="none" />
      <path d="M255 180 L255 188 L247 188" stroke="hsl(142 80% 45%)" strokeWidth="1.5" fill="none" />
      
      {/* Center focus point */}
      <circle cx="150" cy="112" r="20" fill="none" stroke="hsl(142 80% 45% / 0.4)" strokeWidth="1" />
      <circle cx="150" cy="112" r="3" fill="hsl(142 80% 45%)" fillOpacity="0.6" />
      <line x1="142" y1="112" x2="130" y2="112" stroke="hsl(142 80% 45% / 0.3)" strokeWidth="0.5" />
      <line x1="158" y1="112" x2="170" y2="112" stroke="hsl(142 80% 45% / 0.3)" strokeWidth="0.5" />
      <line x1="150" y1="104" x2="150" y2="92" stroke="hsl(142 80% 45% / 0.3)" strokeWidth="0.5" />
      <line x1="150" y1="120" x2="150" y2="132" stroke="hsl(142 80% 45% / 0.3)" strokeWidth="0.5" />
      
      {/* Abstract product shape */}
      <rect x="130" y="85" width="40" height="55" rx="8" fill="hsl(0 0% 8%)" stroke="hsl(0 0% 20%)" strokeWidth="1" />
      <rect x="136" y="92" width="28" height="34" rx="4" fill="hsl(142 30% 8%)" />
      <rect x="140" y="96" width="20" height="14" rx="3" fill="hsl(142 80% 45%)" fillOpacity="0.25" />
      
      {/* Camera info overlay */}
      <text x="42" y="50" fontSize="6" fill="hsl(142 80% 45%)" fontFamily="Space Grotesk">REC ●</text>
      <text x="220" y="50" fontSize="5" fill="hsl(0 0% 45%)" fontFamily="Space Grotesk">f/2.8 1/125 ISO400</text>
      
      {/* Bottom bar */}
      <rect x="35" y="196" width="230" height="22" rx="4" fill="hsl(0 0% 7%)" />
      <text x="45" y="210" fontSize="6" fill="hsl(0 0% 45%)" fontFamily="Space Grotesk">Shot 14/24</text>
      <rect x="140" y="202" width="80" height="4" rx="2" fill="hsl(0 0% 15%)" />
      <rect x="140" y="202" width="48" height="4" rx="2" fill="hsl(142 80% 45%)" fillOpacity="0.6" />
      <text x="250" y="210" textAnchor="end" fontSize="6" fill="hsl(142 80% 45%)" fontFamily="Space Grotesk">58%</text>
    </svg>
  );
}

// BRAND: Strategy framework / mind map
export function BrandIllustration() {
  return (
    <svg viewBox="0 0 300 240" fill="none" className="w-full h-full">
      <rect x="15" y="15" width="270" height="210" rx="12" fill="hsl(0 0% 5%)" stroke="hsl(142 80% 45% / 0.2)" strokeWidth="1.5" />
      
      <text x="30" y="38" fontSize="10" fill="hsl(0 0% 70%)" fontFamily="Space Grotesk" fontWeight="600">Brand Architecture</text>
      
      {/* Central brand node */}
      <circle cx="150" cy="130" r="30" fill="hsl(0 0% 7%)" stroke="hsl(142 80% 45%)" strokeWidth="2" />
      <text x="150" y="126" textAnchor="middle" fontSize="7" fill="hsl(142 60% 55%)" fontFamily="Space Grotesk" fontWeight="700">BRAND</text>
      <text x="150" y="138" textAnchor="middle" fontSize="7" fill="hsl(142 60% 55%)" fontFamily="Space Grotesk" fontWeight="700">CORE</text>
      
      {/* Orbital nodes */}
      {[
        { x: 70, y: 70, label: "MISSION", r: 22 },
        { x: 230, y: 70, label: "VISION", r: 22 },
        { x: 50, y: 160, label: "VALUES", r: 22 },
        { x: 250, y: 160, label: "VOICE", r: 22 },
        { x: 90, y: 210, label: "STORY", r: 20 },
        { x: 210, y: 210, label: "AUDIENCE", r: 24 },
      ].map((node, i) => (
        <g key={i}>
          <line x1="150" y1="130" x2={node.x} y2={node.y} stroke="hsl(142 80% 45% / 0.15)" strokeWidth="1" strokeDasharray="4 3" />
          <circle cx={node.x} cy={node.y} r={node.r} fill="hsl(0 0% 7%)" stroke="hsl(142 80% 45% / 0.35)" strokeWidth="1.5" />
          <text x={node.x} y={node.y + 3} textAnchor="middle" fontSize="5.5" fill="hsl(142 70% 55%)" fontFamily="Space Grotesk" fontWeight="700">{node.label}</text>
        </g>
      ))}
      
      {/* Connecting arcs */}
      <path d="M70 70 Q150 30 230 70" fill="none" stroke="hsl(142 80% 45% / 0.08)" strokeWidth="1" />
      <path d="M50 160 Q150 200 250 160" fill="none" stroke="hsl(142 80% 45% / 0.08)" strokeWidth="1" />
    </svg>
  );
}

// STORY: Timeline / journey visualization
export function StoryIllustration() {
  return (
    <svg viewBox="0 0 400 200" fill="none" className="w-full h-full">
      {/* Background */}
      <rect x="10" y="10" width="380" height="180" rx="12" fill="hsl(0 0% 5%)" stroke="hsl(142 80% 45% / 0.15)" strokeWidth="1" />
      
      {/* Timeline line */}
      <line x1="40" y1="100" x2="360" y2="100" stroke="hsl(142 80% 45% / 0.3)" strokeWidth="2" />
      
      {/* Timeline nodes */}
      {[
        { x: 60, label: "Strategy", sub: "Research & Plan" },
        { x: 140, label: "Design", sub: "Brand & UI/UX" },
        { x: 220, label: "Develop", sub: "Build & Test" },
        { x: 300, label: "Launch", sub: "Deploy & Scale" },
        { x: 360, label: "Grow", sub: "Optimize & Expand" },
      ].map((step, i) => (
        <g key={i}>
          <circle cx={step.x} cy="100" r="16" fill="hsl(0 0% 7%)" stroke="hsl(142 80% 45%)" strokeWidth="2" />
          <text x={step.x} y="104" textAnchor="middle" fontSize="8" fontWeight="700" fill="hsl(142 80% 45%)" fontFamily="Space Grotesk">0{i + 1}</text>
          <text x={step.x} y="132" textAnchor="middle" fontSize="8" fill="hsl(0 0% 65%)" fontFamily="Space Grotesk" fontWeight="600">{step.label}</text>
          <text x={step.x} y="145" textAnchor="middle" fontSize="6" fill="hsl(0 0% 40%)" fontFamily="Space Grotesk">{step.sub}</text>
          
          {/* Progress fill for completed steps */}
          {i < 4 && (
            <line x1={step.x + 16} y1="100" x2={[140, 220, 300, 360][i] - 16} y2="100" stroke="hsl(142 80% 45% / 0.5)" strokeWidth="2" />
          )}
        </g>
      ))}
      
      {/* Decorative data points */}
      {[
        { x: 100, y: 60, val: "+187%" },
        { x: 180, y: 55, val: "4.8x" },
        { x: 260, y: 62, val: "98/100" },
        { x: 340, y: 58, val: "3.2x" },
      ].map((d, i) => (
        <g key={i}>
          <rect x={d.x - 20} y={d.y - 8} width="40" height="16" rx="4" fill="hsl(0 0% 7%)" stroke="hsl(142 80% 45% / 0.2)" strokeWidth="1" />
          <text x={d.x} y={d.y + 4} textAnchor="middle" fontSize="6" fill="hsl(142 80% 45%)" fontWeight="600" fontFamily="Space Grotesk">{d.val}</text>
        </g>
      ))}
    </svg>
  );
}

// WORK: Results dashboard
export function WorkIllustration() {
  return (
    <svg viewBox="0 0 500 280" fill="none" className="w-full h-full">
      {/* Header */}
      <text x="20" y="28" fontSize="12" fill="hsl(0 0% 75%)" fontFamily="Space Grotesk" fontWeight="600">Client Results Dashboard</text>
      <rect x="390" y="12" width="70" height="22" rx="6" fill="hsl(142 80% 45% / 0.1)" stroke="hsl(142 80% 45% / 0.3)" strokeWidth="1" />
      <text x="425" y="26" textAnchor="middle" fontSize="7" fill="hsl(142 80% 45%)" fontWeight="600" fontFamily="Space Grotesk">● LIVE</text>
      
      {/* KPI cards */}
      {[
        { x: 20, label: "REVENUE GROWTH", value: "+3.2x", sub: "YoY increase" },
        { x: 140, label: "LEADS / MONTH", value: "120+", sub: "Qualified leads" },
        { x: 260, label: "AVG ROAS", value: "4.8x", sub: "Across campaigns" },
        { x: 380, label: "CLIENT SCORE", value: "98%", sub: "Satisfaction" },
      ].map((kpi, i) => (
        <g key={i}>
          <rect x={kpi.x} y="43" width="105" height="55" rx="8" fill="hsl(0 0% 7%)" stroke="hsl(142 80% 45% / 0.15)" strokeWidth="1" />
          <text x={kpi.x + 12} y="60" fontSize="6" fill="hsl(0 0% 40%)" fontFamily="Space Grotesk">{kpi.label}</text>
          <text x={kpi.x + 12} y="82" fontSize="20" fontWeight="800" fill="hsl(142 80% 45%)" fontFamily="Space Grotesk">{kpi.value}</text>
          <text x={kpi.x + 12} y="94" fontSize="6" fill="hsl(0 0% 35%)" fontFamily="Space Grotesk">{kpi.sub}</text>
        </g>
      ))}
      
      {/* Growth chart */}
      <rect x="20" y="113" width="300" height="130" rx="8" fill="hsl(0 0% 7%)" stroke="hsl(142 80% 45% / 0.1)" strokeWidth="1" />
      <text x="32" y="133" fontSize="7" fill="hsl(0 0% 50%)" fontFamily="Space Grotesk">Revenue Trend</text>
      {/* Grid lines */}
      {[148, 168, 188, 208].map((y, i) => (
        <line key={i} x1="32" y1={y} x2="310" y2={y} stroke="hsl(0 0% 10%)" strokeWidth="0.5" />
      ))}
      {/* Area fill */}
      <path d="M40,228 L70,220 L110,213 L150,206 L190,188 L230,173 L270,158 L300,146 L300,228 Z" fill="hsl(142 80% 45% / 0.06)" />
      {/* Line */}
      <polyline points="40,228 70,220 110,213 150,206 190,188 230,173 270,158 300,146" stroke="hsl(142 80% 45%)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Dots */}
      {[[40,228],[110,213],[190,188],[270,158],[300,146]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="3.5" fill="hsl(142 80% 45%)" stroke="hsl(0 0% 5%)" strokeWidth="2" />
      ))}
      
      {/* Side stats */}
      <rect x="335" y="113" width="140" height="130" rx="8" fill="hsl(0 0% 7%)" stroke="hsl(142 80% 45% / 0.1)" strokeWidth="1" />
      <text x="348" y="133" fontSize="7" fill="hsl(0 0% 50%)" fontFamily="Space Grotesk">By Channel</text>
      {[
        { label: "Google Ads", pct: 35, w: 42 },
        { label: "Meta Ads", pct: 28, w: 34 },
        { label: "Organic", pct: 22, w: 26 },
        { label: "Direct", pct: 15, w: 18 },
      ].map((ch, i) => (
        <g key={i}>
          <text x="348" y={156 + i * 26} fontSize="6" fill="hsl(0 0% 55%)" fontFamily="Space Grotesk">{ch.label}</text>
          <rect x="348" y={160 + i * 26} width="110" height="5" rx="2.5" fill="hsl(0 0% 12%)" />
          <rect x="348" y={160 + i * 26} width={ch.w * 2.6} height="5" rx="2.5" fill="hsl(142 80% 45%)" fillOpacity={0.4 + i * 0.1} />
          <text x="462" y={166 + i * 26} textAnchor="end" fontSize="5" fill="hsl(142 80% 45%)" fontFamily="Space Grotesk">{ch.pct}%</text>
        </g>
      ))}
    </svg>
  );
}

// CONTACT: Communication / connection visualization
export function ContactIllustration() {
  return (
    <svg viewBox="0 0 300 160" fill="none" className="w-full h-full">
      {/* Signal rings - enhanced with more detail */}
      <circle cx="150" cy="80" r="75" fill="none" stroke="hsl(142 80% 45% / 0.03)" strokeWidth="1" />
      <circle cx="150" cy="80" r="62" fill="none" stroke="hsl(142 80% 45% / 0.05)" strokeWidth="1" />
      <circle cx="150" cy="80" r="48" fill="none" stroke="hsl(142 80% 45% / 0.08)" strokeWidth="1" />
      <circle cx="150" cy="80" r="34" fill="none" stroke="hsl(142 80% 45% / 0.12)" strokeWidth="1.2" />
      <circle cx="150" cy="80" r="20" fill="none" stroke="hsl(142 80% 45% / 0.18)" strokeWidth="1.5" />
      
      {/* Center hub - enhanced glow */}
      <circle cx="150" cy="80" r="14" fill="hsl(142 80% 45% / 0.08)" />
      <circle cx="150" cy="80" r="14" fill="none" stroke="hsl(142 80% 45% / 0.6)" strokeWidth="2" />
      <circle cx="150" cy="80" r="6" fill="hsl(142 80% 45% / 0.3)" />
      <circle cx="150" cy="80" r="3.5" fill="hsl(142 80% 45%)" />
      
      {/* Connection points - larger, more detailed */}
      {[
        { x: 48, y: 32, label: "Email" },
        { x: 252, y: 32, label: "Call" },
        { x: 48, y: 128, label: "Chat" },
        { x: 252, y: 128, label: "Meet" },
      ].map((pt, i) => (
        <g key={i}>
          <line x1="150" y1="80" x2={pt.x} y2={pt.y} stroke="hsl(142 80% 45% / 0.12)" strokeWidth="1.2" strokeDasharray="4 3" />
          {/* Outer ring */}
          <circle cx={pt.x} cy={pt.y} r="24" fill="hsl(0 0% 4%)" stroke="hsl(142 80% 45% / 0.15)" strokeWidth="1" />
          {/* Inner circle */}
          <circle cx={pt.x} cy={pt.y} r="20" fill="hsl(0 0% 6%)" stroke="hsl(142 80% 45% / 0.35)" strokeWidth="1.5" />
          {/* Inner glow */}
          <circle cx={pt.x} cy={pt.y} r="12" fill="hsl(142 80% 45% / 0.04)" />
          <text x={pt.x} y={pt.y + 4} textAnchor="middle" fontSize="7.5" fill="hsl(142 80% 45%)" fontWeight="700" fontFamily="Space Grotesk">{pt.label}</text>
        </g>
      ))}
      
      {/* Decorative connection dots along lines */}
      {[
        { x: 100, y: 56 }, { x: 200, y: 56 }, { x: 100, y: 104 }, { x: 200, y: 104 },
      ].map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r="2" fill="hsl(142 80% 45% / 0.25)" />
      ))}
      
    </svg>
  );
}

// PROCESS: Linear workflow
export function ProcessIllustration() {
  return (
    <svg viewBox="0 0 480 120" fill="none" className="w-full h-full">
      {/* Timeline line */}
      <line x1="40" y1="60" x2="440" y2="60" stroke="hsl(142 80% 45% / 0.3)" strokeWidth="2" />
      
      {/* Steps */}
      {[
        { x: 60, label: "Strategy", num: "01" },
        { x: 180, label: "Build", num: "02" },
        { x: 300, label: "Launch", num: "03" },
        { x: 420, label: "Scale", num: "04" },
      ].map((step, i) => (
        <g key={i}>
          {/* Node */}
          <circle cx={step.x} cy="60" r="22" fill="hsl(0 0% 7%)" stroke="hsl(142 80% 45%)" strokeWidth="2" />
          <text x={step.x} y="64" textAnchor="middle" fontSize="10" fontWeight="800" fill="hsl(142 80% 45%)" fontFamily="Space Grotesk">{step.num}</text>
          {/* Label */}
          <text x={step.x} y="98" textAnchor="middle" fontSize="10" fill="hsl(0 0% 70%)" fontFamily="Space Grotesk" fontWeight="600">{step.label}</text>
          {/* Connector */}
          {i < 3 && (
            <line x1={step.x + 22} y1="60" x2={[180, 300, 420][i] - 22} y2="60" stroke="hsl(142 80% 45% / 0.4)" strokeWidth="2" />
          )}
        </g>
      ))}
      
      {/* Arrow heads */}
      {[117, 237, 357].map((x, i) => (
        <polygon key={i} points={`${x},57 ${x + 6},60 ${x},63`} fill="hsl(142 80% 45%)" fillOpacity="0.5" />
      ))}
    </svg>
  );
}

// HERO: Kept for backward compat but not used on homepage
export function HeroIllustration() {
  return <WebAppIllustration />;
}
