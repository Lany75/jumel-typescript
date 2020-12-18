import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import DomaineCompetence from '../components/domaineCompetence/DomaineCompetence';
import { HiShieldCheck } from 'react-icons/hi';

describe('composant <DomaineCompetence />', ()=>{
  const domaineCompetence = shallow(<DomaineCompetence nomCompetence='name' />);

  it('DomaineCompetence component contains a div whitch className is "competence"', ()=>{
    const divCompetence = domaineCompetence.find('.competence');
    expect(divCompetence).to.have.length(1);
  })

  it('The div whitch className is "competence" contains 2 divs whitch className are "icon-skill" and "nom-competence"', ()=>{
    const divCompetence = domaineCompetence.find('.competence');
    const divIconSkill = divCompetence.find('.icon-skill');
    const divNomCompetence = divCompetence.find('.nom-competence');
    expect(divIconSkill).to.have.length(1);
    expect(divNomCompetence).to.have.length(1);
  })

  it('The div whitch className is "icon-skill" contains a HiShieldCheck icon', ()=>{
    const divIconSkill = domaineCompetence.find('.icon-skill');
    expect(divIconSkill).to.contain(<HiShieldCheck />)
  })

  it('The div whitch className is "nom-competence" contains the name of the competence', ()=>{
    const divNomCompetence = domaineCompetence.find('.nom-competence');
    expect(divNomCompetence.text()).to.be.equal("name");
  })
})