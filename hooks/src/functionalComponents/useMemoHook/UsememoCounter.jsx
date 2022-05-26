import React, { useMemo, useState } from 'react'

const UsememoCounter = () => {

    const [ count1, setCount1 ] = useState(0)
    const [ count2, setCount2 ] = useState(0)

    const increment1 = () => {
        setCount1(count1 + 1)
    }

    const increment2 = () => {
        setCount2(count2 + 1)
    }

    const isEven = useMemo(() => {
        return count1 % 2 === 0
    }, [count1])

    return (
        <div>
            <div>
                <button onClick={ increment1 }>Counter1: {count1}</button>
                <span>{ isEven ? ' Even ' : ' Odd '}</span>
            </div>
            
            <div>
                <button onClick={ increment2 }>Counter2: {count2}</button>
            </div>
        </div>
    )
}

export default UsememoCounter