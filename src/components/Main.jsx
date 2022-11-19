import React from 'react'
import { About } from './About'
import { FrontPage } from './FrontPage'
import { ScrollDown } from './ScrollDown'

export const Main = () => {
  return (
    <div className='mainSection'>
        <FrontPage/>

        <ScrollDown/>

        <About/>
    </div>
  )
}
