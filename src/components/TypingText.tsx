import { motion } from "framer-motion";

interface TypingTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  once?: boolean;
}

const charVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.035, duration: 0.25, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const TypingText = ({ text, className = "", delay = 0, speed = 0.035, once = true }: TypingTextProps) => {
  const customVariants = {
    hidden: { opacity: 0, y: 6 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: delay + i * speed, duration: 0.25, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={customVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once }}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : undefined }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};
