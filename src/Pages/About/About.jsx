
import React,{useState,useEffect} from 'react';
import './Style/About.css'
import { motion } from 'framer-motion';
import Header from '../../Components/Home/Header';
import { Button } from '@mui/material';
import LinearDeterminate from './Style/Loader';
import SplineRender from './Spline';
export default function About() {
  const [load,setLoad] = useState(true)
    
useEffect(() => {
 if(load){
  setTimeout(() => {
    setLoad(false)
  }, 2000);
 }
})
  return (
   
    <div className='About'>
    
      <Header/>
      {load ? <LinearDeterminate/> :
      <><div className='About_grid'>
           
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              drag
              dragConstraints={{
                top: -200,
                left: -10,
                right: 200,
                bottom: 200
              }}
              className='About_texts'>
              <h1>
                Introduction
              </h1>
              <h3>
                I'm a front-end React web developer from Myanmar. I love creating interactive websites using Figma, Spline, PhotoShop, three.js and more.
                Even I am not too good at designing I can bring you a creative website with some cool interfaces. Freelance/Full-Time available.
              </h3>
                  
            </motion.div>
            <SplineRender />
          </div>
          <motion.div animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            drag
            dragConstraints={{
              top: -100,
              left: -10,
              right: 200,
              bottom: 200
            }}
            style={{ position: 'absolute', top: '10rem', left: '5rem' }}>
              <Button size='large' variant='contained' color='success' sx={{ fontWeight: '400' ,borderRadius:'0.7rem'}}>Contact Me!</Button>
            </motion.div></>}
    
    </div>

  );
}
