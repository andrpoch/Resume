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
             <p className={s.portfolio__name}>Portfolio</p>
            <h2 className={s.portfolio__title}>Featured Works</h2>
            <div className={s.portfolio__wrapper}>
               <ul className={s.list}>
                  <li className={s.list__item}>
                     <div className={s.overlay}>
                        <div className={s.overlay__wrapper}>
                           <a href='https://wallet-react-app.netlify.app/login' className={s.overlay__btn} target='_blank' rel="noopener noreferrer">Site</a>
                           <a href='https://github.com/andrpoch/wallet-react-project.git' className={s.overlay__btn} target='_blank' rel="noopener noreferrer">Code</a>
                        </div>
                        <img src={wallet} alt='Wallet' className={s.overlay__img} />
                     </div>
                  </li>
                   <li className={s.list__item}>
                     <div className={s.overlay}>
                        <div className={s.overlay__wrapper}>
                           <a href='https://frabjous-seahorse-e40308.netlify.app/' className={s.overlay__btn} target='_blank' rel="noopener noreferrer">Site</a>
                           <a href='https://github.com/andrpoch/goit-react-hw-08-phonebook.git' className={s.overlay__btn} target='_blank' rel="noopener noreferrer">Code</a>
                        </div>
                        <img src={contacts} alt='Contacts' className={s.overlay__img} />
                     </div>
                  </li>
                   <li className={s.list__item}>
                     <div className={s.overlay}>
                        <div className={s.overlay__wrapper}>
                           <a href='https://memx86.github.io/team-project-js-tmdb/' className={s.overlay__btn} target='_blank' rel="noopener noreferrer">Site</a>
                           <a href='https://github.com/andrpoch/team-project-js-filmoteka.git' className={s.overlay__btn} target='_blank' rel="noopener noreferrer">Code</a>
                        </div>
                        <img src={filmoteka} alt='Filmoteka ' className={s.overlay__img} />
                     </div>
                  </li>
                   <li className={s.list__item}>
                     <div className={s.overlay}>
                        <div className={s.overlay__wrapper}>
                           <a href='https://vatakusi.github.io/team-2-pro/' className={s.overlay__btn} target='_blank' rel="noopener noreferrer">Site</a>
                           <a href='https://github.com/andrpoch/html-css-project.git' className={s.overlay__btn} target='_blank' rel="noopener noreferrer">Code</a>
                        </div>
                        <img src={iceCream} alt='IceCream ' className={s.overlay__img} />
                     </div>
                  </li>
                   <li className={s.list__item}>
                     <div className={s.overlay}>
                        <div className={s.overlay__wrapper}>
                           <a href='https://andrpoch.github.io/slides/' className={s.overlay__btn} target='_blank' rel="noopener noreferrer">Site</a>
                           <a href='https://github.com/andrpoch/slides.git' className={s.overlay__btn} target='_blank' rel="noopener noreferrer">Code</a>
                        </div>
                        <img src={slides} alt='Slides ' className={s.overlay__img} />
                     </div>
                  </li>
               </ul>
            </div>
         </section>
      </Container>
   )
};
