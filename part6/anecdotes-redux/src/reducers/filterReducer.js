const filterReducer = (state = '', action) => {
    console.log('ACTION: ', action)
    
    switch (action.type) {
        case 'SET_FILTER': return action.payload
        default: return state
    }
}

export const filterChange = filter => {

    console.log(1, 'filterReducer.js', filter)
    
    return {
        type: 'SET_FILTER',
        payload: filter,
    }
}

export default filterReducer