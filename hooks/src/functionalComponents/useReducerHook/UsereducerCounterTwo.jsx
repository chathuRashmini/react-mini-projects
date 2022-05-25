import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'incremet':
            return { ...state, firstCounter: state.firstCounter + action.value }

        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }
        
        case 'incremet2':
            return { ...state, secondCounter: state.secondCounter + action.value }

        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }

        case 'reset':
            return initialState
    
        default:
            break;
    }
}

const UsereducerCounterTwo = () => {
    
    const[ count, dispatch ] = useReducer(reducer, initialState)

    return (
        <div>
            <div>
                <h3>Counter 1: { count.firstCounter }</h3>
                
                <button onClick={() => dispatch({type: 'incremet', value: 1 })}>
                    Increment counter 1
                </button>
                
                <button onClick={() => dispatch({type: 'decrement', value: 1 })}>
                    Decrement counter 1
                </button>

                <button onClick={() => dispatch({type: 'incremet', value: 5 })}>
                    Increment 5
                </button>
                
                <button onClick={() => dispatch({type: 'decrement', value: 5 })}>
                    Decrement 5
                </button>
            </div>
            
            <div>
                <h3>Counter 2: { count.secondCounter }</h3>
                
                <button onClick={() => dispatch({type: 'incremet2', value: 1 })}>
                    Increment counter 2
                </button>
                
                <button onClick={() => dispatch({type: 'decrement2', value: 1 })}>
                    Decrement counter 2
                </button>
            </div>

            <button onClick={() => dispatch({type: 'reset' })}>
                Reset both counters
            </button>
        </div>
    )
}

export default UsereducerCounterTwo