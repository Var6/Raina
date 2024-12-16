import { cn } from '@/lib/utils'
import React from 'react'

const Textfixer = ({text,place}) => {
  return (
    <div className={cn('relative text-transparent w-full bg-clip-text text-xl bold bg-gradient-to-r  from-[#076EFF] via-[#4FABFF] to-[#076EFF] box-content font-extrabold select-none'
    ,place||'px-3')}>
      {text}
    </div>
  )
}

export default Textfixer
