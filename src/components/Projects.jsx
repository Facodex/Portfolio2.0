import React from 'react';
import appPelis from '../assets/images/img-app-pelis.png';
import github from '../assets/icons/github-icon.png';

export const Projects = () => {
  return (
    <section id='projects' className='projectsSection'>
      <h1 className='titlesSections'>Projects</h1>
      <div className='containerCardsProjects'>


        <div className='itemProject'>
          <img src={appPelis} className='imgProject' />
          <h3>Aplicacion de peliculas</h3>
          <p> HTML - CSS - ReactJS </p>  
          <a href="/#">Ver detalle</a>
        </div>


        <div className='itemProject'></div>
        <div className='itemProject'></div>
        <div className='itemProject'></div>
        <div className='itemProject'></div>
      </div>

    </section>
  )
}
