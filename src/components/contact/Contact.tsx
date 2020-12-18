import React from 'react';
import { useTranslation } from 'react-i18next';
import IconRetour from '../iconRetour/IconRetour';
import './ContactDesktop.css';
import './ContactMobile.css';
import './ContactTablet.css';

const Contact = () => {
  const [t] = useTranslation('translate');
  return (
  <div id="contact">
    <div id="titre-contact">{t('contact.titre', {framework:'React'})}</div>
    <div id="text-contact">
    {t('contact.text', {framework:'React'})} &nbsp;<a href="mailto:julien.rivat@jumel-consulting.fr">{t('contact.mail', {framework:'React'})}</a>
    </div>
    <IconRetour />
  </div>
  )
}

export default Contact;