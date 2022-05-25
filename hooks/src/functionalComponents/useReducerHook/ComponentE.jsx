import React, { useContext } from 'react'

import { CountContext } from '../../DummyApp'

const ComponentE = () => {

    const countContext = useContext(CountContext)

    return (
        <div>
            <h3>useReducer with useContext: Component E</h3>
            
            <button onClick={() => countContext.countDispatch('incremet')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentE