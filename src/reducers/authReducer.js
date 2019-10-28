import ACTIONS from './../actions/constants';

const INITIAL_STATE = {
    token: null,
    userName: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTIONS.SIGN_IN:
            return { ...state, ...action.payload }
        case ACTIONS.SIGN_OUT:
            return { ...state, token: null, userName: null }
        default:
            return state;
    }
}