import React, {useState, useEffect, useRef} from 'react'

function TimerRefHook() {

    const[timer,setTimer] = useState(0)
    const intervalref = useRef()

    useEffect(() => {
        intervalref.current = setInterval(() =>{
            setTimer(prevTimer => prevTimer+1)
        },1000)
        return () => {
            clearInterval(intervalref.current)
        };
    }, [])

    return (
        <div>
            <h4>Timer - {timer} </h4>
            <button onClick ={()=> clearInterval(intervalref.current)}>Stop Timer</button>
        </div>
    )
}

export default TimerRefHook
