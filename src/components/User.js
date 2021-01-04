import {useDispatch} from "react-redux";

export function User(props) {
    const dispatch = useDispatch()
    const deleteUser = (id) => {
        dispatch({type: 'DELETE', payload: id})
    }
    const {store} = props
    return (
        <div>
            {store.name} {store.age}
            <button onClick={()=>deleteUser(store.id)}>Delete</button>
        </div>
    )
}
