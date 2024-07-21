import React from 'react';
import './intro.css'
import muneebimg from '../assets/muneeb_port-removebg-preview.png' 
function Intro() {
  return (
    <section id='intro'>
        <div className="content">
            <span className="hello">Hello,</span>
            <span className="introtext">I'm <span className="introName">Muneeb Ahmed</span></span>
            <p className="intropara">Experienced software engineer with strong skills in Java and web development.<br/> I build effective and user-friendly web applications</p>
            {/* <br/>I focus on creating high-quality, reliable software solutions and <br/>enjoy solving problems and learning new technologies. */}
            <button className="btn">Hire me</button>
        </div>
        <img src={muneebimg} alt="muneeb_image" className='bg'/>
    </section>
  );
}

export default Intro;
