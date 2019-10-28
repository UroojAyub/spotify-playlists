import React, { Component } from 'react'
import { Button, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { signIn } from '../actions';

const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const redirectUri = "http://localhost:3000/callback";
const scopes = [
    'user-read-email',
    'user-read-private',
    "user-read-currently-playing",
    "user-read-playback-state"
]

class Auth extends Component {

    componentDidMount() {
        const urlComponents = this.getURLComponents();
        if (urlComponents.access_token) {
            this.props.signIn(urlComponents.access_token);
        }
    }

    getURLComponents = () => {
        return window.location.hash.substring(1).split("&")
            .reduce((result, item) => {
                if (item) {
                    var [key, value] = item.split("=");
                    result[key] = decodeURIComponent(value);
                }
                return result;
            }, {});
    }


    render() {
        if (!this.props.token) {
            const authLink = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
            return (
                <div style={{textAlign:'center'}}>
                    <a href={authLink}><Button secondary>Login to Spotify</Button></a>
                </div>
            )
        }
        else {
            return (<div>
                <Header as="h2" textAlign="center">Welcome {this.props.userName}</Header>
            </div>)
        }
    }
}
const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
        userName: state.auth.userName,
    }
}
export default connect(mapStateToProps, { signIn })(Auth)