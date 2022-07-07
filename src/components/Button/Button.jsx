import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsChevronDoubleDown } from 'react-icons/bs';
import { motion } from "framer-motion"
import s from './Button.module.scss';

export default function Button({path}) {
   return (
      <nav className={s.button}>
         <NavLink to={path} className={s.button__link}>
            <motion.div
               animate={{ y: 50 }}
               transition={{ ease: "easeOut", duration: 2, repeat: Infinity }}
            >
               <BsChevronDoubleDown style={{ width: "40px", height: "40px" }} />
            </motion.div>
         </NavLink>
      </nav>
   )
};