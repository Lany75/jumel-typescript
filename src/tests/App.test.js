import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import App from '../App';
import Header from '../components/header/Header';
import Home from '../components/home/Home';
import About from '../components/about/About';
import Skills from '../components/skills/Skills';
import Portfolio from '../components/portfolio/Portfolio';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';

describe('composant <App />', ()=> {
  const app = shallow(<App />);

  it('App component contains a div whitch className is "App"', ()=>{
    const divApp = app.find(".App");
    expect (divApp).to.have.length(1);
  })

  it('The div whitch className is "App" contains a Header component', ()=>{
    const divApp = app.find(".App");
    expect(divApp).to.contain(<Header />);
  })

  it('The div whitch className is "App" contains a About component', ()=>{
    const divApp = app.find(".App");
    expect(divApp).to.contain(<About />);
  })

  it('The div whitch className is "App" contains a Skills component', ()=>{
    const divApp = app.find(".App");
    expect(divApp).to.contain(<Skills />);
  })

  it('The div whitch className is "App" contains a Portfolio component', ()=>{
    const divApp = app.find(".App");
    expect(divApp).to.contain(<Portfolio />);
  })

  it('The div whitch className is "App" contains a Contact component', ()=>{
    const divApp = app.find(".App");
    expect(divApp).to.contain(<Contact />);
  })

  it('The div whitch className is "App" contains a Footer component', ()=>{
    const divApp = app.find(".App");
    expect(divApp).to.contain(<Footer />);
  })

  it('The div whitch className is "App" contains a div whitch id is "home-transition"', ()=>{
    const divApp = app.find(".App");
    const divHomeTransition = divApp.find("#home-transition")
    expect(divHomeTransition).to.have.length(1);
  })

  it('The div whitch id is "home-transition" contains a Home component and a div whitch id is "transition-1"', ()=>{
    const divHomeTransition = app.find("#home-transition")
    const divTransition1 = divHomeTransition.find("#transition-1")
    expect(divHomeTransition).to.contain(<Home />)
    expect(divTransition1).to.have.length(1);
  })

  it('The div whitch className is "App" contains 4 Transition blocks', ()=>{
    const divApp = app.find(".App");
    const divTransition = divApp.find(".transition")
    expect(divTransition).to.have.length(4);
  })
})