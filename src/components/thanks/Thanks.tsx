/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { useTranslation } from 'react-i18next';

import './ThanksDesktop.css';
import './ThanksTablet.css';
import './ThanksMobile.css';

const Thanks = () => {
  const [t] = useTranslation('translate');

  const openModal = () => {
    let modal = document.getElementById('my-modal-remerciements');
    if (modal !== null) {
      modal.style.display = 'block';
    }
  }

  const closeModal = () => {
    let modal = document.getElementById('my-modal-remerciements');
    if (modal !== null) {
      modal.style.display = 'none'
    }
  }

  return (
    <div id='remerciements'>
      <div id='titre-merci' onClick={openModal}>
        {t('footer.remerciements', { framework: 'React' })}
      </div>

      <div id="my-modal-remerciements" className="modal-remerciement">
        <div className="modal-remerciement-content">
          <div className='close' onClick={closeModal}>&times;</div>
          <div id='text-remerciement'>
            <div id='titre-remerciement'>{t('remerciement.titre', { framework: 'React' })}</div>
            <div>
              {t('remerciement.text.partie1', { framework: 'React' })} <a href="https://unsplash.com/">Unsplash</a>{t('remerciement.text.partie2', { framework: 'React' })}
              <ul>
                <li><a href="https://unsplash.com/@nasa?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank" rel="external">NASA</a></li>
                <li><a href="https://unsplash.com/@arifriyanto?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank" rel="external">Arif Riyanto</a></li>
                <li><a href="https://unsplash.com/@blankerwahnsinn?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank" rel="external">Fabian Blank</a></li>
                <li><a href="https://unsplash.com/@gozlukluf?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank" rel="external">Fatih</a></li>
                <li><a href="https://unsplash.com/@markusspiske?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank" rel="external">Markus Spiske</a></li>
                <li><a href="https://unsplash.com/@tyvdh?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank" rel="external">Tyler van der Hoeven</a></li>
                <li><a href="https://unsplash.com/@fantasyflip?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank" rel="external">Philipp Katzenberger</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Thanks;