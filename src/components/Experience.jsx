import React from 'react';
import { useTranslation } from 'react-i18next';

export const Experience = () => {

    // t is the text translation and i18n is to buttons change language
    const [t, i18n] = useTranslation("global");

    return (
        <section id='experience' className='experienceContainer'>

            <h1 className='titlesSections'>{t("Experience.title")}</h1>

            <div className='circleContainer'>
                <div className="circle"></div>
            </div>

            <div className='experienceRight'>
                <div className='experienceItemRight'>
                    <h1 className='titleExperience'>{t("Experience.experience-one")}</h1>
                    
                    <ul className='pExperience'>
                        <h2>Frontend</h2>
                        <li>{t("Experience.experience-li-one")}</li>
                        <li>{t("Experience.experience-li-two")}</li>
                        <li>{t("Experience.experience-li-three")}</li> 
                        <li>{t("Experience.experience-li-four")}</li>
                    </ul>
                    <ul className='pExperience'> 
                        <h2>Full Stack</h2>
                        <li>{t("Experience.experience-li-five")}</li>
                        <li>{t("Experience.experience-li-six")}</li>
                    </ul>
                    
                </div>
            </div>

            <div className='circleContainer'>
                <div className="circleSimple"></div>
            </div>

            <div className='.experienceLeft'>
                <div className='experienceItemLeft'>
                    <h1 className='titleExperience'>{t("Experience.experience-two")}</h1>
                    <ul className='pExperience'>
                        <h2>{t("Experience.experience-company")}</h2>
                        <p>{t("Experience.experience-p")}</p>
                    </ul>
                </div>
            </div>


        </section>
    )
}
