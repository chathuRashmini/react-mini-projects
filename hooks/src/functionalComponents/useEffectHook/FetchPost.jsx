import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FetchPost = () => {

    const [ post, setPost ] = useState({})
    const [ id, setId ] = useState(1)
    const [ idFromBtnClick, setIdFromBtnClick ] = useState(1)

    useEffect(() => {
        const fetchUrl = `https://jsonplaceholder.typicode.com/posts/${idFromBtnClick}`

        axios.get(fetchUrl)
            .then(res => {
                setPost(res.data)
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }, [idFromBtnClick])

    const handleClick = () => {
        setIdFromBtnClick(id)
    }

    return (
        <div>
            <h3>Fetched a post by id</h3>

            <div>
                <input 
                    type="text" 
                    value={id}
                    onChange={e => setId(e.target.value)} 
                />

                <button
                    type='button'
                    onClick={handleClick}
                >
                    Fetch Post
                </button>
            </div>

            <h4>Post title of the post {post.id}: { post.title }</h4>
        </div>
    )
}

export default FetchPost