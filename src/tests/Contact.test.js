import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Contact from '../components/contact/Contact';
import IconRetour from '../components/iconRetour/IconRetour';

describe ('composant <Contact />', ()=>{
  const contact = shallow(<Contact />);

  it('Contact component contains a div whitch id is "contact"', ()=>{
    const divContact = contact.find('#contact');
    expect(divContact).to.have.length(1);
  })

  it('The div whitch id is "contact" contains 2 divs whitch id are "titre-contact" and "text-contact" and an IconRetour component', ()=>{
    const divContact = contact.find('#contact');
    const divTitreContact = divContact.find("#titre-contact");
    const divTextContact = divContact.find("#text-contact");
    expect(divTitreContact).to.have.length(1);
    expect(divTextContact).to.have.length(1);
    expect(divContact).to.contain(<IconRetour />)
  })

  it('The div whitch id is "titre-contact" contains the title "contact.titre"', ()=>{
    const divTitreContact = contact.find("#titre-contact");
    expect(divTitreContact.text()).to.be.equal("contact.titre");
  })
})