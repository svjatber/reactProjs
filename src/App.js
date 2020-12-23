import React, {useState, useEffect, useReducer} from "react";

// UseState
// UseEffect
//UseReducer

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_TODO_ITEM': {
            return action.payload
        }
        default: {
            console.error('not valid', action.type)
            return state
        }
    }
}

const initialState = null

export default function App() {
    const [counter, setCounter] = useState(1)
    // const [film, setFilms] = useState(null)
    const [state, dispatch] = useReducer(reducer, initialState)

    const fetchData = async () =>{
        const film =  await fetch(`https://jsonplaceholder.typicode.com/users/${counter}`).then(v=>v.json());
        dispatch({type: 'SET_TODO_ITEM', payload: film})

    }

    useEffect(()=>{
       fetchData()


    }, [counter])

   let increase = () => {
        return setCounter((counter) => counter + 1);
    }


    let reset = () => {
        return setCounter(1)
    }

    return (

        <div>
            <h1>{counter}</h1>
            <button onClick={increase}>CLICK</button>
            <button onClick={reset}>Reset</button>
            {!!state && <h2>{state.name}</h2>}

        </div>
    )

}
