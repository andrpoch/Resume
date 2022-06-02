import React from 'react';
import s from './Home.module.css';
import Container from '../Container/Container'
export default function Home() {
   return (
         <Container>
      <section className={s.home}>
           <div className={s.image}></div>
         <h1 className={s.name}>Andrew Pochapskyi</h1>
            <p className={s.title}>I'm a FullStack Developer</p>
      </section>
         </Container>
   )
};
