import ACTIONS from './constants';
import spotify from './../apis/spotify';



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


export const fetchMyPlaylists = () => {
    return async (dispatch, getState) => {
        try {
            const { token } = getState().auth.token;
            const response = await spotify.get('/me/playlists', {
                headers: { 'Authorization': "Bearer " + token }
            });
            dispatch({
                type: ACTIONS.SIGN_IN,
                payload: { token, userName: response.data.display_name }
            });
            console.log(response)
        }
        catch (error) {
            console.log(error.response)
           
        }
    }
}