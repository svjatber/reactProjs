
//userMemo
//userCallback
//memo

import {useDispatch, useSelector} from "react-redux";


export default function App() {
    const storeCounter = useSelector(({counter}) => counter)
    const dispatch = useDispatch()
    const inc = () => dispatch({type: 'INC_COUNTER'})
    const dec = () => dispatch({type: 'DEC_COUNTER'})
    const res = () => dispatch({type: 'RESET_COUNTER'})

    return (
        <div>
            <h1>{storeCounter}</h1>
            <h2>Hello</h2>
            <button onClick={inc}>inc</button>
            <button onClick={dec}>dec</button>
            <button onClick={res}>reset</button>
        </div>
    );
}
