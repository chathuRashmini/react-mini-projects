import React, { useState } from 'react'

import useDocumentTitle from './useDocumentTitle'

const DocTitleOneHook = () => {

    const [count, setcount] = useState(0)

    useDocumentTitle(count)

    return (
        <div>
            <h3>Custom hook: DocTitleOne</h3>

            <button onClick={() => setcount(count + 1)}>
                Count - {count}
            </button>
        </div>
    )
}

export default DocTitleOneHook