import { useMouse } from 'contexts'

import { Parallax } from 'components'

import styles from './styles.module.scss'

import config from 'config'

const projects = config.get('otherProjects')

type Project = {
  id: number
  name: string
  src: string
  link: string
}

export function OtherProjects() {
  const { otherProjectEnter, otherProjectLeave } = useMouse()
  return (
    <section className={styles.box}>
      <Parallax offset={100}>
        <h2>OUTROS PROJETOS</h2>
      </Parallax>

      <ul className={styles.projectsList}>
        {projects.map((project: Project) => (
          <li
            key={project.id}
            className={styles.project}
            onMouseEnter={() => otherProjectEnter(project.src)}
            onMouseLeave={otherProjectLeave}
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
