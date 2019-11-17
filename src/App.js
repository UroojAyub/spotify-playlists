import React from 'react';
import './App.css';
import Auth from './components/Auth';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header } from 'semantic-ui-react';
import { Router, Route, Switch } from "react-router-dom";
import Playlists from './components/Playlists/Playlists';
import Tracks from './components/Tracks/Tracks';
import history from './history';

function App() {
  return (
    <div className="app">
      <Container>
        <Header as="h1" textAlign="center">Spotify Playlists</Header>
        <Auth />
        <Router history={history}>
          <Switch>
            <Route path="/playlists/" exact component={Playlists} />
            <Route path="/playlists/:id" exact component={Tracks} />
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
