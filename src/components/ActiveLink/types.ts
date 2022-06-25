import { LinkProps } from 'next/link'
import { ReactElement } from 'react'

export interface ActiveLinkProps extends LinkProps {
  children: ReactElement
  shouldMatchExactHref?: boolean
}
