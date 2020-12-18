import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import Menu from '../components/menu/Menu';

describe('composant <Menu />', ()=>{
  const menu = shallow(<Menu />);

  it('Menu component contains a div whitch id is "menu-desktop"', ()=>{
    const divMenuDesktop = menu.find('#menu-desktop');
    expect(divMenuDesktop).to.have.length(1);
  })

  it('The div whitch id is "menu-desktop" contains 5 a-tag with className is "div-menu"', ()=>{
    const divMenuDesktop = menu.find('#menu-desktop');
    const aTag = divMenuDesktop.find("a");
    expect(aTag).to.have.length(5);
    aTag.map(at => {
      expect(at.props().className).to.equal('div-menu');
      return true;
    })
  })
})