import React from 'react'
import manLaptop from '../assets/images/dev.svg';

export const FrontPage = () => {
  return (
    <section className='frontPage'>
        <div className='frontPageContent'>
            <h2>Hello I'm</h2>
            <h1>Facundo Benitez</h1>
            <h2>Web Developer</h2>
            <button className='btnContact'>Contact me</button>
        </div>
        <img src={manLaptop} style={{width:'250px'}}/>
    </section>
  )
}
