// import React from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import { BsArrowUpCircleFill } from 'react-icons/bs';
// import s from './Button.module.scss';

// export default function Button() {
//      const controls = useAnimation();

//   const variants = {
//     hover: {
//       width: 100,
//       radius: "15px",
//       background: "blue",
//       transition: {
//         type: "tween",
//         duration: 0.4,
//         ease: [0.66, -0.66, 0.38, 1.55],
//         staggerChildren: 0.1
//       }
//     },
//     unhover: {
//       size: 40,
//       background: "white",
//       radius: "30px",
//       transition: {
//         type: "tween",
//         duration: 0.4,
//         ease: [0.66, -0.66, 0.38, 1.55]
//       }
//     }
//   };

//   const item = {
//     hover: {
//       opacity: 1,
//       transition: {
//         type: "tween",
//         duration: 0.3,
//         ease: [0.66, -0.66, 0.38, 1.55]
//       }
//     },
//     unhover: {
//       opacity: 0,
//       transition: {
//         type: "tween",
//         duration: 0.3,
//         ease: [0.66, -0.66, 0.38, 1.55]
//       }
//     }
//   };

//   const icon = {
//     hover: {
//       opacity: 0,
//       rotate: 360,
//       transition: {
//         type: "tween",
//         duration: 0.3,
//         ease: [0.66, -0.66, 0.38, 1.55]
//       }
//     },
//     unhover: {
//       opacity: 1,
//       rotate: 0,
//       transition: {
//         type: "tween",
//         duration: 0.3,
//         ease: [0.66, -0.66, 0.38, 1.55]
//       }
//     }
//   };

//    return (
//         <motion.div
//       radius={"50%"}
//       size={40}
//       style={{
//         fontFamily: "Montserrat, Work Sans, sans-serif",
//         fontWeight: "bold",
//         letterSpacing: "-0.04em",
//         fontSize: 16,
//         marginRight: "10px",
//         color: "white",
//         display: "flex", // Set the display value to flex
//         justifyContent: "center", // Center all children elements on the x axis
//         alignItems: "center"
//       }}
//       background={"white"}
//       animate={controls}
//       variants={variants}
//       onHoverStart={() => {
//         controls.start("hover");
//       }}
//       onHoverEnd={() => {
//         controls.start("unhover");
//       }}
//     >
//       <motion.div
//          center='true'
//          size={20}
//          background={""}
//          variants={icon}
//          color={"black"}
//          initial={"unhover"}
//       >
//          <BsArrowUpCircleFill/>
//       </motion.div>
//       <motion.div
//         width={"auto"} // Set the width to the width of the letter
//         height={16} // Set the height to the height of the text
//         background={""}
//         style={{ position: "relative" }} // Position elements
//         variants={item}
//       //   initial={{ opacity: 0 }}
//       >
//         Go Top
//       </motion.div>
//     </motion.div>
//    )
// };
import React from "react";
import { motion, useAnimation } from "framer-motion";
// import { BsArrowUpCircleFill } from 'react-icons/bs';
import { Icon } from "semantic-ui-react";
export default function Button() {
  const controls = useAnimation();

  const variants = {
    hover: {
      width: 100,
      radius: "15px",
      background: "black",
      transition: {
        type: "tween",
        duration: 0.4,
        ease: [0.66, -0.66, 0.38, 1.55],
        staggerChildren: 0.1
      }
    },
    unhover: {
      size: 40,
      background: "black",
      radius: "30px",
      transition: {
        type: "tween",
        duration: 0.4,
        ease: [0.66, -0.66, 0.38, 1.55]
      }
    }
  };

  const item = {
    hover: {
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.3,
        ease: [0.66, -0.66, 0.38, 1.55]
      }
    },
    unhover: {
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.3,
        ease: [0.66, -0.66, 0.38, 1.55]
      }
    }
  };

  const icon = {
    hover: {
      opacity: 0,
      rotate: 360,
      transition: {
        type: "tween",
        duration: 0.3,
        ease: [0.66, -0.66, 0.38, 1.55]
      }
    },
    unhover: {
      opacity: 1,
      rotate: 0,
      transition: {
        type: "tween",
        duration: 0.3,
        ease: [0.66, -0.66, 0.38, 1.55]
      }
    }
  };

  return (
    <motion.div
      radius={"50%"}
      size={40}
      style={{
        fontFamily: "Montserrat, Work Sans, sans-serif",
        fontWeight: "bold",
        letterSpacing: "-0.04em",
        fontSize: 16,
        marginRight: "10px",
        color: "white",
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"
      }}
      background={"blue"}
      animate={controls}
      variants={variants}
      onHoverStart={() => {
        controls.start("hover");
      }}
      onHoverEnd={() => {
        controls.start("unhover");
      }}
    >
      <motion.div
        center='true'
        size={20}
        variants={icon}
        //   background={""}
        color={"black"}
        initial={"unhover"}
        >
                   <Icon name="arrow up" />
          {/* <BsArrowUpCircleFill/>  */}
      </motion.div>
      <motion.div
        width={"auto"} // Set the width to the width of the letter
        height={16} // Set the height to the height of the text
        background={""}
        style={{ position: "relative" }} // Position elements
        variants={item}
        initial={{ opacity: 0 }}
      >
        Go Top
      </motion.div>
    </motion.div>
  );
}
