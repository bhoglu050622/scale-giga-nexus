// ─── HUMAN ILLUSTRATIONS for ScaleGiga ───
// All illustrations feature human characters relevant to their section topic.

// HERO: Founder/team working on screens with energy/growth vibe
export function HeroIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      {/* Background glow */}
      <div className="absolute w-80 h-80 rounded-full"
        style={{ background: "radial-gradient(circle, hsl(142 80% 45% / 0.12) 0%, transparent 70%)" }} />

      <svg viewBox="0 0 480 420" fill="none" className="w-full h-full max-w-lg">
        <defs>
          <linearGradient id="heroGreen" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="hsl(142, 80%, 45%)" />
            <stop offset="1" stopColor="hsl(160, 70%, 35%)" />
          </linearGradient>
          <linearGradient id="heroSkin" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="hsl(30, 60%, 72%)" />
            <stop offset="1" stopColor="hsl(28, 55%, 62%)" />
          </linearGradient>
          <linearGradient id="heroSkin2" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="hsl(25, 70%, 58%)" />
            <stop offset="1" stopColor="hsl(22, 65%, 48%)" />
          </linearGradient>
          <linearGradient id="screenG" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="hsl(0, 0%, 9%)" />
            <stop offset="1" stopColor="hsl(142, 20%, 10%)" />
          </linearGradient>
        </defs>

        {/* ── DESK ── */}
        <rect x="60" y="310" width="360" height="16" rx="6" fill="hsl(0 0% 12%)" />
        <rect x="80" y="326" width="8" height="50" rx="4" fill="hsl(0 0% 9%)" />
        <rect x="392" y="326" width="8" height="50" rx="4" fill="hsl(0 0% 9%)" />

        {/* ── MONITOR ── */}
        <rect x="155" y="180" width="200" height="130" rx="10" fill="url(#screenG)" stroke="hsl(142 80% 45% / 0.5)" strokeWidth="2" />
        <rect x="165" y="190" width="180" height="110" rx="6" fill="hsl(0 0% 4%)" />
        {/* Screen content */}
        <rect x="175" y="200" width="80" height="6" rx="3" fill="hsl(142 80% 45%)" fillOpacity="0.9" />
        <rect x="175" y="212" width="120" height="4" rx="2" fill="hsl(0 0% 30%)" />
        <rect x="175" y="222" width="100" height="4" rx="2" fill="hsl(0 0% 25%)" />
        {/* Mini chart on screen */}
        <polyline points="175,270 195,258 215,262 240,245 265,238 290,232 315,225" stroke="hsl(142 80% 45%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <rect x="175" y="275" width="160" height="4" rx="2" fill="hsl(0 0% 15%)" />
        {/* Green glow on screen top */}
        <rect x="310" y="200" width="28" height="12" rx="4" fill="hsl(142 80% 45%)" fillOpacity="0.2" stroke="hsl(142 80% 45%)" strokeWidth="1" strokeOpacity="0.6" />
        <text x="324" y="209" textAnchor="middle" fontSize="5" fill="hsl(142 80% 45%)" fontWeight="700">LIVE</text>
        {/* Monitor stand */}
        <rect x="245" y="310" width="18" height="8" rx="2" fill="hsl(0 0% 14%)" />
        <rect x="232" y="316" width="44" height="6" rx="3" fill="hsl(0 0% 11%)" />

        {/* ── PERSON 1 (left, typing) ── */}
        {/* Body */}
        <rect x="100" y="240" width="50" height="70" rx="12" fill="hsl(232 70% 38%)" />
        {/* Head */}
        <ellipse cx="125" cy="228" rx="22" ry="24" fill="url(#heroSkin)" />
        {/* Hair */}
        <ellipse cx="125" cy="210" rx="22" ry="14" fill="hsl(25 40% 22%)" />
        <rect x="103" y="208" width="8" height="16" rx="4" fill="hsl(25 40% 22%)" />
        {/* Eyes */}
        <ellipse cx="117" cy="228" rx="3.5" ry="4" fill="hsl(0 0% 10%)" />
        <ellipse cx="133" cy="228" rx="3.5" ry="4" fill="hsl(0 0% 10%)" />
        <circle cx="118" cy="227" r="1.2" fill="white" />
        <circle cx="134" cy="227" r="1.2" fill="white" />
        {/* Smile */}
        <path d="M118 236 Q125 241 132 236" stroke="hsl(25 50% 40%)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        {/* Arms typing */}
        <rect x="88" y="278" width="40" height="12" rx="6" fill="url(#heroSkin)" />
        <rect x="132" y="278" width="40" height="12" rx="6" fill="url(#heroSkin)" />

        {/* ── LAPTOP (person 1) ── */}
        <rect x="90" y="292" width="80" height="20" rx="4" fill="hsl(0 0% 9%)" stroke="hsl(142 80% 45% / 0.3)" strokeWidth="1" />
        <rect x="93" y="295" width="74" height="14" rx="3" fill="hsl(0 0% 5%)" />
        <polyline points="100,306 112,300 124,303 138,297 150,295" stroke="hsl(142 80% 45%)" strokeWidth="1.5" strokeLinecap="round" fill="none" />

        {/* ── PERSON 2 (right, standing/presenting) ── */}
        {/* Body */}
        <rect x="330" y="230" width="52" height="80" rx="12" fill="hsl(142 40% 22%)" />
        {/* Collar/shirt detail */}
        <path d="M348 230 L356 245 L364 230" fill="hsl(0 0% 80%)" />
        {/* Head */}
        <ellipse cx="356" cy="216" rx="22" ry="24" fill="url(#heroSkin2)" />
        {/* Hair */}
        <ellipse cx="356" cy="198" rx="22" ry="13" fill="hsl(20 30% 14%)" />
        {/* Eyes */}
        <ellipse cx="348" cy="216" rx="3" ry="3.5" fill="hsl(0 0% 10%)" />
        <ellipse cx="364" cy="216" rx="3" ry="3.5" fill="hsl(0 0% 10%)" />
        <circle cx="349" cy="215" r="1" fill="white" />
        <circle cx="365" cy="215" r="1" fill="white" />
        {/* Confident expression */}
        <path d="M349 223 Q356 229 363 223" stroke="hsl(22 55% 38%)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        {/* Arm pointing at screen */}
        <rect x="308" y="258" width="46" height="12" rx="6" fill="url(#heroSkin2)" style={{ transform: "rotate(-20deg)", transformOrigin: "350px 264px" }} />
        {/* Other arm */}
        <rect x="372" y="265" width="34" height="12" rx="6" fill="url(#heroSkin2)" />

        {/* ── FLOATING METRICS ── */}
        {/* Top left metric */}
        <rect x="30" y="100" width="100" height="52" rx="12" fill="hsl(0 0% 8%)" stroke="hsl(142 80% 45% / 0.35)" strokeWidth="1.5" />
        <text x="42" y="122" fontSize="8" fill="hsl(0 0% 50%)" fontFamily="Space Grotesk">ROAS</text>
        <text x="42" y="140" fontSize="18" fontWeight="700" fill="hsl(142 80% 45%)" fontFamily="Space Grotesk">4.8x</text>
        {/* Arrow up */}
        <path d="M112 118 L118 112 L124 118" stroke="hsl(142 80% 45%)" strokeWidth="2" strokeLinecap="round" fill="none" />
        <line x1="118" y1="112" x2="118" y2="124" stroke="hsl(142 80% 45%)" strokeWidth="2" strokeLinecap="round" />

        {/* Top right metric */}
        <rect x="350" y="90" width="110" height="52" rx="12" fill="hsl(0 0% 8%)" stroke="hsl(142 80% 45% / 0.35)" strokeWidth="1.5" />
        <text x="362" y="112" fontSize="8" fill="hsl(0 0% 50%)" fontFamily="Space Grotesk">CONVERSIONS</text>
        <text x="362" y="130" fontSize="18" fontWeight="700" fill="hsl(142 80% 45%)" fontFamily="Space Grotesk">+187%</text>

        {/* Bottom left floating tag */}
        <rect x="20" y="300" width="80" height="30" rx="10" fill="hsl(142 80% 45%)" fillOpacity="0.12" stroke="hsl(142 80% 45% / 0.4)" strokeWidth="1.5" />
        <text x="60" y="319" textAnchor="middle" fontSize="8" fill="hsl(142 80% 45%)" fontWeight="700" fontFamily="Space Grotesk">✦ AI-Powered</text>

        {/* Decorative circles */}
        <circle cx="440" cy="360" r="30" fill="hsl(142 80% 45%)" fillOpacity="0.05" stroke="hsl(142 80% 45% / 0.15)" strokeWidth="1" />
        <circle cx="40" cy="200" r="18" fill="hsl(142 80% 45%)" fillOpacity="0.06" />
      </svg>
    </div>
  );
}

