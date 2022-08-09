import React,{useState,useEffect} from 'react'

import {
  IoPlaySkipBackCircle,
  IoPauseCircle,
  IoPlaySkipForwardCircle,
} from "react-icons/io5";
import { IoIosPlayCircle } from "react-icons/io";
import {motion} from 'framer-motion'
import "./Style/ProjectMain/SliderMUI.css";
import { Slider, Stack, Box } from "@mui/material";
import { useRef } from 'react';
function MusicPlayer() {
const [musicData,setMusicData] = useState([
  {
    title : "I'm yours - Jason mraz",
    src: "./music/I'm yours.mp3"
  },
  {title: "Norweigian wood - The Beatles",
    src: "./music/Norweigian wood.webm"
  },
  {
    title: "Can't take my eyes off you - Joseph Vincent",
    src: "./music/Can't take my eyes off you.mp3"
  },{
    title: 'Comethru - Jeremy Zucker',
    src:  './music/Jeremy Zucker - Comethru (Lyrics) feat. Bea Miller.mp3'
  },
  {
    title: "Sunroof - Nicky Youre, Dazy",
    src : './music/Nicky Youre, dazy - Sunroof (Official Music Video).mp3'

  },{
    title: "Every Summertime - Niki",
    src: './music/NIKI - Every Summertime (Official Video).mp3'
  }
])
const [playing,setPlaying]=useState(false);
const [currentIndex,setCurrentIndex]=useState(musicData[0]);

const audioElement=useRef();
const slide= useRef();

 const onPlaying= () => {
  const duration= audioElement.current.duration;
  const time= audioElement.current.currentTime;
  
 setCurrentIndex({...currentIndex, "progress": time/duration *100, 'length': duration})
 if(duration ==time){
  skipIt();
 }
 }
useEffect(() => {
if(playing){
  audioElement.current.play()
}else{
  audioElement.current.pause()

}
})
 


const playIt= () => {
 setPlaying(!playing)
}
const slideIt=(e) => { 
 let width = slide.current.clientWidth;
 const offset = e.nativeEvent.offsetX;
 const progressPercent = offset/width * 100;
 audioElement.current.currentTime =progressPercent/100  * currentIndex.length
}
const backIt = () => {
  const i = musicData.findIndex(x=>x.title == currentIndex.title)
 if(i==0){
  setCurrentIndex(musicData[musicData.length-1]);
 }else{
  setCurrentIndex(musicData[i-1])
 }
 audioElement.current.currentTime =0
}
const skipIt = () => {
  const i = musicData.findIndex(x=>x.title == currentIndex.title)
  
 if(i==musicData.length-1){
  setCurrentIndex(musicData[0]);
 }else{
  setCurrentIndex(musicData[i+1])
 }
 audioElement.current.currentTime =0
}

  return (
    <div className='Music'>

      <audio src={currentIndex.src} ref={audioElement} onTimeUpdate={onPlaying}/>
     <motion.h1 initial={{x:100}} animate={{x:0}} transition={{duration:0.3,type:'just'}}
      drag
      dragConstraints={{
        top: -200,
        left: -10,
        right: 200,
        bottom: 100}}
      className="MusicTitle">{currentIndex.title}</motion.h1>

<motion.div className="MusicControl" 
initial={{x:100}} animate={{x:0}} transition={{duration:0.5,type:'tween'}}
drag
dragConstraints={{
  top: -300,
  left: -50,
  right: 500,
  bottom: 100,}}
>
  
      <Box sx={{ width: "100%", height: "100%" ,display: "flex", align: "center",justifyContent: "center",padding: "1.3rem" }}>
        <div ref={slide} className="MusicSlider" onClick={slideIt}><div className="Stream" style={{width: `${currentIndex.progress}%`,}}    ></div>
        </div>
          <IoPlaySkipBackCircle className="MusicIcons back" onClick={backIt}/>

       <IoIosPlayCircle className={playing ? 'play' : "MusicIcons"} onClick={playIt}
         />

           <IoPauseCircle  className={playing ? "MusicIcons" : "pause"} onClick={playIt}
           />

 
          
          <IoPlaySkipForwardCircle className="MusicIcons next" onClick={skipIt} />
  
      </Box>
    </motion.div>
    </div>
  )
}

export default MusicPlayer
