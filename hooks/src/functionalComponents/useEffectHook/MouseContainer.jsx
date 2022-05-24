import React, { useState } from 'react'
import UseEffectMouse from './UseEffectMouse'

const MouseContainer = () => {

    const [ display, setDisplay ] = useState(true)

    return (
        <>
            <h3 style={{ marginLeft: "50px" }}>Using useEffect</h3>
            <div style={{ display: "flex", marginLeft: "50px" }}>
                <button style={{ marginTop: "40px", marginRight: "40px" }} onClick={() => setDisplay(!display)}>Toggle display</button>

                { display && <UseEffectMouse />}
            </div>
        </>
    )
}

export default MouseContainer