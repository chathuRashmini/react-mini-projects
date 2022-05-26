import React, { useCallback, useState } from 'react'

import Title from './Title'
import Button from './Button'
import Count from './Count'

const UsecallbackAccurateParent = () => {
    
    const [ age, setAge ] = useState(0)
    const [ salary, setSalary ] = useState(1000)

    const incrementAge = useCallback (() => {
        setAge(age + 1)
    }, [age])

    const incrementSalary = useCallback (() => {
        setSalary(salary + 1000)
    }, [salary])

    return (
        <div>
            <h3>Accurate Parent component: useCallback</h3>

            <Title />
            <Count text="Age" count={age} />
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text="Salary" count={salary} />
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    )
}

export default UsecallbackAccurateParent