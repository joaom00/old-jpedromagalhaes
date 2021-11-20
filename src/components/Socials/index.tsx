import { useState } from 'react'
import { motion, Variants } from 'framer-motion'
import { HiOutlineChevronDown } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

import styles from './styles.module.scss'

const variants: Variants = {
  active: {
    scale: [1, 0.85, 1],
    translateY: [0, 12, 0],
    rotate: 180,
    transition: {
      duration: 0.6,
      ease: 'easeInOut'
    }
  }
}

const github: Variants = {
  active: {
    translateY: [null, -60, -50],
    transition: {
      delay: 0.2
    }
  }
}

const linkedin: Variants = {
  active: {
    translateY: [null, -110, -100],
    transition: {
      delay: 0.4
    }
  }
}

const twitter: Variants = {
  active: {
    translateY: [null, -160, -150],
    transition: {
      delay: 0.6
    }
  }
}

export function Socials() {
  const [active, setIsActive] = useState(false)

  const handleToggleActive = () => setIsActive((oldState) => !oldState)

  return (
    <motion.div
      aria-hidden="true"
      className={styles.box}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.6, duration: 0.8 }}
    >
      <motion.div
        className={styles.addButton}
        animate={active ? 'active' : ''}
        initial={{ scale: 1, translateY: 0, rotate: 0 }}
        variants={variants}
        onClick={handleToggleActive}
      >
        <button>
          <HiOutlineChevronDown color="#fcfcfc" size={24} />
        </button>
      </motion.div>

      <div className={styles.socials}>
        <motion.a
          href="https://github.com/joaom00"
          target="_blank"
          rel="noreferrer noopener"
          className={`${styles.selector} ${styles.github}`}
          animate={active ? 'active' : ''}
          variants={github}
        >
          <FaGithub size={16} />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/joaom00"
          target="_blank"
          rel="noreferrer noopener"
          className={`${styles.selector} ${styles.linkedin}`}
          animate={active ? 'active' : ''}
          variants={linkedin}
        >
          <FaLinkedin size={16} />
        </motion.a>
        <motion.a
          href="https://twitter.com/joaom__00"
          target="_blank"
          rel="noreferrer noopener"
          className={`${styles.selector} ${styles.twitter}`}
          animate={active ? 'active' : ''}
          variants={twitter}
        >
          <FaTwitter size={16} />
        </motion.a>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="gooey-effect">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9"
              result="gooey-effect"
            />
            <feComposite in="SourceGraphic" in2="gooey-effect" operator="atop" />
          </filter>
        </defs>
      </svg>
    </motion.div>
  )
}
