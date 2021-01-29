import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import home from './Component/Home/Home'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
            <Route exact path="/" render={() => (
              <Redirect to="/home"/>
            )}/>
            <Route exact path="/home" component={home} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
