import { motion, Variants } from "framer-motion";

const banner: Variants = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni: Variants = {
  initial: { y: 100 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.8,
    },
  },
};

export function AnimatedLetter({ title }) {
  return (
    <motion.span variants={banner} initial="initial" animate="animate">
      {[...title].map((letter, i) => (
        <motion.span key={i} variants={letterAni}>
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
}
