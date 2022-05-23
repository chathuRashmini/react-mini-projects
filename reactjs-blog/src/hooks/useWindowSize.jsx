import { useEffect, useState } from "react";

const useWindowSize = () => {

    const [ windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    })

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                windowSize: window.innerWidth, 
                setWindowSize: window.innerHeight
            })
        }

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowSize
}

export default useWindowSize
