import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePage from '../page/HomePage/HomePage';
import AdminPage from '../page/AdminPage/AdminPage';
import ProductPage from '../page/ProductPage/ProductPage';
import NavBar from './NavBar'
import './App.css';

class App extends Component {
  render() {
    return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/admin' component={AdminPage} />
        <Route path='/product/:id' component={ProductPage} />
      </Switch>
    </div>
    );
  }
}

export default App;
