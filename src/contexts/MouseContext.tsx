import { createContext, MutableRefObject, useRef, useCallback, useState, useContext } from 'react'
import useMousePosition from '@react-hook/mouse-position'

type MouseProviderProps = {
  children: React.ReactNode
}

type MouseContextData = {
  ref: MutableRefObject<HTMLDivElement>
  mouseXPosition: number
  mouseYPosition: number
  cursorText: string
  cursorVariant: string
  projectCursorVariant: string
  imageSrc: string
  projectEnter: () => void
  projectLeave: () => void
  otherProjectEnter: (imageSrc: string) => void
  otherProjectLeave: () => void
}

const MouseContext = createContext<MouseContextData | undefined>(undefined)

export function MouseProvider({ children }: MouseProviderProps) {
  const [cursorText, setCursorText] = useState('')
  const [imageSrc, setImageSrc] = useState('')
  const [cursorVariant, setCursorVariant] = useState('default')
  const [projectCursorVariant, setProjectCursorVariant] = useState('default')
  const refContainer = useRef<HTMLDivElement>(null)

  const mouse = useMousePosition(refContainer, {
    enterDelay: 100,
    leaveDelay: 100
  })

  let mouseXPosition = 0
  let mouseYPosition = 0

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY
  }

  const projectEnter = useCallback(() => {
    setCursorText('VER PROJETO')
    setCursorVariant('project')
  }, [])

  const projectLeave = useCallback(() => {
    setCursorText('')
    setCursorVariant('default')
  }, [])

  const otherProjectEnter = useCallback((imageSrc: string) => {
    setImageSrc(imageSrc)
    setProjectCursorVariant('project')
  }, [])

  const otherProjectLeave = useCallback(() => {
    setProjectCursorVariant('default')
  }, [])

  return (
    <MouseContext.Provider
      value={{
        ref: refContainer,
        mouseXPosition,
        mouseYPosition,
        cursorText,
        cursorVariant,
        projectCursorVariant,
        imageSrc,
        projectEnter,
        projectLeave,
        otherProjectEnter,
        otherProjectLeave
      }}
    >
      {children}
    </MouseContext.Provider>
  )
}

export function useMouse() {
  const context = useContext(MouseContext)
  if (context === undefined) {
    throw new Error('useMouse must be used within a MouseProvider')
  }
  return context
}
