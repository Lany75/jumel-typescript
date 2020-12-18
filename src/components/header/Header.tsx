import React from "react";
import { MdPhoneAndroid } from "react-icons/md";
import { FiMail } from "react-icons/fi";
import { CgMenuRound } from "react-icons/cg";
import { ImCross } from "react-icons/im";

import Menu from "../menu/Menu";

import "./HeaderDesktop.css";
import "./HeaderMobile.css";
import "./HeaderTablet.css";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [t, i18next] = useTranslation('translate');
  const openMenu = () => {
    const iconMenuClosed = document.getElementById('icon-menu-closed');
    const iconMenuOpened = document.getElementById('icon-menu-opened');
    const phoneMenu = document.getElementById("my-phone-menu");

    if (iconMenuClosed !== null && iconMenuOpened !== null && phoneMenu !== null) {
      if (iconMenuClosed.className === 'visible') {
        iconMenuClosed.className = 'invisible';
        iconMenuOpened.className = 'visible';
        phoneMenu.style.display = 'flex';
      } else {
        iconMenuClosed.className = 'visible';
        iconMenuOpened.className = 'invisible';
        phoneMenu.style.display = 'none';
      }
    }
  }

  return (
    <div id='header'>
      <div id='menu-mobile-phone-mail'>
        <div id='menu-mobile' onClick={openMenu}>
          <div id='icon-menu-closed' className='visible'><CgMenuRound /></div>
          <div id='icon-menu-opened' className='invisible'><ImCross /></div>
        </div>
        <div id='phone-mail'>
          <div id="phone">
            <div className="icon">
              <MdPhoneAndroid />
            </div>
            <div className="text">06.08.97.37.44</div>
          </div>
          <div id="mail">
            <div className="icon">
              <FiMail />
            </div>
            <div className="text">julien.rivat@jumel-consulting.fr</div>
          </div>
        </div>

        <div id="language">
          <div id="div-fr" onClick={() => i18next.changeLanguage('fr')}>FR</div>
          <div>|</div>
          <div id="div-en" onClick={() => i18next.changeLanguage('en')}>EN</div>
        </div>
      </div>
      <Menu />

      <div id="my-phone-menu">
        <a href="#home" className='div-menu'>{t('menu.accueil', { framework: 'React' })}</a>
        <a href="#transition-1" className='div-menu'>{t('menu.expertise', { framework: 'React' })}</a>
        <a href="#transition-2" className='div-menu'>{t('menu.competence', { framework: 'React' })}</a>
        <a href="#transition-3" className='div-menu'>{t('menu.experiences', { framework: 'React' })}</a>
        <a href="#transition-4" className='div-menu'>{t('menu.contact', { framework: 'React' })}</a>
      </div>
    </div>
  );
};

export default Header;
