import React from 'react';
import { HiShieldCheck } from 'react-icons/hi';
import './DomaineCompetenceDesktop.css';
import './DomaineCompetenceMobile.css';
import './DomaineCompetenceTablet.css';

interface DomaineCompetenceProps {
  nomCompetence: string
}

//const DomaineCompetence = ({ nomCompetence }) => {
const DomaineCompetence: React.FC<DomaineCompetenceProps> = competence => {
  return (
    <div className="competence">
      <div className='icon-skill'><HiShieldCheck /></div>
      <div className='nom-competence'>{competence.nomCompetence}</div>
    </div>
  )
}

export default DomaineCompetence;