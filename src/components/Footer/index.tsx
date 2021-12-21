import styles from './styles.module.scss'

export function Footer() {
  return (
    <footer className={styles.box}>
      <p>
        Desenvolvido por{' '}
        <a
          style={{ textDecoration: 'underline' }}
          href="https://github.com/joaom00"
          target="_blank"
          rel="noreferrer noopener"
        >
          @joaom00
        </a>
      </p>
    </footer>
  )
}
