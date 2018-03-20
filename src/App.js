import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter} from 'react-router-dom';
import Main from './components/Main';
import Header from './components/Header';

class App extends Component {
  render() {
     return (
        <BrowserRouter>
           <div>
            <Header />
            <Main />
           </div>
        </BrowserRouter>
     );
  }
}
export default App;
