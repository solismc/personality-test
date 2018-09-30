import React, { Component } from 'react';
import Questions from './Questions';
import logo from './logo.svg';

class HomePage extends Component {
    render() {
        return (
            <div>
                <section className="container-fluid">
                  <img className="test-image" src="./images/my-personality-test.jpg"
                    alt="logo"/>
                  
                  <section className="App-intro">Who Am I?</section>
                  <section>AN IN-DEPTH PERSONALITY TEST DESIGNED BY PSYCOLOGISTS</section>
                  <br></br>
                  <button type="button" className="btn btn-primary btn-lg">Start Quiz</button>
                  </section>
                  <br/>
                  <br/>
                <section>
                    <footer className="footer">
                        Powered by <img src={logo} className="App-logo" alt="logo"/>
                    </footer>
                </section>
            </div>
        );
    }
}

export default HomePage;
