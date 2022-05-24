import React, { useContext } from 'react'

import { UserContext, ChannelContext } from '../../App'

const UsecontextCompD = () => {

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

    return (
        <div>
            <h3>In UsecontextCompD: using useContext</h3>

            <h4>User context value: {user}</h4>
            <h4>Channel context value: {channel}</h4>
        </div>
    )
}

export default UsecontextCompD