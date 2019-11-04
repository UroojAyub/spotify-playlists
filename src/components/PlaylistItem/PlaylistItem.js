import React from 'react'
import { Image, List, Segment } from 'semantic-ui-react';
import './PlaylistItemStyles.scss';

const PlaylistItem = ({ playlist }) => {

    return (
        <List.Item className="playlist-item" >
            <Segment className="playlist-container" vertical>
                <div className="img-wrapper">
                    <Image size='small' centered circular src={playlist.images[0].url} />
                </div>
                <List.Content className="playlist-content">
                    <List.Header className="playlist-heading" as="h3">{playlist.name}</List.Header>
                </List.Content>
            </Segment>
        </List.Item>
    )

}
export default PlaylistItem