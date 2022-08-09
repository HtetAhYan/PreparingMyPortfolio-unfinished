import React from "react";
import CakeIcon from "@mui/icons-material/Cake";
import SchoolIcon from '@mui/icons-material/School';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { motion } from "framer-motion";
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import "./Style/ShowCase.css";
function ShowCase() {
  const ScrollAnima={
    offLeft: {x:-100},offRight:{x:100},
    on: {x:0,transition: {type:"spring",bounce:"0.5",duration:2} },onPlus:{x:0,transition: {type:"spring",bounce:"0.8",duration:4}}
  }
  return (
   
    <div className="ShowCase">
    
      <ul className="ShowcaseItems">
        <motion.li className="items1"
          variants={ScrollAnima}
          initial={"off"} animate={"on"}
          viewport={{once:false,amount:0.5}}
          drag
          dragConstraints={{
            top: -100,
            left: -100,
            right: 100,
            bottom: 100
          }}
        >
        
          <CakeIcon />
          <h4>Born on 2003</h4>
        </motion.li>
        <motion.li className="items2"  variants={ScrollAnima}
          drag
          dragConstraints={{
            top: -100,
            left: -100,
            right: 100,
            bottom: 100
          }}
          initial={"off"} animate={"on"}>
          <SchoolIcon />
          <h4>Finished Matriculation in 2020</h4>
        </motion.li>
      </ul>

      <ul className="ShowcaseItems two">
        <motion.li className="items2" variants={ScrollAnima}
          drag
          dragConstraints={{
            top: -100,
            left: -100,
            right: 100,
            bottom: 100
          }}
          initial={"off"}
           animate={"on"} >
          <AutoStoriesIcon />
          <h4>Start learning JavaScript in early 2022</h4>
        </motion.li>
        <motion.li className="items2" variants={ScrollAnima}
          drag
          dragConstraints={{
            top: -100,
            left: -100,
            right: 100,
            bottom: 100
          }}
          initial={"off"} animate={"on"}>
     <FlagCircleIcon/>
          <h5 style={{letterSpacing:'1px'}}>Started My web developer journey as a <a href="#">FreeLancer</a> in 2022, July</h5>
        </motion.li>
      </ul>
    </div>
   
  );
}

export default ShowCase;
