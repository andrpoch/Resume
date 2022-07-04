import React from 'react';
import { motion } from "framer-motion"
import { NavLink } from 'react-router-dom';
import {
   AiOutlineHome,
   AiOutlineInfoCircle,
   AiOutlineFolder,
   AiFillGithub,
   AiOutlineLinkedin,

} from 'react-icons/ai';
import { BsListStars } from "react-icons/bs";
import { IoIosContact } from 'react-icons/io';
import { FaTelegramPlane } from 'react-icons/fa';
import myLogo from '../../assets/logo/myLogo.svg';
import myLogoReact from '../../assets/logo/myLogoReact.svg';
import s from './NavBar.module.scss';

export default function NavBar() {
   return (
      <header className={s.header}>
         <nav className={s.nav}>
            <NavLink to='/' className={s.linkLogo}>
               <motion.div
               initial={{ scale: 0 }}
               animate={{ rotate: 360, scale: 1 }}
               transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20 }}>
            <img src={myLogoReact} alt='my logo' className={s.logoReact} />
               </motion.div>
               <img src={myLogo} alt='my logo'  className={s.logo}
               />
            </NavLink>
            <NavLink to='/' className={s.link}>
               Home
               <AiOutlineHome style={{ width: "25px", height: "25px" }} />
            </NavLink>
            <NavLink to='/about' className={s.link}>
               About
               <AiOutlineInfoCircle style={{ width: "25px", height: "25px" }} />
            </NavLink>
            <NavLink to='/benefits' className={s.link}    >
               Benefits
               <BsListStars style={{ width: "25px", height: "25px" }} />
            </NavLink>
            <NavLink to='/portfolio' className={s.link}  >
               Portfolio
               <AiOutlineFolder style={{ width: "25px", height: "25px" }} />
            </NavLink>
            <NavLink to='/contact' className={s.link}
         >Contact
               <IoIosContact style={{ width: "25px", height: "25px" }} />
               </NavLink>
         </nav>
            <ul className={s.socialList}>
               <li ><a className={s.socialLink} href="https://github.com/andrpoch"><AiFillGithub style={{ width: "25px", height: "25px" }} /></a></li>
               <li><a className={s.socialLink} href="https://www.linkedin.com/in/andr-poch/"><AiOutlineLinkedin style={{ width: "25px", height: "25px" }} /></a></li>
               <li><a className={s.socialLink} href="https://t.me/andr_poch"><FaTelegramPlane style={{ width: "25px", height: "25px" }} /></a></li>
            </ul>
         </header>
   )
};
