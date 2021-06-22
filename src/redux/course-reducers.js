

const SET_COURSE = 'CE/GET_COURSE';


let initialState = {

    course: []

};

export  const courseReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case SET_COURSE: {
            return {
                ...state, course: action.payload

            }
        }

        default:
            return state;
    }

}

export const setCourse = (repos) => ({type: SET_COURSE, payload: repos});


export default courseReducer;