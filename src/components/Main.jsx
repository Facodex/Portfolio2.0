import React from 'react'
import { About } from './About'
import { Contact } from './Contact'
import { Experience } from './Experience'
import { Footer } from './Footer'
import { FrontPage } from './FrontPage'
import { Projects } from './Projects'
import { ScrollDown } from './ScrollDown'
import { Skills } from './Skills'

export const Main = () => {
  return (
    <div className='mainSection'>
        <FrontPage/>

        <ScrollDown/>

        <About/>

        <Skills/>

        <Experience/>

        <Projects/>

        <Contact/>

        <Footer/>
    </div>
  )
}
