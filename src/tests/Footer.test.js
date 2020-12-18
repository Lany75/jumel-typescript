import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Footer from '../components/footer/Footer';
import MentionsLegales from '../components/mentionsLegales/MentionsLegales';

describe('composant <Footer />', ()=>{
  const footer = shallow(<Footer />);

  it('Footer component contains a div whitch id is "footer"', ()=>{
    const divFooter = footer.find('#footer');
    expect(divFooter).to.have.length(1);
  })

  it('The div whitch id is "footer" contains a div whitch id is "rappel-menu" and a MentionsLegales component', ()=>{
    const divFooter = footer.find('#footer');
    const divRappelMenu = divFooter.find('#rappel-menu');
    expect(divRappelMenu).to.have.length(1);
    expect(divFooter).to.contain(<MentionsLegales />);
  })

  it('The div whitch id is "rappel-menu" contains 3 a-tag whitch className is "rappel-menu"', ()=>{
    const divRappelMenu = footer.find('#rappel-menu');
    const aTags = divRappelMenu.find("a");
    expect(aTags).to.have.length(3);
    aTags.map(at=>{
      expect(at.props().className).to.be.equal("rappel-menu");
      return true;
    })
  })
})