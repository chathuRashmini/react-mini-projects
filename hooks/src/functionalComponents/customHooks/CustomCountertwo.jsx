import React from 'react'

import useCounter from './useCounter'

const CustomCounterTwo = () => {

    const [ count, increment, decrement, reset ] = useCounter(20, 10)

    return (
        <div>
            <h3>CustomCounterTwo</h3>

            <h4>Count: {count}</h4>

            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CustomCounterTwo