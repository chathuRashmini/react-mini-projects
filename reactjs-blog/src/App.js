import {Route, Routes } from 'react-router-dom';

import About from './About'
import EditPost from './EditPost';
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import Missing from './Missing'
import Navbar from './Navbar'
import NewPost from './NewPost'
import PostPage from './PostPage'

import { DataProvider } from './context/DataContext';

function App() {
  
  return (
    <div className="App">
      
        <Header title = "React JS Blog" />

        <DataProvider>
          <Navbar />
          
          <Routes>
            <Route exact path="/" element={ <Home /> }/>
            
            <Route path="/post" element={ <NewPost /> } />

            <Route path="/edit/:id" element={ <EditPost /> } />

            <Route path="/post/:id" element={<PostPage />}/>
            
            <Route path="/about" element={<About />}/>
            
            <Route path="*" element={<Missing />}/>
          </Routes>
          
        </DataProvider>

        <Footer />
    </div>
  );
}

export default App;
