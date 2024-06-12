import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store';
import News from './components/News'


const App = () => {
  return ( 
    <Provider store={store}>
      <div>
      <h1>News App</h1>
      <News />
      </div>
    </Provider>
  );
}

export default App;
