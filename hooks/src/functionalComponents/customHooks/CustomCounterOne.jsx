import React from 'react'

import useCounter from './useCounter'

const CustomCounterOne = () => {

    const [ count, increment, decrement, reset ] = useCounter()

    return (
        <div>
            <h3>CustomCounterOne</h3>

            <h4>Count: {count}</h4>

            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CustomCounterOne