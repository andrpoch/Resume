import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsChevronDoubleDown } from 'react-icons/bs';
import { motion } from "framer-motion"

export default function Button({path}) {
   return (
         <NavLink to={path}>
            <motion.div
               animate={{ y: 50 }}
               transition={{ ease: "easeOut", duration: 2, repeat: Infinity }}
            >
               <BsChevronDoubleDown style={{ width: "40px", height: "40px" }} />
            </motion.div>
         </NavLink>
   )
};