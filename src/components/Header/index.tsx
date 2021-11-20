import Link from 'next/link'
import { motion } from 'framer-motion'

import styles from './styles.module.scss'

export function Header() {
  return (
    <motion.header
      className={styles.headerBox}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.6, duration: 0.8 }}
    >
      <nav>
        <ul>
          <li>
            <a href="/">início</a>
          </li>
          <li>
            <a href="#projetos">projetos</a>
          </li>
          <li>
            <Link href="/sobre">sobre</Link>
          </li>
        </ul>
      </nav>
    </motion.header>
  )
}