// WEB APP: Developer building a website at a computer
export function WebAppIllustration() {
  return (
    <svg viewBox="0 0 300 240" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="wSkin" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="hsl(30, 55%, 70%)" /><stop offset="1" stopColor="hsl(28, 50%, 60%)" />
        </linearGradient>
      </defs>
      {/* Desk */}
      <rect x="30" y="190" width="240" height="10" rx="5" fill="hsl(0 0% 12%)" />
      {/* Monitor */}
      <rect x="80" y="100" width="160" height="90" rx="8" fill="hsl(0 0% 7%)" stroke="hsl(142 80% 45% / 0.5)" strokeWidth="2" />
      <rect x="88" y="108" width="144" height="74" rx="5" fill="hsl(0 0% 4%)" />
      {/* Code lines on screen */}
      <rect x="96" y="116" width="50" height="4" rx="2" fill="hsl(142 80% 45%)" fillOpacity="0.9" />
      <rect x="96" y="125" width="80" height="3" rx="1.5" fill="hsl(200 70% 55%)" fillOpacity="0.7" />
      <rect x="104" y="133" width="60" height="3" rx="1.5" fill="hsl(30 90% 65%)" fillOpacity="0.7" />
      <rect x="104" y="141" width="90" height="3" rx="1.5" fill="hsl(0 0% 40%)" />
      <rect x="96" y="149" width="70" height="3" rx="1.5" fill="hsl(260 70% 65%)" fillOpacity="0.7" />
      <rect x="104" y="157" width="55" height="3" rx="1.5" fill="hsl(142 80% 45%)" fillOpacity="0.6" />
      <rect x="96" y="165" width="110" height="3" rx="1.5" fill="hsl(0 0% 30%)" />
      {/* Cursor blink */}
      <rect x="210" y="125" width="2" height="12" rx="1" fill="hsl(142 80% 45%)" />
      {/* Monitor stand */}
      <rect x="154" y="190" width="12" height="8" rx="2" fill="hsl(0 0% 12%)" />
      <rect x="144" y="196" width="32" height="5" rx="2" fill="hsl(0 0% 10%)" />

      {/* Developer person */}
      {/* Body */}
      <rect x="120" y="210" width="60" height="20" rx="10" fill="hsl(232 60% 35%)" />
      {/* Head */}
      <ellipse cx="150" cy="200" rx="20" ry="21" fill="url(#wSkin)" />
      {/* Hair */}
      <ellipse cx="150" cy="183" rx="20" ry="12" fill="hsl(20 35% 20%)" />
      <rect x="130" y="182" width="7" height="14" rx="3" fill="hsl(20 35% 20%)" />
      <rect x="163" y="182" width="7" height="14" rx="3" fill="hsl(20 35% 20%)" />
      {/* Eyes with glasses */}
      <rect x="138" y="198" width="11" height="8" rx="4" fill="none" stroke="hsl(0 0% 55%)" strokeWidth="1.5" />
      <rect x="152" y="198" width="11" height="8" rx="4" fill="none" stroke="hsl(0 0% 55%)" strokeWidth="1.5" />
      <line x1="149" y1="202" x2="152" y2="202" stroke="hsl(0 0% 55%)" strokeWidth="1.5" />
      <circle cx="143" cy="202" r="2.5" fill="hsl(220 60% 25%)" />
      <circle cx="157" cy="202" r="2.5" fill="hsl(220 60% 25%)" />
      {/* Smile */}
      <path d="M144 208 Q150 213 156 208" stroke="hsl(28 50% 45%)" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Coffee mug */}
      <rect x="40" y="172" width="28" height="18" rx="4" fill="hsl(0 0% 14%)" stroke="hsl(0 0% 22%)" strokeWidth="1" />
      <path d="M68 178 Q76 178 76 185 Q76 192 68 192" stroke="hsl(0 0% 22%)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Steam */}
      <path d="M50 168 Q53 162 50 156" stroke="hsl(0 0% 40%)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M58 168 Q61 161 58 154" stroke="hsl(0 0% 40%)" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Green notification badge */}
      <rect x="220" y="105" width="56" height="28" rx="8" fill="hsl(142 80% 45%)" fillOpacity="0.12" stroke="hsl(142 80% 45% / 0.4)" strokeWidth="1.5" />
      <text x="248" y="120" textAnchor="middle" fontSize="7" fill="hsl(142 80% 45%)" fontWeight="700" fontFamily="Space Grotesk">BUILD ✓</text>
      <text x="248" y="129" textAnchor="middle" fontSize="6" fill="hsl(142 60% 55%)" fontFamily="Space Grotesk">deployed</text>

      {/* Phone device */}
      <rect x="240" y="145" width="32" height="52" rx="8" fill="hsl(0 0% 7%)" stroke="hsl(142 80% 45% / 0.3)" strokeWidth="1.5" />
      <rect x="244" y="150" width="24" height="38" rx="4" fill="hsl(0 0% 4%)" />
      <rect x="248" y="154" width="16" height="6" rx="2" fill="hsl(142 80% 45%)" fillOpacity="0.6" />
      <rect x="248" y="164" width="12" height="3" rx="1.5" fill="hsl(0 0% 25%)" />
      <rect x="248" y="172" width="14" height="3" rx="1.5" fill="hsl(0 0% 25%)" />
    </svg>
  );
}

