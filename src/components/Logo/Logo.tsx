import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { className } = props

  return (
    <div className={clsx('inline-flex items-center gap-3', className)}>
      <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-[#d0a46a]/30 bg-[#d0a46a]/10">
        <span className="absolute inset-[7px] rounded-full border border-[#d0a46a]/16" />
        <span className="font-display relative text-2xl font-semibold tracking-[0.26em] text-[#d0a46a]">
          C
        </span>
      </span>

      <span className="flex flex-col">
        <span className="text-[0.62rem] font-semibold uppercase tracking-[0.42em] text-[#d0a46a]">
          Coloss
        </span>
        <span className="font-display -mt-0.5 text-[1.55rem] leading-none tracking-[0.18em] text-current">
          Development
        </span>
      </span>
    </div>
  )
}
