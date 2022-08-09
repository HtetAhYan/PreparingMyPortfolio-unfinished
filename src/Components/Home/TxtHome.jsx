import React from 'react'
import { motion } from 'framer-motion';
import './Styles/Txt.css'
function TxtHome() {
  return (
    <div className='TxtH' style={{position:'absolute'}}>
      <motion.p initial={{opacity:0,y:120,color: 'black'}} animate={{opacity:1,y:0,color:'#ffffff'}} transition={{delay:1,duration: 0.5, type:'tween'}} >
       A front-end web developer<br/>
      who loves creating interactive websites 
    

      </motion.p>
    </div>
  )
}

export default TxtHome
