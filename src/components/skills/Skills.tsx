import React from 'react';
import { useTranslation } from 'react-i18next';
import CompetenceTechFonct from '../competenceTechFonct/CompetenceTechFonct';
import DomaineCompetence from '../domaineCompetence/DomaineCompetence';
import IconRetour from '../iconRetour/IconRetour';
import './SkillsDesktop.css';
import './SkillsMobile.css';
import './SkillsTablet.css';

const Skills = () => {
  const [t] = useTranslation('translate');
  return (
  <div id="skills">
    <div id="text-skills">
      <div className="skills">
        <div className="titre-skills">{t('skills.skill1.titre', {framework:'React'})}</div>
        <div className="compet" id='domaine-competence'>
          <DomaineCompetence nomCompetence={t('skills.skill1.competence1', {framework:'React'})} />
          <DomaineCompetence nomCompetence={t('skills.skill1.competence2', {framework:'React'})} />
          <DomaineCompetence nomCompetence={t('skills.skill1.competence3', {framework:'React'})} />
          <DomaineCompetence nomCompetence={t('skills.skill1.competence4', {framework:'React'})} />
          <DomaineCompetence nomCompetence={t('skills.skill1.competence5', {framework:'React'})} />
          <DomaineCompetence nomCompetence={t('skills.skill1.competence6', {framework:'React'})} />
          <DomaineCompetence nomCompetence={t('skills.skill1.competence7', {framework:'React'})} />
          <DomaineCompetence nomCompetence={t('skills.skill1.competence8', {framework:'React'})} />
          <DomaineCompetence nomCompetence={t('skills.skill1.competence9', {framework:'React'})} />
          <DomaineCompetence nomCompetence={t('skills.skill1.competence10', {framework:'React'})} />
          <DomaineCompetence nomCompetence={t('skills.skill1.competence11', {framework:'React'})} />
          <DomaineCompetence nomCompetence={t('skills.skill1.competence12', {framework:'React'})} />
          <DomaineCompetence nomCompetence={t('skills.skill1.competence13', {framework:'React'})} />

        </div>
      </div>
      <div className="skills">
        <div className="titre-skills">{t('skills.skill2.titre', {framework:'React'})}</div>
        <div className="compet" id="competence-tech">
          <CompetenceTechFonct nomCompetence={t('skills.skill2.competence1', {framework:'React'})} pourcentage="competence-100" />
          <CompetenceTechFonct nomCompetence={t('skills.skill2.competence2', {framework:'React'})} pourcentage="competence-80" />
          <CompetenceTechFonct nomCompetence={t('skills.skill2.competence3', {framework:'React'})} pourcentage="competence-100" />
          <CompetenceTechFonct nomCompetence={t('skills.skill2.competence4', {framework:'React'})} pourcentage="competence-100" />
          <CompetenceTechFonct nomCompetence={t('skills.skill2.competence5', {framework:'React'})} pourcentage="competence-80" />
          <CompetenceTechFonct nomCompetence={t('skills.skill2.competence6', {framework:'React'})} pourcentage="competence-100" />
          <CompetenceTechFonct nomCompetence={t('skills.skill2.competence7', {framework:'React'})} pourcentage="competence-80" />
          <CompetenceTechFonct nomCompetence={t('skills.skill2.competence8', {framework:'React'})} pourcentage="competence-60" />
          <CompetenceTechFonct nomCompetence={t('skills.skill2.competence9', {framework:'React'})} pourcentage="competence-80" />
          <CompetenceTechFonct nomCompetence={t('skills.skill2.competence10', {framework:'React'})} pourcentage="competence-80" />
          <CompetenceTechFonct nomCompetence={t('skills.skill2.competence11', {framework:'React'})} pourcentage="competence-80" />
          <CompetenceTechFonct nomCompetence={t('skills.skill2.competence12', {framework:'React'})} pourcentage="competence-80" />
          <CompetenceTechFonct nomCompetence={t('skills.skill2.competence13', {framework:'React'})} pourcentage="competence-80" />
          <CompetenceTechFonct nomCompetence={t('skills.skill2.competence14', {framework:'React'})} pourcentage="competence-80" />
          <CompetenceTechFonct nomCompetence={t('skills.skill2.competence15', {framework:'React'})} pourcentage="competence-80" />
          <CompetenceTechFonct nomCompetence={t('skills.skill2.competence16', {framework:'React'})} pourcentage="competence-80" />
        </div>
  
    </div>
      <div className="skills">
        <div className="titre-skills">{t('skills.skill3.titre', {framework:'React'})}</div>
        <div className="compet" id="competence-fonct">
        <CompetenceTechFonct nomCompetence={t('skills.skill3.competence1', {framework:'React'})} pourcentage="competence-80" />
        <CompetenceTechFonct nomCompetence={t('skills.skill3.competence2', {framework:'React'})} pourcentage="competence-80" />
        <CompetenceTechFonct nomCompetence={t('skills.skill3.competence3', {framework:'React'})} pourcentage="competence-80" />
        <CompetenceTechFonct nomCompetence={t('skills.skill3.competence4', {framework:'React'})} pourcentage="competence-60" />
        <CompetenceTechFonct nomCompetence={t('skills.skill3.competence5', {framework:'React'})} pourcentage="competence-60" />
        <CompetenceTechFonct nomCompetence={t('skills.skill3.competence6', {framework:'React'})} pourcentage="competence-60" />
        <CompetenceTechFonct nomCompetence={t('skills.skill3.competence7', {framework:'React'})} pourcentage="competence-80" />
        <CompetenceTechFonct nomCompetence={t('skills.skill3.competence8', {framework:'React'})} pourcentage="competence-80" />
        <CompetenceTechFonct nomCompetence={t('skills.skill3.competence9', {framework:'React'})} pourcentage="competence-80" />
        <CompetenceTechFonct nomCompetence={t('skills.skill3.competence10', {framework:'React'})} pourcentage="competence-80" />
        <CompetenceTechFonct nomCompetence={t('skills.skill3.competence11', {framework:'React'})} pourcentage="competence-80" />
        <CompetenceTechFonct nomCompetence={t('skills.skill3.competence12', {framework:'React'})} pourcentage="competence-60" />
        </div>
      </div>
    </div>
    <IconRetour />
  </div>
  )
}

export default Skills;