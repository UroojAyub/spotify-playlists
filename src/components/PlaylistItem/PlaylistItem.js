import React from 'react'
import { Image, List, Segment } from 'semantic-ui-react';
import './PlaylistItemStyles.scss';
import { Link } from 'react-router-dom';

const PlaylistItem = ({ playlist }) => {

    return (
        <List.Item className="playlist-item" >
            <Segment className="playlist-container" vertical>
                <div className="img-wrapper">
                    <Link to={`playlist/${playlist.id}`}><Image size='small' src={playlist.images[0].url} /></Link>
                </div>
                <List.Content className="playlist-content">
                    <List.Header className="playlist-heading" as="h3">
                        <Link to={`playlist/${playlist.id}`}>{playlist.name}</Link>
                    </List.Header>
                </List.Content>
            </Segment>
        </List.Item>
    )

}
export default PlaylistItem