import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import MentionsLegales from '../components/mentionsLegales/MentionsLegales';

describe('composant <MentionsLegales />', () => {
  const mentionsLegales = shallow(<MentionsLegales />);

  it('MentionsLegales component contains a div whitch id is "mentions-legales"', () => {
    const divMentionsLegales = mentionsLegales.find('#mentions-legales');
    expect(divMentionsLegales).to.have.length(1);
  })

  it('The div whitch id is "mentions-legales" contains 2 divs whitch id are "titre-ml" and "my-modal-ml"', () => {
    const divMentionsLegales = mentionsLegales.find('#mentions-legales');
    const divTitreMl = divMentionsLegales.find('#titre-ml');
    const divMyModal = divMentionsLegales.find('#my-modal-ml');
    expect(divTitreMl).to.have.length(1);
    expect(divMyModal).to.have.length(1);
  })

  it('The div whitch id is "titre-ml" contains text "footer.mentionsLegales"', () => {
    const divTitreMl = mentionsLegales.find('#titre-ml');
    expect(divTitreMl.text()).to.equal("footer.mentionsLegales");
  })

  it('The div whitch id is "my-modal-ml" constains a div whitch className is "modal-ml-content"', () => {
    const divMyModal = mentionsLegales.find('#my-modal-ml');
    const divModalContent = divMyModal.find('.modal-ml-content');
    expect(divModalContent).to.have.length(1);
  })

  it('The div whitch className is "modal-ml-content" contains a div whitch className is "close" and a div whitch id is "text-ml"', () => {
    const divModalContent = mentionsLegales.find('.modal-ml-content');
    const divClose = divModalContent.find('.close');
    const divTextMl = divModalContent.find('#text-ml');
    expect(divClose).to.have.length(1);
    expect(divTextMl).to.have.length(1);
  })

  it('The div whitch id is "text-ml" contains 4 divs whitch id are "titre-mentions-legales", "immatriculation", "realisation" and "confidentialite"', () => {
    const divTextMl = mentionsLegales.find('#text-ml');
    const divTitreMentionsLegales = divTextMl.find('#titre-mentions-legales');
    const divImmatriculation = divTextMl.find('#immatriculation');
    const divRealisation = divTextMl.find('#realisation');
    const divConfidentialite = divTextMl.find('#confidentialite');
    expect(divTitreMentionsLegales).to.have.length(1);
    expect(divImmatriculation).to.have.length(1);
    expect(divRealisation).to.have.length(1);
    expect(divConfidentialite).to.have.length(1);
  })

  it('The div whitch id is "titre-mentions-legales" contains text "mentionsLegales.titre"', () => {
    const divTitreMentionsLegales = mentionsLegales.find('#titre-mentions-legales');
    expect(divTitreMentionsLegales.text()).to.equal('mentionsLegales.titre');
  })

  it('The div whitch id is "immatriculation" contains 2 divs whitch className are "titre" and "texte"', () => {
    const divImmatriculation = mentionsLegales.find('#immatriculation');
    const divTitre = divImmatriculation.find('.titre');
    const divTexte = divImmatriculation.find('.texte');
    expect(divTitre).to.have.length(1);
    expect(divTexte).to.have.length(1);
  })

  it('The div whitch id is "realisation" contains 2 divs whitch className are "titre" and "texte"', () => {
    const divRealisation = mentionsLegales.find('#realisation');
    const divTitre = divRealisation.find('.titre');
    const divTexte = divRealisation.find('.texte');
    expect(divTitre).to.have.length(1);
    expect(divTexte).to.have.length(1);
  })

  it('The div whitch id is "confidentialite" contains 2 divs whitch className are "titre" and "texte"', () => {
    const divConfidentialite = mentionsLegales.find('#confidentialite');
    const divTitre = divConfidentialite.find('.titre');
    const divTexte = divConfidentialite.find('.texte');
    expect(divTitre).to.have.length(1);
    expect(divTexte).to.have.length(1);
  })
})