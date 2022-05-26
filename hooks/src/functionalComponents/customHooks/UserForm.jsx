import React from 'react'
import useInput from './useInput'

const UserForm = () => {

    const [ firstName, bindFirstName, resetFirstName ] = useInput('')
    const [ lastName, bindLastName, resetLastName ] = useInput('')

    const submitHandler = (e) => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }

    return (
        <div>
            <h3>User Form</h3>

            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input 
                        {...bindFirstName}
                        type="text"
                    />
                </div>

                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                        {...bindLastName}
                        type="text"
                    />
                </div>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default UserForm