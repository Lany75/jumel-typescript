import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Home from '../components/home/Home';

describe('composant <Home />', ()=>{
  const home = shallow(<Home />);

  it('Home component contains a div whitch id is "home"', ()=>{
    const divHome = home.find("#home");
    expect(divHome).to.have.length(1);
  })

  it('The div whitch id is "home" contains a div whitch id is "nom-entreprise"', ()=>{
    const divHome = home.find("#home");
    const divNomEntreprise = divHome.find("#nom-entreprise");
    expect (divNomEntreprise).to.have.length(1);
  })

  it('The div whitch id is "nom-entreprise" contains the name of the company "home"', ()=>{
    const divNomEntreprise = home.find("#nom-entreprise");
    expect(divNomEntreprise.text()).to.equal("home")
  })
})