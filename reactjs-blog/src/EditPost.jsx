import React, { useEffect, useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { format } from 'date-fns'

import DataContext from './context/DataContext'
import api from './api/posts'

const EditPost = () => {

    const { posts, setPosts } = useContext(DataContext)

    const [ eidtTitle, setEditTitle ] = useState('')
    const [ eidtBody, setEditBody ] = useState('')

    const navigate = useNavigate()

    const { id } = useParams()
    const post = posts.find(post => (post.id).toString() === id)

    useEffect(() => {
        if(post) {
            setEditTitle(post.title)
            setEditBody(post.body)
        }
    }, [post, setEditBody, setEditTitle])

    const handleEdit = async (id) => {
        const datetime = format(new Date(), 'MMMM dd yyyy pp')
        const updatedPost = { id, title: eidtTitle, datetime, body: eidtBody}
    
        try {
          const response = await api.put(`/posts/${id}`, updatedPost)
          setPosts( posts.map(post => post.id === id ? { ...response.data } : post ))
          setEditTitle('')
          setEditBody('')
          navigate.push('/')
        } catch (error) {
          console.log(`Error: ${error.message}`)
        }
    }

    return (
        <main className='NewPost'>

            { eidtTitle && 
                <>
                    <h2>Edit Post</h2>

                    <form className="newPostForm" onSubmit={(e) => e.preventDefault}>
                        <label htmlFor="postTitle">Title:</label>

                        <input 
                            type="text" 
                            id='postTitle'
                            required
                            value={eidtTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                        />

                        <label htmlFor="postBody">Post:</label>

                        <textarea 
                            id="postBody" 
                            required
                            value={eidtBody}
                            onChange={(e) => setEditBody(e.target.value)}
                            cols="30" 
                            rows="10"
                        />

                        <button type='submit' onClick={() => handleEdit(post.id)}>Submit</button>
                    </form>
                </>
            }
            
            { !eidtTitle &&
                <>
                    <h2>Post Not Found</h2>
                    <p>
                        <Link to='/'>Visit our homepage</Link>
                    </p>
                </>
            }
        </main>
    )
}

export default EditPost