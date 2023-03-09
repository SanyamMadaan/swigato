import { createstore } from "redux";

const initialstate = {
    users : [] ,
    loggedinuser : null ,
    product : [{
        id : 1 ,
        name: 'Pizza',
        Price :100
    },
    {
        id : 2 ,
        name: 'Pasta',
        Price :80
    },
    {
        id : 3 ,
        name: 'Burger',
        Price :50
    },
    {
        id : 4 ,
        name: 'Mojito',
        Price :160
    }
],
cart : [],

}

const reducer = (state,action) => {
    switch(action.type){
        case "Register" :
             return {
                ...state,
                users: [...state.users,action.payload]

        }
        case "LOGIN" :
            return {
                ...state ,
                user : action.payload
            }
        default :
        return state ;
    }

} ;
export default createStore(reducer);