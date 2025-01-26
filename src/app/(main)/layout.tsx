import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import React from 'react'

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <>
    <Navbar />
    <main className="container mx-auto w-[90vw] h-auto scroll-smooth">
    {children}
    </main>
    
    <Footer />
    </>
  )
}

export default layout