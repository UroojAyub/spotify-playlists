import React, { useEffect, useCallback } from 'react'
import { connect } from 'react-redux';
import { fetchPlaylists } from '../../actions';
import './PlaylistStyles.scss';
import PlaylistGroup from './../PlaylistGroup/PlaylistGroup';

const Playlists = ({ auth, fetchPlaylists }) => {
    const fetchPlaylist = useCallback(fetchPlaylists, [auth]);

    useEffect(() => {
        console.log(auth)
        let promises = [];
        for (let i = 0; i <= 50; i++) {
            promises.push(fetch('https://jsonplaceholder.typicode.com/posts') )
        }
        Promise.all(promises).then(console.log)
        if (auth) {
            // fetchPlaylist();

        }
    }, [auth, fetchPlaylist]);

    return (
        <div>
            <PlaylistGroup header="My Playlists" playlistType="user" />
            <PlaylistGroup header="Featured Playlists" playlistType="featured" />
        </div>
    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth.token
    }
}
export default connect(mapStateToProps, { fetchPlaylists })(Playlists)