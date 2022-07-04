import React from 'react';
import s from './Footer.module.scss';
import { AiFillGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';

import { motion } from "framer-motion"

export default function Footer() {
   return (
      <footer className={s.footer}>
         <motion.div
         initial={{ x: "100%" }}
animate={{ x: "calc(22vw - 100%)" }}
>
            <p className={s.footer__text}>© Copyright 2022. All rights are reserved.</p>
            </motion.div>
                     <motion.div
         initial={{ x: "100%" }}
animate={{ x: "calc(13vw - 100%)" }}
>
   <ul className={s.footer__list}>
               <li ><a className={s.footer__link} href="https://github.com/andrpoch"><AiFillGithub style={{ width: "25px", height: "25px" }} /></a></li>
               <li><a className={s.footer__link} href="https://www.linkedin.com/in/andr-poch/"><AiOutlineLinkedin style={{ width: "25px", height: "25px" }} /></a></li>
               <li><a className={s.footer__link} href="https://t.me/andr_poch"><FaTelegramPlane style={{ width: "25px", height: "25px" }} /></a></li>
            </ul>
            </motion.div>
         </footer>
   )
};
