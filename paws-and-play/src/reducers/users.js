export default function usersReducer(state=[], action){

    switch(action.type){
        case 'FETCH_USERS':
            return [...state, action.payload];
            return state;
        case 'ADD_USER':
            // change to true
            return [...state, action.payload];
        default:
            return state;
    }
}
