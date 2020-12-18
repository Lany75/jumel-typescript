import React from 'react';
import { useTranslation } from 'react-i18next';
import MentionsLegales from '../mentionsLegales/MentionsLegales';
import Thanks from '../thanks/Thanks';

import './FooterDesktop.css';
import './FooterMobile.css';
import './FooterTablet.css';

const Footer = () => {
  const [t] = useTranslation('translate');
  return (
    <div id='footer'>
      <div id='rappel-menu'>
        <div>
          <a href="#transition-1" className="rappel-menu">{t('menu.expertise', {framework:'React'})}</a>
        </div>
        <div>
          <a href="#transition-2" className="rappel-menu">{t('menu.competence', {framework:'React'})}</a>
        </div>
        <div>
          <a href="#transition-3" className="rappel-menu">{t('menu.experiences', {framework:'React'})}</a>
        </div>
      </div>
      <div id="ml-remerciement">
        <MentionsLegales />
        <Thanks />
        {//<div id="remerciements">{t('remerciement.titre', {framework:'React'})}</div>
}
      </div>
    </div>
  )
}

export default Footer;