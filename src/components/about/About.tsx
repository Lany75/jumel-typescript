import React from "react";
import { useTranslation } from "react-i18next";
import IconRetour from "../iconRetour/IconRetour";

import "./AboutDesktop.css";
import "./AboutMobile.css";
import "./AboutTablet.css";

const About = () => {
  const [t] = useTranslation('translate');
  return (
    <div id="about">

      <div id="text-about">
        <div className="div-expertise">
          <div className="image-about" id="image-consulting">{t('expertises.expert1.titre', {framework:'React'})}</div>
          <div className="text-expertise">{t('expertises.expert1.text', {framework:'React'})}</div>
        </div>
        <div className="div-expertise">
          <div className="image-about" id="image-bfa">
            <div>{t('expertises.expert2.titre1', {framework:'React'})}</div> 
            <div>{t('expertises.expert2.titre2', {framework:'React'})}</div> 
            <div>{t('expertises.expert2.titre3', {framework:'React'})}</div>
          </div>
          <div className="text-expertise">{t('expertises.expert2.text', {framework:'React'})}</div>
        </div>
        <div className="div-expertise">
          <div className="image-about" id="image-cloud">{t('expertises.expert3.titre', {framework:'React'})}</div>
          <div className="text-expertise">{t('expertises.expert3.text', {framework:'React'})}</div>
        </div>
      </div>
      
      <IconRetour />
    </div>
  );
};

export default About;
