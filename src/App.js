import React, { Component} from 'react';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import "./App.css";
import Footer from "./components/Footer"

class App extends Component {
  state = {
    score: 0,
    highScore: 0
  }

  updateCurrentScore = (newCount) => {
    this.setState({score: newCount});
  }

  updatehighScore = (newHigh) => {
    if (newHigh > this.state.highScore) {
      this.setState({highScore: newHigh - 1})
    }
  }

  render() {
    return (
      <div>
        <Navbar score={this.state.score} top={this.state.highScore}/>
        <Header/>
        <Container updateCurrentScore={this.updateCurrentScore} updatehighScore={this.updatehighScore}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
