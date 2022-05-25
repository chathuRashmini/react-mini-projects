import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UsestateFetchData = () => {

    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState('')
    const [ post, setPost ] = useState([])

    useEffect(() => {
        const fetchUrl = 'https://jsonplaceholder.typicode.com/posts/1'

        axios.get(fetchUrl)
            .then(res => {
                setLoading(false)
                setPost(res.data)
                setError('')
            })
            .catch(err => {
                setLoading(false)
                setPost({})
                setError('Something is wrong :/')
            })
    }, [])

    return (
        <div>
            <h3>Fetch a post - useEffect, useState</h3>

            <h4>Post Title: { loading ? 'Loading ...' : post.title }</h4>
            <h4>{ error ? error : null }</h4>
        </div>
    )
}

export default UsestateFetchData