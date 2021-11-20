import { motion, Variants } from 'framer-motion'

import styles from './styles.module.scss'

const titleVariants: Variants = {
  initial: {
    y: 150,
    skewY: 7
  },
  animate: {
    y: 0,
    skewY: 0
  }
}

const transition = {
  ease: [0.13, 0.94, 0.33, 1.05],
  duration: 1
}

export function Banner() {
  return (
    <main className={styles.box}>
      <motion.h2
        className={styles.name}
        initial={{ translateX: 100, opacity: 0 }}
        animate={{ translateX: 0, opacity: 1 }}
        transition={{ ...transition, delay: 1.6 }}
      >
        João Pedro Magalhães
      </motion.h2>
      <div className={styles.line}>
        <motion.span
          variants={titleVariants}
          initial="initial"
          animate="animate"
          transition={{ ...transition, delay: 0.6 }}
        >
          Front-End developer
        </motion.span>
      </div>
      <div className={styles.line}>
        <motion.span
          variants={titleVariants}
          initial="initial"
          animate="animate"
          transition={{ ...transition, delay: 0.7 }}
        >
          UI-UX enthusiastic
        </motion.span>
      </div>
      <div className={styles.line}>
        <motion.span
          variants={titleVariants}
          initial="initial"
          animate="animate"
          transition={{ ...transition, delay: 0.8 }}
        >
          & Gopher
        </motion.span>
      </div>
    </main>
  )
}
