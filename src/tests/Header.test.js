import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import { CgMenuRound } from 'react-icons/cg';

import Header from '../components/header/Header';
import Menu from '../components/menu/Menu';
import { ImCross } from 'react-icons/im';
import { MdPhoneAndroid } from 'react-icons/md';
import { FiMail } from 'react-icons/fi';

describe ('composant <Header />', ()=> {
  const header = shallow(<Header />);

  it('Header component contains a div whitch id is "header"', ()=>{
    const divHeader = header.find("#header");
    expect(divHeader).to.have.length(1);
  })

  it('The div whitch id is "header" contains 2 divs whitch id are "menu-mobile-phone-mail" and "my-phone-menu", and a Menu component', ()=>{
    const divHeader = header.find("#header");
    const divMenuMobilePhoneMail = divHeader.find("#menu-mobile-phone-mail");
    const divMyPhoneMenu = divHeader.find("#my-phone-menu");
    expect(divMenuMobilePhoneMail).to.have.length(1);
    expect(divMyPhoneMenu).to.have.length(1);
    expect(divHeader).to.contain(<Menu />)
  })

  it('The div whitch id is"menu-mobile-phone-mail" contains 2 div witch id are "menu-mobile" and "phone-mail"', ()=> {
    const divMenuMobilePhoneMail = header.find("#menu-mobile-phone-mail");
    const divMenuMobile = divMenuMobilePhoneMail.find('#menu-mobile');
    const divPhoneMail = divMenuMobilePhoneMail.find('#phone-mail');
    expect(divMenuMobile).to.have.length(1);
    expect(divPhoneMail).to.have.length(1);
  })

  it('The div whitch id is "menu-mobile" contains 2 divs whitch id are "icon-menu-closed" and "icon-menu-opened"', ()=>{
    const divMenuMobile = header.find("#menu-mobile");
    const iconMenuClosed = divMenuMobile.find("#icon-menu-closed");
    const iconMenuOpened = divMenuMobile.find("#icon-menu-opened");
    expect(iconMenuClosed).to.have.length(1);
    expect(iconMenuOpened).to.have.length(1);
  })

  it('The div whitch id is "icon-menu-closed" have a className "visible" and a CgMenuRound icon', ()=>{
    const iconMenuClosed = header.find("#icon-menu-closed");
    expect(iconMenuClosed.props().className).to.be.equal("visible");
    expect(iconMenuClosed).to.contain(<CgMenuRound />);
  })

  it('The div whitch id is "icon-menu-opened" have a className "invisible" and a ImCross icon', ()=>{
    const iconMenuOpened = header.find("#icon-menu-opened");
    expect(iconMenuOpened.props().className).to.be.equal("invisible");
    expect(iconMenuOpened).to.contain(<ImCross />);
  })

  it('The div whitch id is "phone-mail" contains 2 div whitch id are "phone" and "mail"', ()=>{
    const divPhoneMail = header.find("#phone-mail");
    const divPhone = divPhoneMail.find("#phone");
    const divMail = divPhoneMail.find("#mail");
    expect(divPhone).to.have.length(1);
    expect(divMail).to.have.length(1);
  })

  it('The div whitch id is "phone" contains 2 div whitch classname are "icon" and "text"', ()=>{
    const divPhone = header.find("#phone");
    const divIcon = divPhone.find(".icon");
    const divText = divPhone.find(".text");
    expect(divIcon).to.have.length(1);
    expect(divText).to.have.length(1);
  })

  it('The div whitch id is "icon" in the phone div contains a MdPhoneAndroid icon', ()=>{
    const divPhone = header.find("#phone"); 
    const divIcon = divPhone.find(".icon");
    expect(divIcon).to.contain(<MdPhoneAndroid />);
  })

  it('The div whitch id is "mail" contains 2 div whitch classname are "icon" and "text"', ()=>{
    const divMail = header.find("#mail");
    const divIcon = divMail.find(".icon");
    const divText = divMail.find(".text");
    expect(divIcon).to.have.length(1);
    expect(divText).to.have.length(1);
  })

  it('The div whitch id is "icon" in the mail div contains a FiMail icon', ()=>{
    const divMail = header.find("#mail"); 
    const divIcon = divMail.find(".icon");
    expect(divIcon).to.contain(<FiMail />);
  })

  it('The div whitch id is "my-phone-menu" constains 5 divs whitch className is "div-menu"', ()=>{
    const divMyPhoneMenu = header.find("#my-phone-menu");
    const divMenu = divMyPhoneMenu.find(".div-menu");
    expect(divMenu).to.have.length(5);
  })
})