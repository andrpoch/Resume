import React from 'react';
import s from './Home.module.scss';
import Container from '../Container/Container';

export default function Home() {
   return (
   <Container>
      <section className={s.home}>
         <div className={s.home__image}></div>
            <h1 className={s.home__name}>Andrew Pochapskyi</h1>
         <div className={s.home__typewriter}>
            <p className={s.home__title}>I'm</p>
         <span className={s.home__type}>
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
