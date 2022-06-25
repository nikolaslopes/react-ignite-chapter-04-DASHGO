import Link from 'next/link'
import { useRouter } from 'next/router'
import { cloneElement } from 'react'
import { ActiveLinkProps } from './types'

export function ActiveLink({
  children,
  shouldMatchExactHref = false,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter()

  let isActive = false

  if (shouldMatchExactHref && asPath === rest.href) {
    isActive = true
  }

  if (!shouldMatchExactHref && asPath.startsWith(String(rest.href))) {
    isActive = true
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.50',
      })}
    </Link>
  )
}
