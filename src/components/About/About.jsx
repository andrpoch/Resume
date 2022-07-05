import React from 'react';
import Container from '../Container/Container';
import { motion, useAnimation } from 'framer-motion';
import {
   FaBirthdayCake,
   FaRegCalendarAlt,
   FaSearchLocation,
   FaGamepad,
   FaPhoneAlt
} from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai'
import s from './About.module.scss';
import img from '../../assets/images/meHomeImg.jpg'

export default function About() {
   const imgAnimation = useAnimation();
   const bgAnimate = useAnimation();

   const handleMouseMoved = e => {
   const { clientX, clientY } = e
   let offsetX = clientX - window.innerWidth / 2;
   let offsetY = clientY - window.innerWidth / 2;
      imgAnimation.start({ x: offsetX / 20, y: offsetY / 20 });
   bgAnimate.start({ x: offsetX / 40, y: offsetY / 40 });
   }

   return (
      <Container>
         <section className={s.about}>
            <p className={s.about__text}>Biography</p>
               <h2 className={s.about__name}>About me</h2>
            <div className={s.about__inner}>
               <div className={s.left}>
                  <motion.img
                     animate={imgAnimation}
                     onMouseMove={e => handleMouseMoved(e)}
                     src={img}
                     alt="Me"
                  />
                  <motion.div
                     animate={bgAnimate}
                     className={s.left__bg} />
               </div>
               <div className={s.right}>
                  <div className={s.right__title}>
                     <h3 className={s.right__name}>I'm Andrew Pochapskyi and </h3>
                     <span className={s.right__type}>
                  <span>
                     <span> Web Developer</span>
                     <span> Front-End Developer</span>
                     <span> Full Stack developer</span>
                  </span>
                  </span>
                  </div>
         <div className={s.me}>
            <p className={s.me__text}>
         Hi! My name is <span>Andrew Pochapskyi</span>. I am a Web Developer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success.</p>
                  </div>
                     <ul className={s.me__list}>
                        <li className={s.me__item}>
                           <FaBirthdayCake style={{ color: 'grey'}} />
                           <p>
                              Birthday: </p> 30.11.2001</li>
                          <li className={s.me__item}>
                           <FaRegCalendarAlt style={{ color: 'grey'}} />
                           <p>
                             Age: </p>20</li>
                          <li className={s.me__item}>
                           <FaSearchLocation style={{ color: 'grey'}} />
                           <p>
                             Location:</p> <a href='https://goo.gl/maps/8Kx1XYZW8k4X3sqd9'>Ukraine,Vinnytsia</a></li>
                          <li className={s.me__item}>
                           <FaGamepad style={{ color: 'grey'}} />
                           <p>
                       Interests:</p> Coding, Reading</li>
                          <li className={s.me__item}>
                           <AiOutlineMail style={{ color: 'grey'}} />
                           <p>Mail:</p>
                        <a className={s.hvrUnderlineFromLeft}
                        href='mailto:andrpoch25gmail.com'>andrpoch25gmail.com</a></li>
                        <li className={s.me__item}>
                           <FaPhoneAlt  style={{ color: 'grey'}} />
                           <p>Phone:</p>
                       <a className={s.hvrUnderlineFromLeft} href='tel:+380938921172'>+38(093)8921172</a></li>
                  </ul>
                   <a href='https://fv20.failiem.lv/down.php?cf&i=be75vfrgn&n=ResumeCV.pdf' className={s.me__btn} download>Dowload CV</a>
                  </div>
                 
               </div>
         </section>
      </Container>
   )
};
