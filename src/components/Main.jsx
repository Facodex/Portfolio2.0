import React from 'react'
import { About } from './About'
import { Experience } from './Experience'
import { FrontPage } from './FrontPage'
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

        <footer style={{width:'100%', height:'100px', backgroundColor:'white', marginTop:'20px',}}></footer>
    </div>
  )
}
