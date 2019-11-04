import React, {  } from 'react'
import { Header, Divider, Segment, List, Container,Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import './PlaylistGroupStyles.scss';
import { fetchPlaylists } from '../../actions';
import PlaylistItem from './../PlaylistItem/PlaylistItem';

const PlaylistGroup = (props) => {


    let playlistView = _.map(props.playlists, (playlist, id) => {
        return (<PlaylistItem key={id} playlist={playlist} />)
    })

    if (props.playlists) {
        return (
            <Segment vertical>
                <Header>{props.header}</Header>
                <Divider />
                <List horizontal>{playlistView}</List>
            </Segment>
        )
    }
    else if (props.auth) {
        return (
            <Container>
                <Loader/>
            </Container>
        )
    }
    else {
        return null;
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth.token,
        playlists: ownProps.playlistType === 'user' ? state.playlists.myPlaylists : state.playlists.featuredPlaylists
    }
}
export default connect(mapStateToProps, { fetchPlaylists })(PlaylistGroup)