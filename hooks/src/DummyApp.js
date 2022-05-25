import React, { createContext, useReducer } from "react";

import ComponentA from "./functionalComponents/useReducerHook/ComponentA";
import ComponentB from "./functionalComponents/useReducerHook/ComponentB";
import ComponentC from "./functionalComponents/useReducerHook/ComponentC";

export const CountContext = createContext()

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

function DummyApp () {

    const[ count, dispatch ] = useReducer(reducer, initialState)

    return (
        <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
            <div>
                <h3>{count}</h3>
                
                <ComponentA />
                <ComponentB />
                <ComponentC />
            </div>
        </CountContext.Provider>
    )
}

export default DummyApp