import React from 'react';
import './App.css';
import { Switch, Route,BrowserRouter } from 'react-router-dom';

// Imports Components
import Item from './components/items/Item'
import Items from './components/items/Items'
import Header from './components/layout/Header';

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path='/' component={ Items }/>
            <Route path='/details/:uniqueID' component={Item}/>
        </Switch>
    </BrowserRouter>
)
}

export default App;
