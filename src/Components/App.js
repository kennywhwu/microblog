import React, { Component } from 'react';
import './App.css';
import NavHeader from './NavHeader';
import PageContainer from './PageContainer';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <NavHeader />
        <PageContainer />
      </div>
    );
  }
}

export default App;
