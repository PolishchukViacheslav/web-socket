import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { Room1 } from './components/Room1';
import { Room2 } from './components/Room2';

function App() {

  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/room1" >Room1</Link>
          </li>
          <li>
            <Link to="/room2" >Room2</Link>
          </li>
        </ul>
      </div>
      <Switch>
          <Route path="/room1">
            <Room1 />
          </Route>
          <Route path="/room2">
            <Room2 />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
