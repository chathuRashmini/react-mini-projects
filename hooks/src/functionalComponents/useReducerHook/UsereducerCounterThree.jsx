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

const UsereducerCounterThree = () => {

    const[ count, dispatch ] = useReducer(reducer, initialState)
    const[ countTwo, dispatchTwo ] = useReducer(reducer, initialState)

    return (
        <>
            <div>
                <h3>Counter 01: { count }</h3>
                <button onClick={() => dispatch('incremet')}>Increment</button>
                <button onClick={() => dispatch('decrement')}>Decrement</button>
                <button onClick={() => dispatch('reset')}>Reset</button>
            </div>
            
            <div>
                <h3>Counter 02: { countTwo }</h3>
                <button onClick={() => dispatchTwo('incremet')}>Increment</button>
                <button onClick={() => dispatchTwo('decrement')}>Decrement</button>
                <button onClick={() => dispatchTwo('reset')}>Reset</button>
            </div>
        </>
    )
}

export default UsereducerCounterThree