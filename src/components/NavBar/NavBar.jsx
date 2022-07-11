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

const setActive = ({ isActive }) => isActive ? s.nav__link_active : s.nav__link;

export default function NavBar() {
   return (
      <header className={s.header}>
         <nav className={s.nav}>
            <NavLink to='/'
               className={s.link__logo}>
               <motion.div
               initial={{ scale: 0 }}
               animate={{ rotate: 360, scale: 1 }}
               transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20 }}>
            <img src={myLogoReact} alt='my logo' className={s.link__logo_react} />
               </motion.div>
               <img src={myLogo} alt='my logo'  className={s.link__logo_name}
               />
            </NavLink>
            <NavLink to='/' className={setActive}>
               Home
               <AiOutlineHome style={{ width: "25px", height: "25px" }} />
            </NavLink>
            <NavLink to='/about' className={setActive}>
               About
               <AiOutlineInfoCircle style={{ width: "25px", height: "25px" }} />
            </NavLink>
            <NavLink to='/benefits' className={setActive}>
               Benefits
               <BsListStars style={{ width: "25px", height: "25px" }} />
            </NavLink>
            <NavLink to='/portfolio' className={setActive}>
               Portfolio
               <AiOutlineFolder style={{ width: "25px", height: "25px" }} />
            </NavLink>
            <NavLink to='/contact' className={setActive}
         >Contact
               <IoIosContact style={{ width: "25px", height: "25px" }} />
               </NavLink>
         </nav>
            <ul className={s.list}>
               <li ><a className={s.list__link} href="https://github.com/andrpoch"><AiFillGithub style={{ width: "25px", height: "25px" }} /></a></li>
               <li><a className={s.list__link} href="https://www.linkedin.com/in/andr-poch/"><AiOutlineLinkedin style={{ width: "25px", height: "25px" }} /></a></li>
               <li><a className={s.list__link} href="https://t.me/andr_poch"><FaTelegramPlane style={{ width: "25px", height: "25px" }} /></a></li>
            </ul>
         </header>
   )
};
