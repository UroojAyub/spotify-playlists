import React, { Component } from 'react'
import { Header, Divider ,Segment} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { } from '../actions';


const PlaylistGroup = ({ props }) => {

    return (
        <Segment vertical>
            <Header>My Playlists</Header>
            <Divider />
        </Segment>
    )
}
const mapStateToProps = (state) => {
    return {
    }
}
export default connect(mapStateToProps, {})(PlaylistGroup)