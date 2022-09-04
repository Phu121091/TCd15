import React , { useEffect, useState } from 'react'

const SetTime = () => {
  
  const [time, setTime] = useState(0);
  const [play, setPlay] = useState(false);

  useEffect(()=>{
   
    if(play){
      const interval = setInterval(() => {
         setTime(time+1)
      }, 1000);
      return ()=>clearInterval(interval)
  }   
    
  },[play,time]);

  return (
    <div className='Time'>
      <h1>Set Time</h1>
      <p>Timer: {time}</p>
      <button onClick={() => setPlay(!play)}>Start</button><br/>
      <button onClick={() => setTime(0)}>Reset</button>

    </div>
  )
}

export default SetTime