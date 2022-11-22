import React from 'react';
import { useTranslation } from 'react-i18next';
import linkedin from '../assets/icons/linkedin-icon.png';
import github from '../assets/icons/github-icon.png';
import gmail from '../assets/icons/gmail-logo-24.png';

export const Contact = () => {

    // t is the text translation and i18n is to buttons change language
    const [t, i18n] = useTranslation("global");

    return (
        <section id='contact' className='contactSection'>
            <h1 className='titlesSections'>{t("Contact.title")}</h1>
            <p className='pContact'> {t("Contact.contact-p")}
                <br /> <br />
                <strong style={{color:'#555'}}>facu.cr9@gmail.com</strong>
            </p>
            <button className='btnContact' >
                <a href="mailto:facu.cr9@gmail.com">
                    {t("Contact.btnContact")}
                </a>
            </button>


            <div className='socialLinks'>
                <a href="https://www.linkedin.com/in/facundo-benitez-facodex/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} />
                </a>
                <a href="mailto:facu.cr9@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src={gmail} />
                </a>
                <a href="https://github.com/Facodex" target="_blank" rel="noopener noreferrer">
                    <img src={github} />
                </a>
            </div>
        </section>
    )
}
