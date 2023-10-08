import {
  type FC, type ReactElement,
  type PropsWithChildren,
  type SyntheticEvent,
  useState, useRef, useEffect, useCallback
} from 'react'
import { classNames } from '../../lib/classNames/classNames'
import { Portal } from '../Portal/Portal'
import cls from './Modal.module.scss'
import { useTheme } from 'app/providers/ThemeProvider'

type ModalProps = {
  className?: string
  isOpen: boolean
  onClose: () => void
} & PropsWithChildren

const ANIMATION_DELAY = 300

export const Modal: FC<ModalProps> = (props): ReactElement => {
  const { className = '', children, isOpen, onClose } = props
  const { theme } = useTheme()
  const [isClosing, setIsClosing] = useState<boolean>(false)
  const timerId = useRef<ReturnType<typeof setTimeout>>()

  const mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing
  }

  const onCloseHandler = useCallback((): void => {
    setIsClosing(true)
    timerId.current = setTimeout(() => {
      setIsClosing(false)
      onClose()
    }, ANIMATION_DELAY)
  },
  [onClose]
  )

  const onKeyDownHandler = useCallback((): void => {
    window.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onCloseHandler()
      }
    })
  }, [onCloseHandler])

  useEffect(() => {
    onKeyDownHandler()

    return () => {
      clearTimeout(timerId.current)
      window.removeEventListener('keydown', onKeyDownHandler)
    }
  }, [onCloseHandler, onKeyDownHandler])

  const onContentClick = (event: SyntheticEvent<HTMLDivElement>): void => { event.stopPropagation() }

  return (
    <Portal container={document.body}>
      <div className={classNames(cls.Modal, mods, [className, theme])}>
        <div className={cls.overlay} onClick={onCloseHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
