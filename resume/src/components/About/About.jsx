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
    <h3 className={s.aboutName}>I'm Andrew Pochapskyi and </h3>
    <span className={s.type}>
  <span>
    <span> Web Developer</span>
    <span> Front-End Developer</span>
    <span> Full Stack developer</span>
  </span>
</span>
                  </div>
         <div className={s.aboutMe}>
             <p className={s.aboutMeText}>
          Hi! My name is <span>Andrew Pochapskyi</span>. I am a Web Developer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success.</p>
                  </div>
                     <ul className={s.list}>
                        <li className={s.item}>
                           <FaBirthdayCake style={{ color: 'grey'}} />
                           <p>
                              Birthday: </p> 30.11.2001</li>
                          <li className={s.item}>
                           <FaRegCalendarAlt style={{ color: 'grey'}} />
                           <p>
                             Age: </p>20</li>
                          <li className={s.item}>
                           <FaSearchLocation style={{ color: 'grey'}} />
                           <p>
                             Location:</p> <a href='https://goo.gl/maps/8Kx1XYZW8k4X3sqd9'>Ukraine,Vinnytsia</a></li>
                          <li className={s.item}>
                           <FaGamepad style={{ color: 'grey'}} />
                           <p>
                       Interests:</p> Coding, Reading</li>
                          <li className={s.item}>
                           <AiOutlineMail style={{ color: 'grey'}} />
                           <p>Mail:</p>
                        <a className={s.hvrUnderlineFromLeft} 
                        href='mailto:andrpoch25gmail.com'>andrpoch25gmail.com</a></li>
                        <li className={s.item}>
                           <FaPhoneAlt  style={{ color: 'grey'}} />
                           <p>Phone:</p>
                       <a className={s.hvrUnderlineFromLeft} href='tel:+380938921172'>+38(093)8921172</a></li>
                  </ul>
                   <a href='https://fv20.failiem.lv/down.php?cf&i=be75vfrgn&n=ResumeCV.pdf' className={s.dowloadLink} download>Dowload CV</a>
                  </div>
                 
               </div>
         </section>
      </Container>
   )
};
