import { Parallax } from 'components'
import { motion, Variants } from 'framer-motion'

import styles from './styles.module.scss'

import config from 'config'

const tools = config.get('tools')
const feTools = config.get('feTools')

type Tool = {
  id: number
  label: string
  value: string
}

type Track = {
  title: string
  artist: string
  songUrl: string
}

type AboutProps = {
  nowPlaying: {
    album: string
    artist: string
    isPlaying: boolean
    songUrl: string
    title: string
  }
  topTracks: Track[]
}

const container: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.3
    }
  }
}

const item: Variants = {
  animate: {
    scaleY: [0.3, 1, 0.5, 0.75, 0.6, 0.2],
    transition: {
      duration: 1.4,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse'
    }
  }
}

export function About({ nowPlaying, topTracks }: AboutProps) {
  return (
    <section className={styles.box}>
      <span className={styles.subtitle}>algumas palavras sobre mim</span>
      <p className={styles.description}>
        Desenvolvedor Front End que gosta de UI/UX design e às vezes brincar um pouco no backend, principalmente com Go.
        Além de, desenvolver e contribuir em projetos, vou para a academia, ouço música enquanto estou codando, assisto
        séries, animes e algumas lives de código.
      </p>

      <Parallax>
        <div className={styles.lists}>
          <div className={styles.left}>
            <div>
              <h3>Ferramentas</h3>
              <ToolsList />
            </div>
            <div className={styles.feTools}>
              <h3>Ferramentas FE</h3>
              <FEToolsList />
            </div>
          </div>

          <div className={styles.right}>
            <div>
              <div className={styles.listeningHeading}>
                <h3>Ouvindo</h3>
                {nowPlaying?.isPlaying && (
                  <motion.div className={styles.icon} variants={container} animate="animate">
                    <motion.span variants={item} />
                    <motion.span variants={item} />
                    <motion.span variants={item} />
                  </motion.div>
                )}
              </div>
              <div className={styles.spotifyBox}>
                <a href={nowPlaying?.songUrl} target="_blank" rel="noreferrer noopener">
                  <img src="/spotify.svg" alt="" />
                </a>
                {nowPlaying?.isPlaying ? (
                  <>
                    <p>{nowPlaying?.title}</p>
                    <span>{nowPlaying?.artist}</span>
                  </>
                ) : (
                  <p>Não está tocando</p>
                )}
              </div>
            </div>
            <div className={styles.topTracks}>
              <h3>Mais ouvidas</h3>
              <TopTracks topTracks={topTracks} />
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  )
}

function ToolsList() {
  return (
    <ul>
      {tools.map((tool: Tool) => (
        <li key={tool.id}>
          <span>{tool.label}</span>
          <p>{tool.value}</p>
        </li>
      ))}
    </ul>
  )
}

function FEToolsList() {
  return (
    <ul>
      {feTools.map((tool: Tool) => (
        <li key={tool.id}>
          <span>{tool.label}</span>
          <p>{tool.value}</p>
        </li>
      ))}
    </ul>
  )
}

function TopTracks({ topTracks }: { topTracks: Track[] }) {
  return (
    <ul>
      {topTracks.map((track, index) => (
        <li key={`${index} - ${track.title}`}>
          <a href={track.songUrl} target="_blank" rel="noreferrer noopener">
            <span>{track.artist}</span>
            <p>{track.title}</p>
          </a>
        </li>
      ))}
    </ul>
  )
}
