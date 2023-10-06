import { type FC, type ReactNode, type ReactPortal } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  children: ReactNode
  container: Element | DocumentFragment
  key?: null | string
}

export const Portal: FC<PortalProps> = (props): ReactPortal => {
  const { children, container, key = null } = props

  return createPortal(children, container, key)
}
