import React, { Component } from 'react';
import './style/App.css'
import { Switch, Route } from 'react-router-dom'
import Service from './Service'
import Home from './Home'
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/Service' component={Service} />
        </Switch>
      </div>
    );
  }
}
export default App;