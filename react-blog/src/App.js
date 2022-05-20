import { useState, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'

import About from './About'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import Missing from './Missing'
import Navbar from './Navbar'
import NewPost from './NewPost'
import PostPage from './PostPage'

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Home />
      <NewPost />
      <PostPage />
      <About />
      <Missing />
      <Footer />
    </div>
  );
}

export default App;