// ADS: Marketer analyzing campaign data
export function AdsIllustration() {
  return (
    <svg viewBox="0 0 300 240" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="adSkin" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="hsl(28, 65%, 62%)" /><stop offset="1" stopColor="hsl(25, 60%, 52%)" />
        </linearGradient>
      </defs>
      {/* Large chart board */}
      <rect x="20" y="40" width="180" height="140" rx="10" fill="hsl(0 0% 6%)" stroke="hsl(142 80% 45% / 0.4)" strokeWidth="1.5" />
      {/* Chart title */}
      <rect x="32" y="54" width="60" height="5" rx="2.5" fill="hsl(0 0% 28%)" />
      <rect x="32" y="64" width="40" height="4" rx="2" fill="hsl(0 0% 20%)" />
      {/* Y axis */}
      <line x1="48" y1="100" x2="48" y2="168" stroke="hsl(0 0% 20%)" strokeWidth="1" />
      {/* X axis */}
      <line x1="48" y1="168" x2="192" y2="168" stroke="hsl(0 0% 20%)" strokeWidth="1" />
      {/* Bars */}
      <rect x="58" y="138" width="18" height="30" rx="4" fill="hsl(142 80% 45%)" fillOpacity="0.3" />
      <rect x="58" y="128" width="18" height="10" rx="3" fill="hsl(142 80% 45%)" />
      <rect x="86" y="122" width="18" height="46" rx="4" fill="hsl(142 80% 45%)" fillOpacity="0.3" />
      <rect x="86" y="112" width="18" height="10" rx="3" fill="hsl(142 80% 45%)" />
      <rect x="114" y="112" width="18" height="56" rx="4" fill="hsl(142 80% 45%)" fillOpacity="0.3" />
      <rect x="114" y="102" width="18" height="10" rx="3" fill="hsl(142 80% 45%)" />
      <rect x="142" y="100" width="18" height="68" rx="4" fill="hsl(142 80% 45%)" fillOpacity="0.35" />
      <rect x="142" y="90" width="18" height="10" rx="3" fill="hsl(142 80% 45%)" />
      <rect x="170" y="82" width="18" height="86" rx="4" fill="hsl(142 80% 45%)" fillOpacity="0.4" />
      <rect x="170" y="72" width="18" height="10" rx="3" fill="hsl(142 90% 55%)" />
      {/* Trend line */}
      <polyline points="67,128 95,112 123,102 151,90 179,72" stroke="hsl(142 90% 60%)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Trend dots */}
      {[[67,128],[95,112],[123,102],[151,90],[179,72]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="4" fill="hsl(142 80% 45%)" stroke="hsl(0 0% 4%)" strokeWidth="2" />
      ))}
      {/* ROAS badge */}
      <rect x="28" y="80" width="56" height="30" rx="8" fill="hsl(142 80% 45%)" fillOpacity="0.12" stroke="hsl(142 80% 45% / 0.4)" strokeWidth="1.5" />
      <text x="56" y="94" textAnchor="middle" fontSize="7" fill="hsl(142 60% 60%)" fontFamily="Space Grotesk">ROAS</text>
      <text x="56" y="106" textAnchor="middle" fontSize="13" fontWeight="800" fill="hsl(142 80% 45%)" fontFamily="Space Grotesk">4.8x</text>

      {/* Person analyzing */}
      {/* Stool */}
      <ellipse cx="248" cy="220" rx="22" ry="5" fill="hsl(0 0% 10%)" />
      <rect x="244" y="185" width="8" height="38" rx="4" fill="hsl(0 0% 13%)" />
      {/* Body */}
      <rect x="225" y="148" width="52" height="58" rx="14" fill="hsl(142 35% 20%)" />
      {/* Head */}
      <ellipse cx="251" cy="136" rx="22" ry="24" fill="url(#adSkin)" />
      {/* Natural hair */}
      <ellipse cx="251" cy="118" rx="22" ry="14" fill="hsl(20 30% 14%)" />
      <ellipse cx="234" cy="126" rx="9" ry="14" fill="hsl(20 30% 14%)" />
      <ellipse cx="268" cy="126" rx="9" ry="14" fill="hsl(20 30% 14%)" />
      {/* Eyes */}
      <ellipse cx="243" cy="136" rx="3" ry="3.5" fill="hsl(0 0% 10%)" />
      <ellipse cx="259" cy="136" rx="3" ry="3.5" fill="hsl(0 0% 10%)" />
      <circle cx="244" cy="135" r="1.2" fill="white" />
      <circle cx="260" cy="135" r="1.2" fill="white" />
      {/* Focused expression */}
      <path d="M240 140 Q242 138 244 140" stroke="hsl(28 50% 40%)" strokeWidth="1" strokeLinecap="round" fill="none" />
      <path d="M255 140 Q257 138 259 140" stroke="hsl(28 50% 40%)" strokeWidth="1" strokeLinecap="round" fill="none" />
      <path d="M244 145 Q251 150 258 145" stroke="hsl(28 50% 40%)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Arm pointing at chart */}
      <rect x="210" y="175" width="42" height="12" rx="6" fill="url(#adSkin)" style={{ transform: "rotate(-30deg)", transformOrigin: "230px 181px" }} />
      {/* Tablet in hand */}
      <rect x="235" y="195" width="36" height="28" rx="6" fill="hsl(0 0% 8%)" stroke="hsl(142 80% 45% / 0.3)" strokeWidth="1" />
      <rect x="238" y="198" width="30" height="20" rx="3" fill="hsl(0 0% 5%)" />
      <polyline points="240,215 248,208 256,212 268,204" stroke="hsl(142 80% 45%)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

// SOCIAL: Social media manager creating content
export function SocialIllustration() {
  return (
    <svg viewBox="0 0 300 240" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="socSkin" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="hsl(35, 70%, 68%)" /><stop offset="1" stopColor="hsl(32, 65%, 58%)" />
        </linearGradient>
      </defs>
      {/* Phone in hand - large */}
      <rect x="110" y="60" width="90" height="160" rx="16" fill="hsl(0 0% 6%)" stroke="hsl(142 80% 45% / 0.4)" strokeWidth="2" />
      <rect x="116" y="68" width="78" height="138" rx="10" fill="hsl(0 0% 4%)" />
      {/* Camera notch */}
      <rect x="143" y="63" width="24" height="5" rx="2.5" fill="hsl(0 0% 12%)" />
      {/* Profile area */}
      <circle cx="130" cy="90" r="14" fill="hsl(142 80% 45%)" fillOpacity="0.15" stroke="hsl(142 80% 45% / 0.5)" strokeWidth="1.5" />
      <text x="130" y="95" textAnchor="middle" fontSize="14" fill="hsl(142 80% 45%)">🙂</text>
      <rect x="150" y="82" width="36" height="5" rx="2.5" fill="hsl(0 0% 30%)" />
      <rect x="150" y="92" width="26" height="4" rx="2" fill="hsl(0 0% 22%)" />
      {/* Post image area */}
      <rect x="120" y="110" width="70" height="55" rx="6" fill="hsl(142 30% 10%)" />
      <circle cx="155" cy="137" r="16" fill="hsl(142 80% 45%)" fillOpacity="0.15" />
      <text x="155" y="143" textAnchor="middle" fontSize="18">🌿</text>
      {/* Action bar */}
      <text x="122" y="182" fontSize="13">❤️</text>
      <text x="142" y="182" fontSize="13">💬</text>
      <text x="162" y="182" fontSize="13">🔗</text>
      {/* Like count */}
      <rect x="120" y="186" width="40" height="4" rx="2" fill="hsl(0 0% 20%)" />
      <rect x="120" y="194" width="65" height="3" rx="1.5" fill="hsl(0 0% 16%)" />

      {/* Person */}
      {/* Body */}
      <rect x="30" y="155" width="62" height="70" rx="12" fill="hsl(260 45% 35%)" />
      {/* Head */}
      <ellipse cx="61" cy="143" rx="24" ry="26" fill="url(#socSkin)" />
      {/* Hair - wavy */}
      <ellipse cx="61" cy="122" rx="24" ry="15" fill="hsl(25 50% 20%)" />
      <rect x="37" y="122" width="9" height="22" rx="4" fill="hsl(25 50% 20%)" />
      <rect x="55" y="118" rx="4" width="12" height="10" fill="hsl(25 50% 20%)" />
      {/* Eyes - excited */}
      <ellipse cx="52" cy="142" rx="3.5" ry="4" fill="hsl(0 0% 10%)" />
      <ellipse cx="70" cy="142" rx="3.5" ry="4" fill="hsl(0 0% 10%)" />
      <circle cx="53" cy="141" r="1.3" fill="white" />
      <circle cx="71" cy="141" r="1.3" fill="white" />
      {/* Big smile */}
      <path d="M51 150 Q61 160 71 150" stroke="hsl(30 55% 40%)" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Arm holding phone up */}
      <rect x="78" y="168" width="50" height="14" rx="7" fill="url(#socSkin)" />

      {/* Floating engagement stats */}
      <rect x="215" y="60" width="76" height="36" rx="10" fill="hsl(0 0% 8%)" stroke="hsl(142 80% 45% / 0.35)" strokeWidth="1.5" />
      <text x="253" y="76" textAnchor="middle" fontSize="7" fill="hsl(0 0% 45%)" fontFamily="Space Grotesk">FOLLOWERS</text>
      <text x="253" y="91" textAnchor="middle" fontSize="15" fontWeight="800" fill="hsl(142 80% 45%)" fontFamily="Space Grotesk">+24K</text>

      <rect x="215" y="106" width="76" height="36" rx="10" fill="hsl(0 0% 8%)" stroke="hsl(142 80% 45% / 0.25)" strokeWidth="1.5" />
      <text x="253" y="122" textAnchor="middle" fontSize="7" fill="hsl(0 0% 45%)" fontFamily="Space Grotesk">ENGAGEMENT</text>
      <text x="253" y="137" textAnchor="middle" fontSize="15" fontWeight="800" fill="hsl(142 90% 55%)" fontFamily="Space Grotesk">8.4%</text>

      {/* Sparkles */}
      <circle cx="25" cy="80" r="5" fill="hsl(142 80% 45%)" fillOpacity="0.4" />
      <circle cx="45" cy="55" r="3" fill="hsl(142 80% 45%)" fillOpacity="0.3" />
      <circle cx="280" cy="200" r="6" fill="hsl(142 80% 45%)" fillOpacity="0.2" />
    </svg>
  );
}

