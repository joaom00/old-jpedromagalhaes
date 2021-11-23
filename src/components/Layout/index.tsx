import Image from 'next/image'
import { AnimateSharedLayout, motion, Variants } from 'framer-motion'

import { useMouse } from 'contexts'
import { Header, Footer, Socials } from 'components'

import styles from './styles.module.scss'

export function Layout({ children }: { children: React.ReactNode }) {
  const { ref, mouseXPosition, mouseYPosition, cursorText, cursorVariant, projectCursorVariant, imageSrc } = useMouse()

  const projectVariants: Variants = {
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: '16px',
      backgroundColor: '#bca4ff',
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: 'spring',
        mass: 0.6
      }
    },
    project: {
      opacity: 1,
      backgroundColor: '#f6f6f6',
      color: '#14142b',
      height: 80,
      width: 80,
      fontSize: '18px',
      x: mouseXPosition - 32,
      y: mouseYPosition - 32
    }
  }

  const otherProjectVariants: Variants = {
    default: {
      opacity: 0,
      scale: 0,
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: 'linear'
      }
    },
    project: {
      opacity: 1,
      scale: 1,
      x: mouseXPosition - 109,
      y: mouseYPosition - 75
    }
  }

  const spring = {
    type: 'spring',
    stiffness: 500,
    damping: 28
  }

  return (
    <AnimateSharedLayout>
      <div ref={ref}>
        <motion.div className={styles.circle} variants={projectVariants} animate={cursorVariant} transition={spring}>
          <span className={styles.cursorText}>{cursorText}</span>
        </motion.div>

        <motion.div
          className={styles.project}
          variants={otherProjectVariants}
          animate={projectCursorVariant}
          transition={{
            ease: [0.13, 0.94, 0.33, 1.05],
            duration: 0.5
          }}
        >
          <Image priority src={`/${imageSrc}.jpg`} width={218} height={151} quality={100} alt="" />
        </motion.div>
        <Socials />
        <Header />
        {children}
        <Footer />
      </div>
    </AnimateSharedLayout>
  )
}
