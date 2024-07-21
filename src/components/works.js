import React from 'react';
import './works.css'
import workimage1 from '../assets/works_image1.webp';
import workimage2 from '../assets/works_image2.jpg';
import workimage3 from '../assets/works_image3.jpeg';
import workimage4 from '../assets/works_image4.jpeg';
import workimage5 from '../assets/works_image5.png';
import workimage6 from '../assets/worksimage_6.jpg';


function Works() {
  return (
    <section id='works'>
        <h2 className="workstitle">My PortFolio</h2>
        <span className="worksdescription">i take pride in paying attention to the smallest details and making sure that my work is pixel perfect. i am excited to bring my skills and experienc to help businesses achieve their goals and create a string online presence.</span>
        <div className="workimages">
            <img src={workimage1} alt="workimage1" className="workimg" />
            <img src={workimage2} alt="workimage2" className="workimg" />
            <img src={workimage3} alt="workimage3" className="workimg" />
            <img src={workimage4} alt="workimage4" className="workimg" />
            <img src={workimage5} alt="workimage5" className="workimg" />
            <img src={workimage6} alt="workimage6" className="workimg" />
        </div>
        <button className="worksbtn">See More</button>
    </section>
  );
}

export default Works;
