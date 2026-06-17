import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

export const Logo = ({className}:{className:string}) => {
  return (
   <Link href={"/"} className={cn("flex items-center justify-center gap-2 ",className)}>
    <LogoIcon className='size-7  md:size-8 rounded-md object-center'/>
    <span className='font-semibold text-md md:text-lg'>Paper Notes</span>
   </Link>
  )
}

export const LogoIcon = ({className}:{className:string})=> {
    return <img src="/app-logo.png" alt="logo_image" className={cn(className)} />
}

