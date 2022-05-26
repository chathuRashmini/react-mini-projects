import React, { useRef } from 'react'

import ButtonComp from './ButtonComp'

const UseimperativeHandleHook = () => {

    const btnRef = useRef(null)

    return (
        <div>
            <h3>UseimperativeHandleHook</h3>

            <button onClick={() => {btnRef.current.alterToggle()}}>Button from parent</button>
            
            <ButtonComp ref={btnRef} />
        </div>
    )
}

export default UseimperativeHandleHook