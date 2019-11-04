import React from 'react';
import './App.css';
import Auth from './components/Auth';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header } from 'semantic-ui-react';
import { BrowserRouter } from "react-router-dom";
import Playlists from './components/Playlists/Playlists';

function App() {
  return (
    <div className="app">
      <Container>
        <BrowserRouter>
          <Header as="h1" textAlign="center">Spotify Playlists</Header>
          <Auth />
          <div className="playlists-container">
          <Playlists/>
            
          </div>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
