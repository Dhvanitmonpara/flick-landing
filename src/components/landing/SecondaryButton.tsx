"use client"

import { cn } from '@/lib/utils'
import React from 'react'
import { AnimatedShinyText } from '../magicui/animated-shiny-text'
import { ArrowRightIcon } from 'lucide-react'

function SecondaryButton() {
  return (
    <div
      className={cn(
        "group rounded-full border border-sky-500/20 bg-sky-100 text-base text-zinc-950 transition-all ease-in hover:cursor-pointer hover:bg-sky-200 dark:border-sky-500/20 dark:bg-sky-950/60 dark:hover:bg-sky-900",
      )}
    >
      <AnimatedShinyText onClick={() => window.open("https://x.com/useFlick", "_blank")} className="inline-flex text-xs md:text-sm cursor-pointer items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
        <span>✨ Follow Flick on X</span>
        <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedShinyText>
    </div>
  )
}

export default SecondaryButton