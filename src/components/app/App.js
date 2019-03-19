import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import AllDogsContainer from '../../containers/dogs/AllDogs';
import DogDetails from '../../containers/dogs/DogDetails';

export default function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={AllDogsContainer} />
          <Route exact path="/dogs/:id" component={DogDetails} />
        </Switch>
      </>
    </Router>
  );
}
