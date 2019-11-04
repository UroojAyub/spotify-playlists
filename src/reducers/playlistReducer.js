import ACTIONS from './../actions/constants';
import * as _ from 'lodash';

const INITIAL_STATE = {
    myPlaylists: null,
    featuredPlaylists: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTIONS.FETCH_PLAYLISTS:
            return {
                ...state,
                myPlaylists: _.mapKeys(action.payload.myPlaylists, 'id'),
                featuredPlaylists: _.mapKeys(action.payload.featuredPlaylists, 'id')
            }
        case ACTIONS.SIGN_OUT:
            return { ...state, myPlaylists: null, featuredPlaylists: null }
        default:
            return state;
    }
}