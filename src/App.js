import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
// import ReactDOM from 'react-dom';
import Header from './components/Header';
import Stream from './components/Streams';
import EricRosen from './components/EricRosen';
import ChessNetwork from './components/ChessNetwork';
import ChessExplained from './components/ChristofSielecki';
import JohnBartholomew from './components/JohnBartholomew';
import AlexandraBotez from "./components/AlexandraBotez";
import Agadmator from "./components/AntonioRadic";

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './App.css';
require('dotenv').config();

function App() {
  return (
      <Router>
          <Header/>
            <Route exact path='/' component={Home} />
            <Route exact path='/live-streams' component={Stream} />
            <Route exact path='/about' component={About} />
            <Route exact path='/eric-rosen' component={EricRosen} />
            <Route exact path='/chessnetwork' component={ChessNetwork} />
            <Route exact path='/christof-sielecki' component={ChessExplained} />
            <Route exact path='/john-bartholomew' component={JohnBartholomew} />
            <Route exact path='/alexandra-botez' component={AlexandraBotez} />
            <Route exact path='/agadmator' component={Agadmator} />
      </Router>
  );
}

export default App;
