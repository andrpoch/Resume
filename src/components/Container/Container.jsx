import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import s from "./Container.module.scss";

function Container({ children }) {
const AnimationSettings = {
  transition: { duration: 0.5 },
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 }
};
  return (
  <AnimatePresence>
    <motion.div  key="1" {...AnimationSettings}>
      <div className={s.container}>{children}</div>
    </motion.div>
  </AnimatePresence>
  );
}

export default Container;