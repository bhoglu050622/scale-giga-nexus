import { useState } from "react";

export default function ROICalculator() {
  const [revenue, setRevenue] = useState(500000);
  const [conversionRate, setConversionRate] = useState(2);
  const [aov, setAov] = useState(250);

  const potentialGain = revenue * 12 * (3.4 - 1) * (conversionRate / 100);
  const formattedGain = (potentialGain / 1000000).toFixed(1);

  return (
    <div className="p-8 md:p-12 bg-card border border-border" style={{ borderRadius: "8px" }}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div>
          <label className="block text-xs font-body font-semibold text-muted-foreground uppercase mb-3" style={{ letterSpacing: "2px" }}>
            Current Monthly Revenue
          </label>
          <input
            type="number"
            value={revenue}
            onChange={(e) => setRevenue(Number(e.target.value))}
            className="w-full px-4 py-3 bg-muted border border-border text-foreground text-sm font-body focus:outline-none focus:border-primary/50 transition-colors"
            style={{ borderRadius: "2px" }}
          />
        </div>
        <div>
          <label className="block text-xs font-body font-semibold text-muted-foreground uppercase mb-3" style={{ letterSpacing: "2px" }}>
            Current Conversion Rate ({conversionRate}%)
          </label>
          <input
            type="range"
            min="0.5"
            max="10"
            step="0.1"
            value={conversionRate}
            onChange={(e) => setConversionRate(Number(e.target.value))}
            className="w-full h-2 bg-muted rounded-full appearance-none cursor-pointer accent-primary mt-4"
          />
        </div>
        <div>
          <label className="block text-xs font-body font-semibold text-muted-foreground uppercase mb-3" style={{ letterSpacing: "2px" }}>
            Average Order Value
          </label>
          <input
            type="number"
            value={aov}
            onChange={(e) => setAov(Number(e.target.value))}
            className="w-full px-4 py-3 bg-muted border border-border text-foreground text-sm font-body focus:outline-none focus:border-primary/50 transition-colors"
            style={{ borderRadius: "2px" }}
          />
        </div>
      </div>

      <div className="text-center">
        <p className="text-muted-foreground text-sm mb-2 font-body">Potential Annual Gain</p>
        <p className="font-display text-5xl md:text-7xl text-primary">${formattedGain}M</p>
        <p className="text-muted-foreground text-xs mt-4 font-body">
          Based on our 340% average ROI across 47 luxury brands.
        </p>
      </div>
    </div>
  );
}
