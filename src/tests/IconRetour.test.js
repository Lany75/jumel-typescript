import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import { CgArrowUpO } from 'react-icons/cg';

import IconRetour from '../components/iconRetour/IconRetour';

describe ('composant <IconRetour />', ()=> {
  const iconRetour = shallow(<IconRetour />);

  it('IconRetour component contains a div whitch className is "icon-retour"', ()=>{
    const divIconRetour = iconRetour.find('.icon-retour');
    expect(divIconRetour).to.have.length(1);
  })

  it('The div whitch className is "icon-retour" contains a a-tag', ()=>{
    const divIconRetour = iconRetour.find('.icon-retour');
    const aTag = divIconRetour.find("a");
    expect(aTag).to.have.length(1);
  })

  it('The a-tag contains a CgArrowUpO icon', ()=>{
    const aTag = iconRetour.find("a");
    expect (aTag).to.contain(<CgArrowUpO />);
  })

  it('The a-tag have a href prop equal to "#home', ()=>{
    const aTag = iconRetour.find("a");
    expect (aTag.props().href).to.equal('#home');
  })
})


