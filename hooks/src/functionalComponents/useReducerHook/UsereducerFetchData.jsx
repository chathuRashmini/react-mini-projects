import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

const initalState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS' :
            return {
                loading: false,
                post: action.payload,
                error: ''
            }

        case 'FETCH_ERROR' :
            return {
                loading: false,
                post: {},
                error: 'Something is wrong ;/'
            }

        default:
            return state
    }
}

const UsereducerFetchData = () => {

    const [ state, dispatch ] = useReducer(reducer, initalState)

    useEffect(() => {
        const fetchUrl = 'https://jsonplaceholder.typicode.com/posts/1'

        axios.get(fetchUrl)
            .then(res => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
            })
            .catch(err => {
                dispatch({ type: 'FETCH_ERROR' })
            })
    }, [])

    return (
        <div>
            <h3>Fetch a post - useReducer</h3>

            <h4>Post Title: { state.loading ? 'Loading ...' : state.post.title }</h4>
            <h4>{ state.error ? state.error : null }</h4>
        </div>
    )
}

export default UsereducerFetchData