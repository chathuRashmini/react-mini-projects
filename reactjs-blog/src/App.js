import { useState, useEffect } from 'react'
import {Route, Routes, useHistory} from 'react-router-dom';

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
      
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/post" element={<NewPost />}/>
        <Route path="/post/:id" element={<PostPage />}/>
        <Route path="/about" element={<About />}/>
        <Route path="*" element={<Missing />}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
