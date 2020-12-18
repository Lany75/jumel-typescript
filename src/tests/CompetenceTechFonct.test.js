import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import CompetenceTechFonct from '../components/competenceTechFonct/CompetenceTechFonct';

describe('composant <CompetenceTechFonct />', () => {
  const competenceTechFonct = shallow(<CompetenceTechFonct nomCompetence="name" pourcentage="pourc-75"/>);

  it('CompetenceTechFonct component contains a div whitch className is "box"', ()=>{
    const divBox = competenceTechFonct.find('.box');
    expect(divBox).to.have.length(1);
  })

  it('The div whitch className is "box" contains a div whitch id is "pourc-75"', ()=>{
    const divBox = competenceTechFonct.find('.box');
    const divPourc75 = divBox.find('#pourc-75');
    expect(divPourc75).to.have.length(1);
  })

  it('The div whitch id is "pourc-75" contains a div whitch className is "titre-competence"', ()=>{
    const divPourc75 = competenceTechFonct.find('#pourc-75'); 
    const divTitreCompetence = divPourc75.find('.titre-competence');
    expect(divTitreCompetence).to.have.length(1); 
  })

  it('The div whitch id is "titre-competence" contains the name of the competence', ()=>{
    const divTitreCompetence = competenceTechFonct.find('.titre-competence');
    expect(divTitreCompetence.text()).to.be.equal("name");
  })
})