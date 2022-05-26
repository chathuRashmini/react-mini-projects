import React, { useEffect, useLayoutEffect, useRef } from 'react'

const UselayoutEffectHook = () => {

    const inputRef = useRef(null)

    useLayoutEffect(() => {
        console.log(`useLayoutEffect: ${inputRef.current.value}`)
    }, [])

    useEffect(() => {
        inputRef.current.value = "Hello"
        console.log('useEffect')
    }, [])

    return (
        <div>
            <h3>UselayoutEffectHook</h3>

            <input ref={inputRef} value="World" type="text" name="" id="" />
        </div>
    )
}

export default UselayoutEffectHook