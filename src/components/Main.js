import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import Login from './Login';

class Main extends Component {
   render() {
      return (
          <main>
             <Switch>
                 <Route exact path='/' component={Home} />
                 <Route exact path='/login' component={Login} />
              </Switch>
          </main>
        )
      
   }
}
export default Main;