// CREATIVE: Designer working with brand colors
export function CreativeIllustration() {
  return (
    <svg viewBox="0 0 300 240" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="crSkin" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="hsl(22, 60%, 66%)" /><stop offset="1" stopColor="hsl(20, 56%, 56%)" />
        </linearGradient>
      </defs>
      {/* Large canvas/drawing tablet */}
      <rect x="30" y="50" width="180" height="150" rx="12" fill="hsl(0 0% 6%)" stroke="hsl(142 80% 45% / 0.3)" strokeWidth="2" />
      <rect x="38" y="58" width="164" height="134" rx="8" fill="hsl(0 0% 4%)" />
      {/* Brand mark being designed */}
      <circle cx="120" cy="108" r="32" fill="hsl(142 80% 45%)" fillOpacity="0.1" stroke="hsl(142 80% 45%)" strokeWidth="1.5" strokeDasharray="4 3" />
      <circle cx="120" cy="108" r="20" fill="hsl(142 80% 45%)" fillOpacity="0.18" />
      <text x="120" y="115" textAnchor="middle" fontSize="20" fontWeight="800" fill="hsl(142 80% 45%)" fontFamily="Space Grotesk" fillOpacity="0.9">S</text>
      {/* Color swatches */}
      <rect x="42" y="165" width="20" height="20" rx="5" fill="hsl(142 80% 45%)" />
      <rect x="66" y="165" width="20" height="20" rx="5" fill="hsl(142 40% 22%)" />
      <rect x="90" y="165" width="20" height="20" rx="5" fill="hsl(0 0% 85%)" />
      <rect x="114" y="165" width="20" height="20" rx="5" fill="hsl(0 0% 10%)" />
      {/* Guide lines on canvas */}
      <line x1="120" y1="62" x2="120" y2="158" stroke="hsl(142 80% 45%)" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="42" y1="108" x2="196" y2="108" stroke="hsl(142 80% 45%)" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="4 4" />
      {/* Typography sample */}
      <text x="152" y="80" fontSize="9" fill="hsl(0 0% 55%)" fontFamily="Space Grotesk">ScaleGiga</text>
      <text x="152" y="92" fontSize="7" fill="hsl(0 0% 35%)" fontFamily="Space Grotesk">Digital Growth</text>

      {/* Designer person */}
      {/* Chair */}
      <rect x="232" y="200" width="50" height="10" rx="5" fill="hsl(0 0% 14%)" />
      <rect x="252" y="210" width="10" height="30" rx="5" fill="hsl(0 0% 12%)" />
      {/* Body */}
      <rect x="228" y="158" width="56" height="58" rx="14" fill="hsl(210 50% 30%)" />
      {/* Head */}
      <ellipse cx="256" cy="146" rx="23" ry="25" fill="url(#crSkin)" />
      {/* Hair - ponytail */}
      <ellipse cx="256" cy="127" rx="22" ry="14" fill="hsl(15 40% 18%)" />
      <rect x="270" y="126" width="8" height="30" rx="4" fill="hsl(15 40% 18%)" />
      {/* Bun */}
      <circle cx="278" cy="158" r="8" fill="hsl(15 40% 18%)" />
      {/* Eyes focused down */}
      <ellipse cx="248" cy="148" rx="3" ry="2.5" fill="hsl(0 0% 10%)" />
      <ellipse cx="264" cy="148" rx="3" ry="2.5" fill="hsl(0 0% 10%)" />
      <circle cx="249" cy="147" r="1" fill="white" />
      <circle cx="265" cy="147" r="1" fill="white" />
      {/* Smile */}
      <path d="M249 155 Q256 160 263 155" stroke="hsl(20 50% 40%)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Arm with stylus */}
      <rect x="214" y="185" width="48" height="12" rx="6" fill="url(#crSkin)" />
      {/* Stylus pen */}
      <rect x="204" y="190" width="22" height="5" rx="2.5" fill="hsl(0 0% 55%)" />
      <polygon points="202,192.5 204,190 204,195" fill="hsl(142 80% 45%)" />

      {/* Color tool palette floating */}
      <rect x="22" y="205" width="82" height="28" rx="8" fill="hsl(0 0% 8%)" stroke="hsl(142 80% 45% / 0.25)" strokeWidth="1.5" />
      <circle cx="36" cy="219" r="7" fill="hsl(142 80% 45%)" />
      <circle cx="52" cy="219" r="7" fill="hsl(0 0% 85%)" />
      <circle cx="68" cy="219" r="7" fill="hsl(142 40% 20%)" />
      <circle cx="84" cy="219" r="7" fill="hsl(210 50% 30%)" />
    </svg>
  );
}

