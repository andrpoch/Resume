import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import s from './Contact.module.css';
import Container from '../Container/Container';

export default function ContactUs ()  {
   const form = useRef();
   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
       .then((result) => {
         alert("Message Sent, We will get back to you shortly", result.text);
       }, (error) => {
          alert("An error occurred, Please try again", error.text);
      });
  };

   return (
   <Container>
      <section className={s.contact}>
         <p className={s.mainText}>Contact</p>
            <h2 className={s.mainName}>Get in Touch</h2>
            <div className={s.formWrapper}>
               <p className={s.text}>
                  Please fill out the form on this section to contact with me. Or call between 9:00 and 20:00, Monday through Friday
               </p>
               <form ref={form} onSubmit={sendEmail}>
                  <div className={s.inputWrapper}>
                  <label>Name</label>
                     <input className={s.input} required type="text" name="name" />
                  </div>
                  <div className={s.inputWrapper}>
                  <label>Email</label>
                     <input className={s.input} required type="email" name="email" />
                  </div>
                  <div className={s.inputWrapper}>
                  <label>Message</label>
                     <textarea className={s.input} required name="message" />
                  </div>
                     <input className={s.input} type="submit" value="Send" />
               </form>
            </div>
            <div className="mapWrapper">
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11970.741334879223!2d28.470005161531084!3d49.23310390512744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d5b65195a6489%3A0xcbd4e159eedd74fe!2z0JLQuNC90L3QuNGG0LAsINCS0LjQvdC90LjRhtC60LDRjyDQvtCx0LvQsNGB0YLRjCwgMjEwMDA!5e0!3m2!1sru!2sua!4v1656131783870!5m2!1sru!2sua" title="Vinnitsa map" width="600" height="450" style={{ border: 0 }}  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
      </section>
   </Container>
  );
};
