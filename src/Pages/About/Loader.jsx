import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import './Style/Loader.css'
export default function Linear() {
  return (
 <div style={{background:'#0e1129',height:'100vh',width:'100vw'}}>
    <LinearProgress color='secondary' sx={{zIndex:'1000'}} />
    
 </div>
  );
}
