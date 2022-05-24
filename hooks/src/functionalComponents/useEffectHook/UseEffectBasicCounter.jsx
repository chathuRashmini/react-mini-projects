import React, { useState, useEffect } from 'react'

const UseEffectBasicCounter = () => {

    const [ count, setCount ] = useState(0)
    const [ name, setName ] = useState('')

    useEffect(() => {
        console.log("Updating the document title")
        document.title = `You clicked ${count} times`
    }, [count])

    return (
        <div style={{ marginLeft: "40px" }}>
            <h3>Using useEffect hook</h3>

            <input 
                type="text" 
                value={name}
                onChange={e => setName(e.target.value)} 
            />
            
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        </div>
    )
}

export default UseEffectBasicCounter