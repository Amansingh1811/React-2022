import React, { useState } from 'react'
import './hooks.css'

const UseState = () => {

    const [myData, setmyData] = useState(0)
    return (
        <>
            <div className='center_div'>
                <p>{myData}</p>
                <div class='button2' onClick={() => setmyData(myData + 1)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
                <div class='button2' onClick={() => (myData > 0 ? setmyData(myData - 1) : setmyData(myData(0)))}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
            </div>
        </>
    )
}
export default UseState;