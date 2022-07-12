import React from 'react';
import { motion } from "framer-motion"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import Container from '../Container/Container';
import s from './Contact.module.scss';
import feedbackSchema from './validationSchema';

export default function Contact ()  {

const sendEmail = (object) => {
   emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, object, process.env.REACT_APP_PUBLIC_KEY)
   .then(() => {
   toast.success("Message sent!", {
   theme: "colored"})
   })
   .catch(() => {
   toast.error("Error! Please try again", {
   theme: "colored"
         })
      });
   };

   return (
   <Container>
         <section className={s.contact}>
            <ToastContainer />
            <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={{ x: 100 }}
            > <p className={s.contact__title}>Contact</p> </motion.a>
            <h2 className={s.contact__name}>Get in Touch</h2>
               <p className={s.contact__text}>
                  Please fill out the form on this section to contact with me. Or call between 9:00 and 20:00, Monday through Friday
               </p>
            <div className={s.contact__wrapper}>
         <Formik
            initialValues={{
               name: "",
               email: "",
               message: "",
            }}
         validationSchema={feedbackSchema}
         enableReinitialize
         validateOnBlur
            onSubmit={(values) => sendEmail(values)}>
            {() => (
         <Form className={s.contact__form}>
            <Field type="text" name="name" className={s.contact__form_input} placeholder="Type in your name"/>
            <ErrorMessage name="name" component="div" style={{color:"red"}}/>
            <Field type="email" name="email" className={s.contact__form_input} placeholder="Type in your email"/>
            <ErrorMessage name="email" component="div" style={{color:"red"}}/>
            <Field type="message" name="message" className={s.contact__form_textarea} as="textarea" placeholder="Type in your message"/>
            <ErrorMessage name="message" component="div" style={{color:"red"}}/>
            <button type="submit" className={s.contact__form_btn}>
               Send
            </button>
            </Form>
            )}
         </Formik>
               <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11970.741334879223!2d28.470005161531084!3d49.23310390512744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d5b65195a6489%3A0xcbd4e159eedd74fe!2z0JLQuNC90L3QuNGG0LAsINCS0LjQvdC90LjRhtC60LDRjyDQvtCx0LvQsNGB0YLRjCwgMjEwMDA!5e0!3m2!1sru!2sua!4v1656131783870!5m2!1sru!2sua" title="Vinnitsa map" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className={s.map} />
            </div>
      </section>
   </Container>);
};
