import React,{useRef,useState,useEffect} from 'react'
import emailjs from '@emailjs/browser';

import Loader from '../About/Loader'
import './Style/Contact.css'
function Contact() {
    const form = useRef();
    const [message, setMessage] = useState([]);
   const [load,setLoad] = useState(false)
   const [error,setError]= useState(false)
   const [name,setName]=useState([])
    const [value,setValue] =useState(false)
    const handleChange = event => {
      setMessage(event.target.value);
    };
    const handleName =(e) => {
      setName(e.target.value)
      if(name.length> 60) alert("Your are Spamming")
    }
  useEffect(() => {
    if(load){
      setTimeout(() => {
        setLoad(false)
      }, 4000);
     }
  },[load])
    

    const sendEmail = (e) => {
      e.preventDefault();

        
       
      
        if(message.length >=50){
          setLoad(true)
          setValue(true)
          emailjs.sendForm('Jeremy_kun', 'JeremyPortfolio', form.current, '0Vide87CskT8zVici')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
          
        }else{
        alert("Please write at least 50 letters")
        }
    };

  return (
    <div className='Contact'>
        
        <h1>Reach me out</h1>
 
    {value && load ?<Loader/> :
 
     <form className='form' ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input  onChange={handleName} type="text" name="name" />
      <label>Email</label>
      <input  onChange={handleName} type="email" name="email" />
      <label>Message</label>
      <textarea  onChange={handleChange} name="message"  />
      
      <input className='sendBtn' type= 'submit'  value="Send"  />
    </form> }
     
    <div className="ContactBottom"></div>
    </div>
  )
}

export default Contact
