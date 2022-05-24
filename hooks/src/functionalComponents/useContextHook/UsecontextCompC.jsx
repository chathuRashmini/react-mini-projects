import React from 'react'

import { UserContext, ChannelContext } from '../../App'

const UsecontextCompC = () => {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <ChannelContext.Consumer>
                                {
                                    channel => {
                                        return (
                                            <>
                                                <h3>In UsecontextCompC: using createContext in App</h3>

                                                <h4>User context value: {user}</h4>
                                                <h4>Channel context value: {channel}</h4>
                                            </>
                                        )
                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default UsecontextCompC