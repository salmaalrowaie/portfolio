import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { delay: i * 0.3, duration: 1.5, ease: "easeInOut" }, opacity: { delay: i * 0.3, duration: 0.2 } },
  }),
};

export const GearDoodle = ({ className = "", size = 80, color = "hsl(var(--eng-orange))" }: { className?: string; size?: number; color?: string }) => (
  <motion.svg width={size} height={size} viewBox="0 0 80 80" fill="none" className={className} initial="hidden" whileInView="visible" viewport={{ once: true }}>
    <motion.path
      d="M40 16 L43 24 L50 20 L48 28 L56 28 L50 33 L56 38 L48 37 L50 45 L43 40 L40 48 L37 40 L30 45 L32 37 L24 38 L30 33 L24 28 L32 28 L30 20 L37 24 Z"
      stroke={color} strokeWidth="1.5" variants={draw} custom={0}
    />
    <motion.circle cx="40" cy="32" r="6" stroke={color} strokeWidth="1.5" variants={draw} custom={1} />
    {/* Teeth marks */}
    <motion.path d="M40 10 L40 16" stroke={color} strokeWidth="1" variants={draw} custom={0.5} />
    <motion.path d="M55 15 L50 20" stroke={color} strokeWidth="1" variants={draw} custom={0.6} />
    <motion.path d="M60 32 L56 32" stroke={color} strokeWidth="1" variants={draw} custom={0.7} />
  </motion.svg>
);

export const CircuitDoodle = ({ className = "", size = 120, color = "hsl(var(--eng-magenta))" }: { className?: string; size?: number; color?: string }) => (
  <motion.svg width={size} height={size} viewBox="0 0 120 120" fill="none" className={className} initial="hidden" whileInView="visible" viewport={{ once: true }}>
    <motion.path d="M10 60 L30 60 L35 40 L50 80 L65 30 L80 70 L90 60 L110 60" stroke={color} strokeWidth="1.5" variants={draw} custom={0} />
    <motion.circle cx="10" cy="60" r="3" stroke={color} strokeWidth="1.5" variants={draw} custom={1} />
    <motion.circle cx="110" cy="60" r="3" stroke={color} strokeWidth="1.5" variants={draw} custom={1.2} />
    <motion.path d="M50 80 L50 100" stroke={color} strokeWidth="1" strokeDasharray="3 3" variants={draw} custom={1.4} />
    <motion.rect x="44" y="100" width="12" height="8" stroke={color} strokeWidth="1" variants={draw} custom={1.6} />
  </motion.svg>
);

export const BracketDoodle = ({ className = "", size = 60, color = "hsl(var(--eng-purple))" }: { className?: string; size?: number; color?: string }) => (
  <motion.svg width={size / 2} height={size} viewBox="0 0 30 60" fill="none" className={className} initial="hidden" whileInView="visible" viewport={{ once: true }}>
    <motion.path d="M25 5 L10 5 L10 25 L5 30 L10 35 L10 55 L25 55" stroke={color} strokeWidth="1.5" fill="none" variants={draw} custom={0} />
  </motion.svg>
);

export const CompassDoodle = ({ className = "", size = 100, color = "hsl(var(--eng-pink))" }: { className?: string; size?: number; color?: string }) => (
  <motion.svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} initial="hidden" whileInView="visible" viewport={{ once: true }}>
    <motion.circle cx="50" cy="50" r="35" stroke={color} strokeWidth="1" variants={draw} custom={0} />
    <motion.circle cx="50" cy="50" r="2" stroke={color} strokeWidth="1.5" variants={draw} custom={0.5} />
    <motion.path d="M50 15 L50 25" stroke={color} strokeWidth="1.5" variants={draw} custom={0.8} />
    <motion.path d="M50 75 L50 85" stroke={color} strokeWidth="1.5" variants={draw} custom={0.9} />
    <motion.path d="M15 50 L25 50" stroke={color} strokeWidth="1.5" variants={draw} custom={1.0} />
    <motion.path d="M75 50 L85 50" stroke={color} strokeWidth="1.5" variants={draw} custom={1.1} />
    {/* Needle */}
    <motion.path d="M50 50 L50 20" stroke={color} strokeWidth="2" variants={draw} custom={1.3} />
    <motion.path d="M50 50 L65 65" stroke={color} strokeWidth="1" strokeDasharray="3 3" variants={draw} custom={1.5} />
  </motion.svg>
);

export const DimensionDoodle = ({ className = "", width = 150, color = "hsl(var(--eng-yellow))" }: { className?: string; width?: number; color?: string }) => (
  <motion.svg width={width} height="30" viewBox="0 0 150 30" fill="none" className={className} initial="hidden" whileInView="visible" viewport={{ once: true }}>
    <motion.path d="M5 15 L145 15" stroke={color} strokeWidth="1" variants={draw} custom={0} />
    <motion.path d="M5 5 L5 25" stroke={color} strokeWidth="1.5" variants={draw} custom={0.3} />
    <motion.path d="M145 5 L145 25" stroke={color} strokeWidth="1.5" variants={draw} custom={0.3} />
    <motion.path d="M5 15 L15 10 M5 15 L15 20" stroke={color} strokeWidth="1" variants={draw} custom={0.6} />
    <motion.path d="M145 15 L135 10 M145 15 L135 20" stroke={color} strokeWidth="1" variants={draw} custom={0.6} />
  </motion.svg>
);

export const BoltDoodle = ({ className = "", size = 50, color = "hsl(var(--eng-orange))" }: { className?: string; size?: number; color?: string }) => (
  <motion.svg width={size} height={size} viewBox="0 0 50 50" fill="none" className={className} initial="hidden" whileInView="visible" viewport={{ once: true }}>
    <motion.circle cx="25" cy="25" r="12" stroke={color} strokeWidth="1.5" variants={draw} custom={0} />
    <motion.path d="M25 13 L25 37 M13 25 L37 25" stroke={color} strokeWidth="1" variants={draw} custom={0.5} />
    <motion.circle cx="25" cy="25" r="4" stroke={color} strokeWidth="1" variants={draw} custom={1} />
  </motion.svg>
);

export const SpringDoodle = ({ className = "", color = "hsl(var(--eng-magenta))" }: { className?: string; color?: string }) => (
  <motion.svg width="40" height="100" viewBox="0 0 40 100" fill="none" className={className} initial="hidden" whileInView="visible" viewport={{ once: true }}>
    <motion.path
      d="M20 5 L20 15 L5 20 L35 30 L5 40 L35 50 L5 60 L35 70 L5 80 L20 85 L20 95"
      stroke={color} strokeWidth="1.5" fill="none" variants={draw} custom={0}
    />
  </motion.svg>
);
