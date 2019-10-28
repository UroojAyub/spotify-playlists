import ACTIONS from './../actions/constants';

const INITIAL_STATE = {
    myPlaylists: null,
    recommendedPlaylists: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTIONS.FETCH_PLAYLISTS:
            return { ...state, myPlaylists: action.payload }
        case ACTIONS.SIGN_OUT:
            return { ...state, myPlaylists: null, recommendedPlaylists: null }
        default:
            return state;
    }
}