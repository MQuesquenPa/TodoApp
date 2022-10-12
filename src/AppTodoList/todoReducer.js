

export const todoReducer = (initialState, action) => {

    switch (action.type) {
        case 'ADD':
            return [...initialState, action.payload];
    
        default:
            return initialState;
    }

    
}


