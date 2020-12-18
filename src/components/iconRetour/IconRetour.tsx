import React from 'react';
import { CgArrowUpO } from 'react-icons/cg';
import './IconRetourDesktop.css';
import './IconRetourMobile.css';
import './IconRetourTablet.css';

const IconRetour =()=>{
  return (
    <div className="icon-retour">
      <a href="#home"><CgArrowUpO /></a>
    </div>
  )
}

export default IconRetour;