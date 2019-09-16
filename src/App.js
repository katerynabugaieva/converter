import React, {Component} from 'react';
import './App.css';
import Header from './component/Header'
import Converter from './component/converter'

class App extends Component {
render() {
  return (
    <div className="App">
      <header>
       <Header/>
      </header>
      <Converter/>
    </div>
  );
}}

export default App;
