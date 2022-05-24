import React, { useEffect, useState } from 'react'
import axios from 'axios'

function FetchPosts() {

    const [ posts, setPosts ] = useState([])

    useEffect(() => {
        const fetchUrl = 'https://jsonplaceholder.typicode.com/posts'
        axios.get(fetchUrl)
            .then(res => {
                setPosts(res.data)
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <h3>Fetched posts</h3>
            <ul>
                { posts.map(post => {
                    if(post.id <= 10) {
                        return (
                            <li>{post.title}</li>
                        )
                    }
                })}
            </ul>
        </div>
    )
}

export default FetchPosts