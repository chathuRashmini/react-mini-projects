import React, { useEffect, useState } from 'react'

const UseEffectMouse = () => {

    const [ x, setX ] = useState(0)
    const [ y, setY ] = useState(0)

    const logMousePosition = (e) => {
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])

    return (
        <div>
            <h4>x: {x}</h4>
            <h4>y: {y}</h4>
        </div>
    )
}

export default UseEffectMouse