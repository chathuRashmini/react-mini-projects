import React, { useReducer } from 'react'

const initialState = 0

const reducer = (state, action) => {
    switch (action) {
        case 'incremet':
            return state + 1

        case 'decrement':
            return state - 1

        case 'reset':
            return initialState
    
        default:
            break;
    }
}

const UsereducerCounter = () => {

    const[ count, dispatch ] = useReducer(reducer, initialState)

    return (
        <div>
            <h3>Basic Counter: { count }</h3>
            <button onClick={() => dispatch('incremet')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default UsereducerCounter