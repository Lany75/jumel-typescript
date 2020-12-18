import React from "react";
import { useTranslation } from "react-i18next";

import logo from '../../images/logo.jpg';

import "./HomeDesktop.css";
import "./HomeMobile.css";
import "./HomeTablet.css";

const Home = () => {
  const [t] = useTranslation('translate');
  return (
    <div id="home">
      <img id="logo-mobile" src={logo} alt="logo Jumel Consulting" />
      <div id="nom-entreprise">{t('home', {framework:'React'})}</div>
    </div>
  );
};

export default Home;
