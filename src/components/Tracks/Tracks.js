import React, { useEffect, useCallback } from 'react'
import { connect } from 'react-redux';
import { fetchPlaylistTracks, selectTrack } from '../../actions';
import { List, Image, Grid, Card } from 'semantic-ui-react'
import * as _ from 'lodash';
import './TrackStyles.scss';

const Tracks = (props) => {
    const fetchTracks = useCallback(props.fetchPlaylistTracks, [props.match.params.id]);

    useEffect(() => {
        if (props.auth) {
            props.fetchPlaylistTracks(props.match.params.id);
        }
    }, [props.auth, fetchTracks]);

    if (props.tracks) {
        console.log(props.tracks)
        let trackList = _.map(props.tracks, (track, id) => (
            track ? <List.Item key={id}>
                <List.Content>
                    <List.Header as='h5' className="track-header" onClick={() => { props.selectTrack(id) }}>{track.name}</List.Header>
                    <List.Description className="track-description" onClick={() => { props.selectTrack(id) }}>
                        {track.artists.map(a => a.name).join(', ').replace(/,(?!.*,)/gmi, ' and')}
                    </List.Description>
                </List.Content>
            </List.Item> : null)
        )

        return (<Grid columns={2} className="tracks-container">
            <Grid.Row>
                <Grid.Column >
                    <List relaxed='very' celled>{trackList}</List>
                </Grid.Column>
                <Grid.Column className="track-detail-col">
                    {props.selectedTrack ?
                        <Card className="track-detail-card">
                            <Image src={props.selectedTrack.album.images[0].url} wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>{props.selectedTrack.name}</Card.Header>
                                <Card.Meta> {props.selectedTrack.artists.map(a => a.name).join(', ').replace(/,(?!.*,)/gmi, ' and')}</Card.Meta>
                                <Card.Description>{milliToMinutes(props.selectedTrack.duration_ms)}</Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                            </Card.Content>
                        </Card> :
                        null
                    }
                </Grid.Column>
            </Grid.Row>
        </Grid>
        )
    }
    return null
}

const milliToMinutes = (millis) => {
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth.token,
        tracks: state.tracks.trackList,
        selectedTrack: state.tracks.selectedTrack
    }
}
export default connect(mapStateToProps, { fetchPlaylistTracks, selectTrack })(Tracks)