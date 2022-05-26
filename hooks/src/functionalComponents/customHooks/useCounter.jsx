import { useState } from 'react'

const useCounter = (initialCount = 0, value = 1) => {

    const [count, setcount] = useState(initialCount)

    const increment = () => {
        setcount(prevCount => prevCount + value)
    }

    const decrement = () => {
        setcount(prevCount => prevCount - value)
    }
    
    const reset = () => {
        setcount(initialCount)
    }

    return [ count, increment, decrement, reset ]
}

export default useCounter