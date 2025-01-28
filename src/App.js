import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [isStop,setIsStop]=useState(true);
  const [timer,setTimer]=useState(0);

  useEffect(() => {
    let timer;
    if (!isStop) {
      timer = setInterval(() => {
        setTimer((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isStop]);

  const handleStartWatch =(e)=>{
    e.preventDefault();
    setIsStop(false);

  };
  const handleStopWatch =(e)=>{
    e.preventDefault();
    setIsStop(true);
    
  };
  const handleResetWatch =(e)=>{
    e.preventDefault();
    setIsStop(true);
    setTimer(0);
    
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };
  return (
    <div className="AApp-headerpp">
       <h2>Stopwatch</h2>
       <div>
        Time : {formatTime(timer)}
       </div>
       <div>
        {isStop &&  <button value="Start" name="start" onClick={(e)=>handleStartWatch(e)} >Start</button>}
        {!isStop && <button value="Stop" name="stop" onClick={(e)=>handleStopWatch(e)} >Stop</button>}
        
        <button value="Reset" name="reset" onClick={(e)=>handleResetWatch(e)} >Reset</button>

       </div>
    </div>
  );
}

export default App;
