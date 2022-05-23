import React, { useState } from 'react'

const UseStateBasicCounter = () => {

    const [ count, setCount ] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <button onClick={increment}>Functional Count: {count}</button>
        </div>
    )
}

export default UseStateBasicCounter