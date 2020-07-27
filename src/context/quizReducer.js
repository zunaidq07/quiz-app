const quizReducer = (state, action) => {
    switch(action.type) {
        case 'SET_SCORE': 
            return {
                ...state,
                score: action.payload === true ? state.score + 1 : state.score

            }
        default:
            return state

    }
}

export default quizReducer