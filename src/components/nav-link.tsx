import { ComponentProps } from 'react'

export function NavLink(props: ComponentProps<'a'>) {
  return <a {...props} className="font-medium text-sm text-zinc-300"></a>
}
