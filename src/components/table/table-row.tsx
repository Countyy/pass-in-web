import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export function TableCell({ className, ...props }: ComponentProps<'tr'>) {
  return <tr className={twMerge("py-3 px-4 text-sm text-zinc-300", className)} {...props} />
}
