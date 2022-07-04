import React from 'react';
import s from './Footer.module.scss';
import { AiFillGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';

export default function Footer() {
   return (
      <footer className={s.footer}>
            <p className={s.footer__text}>© Copyright 2022. All rights are reserved.</p>
   <ul className={s.footer__list}>
               <li ><a className={s.footer__link} href="https://github.com/andrpoch"><AiFillGithub style={{ width: "25px", height: "25px" }} /></a></li>
               <li><a className={s.footer__link} href="https://www.linkedin.com/in/andr-poch/"><AiOutlineLinkedin style={{ width: "25px", height: "25px" }} /></a></li>
               <li><a className={s.footer__link} href="https://t.me/andr_poch"><FaTelegramPlane style={{ width: "25px", height: "25px" }} /></a></li>
            </ul>
         </footer>
   )
};
