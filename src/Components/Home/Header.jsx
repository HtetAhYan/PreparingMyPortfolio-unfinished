import React,{useState} from 'react'
import './Styles/Header.css'
import Logo1 from '../Home/../../Assets/Images/Logo001.png'
import Logo02 from '../Home/../../Assets/Images/Logo002.png'
import {RiMenuFill,RiCloseLine} from 'react-icons/ri'
import OutsideClickHandler from 'react-outside-click-handler';
import { useNavigate } from 'react-router-dom'


import { motion } from 'framer-motion';
function Header() {
  const [links,setLinks]= useState(false)
const nav=useNavigate();
const texts = [
  { id: 1, text: "Home" },
  { id: 2, text: "Projects" },
  { id: 3, text: "About" },
  { id: 4, text: "Services" },
  { id:5, text: "Contact"}
];
const [isActive, setIsActive] = useState(false)

 let Nav=useNavigate()
  return (
    <div style={{overflow:'hidden',width:'100%',height:'100%'}}> 
    <div className='Header_main'>
      <div onClick={() => nav("/home")} className='Header_logo'>
      <img src={Logo1} alt="logo" />
       <h1>Jeremy</h1>
      
      </div>
      <h2>htetahyan@gmail.com</h2>
      <motion.div className='MenuIcon'>
      <RiMenuFill  onClick={() => setLinks(!links) } className={links ? 'OpenIcon' : ''}/>
      <RiCloseLine onClick={() => setLinks(false) } className={links==false ? 'CloseIcon' : 'Close'}/>
      </motion.div>
      
    </div>
 

    <motion.div className={links ? "linksActive" : "Unactive"}
    animate={{x:0}} initial={{x:100}} transition={{duration:0.6,type:'tween'}}
   >

</motion.div>


    </div>
  )
}

export default Header