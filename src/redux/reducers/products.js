import {SET_PRODUCTS} from "../action-types";

const initialState = {
    product: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SET_PRODUCTS': {
            return {...state, product: action.payload}
        }
        default: {
            return state
        }
    }
}
