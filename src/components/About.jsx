import React from 'react';
import imgFacu from '../assets/images/facu.jpg'

export const About = () => {
    return (
        <section className='aboutContainer'>

            <h1 className='titleAbout'>About</h1>

            <div className='aboutContent'>

                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, <span>adipisicing elit</span>. Quidem vero numquam culpa
                        omnis distinctio suscipit placeat tempore ab? Quisquam dolorum delectus assumenda officiis doloremque provident labore sapiente
                        quidem itaque error. Lorem ipsum dolor, sit amet consectetur adipisicing elit. At cum, optio,
                        cumque illum ipsa illo a omnis voluptatibus <span>provident amet magnam</span> quibusdam nisi, minus fugit quam itaque. Corporis, maxime aliquam.
                    </p>
                    <button className='btnContact'>Download CV</button>
                </div>

                <img className='imgAbout' src={imgFacu} />



            </div>

        </section>
    )
}
