import React,{ useReducer} from 'react'

const initialState =0
const reducer = (state, action) =>{
    switch(action) {
        case 'incree':
            return state+1
        case 'decree':
            return state-1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function ReducerCounter() {

    const [count,dispatch] =useReducer(reducer, initialState)

    return (
        <div>
            <button onClick ={()=>dispatch('incree')}>Increement</button>
            <button onClick ={() =>dispatch('decree')}>Decreement</button>
            <button onClick ={() => dispatch('reset')}>Reset</button>
            <h3>{count}</h3>
        </div>
    )
}

export default ReducerCounter
