import React, { Component } from "react";
import logo from "./logo.svg";
import QuestionData from "../Data/Questions.json";
import { Link } from "react-router-dom";
import history from "./History";

class Questions extends Component {
  constructor(props) {
    super(props);
    let fromStorage = localStorage.getItem ("totalscore")
    this.state = {
      currentQuestion: 1,
      currentAnswer: 1,
      score: 0
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
      console.log(this.state.score);
      if (this.state.score >= 80 && this.state.score <= 125) {
        console.log("D");
      } else if (this.state.score >= 130 && this.state.score <= 155) {
        console.log("C");
      } else if (this.state.score >= 160 && this.state.score <= 200) {
        console.log("DI / ID")
      } else if (this.state.score >= 210 && this.state.score <= 245) {
        console.log("I")
        // for now, this would be a gap that would go a default//
      } else if (this.state.score >= 310 && this.state.score <= 375) {
        console.log("IS / SI")
      } else if (this.state.score >= 380 && this.state.score <= 410) {
        console.log("S")
      }
      const totalscore = this.state.score
      localStorage.setItem ("totalscore", totalscore)
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
            height="300"
            width="300"
          />
          <img
            onClick={() => this.addOneToQuestion(30)}
            className="image"
            src={`./images/Question-${
              this.state.currentQuestion
            }/Picture2Question${this.state.currentQuestion}.png`}
            alt="P1Q1"
            height="300"
            width="300"
          />
          <img
            onClick={() => this.addOneToQuestion(15)}
            className="image"
            src={`./images/Question-${
              this.state.currentQuestion
            }/Picture3Question${this.state.currentQuestion}.png`}
            alt="P1Q1"
            height="300"
            width="300"
          />
          <img
            onClick={() => this.addOneToQuestion(45)}
            className="image"
            src={`./images/Question-${
              this.state.currentQuestion
            }/Picture4Question${this.state.currentQuestion}.png`}
            alt="P1Q1"
            height="300"
            width="300"
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
