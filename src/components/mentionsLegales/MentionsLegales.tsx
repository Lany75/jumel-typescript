import React from 'react';
import { useTranslation } from 'react-i18next';
import './MentionsLegalesDesktop.css';
import './MentionsLegalesMobile.css';
import './MentionsLegalesTablet.css';

const MentionsLegales = () => {
  const [t] = useTranslation('translate');

  const openModal = () => {
    let modal = document.getElementById('my-modal-ml');
    if (modal !== null) {
      modal.style.display = 'block';
    }
  }

  const closeModal = () => {
    let modal = document.getElementById('my-modal-ml');
    if (modal !== null) {
      modal.style.display = 'none'
    }
  }

  return (
    <div id='mentions-legales'>
      <div id='titre-ml' onClick={openModal}>
        {t('footer.mentionsLegales', { framework: 'React' })}
      </div>

      <div id="my-modal-ml" className="modal-ml">
        <div className="modal-ml-content">
          <div className="close" onClick={closeModal}>&times;</div>
          <div id='text-ml'>
            <div id='titre-mentions-legales'>{t('mentionsLegales.titre', { framework: 'React' })}</div>
            <div id='immatriculation'>
              <div className='titre'>{t('mentionsLegales.immatriculation.titre', { framework: 'React' })}</div>
              <div className='texte'>
                <div>{t('mentionsLegales.immatriculation.texte.zone1', { framework: 'React' })}</div>
                <div>{t('mentionsLegales.immatriculation.texte.zone2', { framework: 'React' })}</div>
              </div>
            </div>
            <div id='realisation'>
              <div className='titre'>{t('mentionsLegales.realisation.titre', { framework: 'React' })}</div>
              <div className='texte'>
                <div>{t('mentionsLegales.realisation.texte.zone1', { framework: 'React' })}</div>
                <div>{t('mentionsLegales.realisation.texte.zone2', { framework: 'React' })}</div>
              </div>
            </div>
            <div id='confidentialite'>
              <div className='titre'>{t('mentionsLegales.confidentialite.titre', { framework: 'React' })}</div>
              <div className='texte'>
                <div>{t('mentionsLegales.confidentialite.texte.zone1', { framework: 'React' })}</div>
                <div>{t('mentionsLegales.confidentialite.texte.zone2', { framework: 'React' })}</div>
                <div>{t('mentionsLegales.confidentialite.texte.zone3', { framework: 'React' })}</div>
                <div>
                  <div>{t('mentionsLegales.confidentialite.texte.zone4.div', { framework: 'React' })}</div>
                  <ul>
                    <li>{t('mentionsLegales.confidentialite.texte.zone4.ul.li1', { framework: 'React' })}</li>
                    <li>{t('mentionsLegales.confidentialite.texte.zone4.ul.li2', { framework: 'React' })}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MentionsLegales;