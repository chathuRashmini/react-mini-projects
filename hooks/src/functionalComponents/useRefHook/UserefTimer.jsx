import React, { useEffect, useRef, useState } from 'react'

const UserefTimer = () => {

    const [ timer, setTimer ] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)

        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])
    

    return (
        <div style={{ marginLeft: "30px"}}>
            <h3>Timer: functional component</h3>

            <h4>Timer: { timer }</h4>

            <button onClick={() => clearInterval(intervalRef.current)}>Pause Timer</button>
        </div>
    )
}

export default UserefTimer