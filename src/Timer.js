import React, { useEffect, useState } from 'react';

const Timer = ({setTimeOut,currentQuestion}) => {
    const[timer,setTimer]= useState(30);
    const[next,setNext]= useState(false)


    useEffect(()=>{
        
        if(timer===0){
            return setTimeOut(true);
        }
        const interval= setInterval(() => {
            setTimer(timer-1);
        },1000);
      return clearInterval(interval);  
    } )

   useEffect(()=>{
       
setTimer(30)
   },[currentQuestion])

  const clock=()=>{
      setNext(true)
  }


  return<>
  <h3> {timer}</h3>
  <button onClick= {()=>clock()}>start</button>
  </>
      
    
};

export default Timer;
