import React, { useState } from 'react'

const UseStateThreeFunctionsCounter = () => {

    const initialCount = 0
    const [ count, setCount ] = useState(initialCount)

    return (
        <div>
            <h4>Count: {count}</h4>

            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}

export default UseStateThreeFunctionsCounter