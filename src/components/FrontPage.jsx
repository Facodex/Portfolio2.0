import React from 'react';
import manLaptop from '../assets/images/dev.svg';
import { useTranslation } from 'react-i18next';

export const FrontPage = () => {
  // t is the text translation and i18n is to buttons change language
  const [t, i18n] = useTranslation("global");


  return (
    <section className='frontPage'>
        <div className='frontPageContent'>
            <h2>{t("FrontPage.regard")}</h2>
            <h1>Facundo Benitez</h1>
            <h2>{t("FrontPage.job")}</h2>
            <button className='btnContact'>{t("FrontPage.btnContact")}</button>
        </div>
        <img src={manLaptop} className='frontPageImg'/>
    </section>
  )
}
