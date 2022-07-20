import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, Variants } from 'framer-motion'

import { useMouse } from 'contexts'
import { Parallax } from 'components'
import { HiOutlineExternalLink, FaGithub } from 'icons'

import styles from './styles.module.scss'

import config from 'config'

const projects = config.get('projects')

type Project = {
  id: number
  description: string
  imageSrc: string
  repoURL: string
  livePreviewURL: string
}

const variants: Variants = {
  show: {
    visibility: 'visible'
  },
  hide: {
    visibility: 'hidden'
  }
}

export function Projects() {
  const { projectEnter, projectLeave } = useMouse()
  const [projectId, setProjectId] = useState(0)

  return (
    <>
      <section className={`container ${styles.projectsContainer}`}>
        <Parallax offset={100}>
          <h2 id="projetos">PROJETOS</h2>
        </Parallax>

        <ul className={styles.projectsBox}>
          {projects.map((project: Project) => (
            <li key={project.id}>
              <motion.div
                layoutId={`project-image-${project.id}`}
                variants={variants}
                animate={!!projectId && projectId === project.id ? 'hide' : 'show'}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={project.imageSrc}
                  alt=""
                  width={584}
                  height={405}
                  priority
                  onMouseEnter={projectEnter}
                  onMouseLeave={projectLeave}
                  onClick={() => setProjectId(project.id)}
                  quality={100}
                />
              </motion.div>
            </li>
          ))}
        </ul>
        <AnimatePresence>
          {!!projectId && <Modal projectId={projectId} setProjectId={setProjectId} key="item" />}
        </AnimatePresence>
      </section>
    </>
  )
}

function Modal({ projectId, setProjectId }) {
  const project: Project = projects.find((project: Project) => project.id === projectId)
  const overlayEl = useRef(null)

  useEffect(() => {
    document.querySelector('body').classList.add('modalOpen')
    return () => document.querySelector('body').classList.remove('modalOpen')
  }, [])

  function handleOverleyClick(event: React.MouseEvent<HTMLDivElement>) {
    if (event.target === overlayEl.current) {
      setProjectId(0)
    }
  }

  return (
    <>
      <motion.div
        ref={overlayEl}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        className={styles.cardOverlay}
        onClick={handleOverleyClick}
      >
        <div className={styles.cardContentBox}>
          <motion.div initial={false} className={styles.cardImage} layoutId={`project-image-${project.id}`}>
            <Image src={project.imageSrc} alt="" width={584} height={405} quality={100} />
          </motion.div>
          <motion.div className={styles.cardContent}>
            <p>{project.description}</p>
            <a href={project.repoURL} target="_blank" rel="noreferrer noopener">
              GitHub <FaGithub color="#14142b" />
            </a>
            {project.livePreviewURL && (
              <a href={project.livePreviewURL} target="_blank" rel="noreferrer noopener">
                Site <HiOutlineExternalLink color="#14142b" />
              </a>
            )}
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
