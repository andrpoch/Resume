import React from 'react';
import { NavLink } from 'react-router-dom';
import {
   AiOutlineHome,
   AiOutlineInfoCircle,
   AiOutlineFolder,
   AiFillGithub,
   AiOutlineLinkedin,

} from 'react-icons/ai';
import { IoIosContact } from 'react-icons/io';
import { FaTelegramPlane } from 'react-icons/fa';
import s from './NavBar.module.css';
import Services from '../../assets/images/Services';

export default function NavBar() {
   return (
         <header className={s.header}>
            <nav className={s.navigation}>
            <NavLink className={s.navigationLink}
            activeClassName={s.navigationActive}  to='/'>
               <p className={s.text}>Home</p>
               <AiOutlineHome style={{ width: "25px", height: "25px" }} />
            </NavLink>
            <NavLink className={s.navigationLink}
            activeClassName={s.navigationActive}    to='/about'>
               <p className={s.text}>About</p>
               <AiOutlineInfoCircle style={{ width: "25px", height: "25px" }} />
            </NavLink>
            <NavLink className={s.navigationLink}
            activeClassName={s.navigationActive}    to='/services'>
               <p className={s.text}>Services</p>
               {/* <GrServices style={{ width: "25px", height: "25px" }} /> */}
               <Services />
            </NavLink>
            <NavLink className={s.navigationLink}
            activeClassName={s.navigationActive}    to='/portfolio'>
               <p className={s.text}>Portfolio</p>
               <AiOutlineFolder style={{ width: "25px", height: "25px" }} />
            </NavLink>
            <NavLink className={s.navigationLink}
            activeClassName={s.navigationActive}    to='/contact'>
               <p className={s.text}>Contact</p>
               <IoIosContact style={{ width: "25px", height: "25px" }} />
               </NavLink>
         </nav>
         <div className={s.socialWrapper}>
            <ul className={s.socialList}>
               <li ><a className={s.socialLink} href="https://github.com/andrpoch"><AiFillGithub style={{ width: "25px", height: "25px" }} /></a></li>
               <li><a className={s.socialLink} href="https://github.com/andrpoch"><AiOutlineLinkedin style={{ width: "25px", height: "25px" }} /></a></li>
               <li><a className={s.socialLink} href="https://github.com/andrpoch"><FaTelegramPlane style={{ width: "25px", height: "25px" }} /></a></li>
            </ul>
         </div>
         </header>
   )
};
