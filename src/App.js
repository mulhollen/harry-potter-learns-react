import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { HogwartsProvider } from "./HogwartsContext/";
import SortingHat from './SortingHat';
import MyCommonRoom from './MyCommonRoom';


function App() {
  return (
    <Router>
      <HogwartsProvider>
        <Switch>
          <Route path="/common-room" component={MyCommonRoom} />
          <Route exact path="/" component={SortingHat} />
        </Switch>
      </HogwartsProvider>
    </Router>
  );
}

export default App;
