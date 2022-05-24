import React, { useState, useEffect } from 'react'

const UseEffectInterval = () => {

    const [ count, setCount ] = useState(0)

    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [count])

    const tick = () => {
        setCount(count + 1)
    }

    return (
        <div style={{ marginLeft: "40px" }}>
            <h3>Using useEffect</h3>

            <h3>{ count }</h3>
        </div>
    )
}

export default UseEffectInterval