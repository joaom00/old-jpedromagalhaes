import Link from 'next/link'
import { motion } from 'framer-motion'

import { Parallax, Banner, Projects, OtherProjects } from 'components'

import styles from './styles.module.scss'

export function Home() {
  return (
    <>
      <Banner />
      <Projects />
      <OtherProjects />
      <section className={styles.sectionBox}>
        <Parallax>
          <Link href="/sobre" passHref>
            <motion.a initial={{ color: '#e7e8ee' }} whileHover={{ color: '#14142b' }}>
              Saiba mais sobre mim
            </motion.a>
          </Link>
        </Parallax>
      </section>
    </>
  )
}
