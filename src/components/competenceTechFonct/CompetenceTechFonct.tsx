import React from 'react';
import './CompetenceTechFonctDesktop.css';
import './CompetenceTechFonctMobile.css';
import './CompetenceTechFonctTablet.css';

interface CompetenceTechFonctProps {
  nomCompetence: string,
  pourcentage: string
}

//const CompetenceTechFonct = ({ nomCompetence, pourcentage }) => {
const CompetenceTechFonct: React.FC<CompetenceTechFonctProps> = (competence) => {
  return (
    <div className="box">
      <div id={competence.pourcentage}>
        <div className="titre-competence">{competence.nomCompetence}</div>
      </div>
    </div>
  )
}

export default CompetenceTechFonct;