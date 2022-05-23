import { createContext, useEffect, useState } from "react";

// import api from '../api/posts'

import useAxiosFetch from '../hooks/useAxiosFetch';

const DataContext = createContext({})

export const DataProvider = ({ children }) => {

    const [ search, setSearch ] = useState('')
    const [ searchResults, setSearchResults ] = useState([])
    const [ posts, setPosts ] = useState([])

    const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts')

    useEffect(() => {
        setPosts(data)
    }, [data])

    // useEffect(() => {
    //     const fetchPosts = async () => {
    //     try {
    //         const response = await api.get('/posts')
    //         setPosts(response.data)
    //     } catch (err) {
    //         if (err.response) {
    //         console.log(err.response.data)
    //         console.log(err.response.status)
    //         console.log(err.response.headers)
    //         } else {
    //         console.log(`Error: ${err.message}`)
    //         }
    //     }
    //     }

    //     fetchPosts()
    // }, [])

    useEffect(() => {
        const filteredResult = posts.filter(post => 
        ((post.body).toLowerCase()).includes(search.toLowerCase())
        || ((post.title).toLowerCase()).includes(search.toLowerCase())
        )
        setSearchResults(filteredResult.reverse())
    }, [posts, search])

    return (
        <DataContext.Provider value={{
            fetchError, isLoading, searchResults,
            search, setSearch,
            posts, setPosts,
        }}>
            { children }
        </DataContext.Provider>
    )
}

export default DataContext
