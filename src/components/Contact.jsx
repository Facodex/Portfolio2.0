import React from 'react';
import linkedin from '../assets/icons/linkedin-icon.png';
import github from '../assets/icons/github-icon.png';
import gmail from '../assets/icons/gmail-logo-24.png';

export const Contact = () => {
    return (
        <section className='contactSection'>
            <h1 className='titlesSections'>Contact</h1>
            <p className='pContact'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Cumque sed, velit fugit eius
                facere assumenda quia adipisci voluptatum laboriosam nesciunt
                doloribus voluptates accusamus dolore ut? Voluptatem accusantium
                quos omnis in! <br /> <br />
                <strong style={{color:'#555'}}>facu.cr9@gmail.com</strong>
            </p>
            <button className='btnContact'>Contact me</button>

            <div className='socialLinks'>
                <a href="https://www.linkedin.com/in/facundo-benitez-facodex/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} />
                </a>
                <a href="https://github.com/Facodex" target="_blank" rel="noopener noreferrer">
                    <img src={gmail} />
                </a>
                <a href="https://github.com/Facodex" target="_blank" rel="noopener noreferrer">
                    <img src={github} />
                </a>
            </div>
        </section>
    )
}
