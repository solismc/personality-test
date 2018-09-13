import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="./images/TAB-logo-website.png" alt="logo" />
        </header>
        <section>
        <img src="./images/Who-Am-I.png" className="App-logo" alt="logo"/>
        <header className="App-intro">Who Am I?</header>
        <h2>AN IN-DEPTH PERSONALITY TEST DESIGNED BY PSYCOLOGISTS</h2>
        <button className="Start-Quiz-Button">Start Quiz!</button>
        </section>
      </div>
    );
  }
}

export default App;
