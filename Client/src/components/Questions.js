import React, { Component } from "react";
import logo from "./logo.svg";
import QuestionData from "../Data/Questions.json";
import history from "./History";
// import "./App.css";

class Questions extends Component {
  constructor(props) {
    super(props);
    // let fromStorage = localStorage.getItem ("totalscore")
    // let fromStorage = localStorage.getItem ("result")
    this.state = {
      currentQuestion: 1,
      currentAnswer: 1,
      score: 0,
      result: 0
    };
  }

  componentDidMount() {
    console.log({ Data: Questions, keys: Object.keys(Questions) });
  }

  updateCurrentQuestion = (nextQuestion, questionValue) => {
    this.setState({
      currentQuestion: nextQuestion,
      score: this.state.score + questionValue
    });
  };

  addOneToQuestion = questionValue => {
    if (this.state.currentQuestion < 10) {
      this.updateCurrentQuestion(this.state.currentQuestion + 1, questionValue);
    } else {
      let result;
      if (this.state.score >= 80 && this.state.score <= 125) {
        result = "D";
      } else if (this.state.score >= 130 && this.state.score <= 155) {
        result = "C";
      } else if (this.state.score >= 160 && this.state.score <= 200) {
        result = "D";
      } else if (this.state.score >= 210 && this.state.score <= 250) {
        result = "I";
      } else if (this.state.score >= 255 && this.state.score <= 375) {
        result = "S";
      } else if (this.state.score >= 380 && this.state.score <= 410) {
        result = "I";
      }
      const totalscore = this.state.score

      localStorage.setItem ("totalscore", totalscore,)
      localStorage.setItem ("result", result)
      // store the results in local storage
      history.push("/captureform");
      
    }
  };

  render() {
    return (
      <div className="App">
        <section className="ActualQuestion">
          <h3>
            {
              QuestionData.ListofQuestions.data[this.state.currentQuestion - 1]
                .Question
            }
          </h3>
        </section>

        <section className="img-fluid">
          <img
            onClick={() => this.addOneToQuestion(10)}
            className="image"
            src={`./images/Question-${
              this.state.currentQuestion
            }/Picture1Question${this.state.currentQuestion}.png`}
            alt="P1Q1"
            height="200"
            width="200"
          />
          <img
            onClick={() => this.addOneToQuestion(30)}
            className="image"
            src={`./images/Question-${
              this.state.currentQuestion
            }/Picture2Question${this.state.currentQuestion}.png`}
            alt="P1Q1"
            height="200"
            width="200"
          />
          <img
            onClick={() => this.addOneToQuestion(15)}
            className="image"
            src={`./images/Question-${
              this.state.currentQuestion
            }/Picture3Question${this.state.currentQuestion}.png`}
            alt="P1Q1"
            height="200"
            width="200"
          />
          <img
            onClick={() => this.addOneToQuestion(45)}
            className="image"
            src={`./images/Question-${
              this.state.currentQuestion
            }/Picture4Question${this.state.currentQuestion}.png`}
            alt="P1Q1"
            height="200"
            width="200"
          />
        </section>
        <section>
          <footer className="footer">
            Powered by <img src={logo} className="App-logo" alt="logo" />
          </footer>
        </section>
      </div>
    );
  }
}

export default Questions;
