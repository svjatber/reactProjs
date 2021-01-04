const initialState = {
    list : []
}
export const reducer = (state = initialState.list, action) => {
    switch(action.type){
        case 'ADD': {
            state.push(action.payload)
            console.log(state)
            return [...state]
        }
        case 'DELETE':{
            const filter = state.filter((value) => value.id !== action.payload)
            console.log(filter)
            return [...filter]
         }
        default: {
            return state
        }
    }
}
