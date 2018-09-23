import React, { Component } from 'react';

class Questions extends Component {

constructor(props) {
    super(props);
    this.state = {
        currentQuestion:1
    }
}

updateCurrentQuestion = (nextQuestion) => {
    this.setState({
        currentQuestion: nextQuestion
    })
}

addOneToQuestion = () => {
    if (this.state.currentQuestion < 10)
    this.updateCurrentQuestion(this.state.currentQuestion + 1)
    
}


    render() {
        return (
        <div className="App">
        <section className="img-fluid">
            <img onClick={this.addOneToQuestion} className="image" src={`./images/Question-${this.state.currentQuestion}/Picture1Question${this.state.currentQuestion}.png`} alt="P1Q1" height="300" width="300"/>
            <img onClick={this.addOneToQuestion} className="image" src={`./images/Question-${this.state.currentQuestion}/Picture2Question${this.state.currentQuestion}.png`} alt="P1Q1" height="300" width="300"/>
            <img onClick={this.addOneToQuestion} className="image" src={`./images/Question-${this.state.currentQuestion}/Picture3Question${this.state.currentQuestion}.png`} alt="P1Q1" height="300" width="300"/>
            <img onClick={this.addOneToQuestion} className="image" src={`./images/Question-${this.state.currentQuestion}/Picture4Question${this.state.currentQuestion}.png`} alt="P1Q1" height="300" width="300"/>
        </section>
        <section>
            <footer className="footer">
                Powered by 
            </footer>
        </section>
        </div>
        );
    }
}

export default Questions;
