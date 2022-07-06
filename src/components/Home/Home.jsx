import React from 'react';
import Container from '../Container/Container';
import Button from '../Button/Button'
import s from './Home.module.scss';
import img from '../../assets/images/meHomeImg.jpg';

export default function Home() {
   return (
   <Container>
         <section className={s.home}>
            <img
               src={img}
               alt="Me"
               className={s.home__image}
            />
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
         <Button />
         </section>
   </Container>
   )
};
