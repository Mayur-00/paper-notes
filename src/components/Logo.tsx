import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

export const Logo = ({className}:{className:string}) => {
  return (
   <Link href={"/"} className={cn("flex items-center gap-2 ",className)}>
    <LogoIcon className='size-8 rounded-md object-center'/>
    <h3 className='font-semibold text-lg'>Paper Notes</h3>
   </Link>
  )
}

export const LogoIcon = ({className}:{className:string})=> {
    return <img src="/app-logo.png" alt="logo_image" className={cn(className)} />
}

