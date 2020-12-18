import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import About from '../components/about/About';
import IconRetour from '../components/iconRetour/IconRetour';

describe('composant <About />', ()=>{
  const about = shallow(<About />);

  it('About component contains a div whitch id is "about"', ()=>{
    const divAbout = about.find('#about');
    expect(divAbout).to.have.length(1);
  })

  it('The div whitch id is "about" contains a div whitch id is "text-about" and an IconRetour component', ()=>{
    const divAbout = about.find('#about');
    const divTextAbout = divAbout.find("#text-about");
    expect (divTextAbout).to.have.length(1);
    expect(divAbout).to.contain(<IconRetour />);
  })

  it('The div whitch id is "text-about" contains 3 div whitch className is "div-expertise"', ()=>{
    const divTextAbout = about.find("#text-about"); 
    const divs = divTextAbout.find(".div-expertise");
    expect(divs).to.have.length(3);
  })

  it('The divs whitch className is "div-expertise" contain 2 divs whitch className are "image-about" and "text-expertise"', ()=>{
    const divExpertise = about.find(".div-expertise");
    divExpertise.map(d=>{
      const divImageAbout = d.find(".image-about");
      expect(divImageAbout).to.have.length(1);
      const divTextExpertise = d.find(".text-expertise");
      expect(divTextExpertise).to.have.length(1);
      return true;
    })
  })

});