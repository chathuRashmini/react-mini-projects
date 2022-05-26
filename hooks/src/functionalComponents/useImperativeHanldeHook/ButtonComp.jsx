import React, { useState, forwardRef, useImperativeHandle } from 'react'

const ButtonComp = forwardRef((props, ref) => {

    const [toggle, settoggle] = useState(false)

    // useImperativeHandle( ref, () => {
    //         const altertToggle = () => {
    //             settoggle(!toggle)
    //         }
    //     },
    //     [],
    // )

    useImperativeHandle(ref, () => ({
        alterToggle() {
            settoggle(!toggle)
        }
    }))

    return (
        <div>
            <button>Button from child</button>

            { toggle && 
                <h4>Toggle</h4>
            }
        </div>
    )
})

export default ButtonComp