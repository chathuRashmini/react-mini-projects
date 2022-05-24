import React, { useState } from 'react'

const UseStateBasicCounter = () => {

    const [ count, setCount ] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    return (
        <div style={{ marginLeft: "40px" }}>
            <h3>Using useState hook</h3>
            <button onClick={increment}>Functional Count: {count}</button>
        </div>
    )
}

export default UseStateBasicCounter