// AI: Engineer building AI automation workflow
export function AIIllustration() {
  return (
    <svg viewBox="0 0 300 240" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="aiSkin" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="hsl(32, 50%, 65%)" /><stop offset="1" stopColor="hsl(30, 46%, 55%)" />
        </linearGradient>
      </defs>
      {/* AI workflow board */}
      {/* Node 1 */}
      <rect x="20" y="90" width="62" height="38" rx="10" fill="hsl(0 0% 8%)" stroke="hsl(142 80% 45% / 0.5)" strokeWidth="1.5" />
      <text x="51" y="106" textAnchor="middle" fontSize="7" fill="hsl(0 0% 55%)" fontFamily="Space Grotesk">INPUT</text>
      <text x="51" y="120" textAnchor="middle" fontSize="9" fill="hsl(142 80% 45%)" fontFamily="Space Grotesk" fontWeight="700">User Query</text>
      {/* Arrow */}
      <line x1="82" y1="109" x2="102" y2="109" stroke="hsl(142 80% 45%)" strokeWidth="2" strokeLinecap="round" />
      <polygon points="100,106 106,109 100,112" fill="hsl(142 80% 45%)" />

      {/* Node 2 - AI brain */}
      <rect x="104" y="82" width="74" height="54" rx="12" fill="hsl(0 0% 7%)" stroke="hsl(142 80% 45%)" strokeWidth="2" />
      <text x="141" y="102" textAnchor="middle" fontSize="7" fill="hsl(142 60% 60%)" fontFamily="Space Grotesk">AI ENGINE</text>
      <circle cx="141" cy="120" r="14" fill="hsl(142 80% 45%)" fillOpacity="0.15" />
      <text x="141" y="127" textAnchor="middle" fontSize="18">🤖</text>
      {/* Pulsing ring */}
      <circle cx="141" cy="120" r="18" fill="none" stroke="hsl(142 80% 45%)" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="3 3" />
      {/* Arrow */}
      <line x1="178" y1="109" x2="198" y2="109" stroke="hsl(142 80% 45%)" strokeWidth="2" strokeLinecap="round" />
      <polygon points="196,106 202,109 196,112" fill="hsl(142 80% 45%)" />

      {/* Node 3 */}
      <rect x="200" y="90" width="62" height="38" rx="10" fill="hsl(0 0% 8%)" stroke="hsl(142 80% 45% / 0.5)" strokeWidth="1.5" />
      <text x="231" y="106" textAnchor="middle" fontSize="7" fill="hsl(0 0% 55%)" fontFamily="Space Grotesk">OUTPUT</text>
      <text x="231" y="120" textAnchor="middle" fontSize="9" fill="hsl(142 80% 45%)" fontFamily="Space Grotesk" fontWeight="700">Response</text>

      {/* Below workflow: automation arrows going down */}
      <line x1="141" y1="136" x2="141" y2="156" stroke="hsl(142 80% 45%)" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 3" />
      <polygon points="138,154 141,160 144,154" fill="hsl(142 80% 45%)" />
      <rect x="100" y="160" width="82" height="28" rx="8" fill="hsl(142 80% 45%)" fillOpacity="0.1" stroke="hsl(142 80% 45% / 0.35)" strokeWidth="1.5" />
      <text x="141" y="178" textAnchor="middle" fontSize="8" fill="hsl(142 80% 45%)" fontFamily="Space Grotesk" fontWeight="700">✓ Task Automated</text>

      {/* Engineer person */}
      {/* Body */}
      <rect x="26" y="170" width="54" height="60" rx="12" fill="hsl(220 50% 28%)" />
      {/* Head */}
      <ellipse cx="53" cy="158" rx="22" ry="24" fill="url(#aiSkin)" />
      {/* Hair */}
      <ellipse cx="53" cy="140" rx="22" ry="13" fill="hsl(220 30% 18%)" />
      <rect x="31" y="140" width="8" height="16" rx="4" fill="hsl(220 30% 18%)" />
      {/* Eyes - analytical */}
      <ellipse cx="44" cy="158" rx="3.5" ry="4" fill="hsl(0 0% 10%)" />
      <ellipse cx="62" cy="158" rx="3.5" ry="4" fill="hsl(0 0% 10%)" />
      <circle cx="45" cy="157" r="1.3" fill="white" />
      <circle cx="63" cy="157" r="1.3" fill="white" />
      {/* Expression */}
      <path d="M45 165 Q53 170 61 165" stroke="hsl(30 45% 40%)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Arms raised */}
      <rect x="72" y="178" width="40" height="12" rx="6" fill="url(#aiSkin)" style={{ transform: "rotate(-40deg)", transformOrigin: "75px 184px" }} />

      {/* Floating chat bot bubbles */}
      <rect x="218" y="155" width="72" height="30" rx="10" fill="hsl(0 0% 8%)" stroke="hsl(142 80% 45% / 0.3)" strokeWidth="1.5" />
      <text x="254" y="169" textAnchor="middle" fontSize="7" fill="hsl(0 0% 50%)" fontFamily="Space Grotesk">Bot Reply:</text>
      <text x="254" y="180" textAnchor="middle" fontSize="7" fill="hsl(142 80% 45%)" fontFamily="Space Grotesk" fontWeight="600">"Got it! ✓"</text>
      {/* Little tail */}
      <polygon points="226,185 218,193 238,185" fill="hsl(0 0% 8%)" stroke="hsl(142 80% 45% / 0.3)" strokeWidth="1.5" />

      {/* Stat */}
      <rect x="218" y="200" width="72" height="32" rx="10" fill="hsl(0 0% 8%)" stroke="hsl(142 80% 45% / 0.25)" strokeWidth="1.5" />
      <text x="254" y="214" textAnchor="middle" fontSize="7" fill="hsl(0 0% 45%)" fontFamily="Space Grotesk">TIME SAVED</text>
      <text x="254" y="226" textAnchor="middle" fontSize="13" fontWeight="800" fill="hsl(142 80% 45%)" fontFamily="Space Grotesk">60%</text>
    </svg>
  );
}

// PHOTO: Photographer shooting a product
export function PhotoIllustration() {
  return (
    <svg viewBox="0 0 300 240" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="phSkin" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="hsl(36, 68%, 70%)" /><stop offset="1" stopColor="hsl(33, 62%, 60%)" />
        </linearGradient>
      </defs>
      {/* Studio backdrop */}
      <rect x="60" y="50" width="180" height="140" rx="10" fill="hsl(0 0% 7%)" stroke="hsl(142 80% 45% / 0.25)" strokeWidth="1.5" />
      {/* Light sweep */}
      <ellipse cx="150" cy="80" rx="50" ry="30" fill="hsl(142 80% 45%)" fillOpacity="0.06" />
      {/* Product on stand */}
      <rect x="122" y="128" width="56" height="8" rx="4" fill="hsl(0 0% 14%)" />
      <rect x="135" y="95" width="30" height="36" rx="8" fill="hsl(0 0% 12%)" stroke="hsl(142 80% 45% / 0.3)" strokeWidth="1.5" />
      <rect x="140" y="100" width="20" height="24" rx="5" fill="hsl(142 30% 12%)" />
      <rect x="142" y="103" width="16" height="12" rx="3" fill="hsl(142 80% 45%)" fillOpacity="0.4" />
      <circle cx="150" cy="120" r="5" fill="hsl(142 80% 45%)" fillOpacity="0.7" />
      {/* Studio lights */}
      <ellipse cx="90" cy="60" rx="14" ry="14" fill="hsl(0 0% 14%)" stroke="hsl(0 0% 25%)" strokeWidth="1.5" />
      <ellipse cx="90" cy="60" rx="8" ry="8" fill="hsl(50 100% 70%)" fillOpacity="0.7" />
      <line x1="90" y1="46" x2="90" y2="36" stroke="hsl(0 0% 20%)" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="210" cy="62" rx="12" ry="12" fill="hsl(0 0% 14%)" stroke="hsl(0 0% 25%)" strokeWidth="1.5" />
      <ellipse cx="210" cy="62" rx="7" ry="7" fill="hsl(50 100% 70%)" fillOpacity="0.6" />
      <line x1="210" y1="50" x2="210" y2="38" stroke="hsl(0 0% 20%)" strokeWidth="3" strokeLinecap="round" />
      {/* Light rays */}
      <line x1="98" y1="68" x2="130" y2="100" stroke="hsl(50 100% 70%)" strokeOpacity="0.12" strokeWidth="20" strokeLinecap="round" />
      <line x1="202" y1="70" x2="172" y2="100" stroke="hsl(50 100% 70%)" strokeOpacity="0.10" strokeWidth="16" strokeLinecap="round" />

      {/* Photographer person */}
      {/* Body */}
      <rect x="8" y="158" width="56" height="70" rx="12" fill="hsl(142 35% 18%)" />
      {/* Head */}
      <ellipse cx="36" cy="146" rx="22" ry="24" fill="url(#phSkin)" />
      {/* Hair - short */}
      <ellipse cx="36" cy="128" rx="22" ry="12" fill="hsl(22 40% 18%)" />
      {/* Eyes squinting through camera */}
      <ellipse cx="28" cy="145" rx="2.5" ry="2" fill="hsl(0 0% 10%)" />
      <ellipse cx="44" cy="145" rx="2.5" ry="2" fill="hsl(0 0% 10%)" />
      {/* Camera held up */}
      <rect x="36" y="158" width="46" height="32" rx="7" fill="hsl(0 0% 10%)" stroke="hsl(0 0% 22%)" strokeWidth="1.5" />
      <circle cx="59" cy="174" r="10" fill="hsl(0 0% 7%)" stroke="hsl(0 0% 18%)" strokeWidth="1.5" />
      <circle cx="59" cy="174" r="6" fill="hsl(0 0% 5%)" />
      <circle cx="59" cy="174" r="3" fill="hsl(0 0% 8%)" />
      <rect x="50" y="158" width="18" height="7" rx="4" fill="hsl(0 0% 14%)" />
      <rect x="74" y="163" width="8" height="6" rx="2" fill="hsl(142 80% 45%)" fillOpacity="0.6" />
      {/* Arms */}
      <rect x="14" y="178" width="34" height="12" rx="6" fill="url(#phSkin)" />

      {/* Preview screen floating */}
      <rect x="220" y="130" width="70" height="60" rx="10" fill="hsl(0 0% 7%)" stroke="hsl(142 80% 45% / 0.35)" strokeWidth="1.5" />
      <rect x="224" y="134" width="62" height="46" rx="7" fill="hsl(0 0% 4%)" />
      <rect x="228" y="138" width="54" height="34" rx="4" fill="hsl(142 20% 8%)" />
      <text x="255" y="162" textAnchor="middle" fontSize="22">📦</text>
      {/* Preview label */}
      <rect x="228" y="175" width="54" height="4" rx="2" fill="hsl(142 80% 45%)" fillOpacity="0.5" />
      {/* Check mark */}
      <circle cx="274" cy="136" r="8" fill="hsl(142 80% 45%)" />
      <path d="M270 136 L273 139 L278 133" stroke="hsl(0 0% 4%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* Sparkle effects */}
      <circle cx="156" cy="70" r="3" fill="hsl(50 100% 70%)" fillOpacity="0.5" />
      <circle cx="144" cy="64" r="2" fill="hsl(50 100% 70%)" fillOpacity="0.4" />
      <circle cx="162" cy="58" r="2.5" fill="hsl(50 100% 70%)" fillOpacity="0.35" />
    </svg>
  );
}

