import React from 'react';
import s from './About.module.css';
import Container from '../Container/Container';
import Tilt from 'react-parallax-tilt';
import {
   FaBirthdayCake,
   FaRegCalendarAlt,
   FaSearchLocation,
   FaGamepad,
   FaPhoneAlt
} from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai'
export default function About() {
   return (
      <Container>
         <section className={s.about}>
            <p className={s.mainText}>Biography</p>
               <h2 className={s.mainName}>About me</h2>
            <div className={s.aboutInner}>
               <div className={s.left}>
                     <div className={s.bg} />
                  <Tilt>
                     <div className={s.image} />
                  </Tilt>
               </div>
               <div className={s.right}>
                  <div className={s.aboutTitle}>
                     <h3 className={s.aboutName}>I'm Andrew Pochapskyi and
                     <span className={s.textEffect}></span></h3>
                  </div>
                  <div className={s.aboutMe}>
                     <p className={s.aboutMeText}>Photographer
Hi! My name is <span>Andrew Pochapskyi</span>. I am a Web Developer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success.</p>
                  </div>
                  <div className={s.aboutContact}>
                     <ul className={s.aboutLisu}>
                        <li className={s.aboutItem}>
                           <FaBirthdayCake />
                           <p>
                              Birthday: 30.11.2001</p></li>
                          <li className={s.aboutItem}>
                           <FaRegCalendarAlt />
                           <p>
                             Age: 20</p></li>
                          <li className={s.aboutItem}>
                           <FaSearchLocation />
                           <p>
                             Location: <a href='https://goo.gl/maps/8Kx1XYZW8k4X3sqd9'>Ukraine,Vinnytsia</a></p></li>
                          <li className={s.aboutItem}>
                           <FaGamepad />
                           <p>
                       Interests: Coding, Reading</p></li>
                          <li className={s.aboutItem}>
                           <AiOutlineMail />
                           <p>
                        <a href='mailto:andrpoch25gmail.com'>andrpoch25gmail.com</a></p></li>
                        <li className={s.aboutItem}>
                           <FaPhoneAlt />
                           <p>
                       <a href='tel:+380938921172'>+38(093)8921172</a></p></li>
                     </ul>
                  </div>
                  <a href='https://fv20.failiem.lv/down.php?cf&i=be75vfrgn&n=ResumeCV.pdf' className={s.dowloadLink} download>Dowload CV</a>
               </div>
            </div>
               {/* <div className={s.bg}/> */}

         </section>
      </Container>
   )
};
