import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Skills from '../components/skills/Skills';
import IconRetour from '../components/iconRetour/IconRetour';

describe('composant <Skills />', ()=>{
  const skills = shallow(<Skills />);

  it('Skills component contains a div whitch id is "skills"', ()=>{
    const divSkills = skills.find('#skills');
    expect(divSkills).to.have.length(1);
  })

  it('The div whitch id is "skills" contains a div whitch id is "text-skills" and an IconRetour component', ()=>{
    const divSkills = skills.find('#skills');
    const divTextSkills = divSkills.find('#text-skills');
    expect (divTextSkills).to.have.length(1);
    expect(divSkills).to.contain(<IconRetour />);
  })

  it('The div whitch id is "text-skills" contains 3 divs whitch className is "skills"', ()=>{
    const divTextSkills = skills.find('#text-skills');
    const divSkills = divTextSkills.find('.skills');
    expect (divSkills).to.have.length(3);
  })

  it('Each div whitch className is "skills" contains 2 divs whitch className are "titre-skills" and "compet"', ()=>{
    const divSkills = skills.find('.skills');
    divSkills.map(ds=>{
      const divTitreSkills = ds.find(".titre-skills");
      const divCompet = ds.find(".compet");
      expect(divTitreSkills).to.have.length(1);
      expect(divCompet).to.have.length(1);
      return true;
    })
  })

  it('The divs whitch className is "compet" have also id "domaine-competence" or "competence-tech" or "competence-fonct"', ()=>{
    const divDomaineCompetence = skills.find('#domaine-competence');
    const divCompetenceTech = skills.find('#competence-tech');
    const divCompetenceFonct = skills.find('#competence-fonct');
    expect(divDomaineCompetence.props().className).to.equal('compet');
    expect(divCompetenceTech.props().className).to.equal('compet');
    expect(divCompetenceFonct.props().className).to.equal('compet');
  })
})