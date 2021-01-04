import {useDispatch, useSelector} from "react-redux";
import {User} from "./components/User";


export default function App(props) {

    const store = useSelector((state) => state)
    const dispatch = useDispatch()
    const onSubmit = (e) => {
        e.preventDefault()
        let name = e.target[0].value
        let age = +e.target[1].value

        dispatch({type: 'ADD', payload: {id: new Date().getTime(),name, age}})

    }
    console.log(store)
    return (
        <div>
            <h2>HELLO</h2>
        <form onSubmit={onSubmit}>
            <input type="text"/>
            <input type="number"/>
            <button>Save</button>
        </form>
            {
                store.map((value)=> <User key={value.id} store={value}/>)
            }
        </div>
    );
}
