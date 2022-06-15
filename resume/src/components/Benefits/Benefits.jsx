import React from 'react';
import s from './Benefits.module.css';
import Container from '../Container/Container';

export default function Benefits() {
   return (
      <Container>
         <section className={s.benefits}>
             <p className={s.mainText}>Benefits</p>
            <h2 className={s.mainName}>My Pros</h2>
             <div className={s.benefitsWrap}>
               <ul className={s.list}>
                  <li className={s.item}>
                     <div className={s.card}>
                        <h3 className={s.title}></h3>
                        <p className={s.text}></p>
                     </div>
                  </li>
                  <li className={s.item}>
                     <div className={s.card}>
                        <h3 className={s.title}></h3>
                        <p className={s.text}></p>
                     </div>
                  </li>
                  <li className={s.item}>
                     <div className={s.card}>
                        <h3 className={s.title}></h3>
                        <p className={s.text}></p>
                     </div>
                  </li>
                  <li className={s.item}>
                     <div className={s.card}>
                        <h3 className={s.title}></h3>
                        <p className={s.text}></p>
                     </div>
                  </li>
                  <li className={s.item}>
                     <div className={s.card}>
                        <h3 className={s.title}></h3>
                        <p className={s.text}></p>
                     </div>
                  </li>
                  <li className={s.item}>
                     <div className={s.card}>
                        <h3 className={s.title}></h3>
                        <p className={s.text}></p>
                     </div>
                  </li>
               </ul>
            </div>
         </section>
      </Container>
   )
};
