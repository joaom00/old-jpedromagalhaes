import { Parallax } from 'components/Parallax'

import styles from './styles.module.scss'

const projects = [
  {
    id: 1,
    name: 'BEATMAKER',
    src: 'beatmaker',
    link: 'https://github.com/joaom00/beatmaker'
  },
  {
    id: 2,
    name: 'MEMEMAKER',
    src: 'mememaker',
    link: 'https://github.com/joaom00/mememaker'
  },
  {
    id: 3,
    name: 'PROFFY',
    src: 'proffy',
    link: 'https://github.com/joaom00/proffy'
  },
  {
    id: 4,
    name: 'ECOLETA',
    src: 'ecoleta',
    link: 'https://github.com/joaom00/ecoleta'
  },
  {
    id: 5,
    name: 'PODCASTR',
    src: 'podcastr',
    link: 'https://github.com/joaom00/podcastr'
  },
  {
    id: 6,
    name: 'HAPPY',
    src: 'happy',
    link: 'https://github.com/joaom00/happy'
  },
  {
    id: 7,
    name: 'MOVEIT',
    src: 'moveit',
    link: 'https://github.com/joaom00/moveit-react'
  },
  {
    id: 8,
    name: 'ALURAKUT',
    src: 'alurakut',
    link: 'https://github.com/joaom00/alurakut'
  }
]

export function OtherProjects({ mouseEnter, mouseLeave }) {
  return (
    <section className={styles.box}>
      <Parallax offset={100}>
        <h2>OUTROS PROJETOS</h2>
      </Parallax>

      <ul className={styles.projectsList}>
        {projects.map((project) => (
          <li
            key={project.id}
            className={styles.project}
            onMouseEnter={() => mouseEnter(project.src)}
            onMouseLeave={mouseLeave}
          >
            <a href={project.link} target="_blank" rel="noreferrer noopener">
              <p>{project.name}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
