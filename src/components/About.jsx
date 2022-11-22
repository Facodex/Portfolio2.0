import React from 'react';
import imgFacu from '../assets/images/facu.jpg';
import { useTranslation } from 'react-i18next';
import pdf from '../assets/documents/FacundoBenitezES.pdf'

export const About = () => {

    // t is the text translation and i18n is to buttons change language
    const [t, i18n] = useTranslation("global");

    return (
        <section id='about' className='aboutContainer'>

            <h1 className='titlesSections'>{t("About.title")}</h1>

            <div className='aboutContent'>

                <div className='aboutText'>
                    <p>{t("About.p-one")}</p>
                    <p>{t("About.p-two")}</p>
                    <button className='btnContact'>
                        <a href={pdf} download='FacundoBenitezES.pdf' target="_blank" rel="noopener noreferrer">
                            {t("About.btnDownload")}
                        </a>
                    </button>    
                </div>

                <img className='imgAbout' src={imgFacu} />

            </div>

        </section>
    )
}
