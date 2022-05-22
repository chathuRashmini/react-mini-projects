import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const EditPost = ({
    posts, handleEdit, eidtBody, setEditBody, eidtTitle, setEditTitle
}) => {

    const { id } = useParams()
    const post = posts.find(post => (post.id).toString() === id)

    useEffect(() => {
        if(post) {
            setEditTitle(post.title)
            setEditBody(post.body)
        }
    }, [post, setEditBody, setEditTitle])

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