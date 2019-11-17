import ACTIONS from './constants';
import spotify from './../apis/spotify';
import history from './../history';



export const signIn = (token) => {
    return async (dispatch) => {
        try {
            const response = await spotify.get('/me', {
                headers: { 'Authorization': "Bearer " + token }
            });
            dispatch({
                type: ACTIONS.SIGN_IN,
                payload: { token, userName: response.data.display_name }
            });
            console.log(response)
            history.push('/playlists')
        }
        catch (error) {
            console.log(error.response)
            const { status } = error.response;
            if (status === 401) {
                dispatch({
                    type: ACTIONS.SIGN_OUT
                });
            }
        }
    }
}


export const fetchPlaylists = () => {
    return async (dispatch, getState) => {
        try {
            const { token } = getState().auth;
            const myPlaylist = await spotify.get('/me/playlists', { headers: { 'Authorization': "Bearer " + token } });
            const featuredPlaylist = await spotify.get('/browse/featured-playlists', { headers: { 'Authorization': "Bearer " + token } });

            dispatch({
                type: ACTIONS.FETCH_PLAYLISTS,
                payload: { myPlaylists: myPlaylist.data.items, featuredPlaylists: featuredPlaylist.data.playlists.items }
            });
        }
        catch (error) {
            console.log(error.response)

        }
    }
}

export const fetchPlaylistTracks = (id) => {
    return async (dispatch, getState) => {
        try {
            const { token } = getState().auth;
            const tracks = await spotify.get(`/playlists/${id}/tracks`, { headers: { 'Authorization': "Bearer " + token } });
            dispatch({
                type: ACTIONS.FETCH_TRACKS,
                payload: { tracks: tracks.data.items.map(item => item.track) }
            });
            dispatch({
                type: ACTIONS.SELECT_TRACK,
                payload: { id: tracks.data.items[0].track.id }
            })
        }
        catch (error) {
            console.log(error.response)

        }
    }
}
export const selectTrack = (id) => {
    return {
        type: ACTIONS.SELECT_TRACK,
        payload: { id }
    }
}