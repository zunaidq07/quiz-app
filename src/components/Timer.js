import React, { useState, useEffect } from 'react'

export const Timer = (props) => {
    const [timer, setTimer] = useState(0)
    const timeLimit = 40;
    const startTime = new Date().getTime()
    const timeLeft = timeLimit - timer

    useEffect(() => {
        const interval = setInterval(() => {
            tick()
            if(new Date().getTime() - startTime > 40000){
              clearInterval(interval);
              return;
          }
        }, 1000);
      }, []);

      props.handleTimer(timeLimit - timer)
      
      const tick = () => {
          setTimer(prev => prev + 1)
      }
    return (
        <span>Time Left : {timeLeft} seconds</span>
    )
}

export default Timer
