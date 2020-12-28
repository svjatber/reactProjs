
//userMemo
//userCallback
//memo
import React, {memo, useCallback, useMemo, useState} from "react"

const Test = memo(()=>{
    console.log('was render')
    return (<div>
            <h1>CLICKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK</h1>

    </div>

    )
})


export default function App() {
    const [counter, setCounter] = useState(0)
    const [counter0, setCounter0]= useState([2,4,3,5,3,2,3,5,7,2,14])


    const HandlerClick = useCallback(()=>{
        console.log('test')
    },[] )

    const Sort = () => {
        const counter = [...counter0]
        counter.sort((a,b) => {
            return a - b
        } )
       setCounter0(counter)

    }

    return (
        <div>

            <h2>Hello</h2>
            <h3>{counter}</h3>
            <button onClick={()=> setCounter( prev => prev + 1)}>Click</button>
            <Test onClick={HandlerClick}/>
            {
                counter0.map((value) =>{
                    return (
                        <h1>{value}</h1>
                    )
                } )
            }
            <button onClick={Sort}>Sort</button>
            <button onClick={()=>setCounter0([])}>Reset</button>
        </div>
    );
}
