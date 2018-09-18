import React, { Component } from 'react';

class HomePage extends Component {
    render() {
        return (
            <div>
                <section className="container-fluid">
                  <img className="test-image" src="./images/Who-Am-I.png"
                    alt="logo"/>
                  
                  <section className="App-intro">Who Am I?</section>
                  <section>AN IN-DEPTH PERSONALITY TEST DESIGNED BY PSYCOLOGISTS</section>
                  <br></br>
                  <button type="button" className="btn btn-primary btn-lg">Start Quiz!</button>
                  {/* <button className="Start-Quiz-Button">Start Quiz!</button> */}
                  </section>
                  <br/>
                  <br/>
                <section className="footer">
                <footer>
                    Powered by 
                </footer>
                </section>
            </div>
        );
    }
}

export default HomePage;
