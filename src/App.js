import logo from './logo.svg';
import './App.css';
import { QuizData } from './Data.js';
import { useEffect, useState } from 'react';
import Timer from './Timer';
import CountDownTimer from './quizData.js/CountDown.Timer';

function App() {
  const[userName,setUserName]= useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [myAnswer, setMyAnswer] = useState("");
  const[finish,setFinish]= useState(false);
  const[timer,setTimer]= useState(0);
  const[timeout,setTimeOut]= useState(false)
  const[next,setNext]= useState(false)

  const [countInTimeout, setCountInTimeout] = useState(0);


  const hoursMinSecs = { minutes: 1, seconds: 40}

  useEffect (()=>{
    setInterval(()=>
     {
    setTimer(pre=>pre+1)
  },1000);

  },[])
  

  

//  useEffect(()=>{
        
//   if(timer===0){
//       return setTimeout(true);
//   }
//   const interval= setInterval(() => {
    
//       setTimer(timer-1);
//   },1000);
// return clearInterval(interval);  
// },[currentQuestion])

useEffect(()=>{
  if(timer===10){
    setCurrentQuestion(currentQuestion + 1)
    setTimer(0);
  }
  if(currentQuestion === QuizData.length - 1){
    setTimer(0)
  }
},[timer])

  
// useEffect(()=>{
//   setTimeout(()=>
//   {
// setTimer(timer-1 )
//   },1000)

  
// },[])


// const clock =()=>{
//   setNext(true)
//   setNext(true)
// }


console.log(QuizData,"ho");

const checkAnswer = (option) => {
  setMyAnswer(option);
  //  setClickAnswer(true);
};

 const finishHandler= ()=>{

   setFinish(true)
   setTimer(0)
 }




  return (
    <div className="App">
      <header className="App-header">
<CountDownTimer  hoursMinSecs={hoursMinSecs}/>
<h3>{timer}</h3>

{/*         
      <h3> {timer}</h3>

      setTimeout Count: {  countInTimeout} */}

{timeout? (<h3>start</h3>) :" n"}


        {/* <h3 className="timer"> {timer}</h3> */}
        {/* <Timer currentQuestion={currentQuestion} setTimeOut={setTimeOut} clock={clock}  /> */}
        {/* <button onClick={()=>{ 
           setNext(true)
           setNext(true)
        }}> Start</button> */}
     
        
 <div> 
 
   <h2> {QuizData[currentQuestion].question}</h2>
   {QuizData[currentQuestion].options.map((option,id)=> { 
    return   <div className="m-2 h-14 border-2 border-black mx-auto text-center">
     <p key = {option.id}
     className={`variant ${
      myAnswer === option
        ? myAnswer === QuizData[currentQuestion].answer
          ? "correctAnswer"
          : "incorrectAnswer"
        : null
    }`}
    onClick={() => checkAnswer(option)}>
     
       {option}</p>

       </div> 
   }

   )}
 </div>

         
 {currentQuestion < QuizData.length - 1 && (
            <button
              className="w-full h-14 mt-2 px-2 rounded-lg bg-gray-600 text-pink-400 font-bold hover:bg-gray-800 hover:text-pink-600"
              onClick={() => {
                setCurrentQuestion(currentQuestion + 1);
                setTimer(0)
               
              }}
            >
              NEXT
            </button>
          )}  
         
         {currentQuestion === QuizData.length - 1 && (
            <button
              className="w-full h-14 mt-2 px-2 rounded-lg bg-gray-600 text-pink-400 font-bold hover:bg-gray-800 hover:text-pink-600"
              onClick={() => finishHandler()}
            >
              FINISH
            </button> 
          )}
        
      </header>
    </div>
  );
}

export default App;
