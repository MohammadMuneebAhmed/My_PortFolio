import React, { useState } from 'react';
import './navbar.css'
import mmalogo from '../../src/assets/mmalogo-removebg-preview.png'
import {Link} from 'react-scroll';
import menu from '../assets/file.png';

function Navbar() {
  
  const [showmenu,setshowmenu] = useState(false);
  return (

    <nav className="navbar">
      <img src={mmalogo} alt="mmalogo" className='mmalogo'/>
      <div className="navlinks">
          {/* Link is installed from react-scroll using npm i react-scoll */}
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="navlinkitem">Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="navlinkitem">About</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="navlinkitem">Portfolio</Link>
          <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="navlinkitem">Clients</Link>
      </div>
      <button onClick = {()=>{
        document.getElementById('contact').scrollIntoView({behavior:'smooth'});
      }}className="contactbtn">Contact Me</button>



      <img src={menu} alt="menu" className='mobmenu' onClick={()=>{setshowmenu(!showmenu)}}/>
      <div className="navmenu" style={ {display : showmenu? 'flex' : 'none'}} >
          {/* Link is installed from react-scroll using npm i react-scoll */}
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listitem" onClick={()=>{setshowmenu(false)}}>Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listitem" onClick={()=>{setshowmenu(false)}}>About</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listitem" onClick={()=>{setshowmenu(false)}}>Portfolio</Link>
          <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="listitem" onClick={()=>{setshowmenu(false)}}>Clients</Link>
          <Link activeClass='active' to='contacts' spy={true} smooth={true} offset={-50} duration={500} className="listitem" onClick={()=>{setshowmenu(false)}}>Contacts</Link>
      </div>
    </nav>
  );
}

export default Navbar;
