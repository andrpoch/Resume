import React from 'react';
import s from './Benefits.module.css';
import Container from '../Container/Container';
import {IoShuffle} from 'react-icons/io5'
import { IoIosPeople } from 'react-icons/io';
import { FaFistRaised } from 'react-icons/fa'
import {GiMagnifyingGlass,GiUnbalanced} from 'react-icons/gi'
import Responsibility from '../../assets/logo/Responsibility.svg';
export default function Benefits() {
   return (
      <Container>
         <section className={s.benefits}>
            <p className={s.mainText}>Benefits</p>
            <h2 className={s.mainName}>My Pros</h2>
            <div className={s.wrapper}>
               <ul className={s.list}>
                  <li className={s.item}>
                     <div className={s.card}>
                        <img src={Responsibility} alt='Responsibility'/>
                        <h3 className={s.title}>Responsibility</h3>
                        <p className={s.text}>I treat my work responsibly, and I understand that everything is needed on time and with high quality.</p>
                     </div>
                  </li>
                  <li className={s.item}>
                     <div className={s.card}>
                        <IoIosPeople style={{ width: "50px", height: "50px", color: 'grey'}} />
                        <h3 className={s.title}>Teamwork</h3>
                        <p className={s.text}>He had experience working in a team, helping the team and thus increasing efficiency.</p>
                     </div>
                  </li>
                  <li className={s.item}>
                     <div className={s.card}>
                        <FaFistRaised style={{ width: "50px", height: "50px", color: 'grey'}} />
                        <h3 className={s.title}>Hardworking</h3>
                        <p className={s.text}>I love what I do, I also like to find various interesting solutions to accomplish my task.</p>
                     </div>
                  </li>
                  <li className={s.item}>
                     <div className={s.card}>
                        <GiMagnifyingGlass style={{ width: "50px", height: "50px", color: 'grey'}} />
                        <h3 className={s.title}>Meticulous</h3>
                        <p className={s.text}>I work so that everything was clearly in accordance with the terms of reference, and so that there were no questions.</p>
                     </div>
                  </li>
                  <li className={s.item}>
                     <div className={s.card}>
                     <IoShuffle style={{
                        width: "50px", height: "50px", color: 'grey',
                     transform: 'rotate(270deg)'}}
                        />
                        <h3 className={s.title}>Flexible</h3>
                     <p className={s.text}>
                        I can adapt to different problems and find interesting solutions, as well as learn new things
                        </p>
                     </div>
                  </li>
                  <li className={s.item}>
                     <div className={s.card}>
                        <GiUnbalanced style={{ width: "50px", height: "50px", color: 'grey'}} />
                        <h3 className={s.title}>Balanced</h3>
                        <p className={s.text}>I find a balance for my life so as to be effective in my work, and perform more and better.</p>
                     </div>
                  </li>
               </ul>
               </div>
         </section>
      </Container>
   )
};
