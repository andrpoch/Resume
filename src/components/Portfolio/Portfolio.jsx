import React from 'react';
import Container from '../Container/Container';
import wallet from '../../assets/images/portfolio/wallet-min.jpg'
import contacts from '../../assets/images/portfolio/contacts-min.jpg'
import filmoteka from '../../assets/images/portfolio/filmoteka-min.jpg'
import iceCream from '../../assets/images/portfolio/iceCream-min.jpg'
import slides from '../../assets/images/portfolio/slides-min.jpg'
import s from './Portfolio.module.scss';

export default function Portfolio() {
   return (
    <Container>
         <section className={s.portfolio}>
             <p className={s.mainText}>Portfolio</p>
            <h2 className={s.mainName}>Featured Works</h2>
            <div className={s.wrapper}>
               <ul className={s.list}>
                  <li className={s.item}>
                     <div className={s.overlay}>
                        <div className={s.btnWrapper}>
                           <a href='https://wallet-react-app.netlify.app/login' className={s.btn} target='_blank' rel="noopener noreferrer">Site</a>
                           <a href='https://github.com/andrpoch/wallet-react-project.git' className={s.btn} target='_blank' rel="noopener noreferrer">Code</a>
                        </div>
                        <img src={wallet} alt='Wallet' className={s.img} />
                     </div>
                  </li>
                   <li className={s.item}>
                     <div className={s.overlay}>
                        <div className={s.btnWrapper}>
                           <a href='https://frabjous-seahorse-e40308.netlify.app/' className={s.btn} target='_blank' rel="noopener noreferrer">Site</a>
                           <a href='https://github.com/andrpoch/goit-react-hw-08-phonebook.git' className={s.btn} target='_blank' rel="noopener noreferrer">Code</a>
                        </div>
                        <img src={contacts} alt='Contacts' className={s.img} />
                     </div>
                  </li>
                   <li className={s.item}>
                     <div className={s.overlay}>
                        <div className={s.btnWrapper}>
                           <a href='https://memx86.github.io/team-project-js-tmdb/' className={s.btn} target='_blank' rel="noopener noreferrer">Site</a>
                           <a href='https://github.com/andrpoch/team-project-js-filmoteka.git' className={s.btn} target='_blank' rel="noopener noreferrer">Code</a>
                        </div>
                        <img src={filmoteka} alt='Filmoteka ' className={s.img} />
                     </div>
                  </li>
                   <li className={s.item}>
                     <div className={s.overlay}>
                        <div className={s.btnWrapper}>
                           <a href='https://vatakusi.github.io/team-2-pro/' className={s.btn} target='_blank' rel="noopener noreferrer">Site</a>
                           <a href='https://github.com/andrpoch/html-css-project.git' className={s.btn} target='_blank' rel="noopener noreferrer">Code</a>
                        </div>
                        <img src={iceCream} alt='IceCream ' className={s.img} />
                     </div>
                  </li>
                   <li className={s.item}>
                     <div className={s.overlay}>
                        <div className={s.btnWrapper}>
                           <a href='https://andrpoch.github.io/slides/' className={s.btn} target='_blank' rel="noopener noreferrer">Site</a>
                           <a href='https://github.com/andrpoch/slides.git' className={s.btn} target='_blank' rel="noopener noreferrer">Code</a>
                        </div>
                        <img src={slides} alt='Slides ' className={s.img} />
                     </div>
                  </li>
               </ul>
            </div>
         </section>
      </Container>
   )
};
