import { motion } from "framer-motion";

interface EngineeringAccentProps {
  type: "gear" | "ring" | "crosshair" | "hammer";
  size?: number;
  className?: string;
  speed?: number;
}

const GearSVG = ({ size }: { size: number }) => {
  const teeth = 12;
  const outerR = size / 2;
  const innerR = outerR * 0.7;
  const holeR = outerR * 0.3;
  
  let path = "";
  for (let i = 0; i < teeth; i++) {
    const a1 = (i / teeth) * Math.PI * 2;
    const a2 = ((i + 0.35) / teeth) * Math.PI * 2;
    const a3 = ((i + 0.5) / teeth) * Math.PI * 2;
    const a4 = ((i + 0.85) / teeth) * Math.PI * 2;
    
    const cmd = i === 0 ? "M" : "L";
    path += `${cmd}${outerR + Math.cos(a1) * outerR} ${outerR + Math.sin(a1) * outerR} `;
    path += `L${outerR + Math.cos(a2) * outerR} ${outerR + Math.sin(a2) * outerR} `;
    path += `L${outerR + Math.cos(a3) * innerR} ${outerR + Math.sin(a3) * innerR} `;
    path += `L${outerR + Math.cos(a4) * innerR} ${outerR + Math.sin(a4) * innerR} `;
  }
  path += "Z";

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" stroke="currentColor" strokeWidth="0.5">
      <path d={path} />
      <circle cx={outerR} cy={outerR} r={holeR} />
      <circle cx={outerR} cy={outerR} r={holeR * 0.4} />
    </svg>
  );
};

const RingSVG = ({ size }: { size: number }) => {
  const c = size / 2;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" stroke="currentColor" strokeWidth="0.5">
      <circle cx={c} cy={c} r={c * 0.9} />
      <circle cx={c} cy={c} r={c * 0.7} />
      <circle cx={c} cy={c} r={c * 0.15} />
      {[0, 45, 90, 135].map(deg => {
        const rad = (deg * Math.PI) / 180;
        return (
          <line key={deg} x1={c + Math.cos(rad) * c * 0.15} y1={c + Math.sin(rad) * c * 0.15} x2={c + Math.cos(rad) * c * 0.7} y2={c + Math.sin(rad) * c * 0.7} />
        );
      })}
    </svg>
  );
};

const CrosshairSVG = ({ size }: { size: number }) => {
  const c = size / 2;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" stroke="currentColor" strokeWidth="0.5">
      <circle cx={c} cy={c} r={c * 0.8} />
      <circle cx={c} cy={c} r={c * 0.4} />
      <line x1={c} y1={0} x2={c} y2={size} />
      <line x1={0} y1={c} x2={size} y2={c} />
    </svg>
  );
};

const HammerSVG = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
    {/* Simplified hammer shape */}
    <rect x="10.5" y="2" width="3" height="8" rx="0.5" />
    <rect x="6" y="2" width="12" height="4" rx="0.5" />
    <line x1="12" y1="10" x2="12" y2="22" />
  </svg>
);

export const EngineeringAccent = ({ type, size = 100, className = "", speed = 60 }: EngineeringAccentProps) => {
  const shouldRotate = type === "gear" || type === "ring";

  return (
    <motion.div
      className={`pointer-events-none text-foreground ${className}`}
      animate={shouldRotate ? { rotate: 360 } : undefined}
      transition={shouldRotate ? { duration: speed, repeat: Infinity, ease: "linear" } : undefined}
    >
      {type === "gear" && <GearSVG size={size} />}
      {type === "ring" && <RingSVG size={size} />}
      {type === "crosshair" && <CrosshairSVG size={size} />}
      {type === "hammer" && <HammerSVG size={size} />}
    </motion.div>
  );
};
