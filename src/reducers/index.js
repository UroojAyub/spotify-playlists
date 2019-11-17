import { combineReducers } from 'redux';
import authReducer from './authReducer';
import playlistReducer from './playlistReducer';
import tracksReducer from './tracksReducer';


export default combineReducers({
    auth: authReducer,
    playlists: playlistReducer,
    tracks: tracksReducer
})