import React from 'react'
import { FrontPage } from './FrontPage'
import { ScrollDown } from './ScrollDown'

export const Main = () => {
  return (
    <div className='mainSection'>
        <FrontPage/>

        <ScrollDown/>
    </div>
  )
}
