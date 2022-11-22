import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import menuMobile from '../assets/icons/menu-alt-right-regular-24.png';
import cross from '../assets/icons/x-regular-48.png';


export const MenuMobile = () => {

    const [menuDisplay, SetMenuDisplay] = useState(false);
    const [t, i18n] = useTranslation("global");

    return (
        <section className='MenuMobile'>
            <div className='MenuMobileContainer'>
                <a href='/#' onClick={() => { SetMenuDisplay(!menuDisplay) }}>
                    <img src={menuDisplay ? cross : menuMobile} />
                </a>
            </div>

            {
                menuDisplay && (
                    <div>
                        <p><Link onClick={() => { SetMenuDisplay(!menuDisplay) }} to='about' spy={true} smooth={true} offset={50} duration={500}>{t("Sidebar.about")}</Link></p>
                        <p><Link onClick={() => { SetMenuDisplay(!menuDisplay) }} to='skills' spy={true} smooth={true} offset={50} duration={500}>{t("Sidebar.skills")}</Link></p>
                        <p><Link onClick={() => { SetMenuDisplay(!menuDisplay) }} to='experience' spy={true} smooth={true} offset={50} duration={500}>{t("Sidebar.experience")}</Link></p>
                        <p><Link onClick={() => { SetMenuDisplay(!menuDisplay) }} to='projects' spy={true} smooth={true} offset={50} duration={500}>{t("Sidebar.projects")}</Link></p>
                        <p><Link onClick={() => { SetMenuDisplay(!menuDisplay) }} to='contact' spy={true} smooth={true} offset={50} duration={500}>{t("Sidebar.contact")}</Link></p>
                    </div>
                )
            }

        </section>
    )
}
