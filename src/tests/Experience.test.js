import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Experience from '../components/experience/Experience';
import logoEngie from "../images/Logo-Engie.jpg";

describe('composant <Experience />', ()=>{
  const experience = shallow(
    <Experience 
      idExperience="experience-1" 
      logoEntreprise={logoEngie} 
      altImage="Engie" 
      nomEntreprise="ENGIE Global Markets" 
      titrePoste="Technical Lead"
    />
  )

  it('Experience component contains a div whitch id is "experience-1"', ()=>{
    const divExperience = experience.find("#experience-1");
    expect(divExperience).to.have.length(1);
  })

  it('The div whitch id is "experience-1" contains 2 div whitch className are "entreprise-experience" and "poste-experience"', ()=>{
    const divExperience = experience.find("#experience-1");
    const divEntrepriseExp = divExperience.find(".entreprise-experience");
    const divPosteExp = divExperience.find(".poste-experience");
    expect(divEntrepriseExp).to.have.length(1);
    expect(divPosteExp).to.have.length(1);
  })

  it('The div whitch className is "poste-experience" contains the title of the job "Technical Lead"', ()=>{
    const divPosteExp = experience.find(".poste-experience");
    expect(divPosteExp.text()).to.be.equal("Technical Lead");
  })

  it('The div whitch className is "entreprise-experience" contains an img-tag and a div whitch className is "nom-entreprise"', ()=>{
    const divEntrepriseExp = experience.find(".entreprise-experience");
    const imgTag = divEntrepriseExp.find("img");
    expect(imgTag).to.have.length(1);
    const divNomEntreprise = divEntrepriseExp.find(".nom-entreprise");
    expect(divNomEntreprise).to.have.length(1);
  })

  it('The img-tag have the className "logo-entreprise", the src propertie "logoEngie" and the alt propertie "Engie"', ()=>{
    const imgTag = experience.find("img");
    expect(imgTag.props().className).to.be.equal("logo-entreprise");
    expect(imgTag.props().src).to.be.equal(logoEngie);
    expect(imgTag.props().alt).to.be.equal("Engie");
  })

  it('The div whitch className is "nom-entreprise" contains the name of the company "ENGIE Global Markets"', ()=>{
    const divNomEntreprise = experience.find(".nom-entreprise");
    expect(divNomEntreprise.text()).to.be.equal("ENGIE Global Markets");
  })
})