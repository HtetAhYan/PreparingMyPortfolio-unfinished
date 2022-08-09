
import React,{useState,useEffect} from 'react';
import './Style/About.css'
import { motion } from 'framer-motion';
import Header from '../../Components/Home/Header';
import { Button } from '@mui/material';

import SplineRender from './Spline';
import ShowCase from './ShowCase';
import Linear from './Loader';
export default function About() {
  
    const [animate,setAnimate]=useState(true)
    const [load,setLoad] = useState(true)
useEffect(() => {
 if(load){
  setTimeout(() => {
    setLoad(false)
  }, 4000);
 }
},[])
useEffect(() => {
  if(animate){
   setTimeout(() => {
     setAnimate(false)
   }, 2000);
  }
 },[])
  return (<div>
     {load ? <Linear/> :
        <>
    <div className='About' >
    
      <Header/>
    
   <div className='About_grid'>
           
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
              <Button size='large' variant='contained' color='secondary' sx={{ zIndex:'3',fontWeight: '400' ,borderRadius:'0.6rem'}}>Contact Me!</Button>
            
            </motion.div>
         
            
         {!animate &&  <ShowCase/>}
           

    </div></>}
    </div>
  );
}