// BRAND STRATEGY: Strategist mapping brand framework
export function BrandIllustration() {
  return (
    <svg viewBox="0 0 300 240" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="brSkin" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="hsl(30, 60%, 68%)" /><stop offset="1" stopColor="hsl(27, 56%, 58%)" />
        </linearGradient>
      </defs>
      {/* Whiteboard / canvas */}
      <rect x="30" y="40" width="200" height="160" rx="10" fill="hsl(0 0% 6%)" stroke="hsl(142 80% 45% / 0.35)" strokeWidth="2" />
      {/* Brand map - central hub */}
      <circle cx="130" cy="120" r="28" fill="hsl(0 0% 8%)" stroke="hsl(142 80% 45%)" strokeWidth="2" />
      <text x="130" y="116" textAnchor="middle" fontSize="8" fill="hsl(142 60% 55%)" fontFamily="Space Grotesk" fontWeight="700">BRAND</text>
      <text x="130" y="128" textAnchor="middle" fontSize="8" fill="hsl(142 60% 55%)" fontFamily="Space Grotesk" fontWeight="700">CORE</text>
      {/* Spokes */}
      {[
        [130, 88, "MISSION"],
        [162, 109, "VISION"],
        [162, 131, "VALUES"],
        [130, 152, "VOICE"],
        [98, 131, "STORY"],
        [98, 109, "AUDIENCE"],
      ].map(([x, y, label], i) => (
        <g key={i}>
          <line x1="130" y1="120" x2={x} y2={y} stroke="hsl(142 80% 45%)" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="4 3" />
          <circle cx={x} cy={y} r="18" fill="hsl(0 0% 7%)" stroke="hsl(142 80% 45% / 0.4)" strokeWidth="1.5" />
          <text x={x} y={y + 3} textAnchor="middle" fontSize="5.5" fill="hsl(142 70% 55%)" fontFamily="Space Grotesk" fontWeight="700">{label}</text>
        </g>
      ))}
      {/* Handwriting marks */}
      <path d="M55 170 Q70 165 85 170" stroke="hsl(142 80% 45%)" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M55 178 Q80 175 100 178" stroke="hsl(0 0% 30%)" strokeWidth="1" strokeLinecap="round" fill="none" />
      <path d="M55 184 Q75 182 92 184" stroke="hsl(0 0% 25%)" strokeWidth="1" strokeLinecap="round" fill="none" />
      {/* Post-it note */}
      <rect x="178" y="50" width="44" height="44" rx="4" fill="hsl(48 100% 50%)" fillOpacity="0.85" />
      <rect x="183" y="60" width="34" height="3" rx="1.5" fill="hsl(48 80% 30%)" fillOpacity="0.5" />
      <rect x="183" y="67" width="28" height="3" rx="1.5" fill="hsl(48 80% 30%)" fillOpacity="0.4" />
      <rect x="183" y="74" width="30" height="3" rx="1.5" fill="hsl(48 80% 30%)" fillOpacity="0.4" />
      <rect x="183" y="81" width="22" height="3" rx="1.5" fill="hsl(48 80% 30%)" fillOpacity="0.35" />

      {/* Strategist person */}
      {/* Body */}
      <rect x="226" y="160" width="56" height="70" rx="12" fill="hsl(200 45% 28%)" />
      {/* Head */}
      <ellipse cx="254" cy="148" rx="22" ry="24" fill="url(#brSkin)" />
      {/* Hair */}
      <ellipse cx="254" cy="130" rx="22" ry="13" fill="hsl(20 35% 20%)" />
      <rect x="232" y="130" width="8" height="18" rx="4" fill="hsl(20 35% 20%)" />
      {/* Eyes - thinking */}
      <ellipse cx="246" cy="148" rx="3.5" ry="4" fill="hsl(0 0% 10%)" />
      <ellipse cx="262" cy="148" rx="3.5" ry="4" fill="hsl(0 0% 10%)" />
      <circle cx="247" cy="147" r="1.2" fill="white" />
      <circle cx="263" cy="147" r="1.2" fill="white" />
      {/* Expression */}
      <path d="M246 156 Q254 161 262 156" stroke="hsl(28 50% 40%)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Arm pointing */}
      <rect x="208" y="178" width="46" height="13" rx="6.5" fill="url(#brSkin)" />
      {/* Marker in hand */}
      <rect x="196" y="184" width="20" height="5" rx="2.5" fill="hsl(142 80% 45%)" />
      <polygon points="194,186.5 196,184 196,189" fill="hsl(142 90% 65%)" />

      {/* Sticky notes on side */}
      <rect x="8" y="80" width="16" height="16" rx="3" fill="hsl(142 80% 45%)" fillOpacity="0.7" style={{ transform: "rotate(-8deg)", transformOrigin: "16px 88px" }} />
      <rect x="8" y="102" width="16" height="16" rx="3" fill="hsl(48 100% 50%)" fillOpacity="0.7" style={{ transform: "rotate(6deg)", transformOrigin: "16px 110px" }} />
      <rect x="8" y="124" width="16" height="16" rx="3" fill="hsl(0 0% 28%)" fillOpacity="0.8" style={{ transform: "rotate(-4deg)", transformOrigin: "16px 132px" }} />
    </svg>
  );
}

