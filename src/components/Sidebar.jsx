import React from 'react'
import devices from '../assets/images/devices.svg';
import { NavSocialLinks } from './NavSocialLinks';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import spain from '../assets/icons/spain-svgrepo-com.svg';
import usa from '../assets/icons/united-states-svgrepo-com.svg';

export const Sidebar = () => {

  const [t, i18n] = useTranslation("global");

  return (
    <aside className='sidebar'>
      <img src={devices} className={'sidebarImg'} />

      <ul>
        <li><Link to='about' spy={true} smooth={true} offset={50} duration={500}>{t("Sidebar.about")}</Link></li>
        <li><Link to='skills' spy={true} smooth={true} offset={50} duration={500}>{t("Sidebar.skills")}</Link></li>
        <li><Link to='experience' spy={true} smooth={true} offset={50} duration={500}>{t("Sidebar.experience")}</Link></li>
        <li><Link to='projects' spy={true} smooth={true} offset={50} duration={500}>{t("Sidebar.projects")}</Link></li>
        <li><Link to='contact' spy={true} smooth={true} offset={50} duration={500}>{t("Sidebar.contact")}</Link></li>
      </ul>

      <NavSocialLinks />

      <div>
        <img className='imgLanguages' onClick={() => i18n.changeLanguage('en')} src={usa} />
        <img className='imgLanguages' onClick={() => i18n.changeLanguage('es')} src={spain} />
      </div>

    </aside>
  )
}
