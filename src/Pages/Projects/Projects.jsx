import React,{useState,useEffect} from 'react'
import './Style/ProjectMain/Project.css'
import Header from '../../Components/Home/Header'
import SideSlider from '../../Components/Home/SideSlider'
import MusicPlayer from './MusicPlayer'

import { motion } from 'framer-motion';
function Projects() {
  const [dataImg, setDataImg] = useState([
    {
        id: "1",
        src: './image/jpg-1.jpg',
        size: 'cover'
    },
    {
      id: "2",
      src: './image/jpg-2.jpg',
      size: 'cover'
    },
    {
      id: '3',
      src: './image/jpg-3.jpg',
      size: 'cover'
    },
    {
      id: '4',
      src: './image/jpg-4.jpg',
      size: 'cover'
    }
  ])

  return (  
    <div className='Project'>
 <div className='Project_layer' style={{background:`url(${dataImg[0].src})`,
       backgroundSize:'cover',backgroundPosition:'center'}}>
         
      
        <Header/>
       
        
        <motion.h1
        className='Project_Notive'
         drag
         dragConstraints={{
           top: -10,
           left: -10,
           right: 10,
           bottom: 10}}
           >This page is under working.
        <br/>Please check again 2 or 3 days later...</motion.h1>
        </div>
       
    </div>
  )
}

export default Projects