// STORY: Two people shaking hands / team collaboration
export function StoryIllustration() {
  return (
    <svg viewBox="0 0 400 200" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="stSkin1" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="hsl(30, 58%, 68%)" /><stop offset="1" stopColor="hsl(28, 54%, 58%)" />
        </linearGradient>
        <linearGradient id="stSkin2" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="hsl(24, 65%, 56%)" /><stop offset="1" stopColor="hsl(22, 60%, 46%)" />
        </linearGradient>
      </defs>
      {/* Person 1 (left) */}
      <rect x="60" y="110" width="60" height="80" rx="14" fill="hsl(232 50% 32%)" />
      <ellipse cx="90" cy="97" rx="25" ry="27" fill="url(#stSkin1)" />
      <ellipse cx="90" cy="77" rx="25" ry="16" fill="hsl(20 40% 18%)" />
      <rect x="65" y="77" width="10" height="18" rx="5" fill="hsl(20 40% 18%)" />
      <ellipse cx="82" cy="97" rx="3.5" ry="4" fill="hsl(0 0% 10%)" />
      <ellipse cx="98" cy="97" rx="3.5" ry="4" fill="hsl(0 0% 10%)" />
      <circle cx="83" cy="96" r="1.2" fill="white" />
      <circle cx="99" cy="96" r="1.2" fill="white" />
      <path d="M83 105 Q90 111 97 105" stroke="hsl(28 50% 42%)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Arm extending right */}
      <rect x="112" y="134" width="70" height="14" rx="7" fill="url(#stSkin1)" />

      {/* Handshake zone */}
      <ellipse cx="200" cy="141" rx="20" ry="12" fill="hsl(142 80% 45%)" fillOpacity="0.15" />
      <circle cx="200" cy="141" r="28" fill="hsl(142 80% 45%)" fillOpacity="0.06" stroke="hsl(142 80% 45% / 0.2)" strokeWidth="1.5" strokeDasharray="4 4" />
      {/* Clasped hands emoji-style */}
      <text x="200" y="152" textAnchor="middle" fontSize="28">🤝</text>

      {/* Person 2 (right) */}
      <rect x="280" y="110" width="60" height="80" rx="14" fill="hsl(142 35% 20%)" />
      <ellipse cx="310" cy="97" rx="25" ry="27" fill="url(#stSkin2)" />
      <ellipse cx="310" cy="77" rx="25" ry="16" fill="hsl(14 35% 14%)" />
      <rect x="325" y="77" width="10" height="18" rx="5" fill="hsl(14 35% 14%)" />
      <ellipse cx="302" cy="97" rx="3.5" ry="4" fill="hsl(0 0% 10%)" />
      <ellipse cx="318" cy="97" rx="3.5" ry="4" fill="hsl(0 0% 10%)" />
      <circle cx="303" cy="96" r="1.2" fill="white" />
      <circle cx="319" cy="96" r="1.2" fill="white" />
      <path d="M303 105 Q310 111 317 105" stroke="hsl(22 52% 38%)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Arm extending left */}
      <rect x="218" y="134" width="70" height="14" rx="7" fill="url(#stSkin2)" />

      {/* Floating values */}
      {[
        { x: 30, y: 45, label: "Strategy" },
        { x: 138, y: 40, label: "Technology" },
        { x: 258, y: 40, label: "Creativity" },
        { x: 350, y: 45, label: "Growth" },
      ].map((v, i) => (
        <g key={i}>
          <rect x={v.x} y={v.y} width={v.label.length * 7 + 16} height="22" rx="8" fill="hsl(0 0% 8%)" stroke="hsl(142 80% 45% / 0.3)" strokeWidth="1.5" />
          <text x={v.x + v.label.length * 3.5 + 8} y={v.y + 15} textAnchor="middle" fontSize="7.5" fill="hsl(142 80% 45%)" fontFamily="Space Grotesk" fontWeight="700">{v.label}</text>
        </g>
      ))}
    </svg>
  );
}

// WORK: Team celebrating results together
export function WorkIllustration() {
  return (
    <svg viewBox="0 0 500 280" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="wkSkin1" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="hsl(30, 58%, 68%)" /><stop offset="1" stopColor="hsl(28, 52%, 58%)" />
        </linearGradient>
        <linearGradient id="wkSkin2" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="hsl(25, 68%, 58%)" /><stop offset="1" stopColor="hsl(22, 63%, 48%)" />
        </linearGradient>
        <linearGradient id="wkSkin3" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="hsl(35, 62%, 66%)" /><stop offset="1" stopColor="hsl(33, 57%, 56%)" />
        </linearGradient>
        <linearGradient id="screenWork" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="hsl(0, 0%, 5%)" />
          <stop offset="1" stopColor="hsl(142, 15%, 7%)" />
        </linearGradient>
      </defs>

      {/* Big dashboard/screen */}
      <rect x="130" y="30" width="240" height="160" rx="12" fill="url(#screenWork)" stroke="hsl(142 80% 45% / 0.5)" strokeWidth="2" />
      <rect x="138" y="38" width="224" height="144" rx="8" fill="hsl(0 0% 4%)" />
      {/* Dashboard content */}
      <rect x="146" y="46" width="80" height="7" rx="3" fill="hsl(142 80% 45%)" fillOpacity="0.8" />
      <rect x="146" y="58" width="50" height="4" rx="2" fill="hsl(0 0% 25%)" />
      {/* KPI cards on screen */}
      <rect x="146" y="68" width="60" height="40" rx="6" fill="hsl(0 0% 8%)" stroke="hsl(142 80% 45% / 0.3)" strokeWidth="1" />
      <text x="176" y="84" textAnchor="middle" fontSize="6" fill="hsl(0 0% 40%)" fontFamily="Space Grotesk">REVENUE</text>
      <text x="176" y="100" textAnchor="middle" fontSize="13" fontWeight="800" fill="hsl(142 80% 45%)" fontFamily="Space Grotesk">+3.2x</text>
      <rect x="214" y="68" width="60" height="40" rx="6" fill="hsl(0 0% 8%)" stroke="hsl(142 80% 45% / 0.3)" strokeWidth="1" />
      <text x="244" y="84" textAnchor="middle" fontSize="6" fill="hsl(0 0% 40%)" fontFamily="Space Grotesk">LEADS/MO</text>
      <text x="244" y="100" textAnchor="middle" fontSize="13" fontWeight="800" fill="hsl(142 80% 45%)" fontFamily="Space Grotesk">+120</text>
      <rect x="282" y="68" width="60" height="40" rx="6" fill="hsl(0 0% 8%)" stroke="hsl(142 80% 45% / 0.3)" strokeWidth="1" />
      <text x="312" y="84" textAnchor="middle" fontSize="6" fill="hsl(0 0% 40%)" fontFamily="Space Grotesk">ROAS</text>
      <text x="312" y="100" textAnchor="middle" fontSize="13" fontWeight="800" fill="hsl(142 90% 55%)" fontFamily="Space Grotesk">4.8x</text>
      {/* Chart on screen */}
      <polyline points="148,158 172,148 196,140 220,128 248,118 276,110 304,100 334,90 354,82" stroke="hsl(142 80% 45%)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <line x1="148" y1="170" x2="354" y2="170" stroke="hsl(0 0% 15%)" strokeWidth="1" />
      <line x1="148" y1="118" x2="354" y2="118" stroke="hsl(0 0% 12%)" strokeWidth="1" strokeDasharray="4 4" />

      {/* Person 1 - left, cheering */}
      <rect x="32" y="185" width="58" height="85" rx="14" fill="hsl(142 35% 18%)" />
      <ellipse cx="61" cy="172" rx="24" ry="26" fill="url(#wkSkin1)" />
      <ellipse cx="61" cy="152" rx="24" ry="14" fill="hsl(20 40% 16%)" />
      <rect x="37" y="153" width="8" height="18" rx="4" fill="hsl(20 40% 16%)" />
      <ellipse cx="53" cy="172" rx="3.5" ry="4" fill="hsl(0 0% 10%)" />
      <ellipse cx="69" cy="172" rx="3.5" ry="4" fill="hsl(0 0% 10%)" />
      <circle cx="54" cy="171" r="1.3" fill="white" />
      <circle cx="70" cy="171" r="1.3" fill="white" />
      <path d="M53 180 Q61 188 69 180" stroke="hsl(28 50% 40%)" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Arm raised */}
      <rect x="16" y="192" width="38" height="14" rx="7" fill="url(#wkSkin1)" style={{ transform: "rotate(-55deg)", transformOrigin: "30px 198px" }} />
      {/* Fist pump */}
      <rect x="8" y="152" width="22" height="18" rx="7" fill="url(#wkSkin1)" />

      {/* Person 2 - center */}
      <rect x="215" y="195" width="58" height="75" rx="14" fill="hsl(232 50% 30%)" />
      <ellipse cx="244" cy="182" rx="24" ry="26" fill="url(#wkSkin2)" />
      <ellipse cx="244" cy="162" rx="24" ry="14" fill="hsl(14 35% 14%)" />
      <ellipse cx="244" cy="180" rx="3.5" ry="4" fill="hsl(0 0% 10%)" />
      <ellipse cx="260" cy="180" rx="3.5" ry="4" fill="hsl(0 0% 10%)" />
      <circle cx="245" cy="179" r="1.3" fill="white" />
      <circle cx="261" cy="179" r="1.3" fill="white" />
      <path d="M236 189 Q244 196 252 189" stroke="hsl(22 55% 38%)" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Person 3 - right */}
      <rect x="402" y="185" width="58" height="85" rx="14" fill="hsl(200 45% 25%)" />
      <ellipse cx="431" cy="172" rx="24" ry="26" fill="url(#wkSkin3)" />
      <ellipse cx="431" cy="152" rx="24" ry="14" fill="hsl(26 48% 22%)" />
      <rect x="420" y="152" width="8" height="18" rx="4" fill="hsl(26 48% 22%)" />
      <rect x="444" y="152" width="8" height="18" rx="4" fill="hsl(26 48% 22%)" />
      <ellipse cx="422" cy="172" rx="3.5" ry="4" fill="hsl(0 0% 10%)" />
      <ellipse cx="440" cy="172" rx="3.5" ry="4" fill="hsl(0 0% 10%)" />
      <circle cx="423" cy="171" r="1.3" fill="white" />
      <circle cx="441" cy="171" r="1.3" fill="white" />
      <path d="M423 180 Q431 187 439 180" stroke="hsl(33 55% 42%)" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Arm raised */}
      <rect x="446" y="190" width="38" height="14" rx="7" fill="url(#wkSkin3)" style={{ transform: "rotate(55deg)", transformOrigin: "452px 196px" }} />
      <rect x="460" y="148" width="22" height="18" rx="7" fill="url(#wkSkin3)" />

      {/* Confetti/celebration */}
      {[
        [100,30,"hsl(142 80% 45%)"],
        [150,20,"hsl(48 100% 55%)"],
        [260,22,"hsl(142 80% 45%)"],
        [350,30,"hsl(0 75% 60%)"],
        [420,18,"hsl(142 90% 55%)"],
        [460,35,"hsl(48 100% 55%)"],
        [80,55,"hsl(260 70% 65%)"],
      ].map(([x,y,color],i) => (
        <rect key={i} x={x} y={y} width="8" height="5" rx="2" fill={color} fillOpacity="0.8"
          style={{ transform: `rotate(${i*37}deg)`, transformOrigin: `${x+4}px ${y+2.5}px` }} />
      ))}

      {/* Monitor stand */}
      <rect x="244" y="190" width="14" height="10" rx="3" fill="hsl(0 0% 12%)" />
      <rect x="226" y="198" width="50" height="6" rx="3" fill="hsl(0 0% 10%)" />
    </svg>
  );
}

