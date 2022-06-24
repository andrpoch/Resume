import React from 'react';
import s from './Contact.module.css';
import Container from '../Container/Container';

export default function Contact() {
   return (
    <Container>
         <section className={s.contact}>
             <p className={s.mainText}>Contact</p>
               <h2 className={s.mainName}>Get in Touch</h2>
         </section>
      </Container>
   )
};