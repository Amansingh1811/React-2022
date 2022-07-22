import React, { useReducer } from 'react'
import './hooks.css'

const reducer = (state, action) => {
    if (action.type === "INCR") {
        state = state + 1;
    }
    if (state > 0 && action.type === "DICR") {
        state = state - 1;
    }
    return state;
}
const UseReducer = () => {

    // const [myData, setmyData] = useState(0)
    const initialData = 10;
    const [state, dispatch] = useReducer(reducer, initialData)
    return (
        <>
            <div className='center_div'>
                <p>{state}</p>
                <div className="button2" onClick={() => dispatch({ type: "INCR" })}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
                <div className = "button2" onClick={() => dispatch({ type: "DICR" })}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DICR
                </div>
            </div>
        </>
    )
}
export default UseReducer;