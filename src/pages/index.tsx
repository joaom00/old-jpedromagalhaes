import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import { HiOutlineExternalLink } from 'react-icons/hi'
import useMouse from '@react-hook/mouse-position'

import { Header } from 'components/Header'
import { Socials } from 'components/Socials'
import { Banner } from 'components/Banner'
import { Projects } from 'components/Projects'
import { OtherProjects } from 'components/OtherProjects'
import { Footer } from 'components/Footer'

import styles from './home.module.scss'

export default function Home() {
  const [cursorText, setCursorText] = useState('')
  const [imageSrc, setImageSrc] = useState('')
  const [cursorVariant, setCursorVariant] = useState('default')
  const [projectCursorVariant, setProjectCursorVariant] = useState('default')

  const refScrollContainer = useRef(null)
  const mouse = useMouse(refScrollContainer, {
    enterDelay: 100,
    leaveDelay: 100
  })

  let mouseXPosition = 0
  let mouseYPosition = 0

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY
  }

  const projectVariants: Variants = {
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: '16px',
      backgroundColor: '#14142b',
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: 'spring',
        mass: 0.6
      }
    },
    project: {
      opacity: 1,
      backgroundColor: '#fcfcfc',
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

  const projectEnter = useCallback(() => {
    setCursorText('VER PROJETO')
    setCursorVariant('project')
  }, [])

  const projectLeave = useCallback(() => {
    setCursorText('')
    setCursorVariant('default')
  }, [])

  const otherProjectEnter = useCallback((imageSrc: string) => {
    setImageSrc(imageSrc)
    setProjectCursorVariant('project')
  }, [])

  const otherProjectLeave = useCallback(() => {
    setProjectCursorVariant('default')
  }, [])

  return (
    <div ref={refScrollContainer}>
      <motion.div className={styles.circle} variants={projectVariants} animate={cursorVariant} transition={spring}>
        <span className={styles.cursorText}>
          {cursorText}
          {!!cursorText && <HiOutlineExternalLink color="#14142b" />}
        </span>
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
        <Image src={`/${imageSrc}.jpg`} width={218} height={151} quality={100} />
      </motion.div>

      <Header />
      <Banner />
      <Socials />
      <Projects mouseEnter={projectEnter} mouseLeave={projectLeave} />
      <OtherProjects mouseEnter={otherProjectEnter} mouseLeave={otherProjectLeave} />
      <Footer />
    </div>
  )
}
