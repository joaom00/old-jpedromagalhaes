import Image from 'next/image'

import { Parallax } from 'components/Parallax'

import styles from './styles.module.scss'

const projects = [
  {
    id: 1,
    src: '/dogs.jpg',
    link: 'https://github.com/joaom00/dogs',
    gridArea: 'project1'
  },
  {
    id: 2,
    src: '/moveit.jpg',
    link: 'https://github.com/joaom00/moveit',
    gridArea: 'project2'
  },
  {
    id: 3,
    src: '/50p50d.jpg',
    link: 'https://github.com/joaom00/50Projects50Days',
    gridArea: 'project3'
  },
  {
    id: 4,
    src: '/rock-paper-scissors.jpg',
    link: 'https://github.com/joaom00/rock-paper-scissors',
    gridArea: 'project4'
  }
]

export function Projects({ mouseEnter, mouseLeave }) {
  return (
    <>
      <section className={styles.box}>
        <Parallax offset={100}>
          <h2 id="projetos">PROJETOS</h2>
        </Parallax>

        <div className={styles.projectsBox}>
          {projects.map((project) => (
            <Parallax key={project.id} gridArea={project.gridArea}>
              <a href={project.link} target="_blank" rel="noreferrer noopener">
                <Image
                  src={project.src}
                  width={584}
                  height={405}
                  onMouseEnter={mouseEnter}
                  onMouseLeave={mouseLeave}
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
