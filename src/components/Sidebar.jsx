import React from 'react'
import devices from '../assets/images/devices.svg';
import { NavSocialLinks } from './NavSocialLinks';

export const Sidebar = () => {
  return (
    <aside className='sidebar'>
        <img src={devices} className={'sidebarImg'}/>
        <ul>
            <li>HOLA</li>
            <li>HOLA</li>
            <li>HOLA</li>
            <li>HOLA</li>
            <li>HOLA</li>
        </ul>
        <NavSocialLinks/>
    </aside>
  )
}
