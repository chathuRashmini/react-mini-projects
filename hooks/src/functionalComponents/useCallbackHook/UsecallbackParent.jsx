import React, { useState } from 'react'

import Title from './Title'
import Button from './Button'
import Count from './Count'

const UsecallbackParent = () => {

    const [ age, setAge ] = useState(0)
    const [ salary, setSalary ] = useState(1000)

    const incrementAge = () => {
        setAge(age + 1)
    }

    const incrementSalary = () => {
        setSalary(salary + 1000)
    }

    return (
        <div>
            <h3>Parent component: useCallback</h3>

            <Title />
            <Count text="Age" count={age} />
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text="Salary" count={salary} />
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    )
}

export default UsecallbackParent