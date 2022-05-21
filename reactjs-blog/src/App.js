import { useState, useEffect } from 'react'
import {Route, Routes, useNavigate} from 'react-router-dom';
import { format } from 'date-fns'

import About from './About'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import Missing from './Missing'
import Navbar from './Navbar'
import NewPost from './NewPost'
import PostPage from './PostPage'

function App() {

  const [ search, setSearch ] = useState('')
  const [ searchResults, setSearchResults ] = useState([])
  const [ postTitle, setPostTitle ] = useState('')
  const [ postBody, setPostBody ] = useState('')
  const [ posts, setPosts ] = useState([
    {
      id: 1,
      title: "My First Blog",
      datetime: "July 01, 2021 11:17:12 AM",
      body: "This is my first article for you to go through."
    },
    {
      id: 2,
      title: "My Second Blog",
      datetime: "July 01, 2021 11:17:12 AM",
      body: "This is my first article for you to go through."
    },
    {
      id: 3,
      title: "My Third Blog",
      datetime: "July 01, 2021 11:17:12 AM",
      body: "This is my first article for you to go through."
    },
  ])

  const navigate = useNavigate()

  useEffect(() => {
    const filteredResult = posts.filter(post => 
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase())
    )
    setSearchResults(filteredResult.reverse())
  }, [posts, search])

  const handleDelete = (id) => {
    const postList = posts.filter(post => post.id !== id)
    setPosts(postList)
    navigate.push('/')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const id = posts.length ? posts[posts.length-1].id + 1 : 1
    const datetime = format(new Date(), 'MMMM dd yyyy pp')
    const newPost = { id, title: postTitle, datetime, body: postBody}
    const allPosts = [...posts, newPost]

    setPosts(allPosts)
    setPostTitle('')
    setPostBody('')
    navigate.push('/')
  }
  
  return (
    <div className="App">
      <Header title = "React JS Blog" />
      <Navbar 
        search={search}
        setSearch={setSearch}
      />
      
      <Routes>
        <Route exact path="/" element={<Home posts={searchResults} />}/>
        
        <Route path="/post" element={
          <NewPost 
            handleSubmit = {handleSubmit}
            postTitle = {postTitle}
            setPostTitle = {setPostTitle}
            postBody = {postBody}
            setPostBody = {setPostBody}
          />
        } />

        <Route path="/post/:id" element={<PostPage posts={posts} handleDelete={handleDelete} />}/>
        
        <Route path="/about" element={<About />}/>
        
        <Route path="*" element={<Missing />}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
