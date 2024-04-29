import Encryption from '@/components/main/Encryption';
import Hero from '@/components/main/Hero';
import Projects from '@/components/main/Projects';
import Skills from '@/components/main/Skills';
import React from 'react';

const page = () => {
  return (
    <main className="h-full w-full">
        <div className="flex flex-col gap-20">
            <Hero/>
            <Skills/>
            <Encryption/>
            <Projects/> 
        </div>
    </main>
  )
}

export default page;