// CONTACT: Person on a video call / reaching out
export function ContactIllustration() {
  return (
    <svg viewBox="0 0 300 180" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="ctSkin" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="hsl(30, 58%, 68%)" /><stop offset="1" stopColor="hsl(28, 52%, 58%)" />
        </linearGradient>
      </defs>
      {/* Video call screen */}
      <rect x="30" y="20" width="160" height="120" rx="10" fill="hsl(0 0% 6%)" stroke="hsl(142 80% 45% / 0.4)" strokeWidth="2" />
      <rect x="36" y="26" width="148" height="108" rx="7" fill="hsl(0 0% 4%)" />
      {/* Person on screen */}
      <ellipse cx="110" cy="65" rx="22" ry="24" fill="url(#ctSkin)" />
      <ellipse cx="110" cy="48" rx="22" ry="13" fill="hsl(14 35% 14%)" />
      <ellipse cx="102" cy="65" rx="3" ry="3.5" fill="hsl(0 0% 10%)" />
      <ellipse cx="118" cy="65" rx="3" ry="3.5" fill="hsl(0 0% 10%)" />
      <circle cx="103" cy="64" r="1" fill="white" />
      <circle cx="119" cy="64" r="1" fill="white" />
      <path d="M103 72 Q110 78 117 72" stroke="hsl(28 50% 40%)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <rect x="80" y="84" width="60" height="50" rx="8" fill="hsl(232 40% 26%)" />
      {/* Screen toolbar */}
      <circle cx="42" cy="132" r="5" fill="hsl(0 75% 55%)" fillOpacity="0.8" />
      <circle cx="58" cy="132" r="5" fill="hsl(142 80% 45%)" fillOpacity="0.8" />
      <circle cx="74" cy="132" r="5" fill="hsl(48 100% 55%)" fillOpacity="0.8" />
      {/* Status dot */}
      <circle cx="170" cy="30" r="5" fill="hsl(142 80% 45%)" />
      <text x="160" y="38" fontSize="6" fill="hsl(142 80% 45%)" fontFamily="Space Grotesk">LIVE</text>

      {/* Person viewing (right side) */}
      <rect x="218" y="110" width="54" height="60" rx="12" fill="hsl(142 35% 18%)" />
      <ellipse cx="245" cy="99" rx="22" ry="24" fill="url(#ctSkin)" />
      <ellipse cx="245" cy="80" rx="22" ry="13" fill="hsl(22 40% 18%)" />
      <rect x="223" y="80" width="8" height="16" rx="4" fill="hsl(22 40% 18%)" />
      <ellipse cx="237" cy="99" rx="3.5" ry="4" fill="hsl(0 0% 10%)" />
      <ellipse cx="253" cy="99" rx="3.5" ry="4" fill="hsl(0 0% 10%)" />
      <circle cx="238" cy="98" r="1.2" fill="white" />
      <circle cx="254" cy="98" r="1.2" fill="white" />
      <path d="M237 107 Q245 113 253 107" stroke="hsl(28 50% 40%)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Waving arm */}
      <rect x="260" y="120" width="34" height="12" rx="6" fill="url(#ctSkin)" style={{ transform: "rotate(-30deg)", transformOrigin: "260px 126px" }} />

      {/* Chat bubble */}
      <rect x="198" y="48" width="88" height="34" rx="10" fill="hsl(0 0% 8%)" stroke="hsl(142 80% 45% / 0.35)" strokeWidth="1.5" />
      <text x="242" y="62" textAnchor="middle" fontSize="7" fill="hsl(142 80% 45%)" fontFamily="Space Grotesk" fontWeight="700">Hey! Let's grow</text>
      <text x="242" y="74" textAnchor="middle" fontSize="7" fill="hsl(142 80% 45%)" fontFamily="Space Grotesk" fontWeight="700">your brand 🚀</text>
      <polygon points="215,82 208,92 230,82" fill="hsl(0 0% 8%)" stroke="hsl(142 80% 45% / 0.35)" strokeWidth="1.5" />
    </svg>
  );
}

// PROCESS: Team at a whiteboard planning
export function ProcessIllustration() {
  return (
    <svg viewBox="0 0 480 120" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="prSkin" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="hsl(30, 58%, 68%)" /><stop offset="1" stopColor="hsl(28, 52%, 58%)" />
        </linearGradient>
      </defs>
      {/* Timeline line */}
      <line x1="40" y1="60" x2="440" y2="60" stroke="hsl(142 80% 45%)" strokeWidth="2" strokeDasharray="6 4" strokeOpacity="0.5" />
      {/* Steps */}
      {[
        { x: 60, label: "Strategy", icon: "🎯", color: "hsl(142 80% 45%)" },
        { x: 180, label: "Build", icon: "🛠", color: "hsl(142 80% 45%)" },
        { x: 300, label: "Launch", icon: "🚀", color: "hsl(142 80% 45%)" },
        { x: 420, label: "Scale", icon: "📈", color: "hsl(142 90% 55%)" },
      ].map((step, i) => (
        <g key={i}>
          {/* Node circle */}
          <circle cx={step.x} cy="60" r="24" fill="hsl(0 0% 7%)" stroke={step.color} strokeWidth="2" />
          <text x={step.x} y="67" textAnchor="middle" fontSize="20">{step.icon}</text>
          {/* Label */}
          <text x={step.x} y="100" textAnchor="middle" fontSize="10" fill="hsl(0 0% 75%)" fontFamily="Space Grotesk" fontWeight="600">{step.label}</text>
          {/* Number */}
          <text x={step.x - 20} y="42" textAnchor="middle" fontSize="9" fill={step.color} fontFamily="Space Grotesk" fontWeight="700">0{i + 1}</text>
        </g>
      ))}
      {/* Connecting arrows */}
      {[117, 237, 357].map((x, i) => (
        <g key={i}>
          <polygon points={`${x},57 ${x+6},60 ${x},63`} fill="hsl(142 80% 45%)" fillOpacity="0.5" />
        </g>
      ))}
    </svg>
  );
}
