import React, { useState } from 'react';

const CountDownTimer = ({hoursMinSecs}) => {

    const{minutes=0,seconds=0}= hoursMinSecs;
    const[[mins,secs], setTime]= useState([minutes,seconds]) ;;

    const tick=()=>{
        if(mins===0&& secs===0){
            reset();
        }
        else if(secs===0){
       setTime([mins-1,59])
        }
        else{
            setTime([secs-1])
        }

    }

    



    const reset = () => setTime([parseInt(minutes), parseInt(seconds)]);
  return <div>


  </div>;
};

export default CountDownTimer;
