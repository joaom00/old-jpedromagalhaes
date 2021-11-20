import Link from 'next/link'
import { motion } from 'framer-motion'

import styles from './styles.module.scss'
import { Parallax } from 'components/Parallax'

export function Footer() {
  return (
    <>
      <section className={styles.sectionBox}>
        <Parallax>
          <Link href="/sobre">
            <motion.span initial={{ color: '#e7e8ee' }} whileHover={{ color: '#14142b' }}>
              Saiba mais sobre mim
            </motion.span>
          </Link>
        </Parallax>
      </section>
      <footer className={styles.box}>
        <p>Feito com ❤ por João Pedro</p>
      </footer>
    </>
  )
}
