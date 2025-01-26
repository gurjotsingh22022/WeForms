"use client"

import React from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'


interface props {
    children: any,
    className?: string,
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined,
    link?:string
    href?:string
}

const NavBtn = ({children, className, variant="default", link, href}: props) => {
    const router = useRouter();

    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
  return (
    <Button
          className={className}
          variant={variant}
          onClick={()=> {
            if(href)
            {
                router.push(href)
            }
            
            if(link)
            {
                handleScroll(link)
            }
          }}
        >
          {children}
        </Button>
  )
}

export default NavBtn