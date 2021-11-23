import Image from 'next/image'

import { useMouse } from 'contexts'

import { Parallax } from 'components'

import styles from './styles.module.scss'

import config from 'config'

const projects = config.get('projects')

type Project = {
  id: number
  src: string
  link: string
  gridArea: string
}

export function Projects() {
  const { projectEnter, projectLeave } = useMouse()
  return (
    <>
      <section className={styles.box}>
        <Parallax offset={100}>
          <h2 id="projetos">PROJETOS</h2>
        </Parallax>

        <div className={styles.projectsBox}>
          {projects.map((project: Project) => (
            <Parallax key={project.id} gridArea={project.gridArea}>
              <a href={project.link} target="_blank" rel="noreferrer noopener">
                <Image
                  src={project.src}
                  alt=""
                  width={584}
                  height={405}
                  priority
                  onMouseEnter={projectEnter}
                  onMouseLeave={projectLeave}
                  quality={100}
                />
              </a>
            </Parallax>
          ))}
        </div>
      </section>
    </>
  )
}
