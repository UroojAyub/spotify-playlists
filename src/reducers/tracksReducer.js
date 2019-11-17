import ACTIONS from './../actions/constants';
import * as _ from 'lodash';

const INITIAL_STATE = {
    trackList: null,
    selectedTrack: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTIONS.FETCH_TRACKS:
            return {
                ...state,
                trackList: _.mapKeys(action.payload.tracks, 'id'),
            }
        case ACTIONS.SELECT_TRACK:
            return {
                ...state,
                selectedTrack: state.trackList[action.payload.id]
            }
        case ACTIONS.SIGN_OUT:
            return { ...state, tracks: null, selectedTrack: null }
        default:
            return state;
    }
}