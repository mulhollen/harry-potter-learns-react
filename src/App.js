import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { HogwartsProvider } from "./HogwartsContext/";
import Nav from './Nav';
import SortingHat from './SortingHat';
import MyCommonRoom from './MyCommonRoom';


function App() {
  return (
    <Router>
      <HogwartsProvider>
        <Nav />
        <Switch>
          <Route path="/common-room" component={MyCommonRoom} />
          <Route exact path="/" component={SortingHat} />
          <Route render={() => <h1>404</h1>} />
        </Switch>
      </HogwartsProvider>
    </Router>
  );
}

export default App;
