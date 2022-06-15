import React from 'react';
import s from './Portfolio.module.css';
import Container from '../Container/Container';

export default function Portfolio() {
   return (
    <Container>
         <section className={s.portfolio}>
             <p className={s.mainText}>Portfolio</p>
            <h2 className={s.mainName}>Featured Works</h2>
           
         </section>
      </Container>
   )
};
