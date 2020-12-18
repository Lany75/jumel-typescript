import React from 'react';
import './PortfolioDesktop.css';
import './PortfolioMobile.css';
import './PortfolioTablet.css';
import logoEngie from "../../images/Logo-Engie.jpg";
import LogoAxa from "../../images/Logo-Axa.png";
import LogoSG from "../../images/Logo-SG.jpg";
import LogoAmundi from "../../images/Logo-Amundi.png";
import LogoAtos from "../../images/Logo-Atos.png"
import IconRetour from '../iconRetour/IconRetour';
import Experience from '../experience/Experience';
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  const [t] = useTranslation('translate');
  return (

    <div id="portfolio">
      <div id="text-portfolio">
        <div id="experiences">
          <div className="experience">
            <Experience
              idExperience="experience-1"
              logoEntreprise={logoEngie}
              altImage="Engie"
              nomEntreprise={t('portfolio.experience1.entreprise', { framework: 'React' })}
              titrePoste={t('portfolio.experience1.poste', { framework: 'React' })}
            />
          </div>
          <div className="experience">
            <Experience
              idExperience="experience-2"
              logoEntreprise={LogoAxa}
              altImage="Axa"
              nomEntreprise={t('portfolio.experience2.entreprise', { framework: 'React' })}
              titrePoste={t('portfolio.experience2.poste', { framework: 'React' })}
            />
          </div>
          <div className="experience">
            <Experience
              idExperience="experience-3"
              logoEntreprise={LogoSG}
              altImage="Société Générale"
              nomEntreprise={t('portfolio.experience3.entreprise', { framework: 'React' })}
              titrePoste={t('portfolio.experience3.poste', { framework: 'React' })}
            />
          </div>
          <div className="experience">
            <Experience
              idExperience="experience-4"
              logoEntreprise={LogoAmundi}
              altImage="Amundi"
              nomEntreprise={t('portfolio.experience4.entreprise', { framework: 'React' })}
              titrePoste={t('portfolio.experience4.poste', { framework: 'React' })}
            />
          </div>
          <div className="experience">
            <Experience
              idExperience="experience-5"
              logoEntreprise={LogoAtos}
              altImage="Atos"
              nomEntreprise={t('portfolio.experience5.entreprise', { framework: 'React' })}
              titrePoste={t('portfolio.experience5.poste', { framework: 'React' })}
            />
          </div>
        </div>
      </div>

      <IconRetour />
    </div>
  )
}

export default Portfolio;