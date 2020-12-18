import React from 'react';
import './ExperienceDesktop.css';
import './ExperienceMobile.css';
import './ExperienceTablet.css';

interface ExperienceProps {
  idExperience: string,
  logoEntreprise: string,
  altImage: string,
  nomEntreprise: string,
  titrePoste: string
}

//const Experience = ({ idExperience, logoEntreprise, altImage, nomEntreprise, titrePoste }) => {
const Experience: React.FC<ExperienceProps> = experience => {
  return (
    <div id={experience.idExperience}>
      <div className="entreprise-experience">
        <div><img className="logo-entreprise" src={experience.logoEntreprise} alt={experience.altImage} /></div>
        <div className="nom-entreprise">{experience.nomEntreprise}</div>
      </div>
      <div className="poste-experience">{experience.titrePoste}</div>
    </div>
  )
}

export default Experience;