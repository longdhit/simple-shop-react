import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePage from '../page/HomePage/HomePage';
import CategoryPage from '../page/CategoryPage/CategoryPage';
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
        <Route exact path='/products' component={HomePage} />
        <Route exact path='/categories' component={CategoryPage} />
        <Route path='/product/:id' component={ProductPage} />
      </Switch>
    </div>
    );
  }
}

export default App;
