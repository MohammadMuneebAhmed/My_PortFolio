// import React from "react";
// import "./skills.css";
// import uidesign from "../assets/ui_ux_design.png";
// import webdesign from "../assets/web_design_image.jpeg";
// import appdesign from "../assets/app_design_image.avif";
// import appdesign from "../src/assets/app_design_image.avif";
// function Skills() {
//   return (
//     <section id="skills">
//       <span className="skilltitle">"What I do?"</span>
//       <span className="skilldescription">
//         Experienced software engineer with strong skills in Java and web
//         development.<br /> I build effective and user-friendly web applications
//         <br />I focus on creating high-quality, reliable software solutions and
//         <br />enjoy solving problems and learning new technologies.
//         <div className="skillbars">
//             <div className="skillbar">
//                 <img src={uidesign} alt="" className="skillbarimg" />
//                 <div className="skillbartext">
//                     <h2>UI/UX design</h2>
//                     <p></p>
//                 </div>
//             </div>
//             <div className="skillbar">
//                 <img src={webdesign} alt="" className="skillbarimg" />
//                 <div className="skillbartext">
//                     <h2>Web design</h2>
//                     <p></p>
//                 </div>
//             </div>
//             <div className="skillbar">
//                 <img src={appdesign} alt="" className="skillbarimg" />
//                 <div className="skillbartext">
//                     <h2>App design</h2>
//                     <p></p>
//                 </div>
//             </div>
//         </div>
//       </span>
//     </section>
//   );
// }

// export default Skills;
import React from "react";
import "./skills.css";
import uidesign from "../assets/ui_ux_design.png";
import webdesign from "../assets/web_design_image.jpeg";
import appdesign from "../assets/app_design_image.avif";

function Skills() {
  return (
    <section id="skills">
      <h2 className="skilltitle">What I do?</h2>
      <span className="skilldescription">
      Experienced software engineer with strong skills in Java and web
        development.<br /> I build effective and user-friendly web applications.
        <br />I focus on creating high-quality, reliable software solutions and
        <br />enjoy solving problems and learning new technologies.
      </span>
      <div className="skillbars">
        <div className="skillbar">
          <img src={uidesign} alt="UI/UX design" className="skillbarimg" />
          <div className="skillbartext">
            <h3>UI/UX design</h3>
            <p>this is a demo text,you can write your own content here.</p>
          </div>
        </div>
        <div className="skillbar">
          <img src={webdesign} alt="Web design" className="skillbarimg" />
          <div className="skillbartext">
            <h3>Web design</h3>
            <p>this is a demo text,you can write your own content here.</p>
          </div>
        </div>
        <div className="skillbar">
          <img src={appdesign} alt="App design" className="skillbarimg" />
          <div className="skillbartext">
            <h3>App design</h3>
            <p>You can write text related to app development here</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
