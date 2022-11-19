import React from 'react';
import linkedin from '../assets/icons/linkedin-icon.png';
import github from '../assets/icons/github-icon.png';

export const NavSocialLinks = () => {
  return (
    <div className='NavSocialLinks'>
        <a href="https://www.linkedin.com/in/facundo-benitez-facodex/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin}/>
        </a>
        <a href="https://github.com/Facodex" target="_blank" rel="noopener noreferrer">
            <img src={github} />
        </a>   
    </div>
  )
}
