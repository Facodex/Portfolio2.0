import React, { useState } from 'react';
import menuMobile from '../assets/icons/menu-alt-right-regular-24.png'
import cross from '../assets/icons/x-regular-48.png';


export const MenuMobile = () => {
    const [menuDisplay, SetMenuDisplay] = useState('false');
    return (
        <section className='MenuMobile'>
            <div className='MenuMobileContainer'>
                <a href='/#' onClick={() => { SetMenuDisplay(!menuDisplay) }}>
                    <img src={menuDisplay ? cross : menuMobile}/>
                </a>
            </div>
            
            {
                menuDisplay && (
                    <div>
                        <p>hola</p>
                        <p>hola</p>
                        <p>hola</p>
                        <p>hola</p>
                        <p>hola</p>
                    </div>
                )
            }

        </section>
    )
}
