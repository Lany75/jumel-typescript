import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Portfolio from '../components/portfolio/Portfolio';
import IconRetour from '../components/iconRetour/IconRetour';
import Experience from '../components/experience/Experience';
import logoEngie from "../images/Logo-Engie.jpg";

describe('composant <Portfolio />', ()=>{
  const portfolio = shallow(<Portfolio />);

  it('Portfolio component contains a div whitch id is "portfolio"', ()=>{
    const divPortfolio = portfolio.find("#portfolio");
    expect(divPortfolio).to.have.length(1);
  })

  it('The div whitch id is "portfolio" contains a div whitch id is "text-portfolio" and an IconRetour component', ()=>{
    const divPortfolio = portfolio.find("#portfolio");
    const divTextPortfolio = divPortfolio.find("#text-portfolio");
    expect(divTextPortfolio).to.have.length(1);
    expect(divPortfolio).to.contain(<IconRetour />);
  })

  it('The div whitch id is "text-portfolio" contains 1 div whitch id is "experiences"', ()=>{
    const divTextPortfolio = portfolio.find("#text-portfolio");
    const divExperiences = divTextPortfolio.find("#experiences");
    expect(divExperiences).to.have.length(1);
  })

  it('The div whitch id is "experiences" contains components whitch className is "experience"', ()=>{
    const divExperiences = portfolio.find("#experiences");
    divExperiences.props().children.map(de=>{
      expect(de.props.className).to.equal("experience");
      return true;
    })
  })
})