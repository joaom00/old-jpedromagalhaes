import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

import styles from './styles.module.scss'

export function Header() {
  const router = useRouter()
  return (
    <motion.header
      className={`container ${styles.headerContainer}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.6, duration: 0.8 }}
    >
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a className={router.pathname === '/' ? styles.active : ''}>INÍCIO</a>
            </Link>
          </li>
          <li>
            <Link href="/#projetos">
              <a>PROJETOS</a>
            </Link>
          </li>
          <li>
            <Link href="/sobre">
              <a className={router.pathname === '/sobre' ? styles.active : ''}>SOBRE MIM</a>
            </Link>
          </li>
        </ul>
      </nav>
    </motion.header>
  )
}
