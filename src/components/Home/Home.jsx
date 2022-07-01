import React from 'react';
import s from './Home.module.scss';
import Container from '../Container/Container';

export default function Home() {
   return (
         <Container>
      <section className={s.home}>
           <div className={s.image}></div>
         <h1 className={s.name}>Andrew Pochapskyi</h1> 
         <div className={s.typewriter}>
    <p className={s.title}>I'm</p>
 <span className={s.type}>
  <span>
    <span> Web Developer</span>
    <span> Front-End Developer</span>
    <span> Full Stack developer</span>
  </span>
           </span>
         </div>
      </section>
         </Container>
   )
};
