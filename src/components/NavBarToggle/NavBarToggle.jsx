import React,{ useRef } from 'react';
import { motion, useCycle } from "framer-motion";
import { NavLink } from 'react-router-dom';
import {
   AiOutlineHome,
   AiOutlineInfoCircle,
   AiOutlineFolder
} from 'react-icons/ai';
import { BsListStars } from "react-icons/bs";
import { IoIosContact } from 'react-icons/io';
import myLogo from '../../assets/logo/myLogo.svg';
import MenuToggle from '../MenuToggle/MenuToggle';
import useDimensions from './useDimensions';
import s from './NavBarToggle.module.scss';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export default function NavBarToggle() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
 <motion.header
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className={s.header}
    >
              <NavLink to='/'
              className={s.header__logo}>
              <img src={myLogo} alt='my logo'  className={s.header__logo_name}
              />
            </NavLink>
      <motion.div className={s.header__background} variants={sidebar}>
        <nav className={s.nav}>
            <NavLink onClick={toggleOpen} to='/' className={({ isActive }) =>
              isActive ? s.nav__link_active : s.nav__link}>
              Home
              <AiOutlineHome style={{ width: "25px", height: "25px" }} />
            </NavLink>
            <NavLink  onClick={toggleOpen} to='/about' className={({ isActive }) =>
              isActive ? s.nav__link_active : s.nav__link}>
              About
              <AiOutlineInfoCircle style={{ width: "25px", height: "25px" }} />
            </NavLink>
            <NavLink onClick={toggleOpen} to='/benefits' className={({ isActive }) =>
              isActive ? s.nav__link_active : s.nav__link}    >
              Benefits
              <BsListStars style={{ width: "25px", height: "25px" }} />
            </NavLink>
            <NavLink onClick={toggleOpen} to='/portfolio' className={({ isActive }) =>
              isActive ? s.nav__link_active : s.nav__link}  >
              Portfolio
              <AiOutlineFolder style={{ width: "25px", height: "25px" }} />
            </NavLink>
            <NavLink onClick={toggleOpen} to='/contact' className={({ isActive }) =>
              isActive ? s.nav__link_active : s.nav__link}
        >Contact
              <IoIosContact style={{ width: "25px", height: "25px" }} />
              </NavLink>
        </nav>
      </motion.div>
          <MenuToggle toggle={() => toggleOpen()} />
    </motion.header>
  )
}