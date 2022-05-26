import React, { useState } from 'react'

import useDocumentTitle from './useDocumentTitle'

const DocTitleTwoHook = () => {

    const [count, setcount] = useState(0)

    useDocumentTitle(count)

    return (
        <div style={{ marginLeft: "30px" }}>
            <h3>Custom hook: DocTitleTwo</h3>

            <button onClick={() => setcount(count + 1)}>
                Count - {count}
            </button>
        </div>
    )
}

export default DocTitleTwoHook