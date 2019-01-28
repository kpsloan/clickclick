import React, { Component } from 'react';
import Card from './Card';
import Xfiles from "./../xfiles.json"
import shuffle from "shuffle-array";

class Container extends Component {

    constructor(props) {
        super(props);

        this.state = {
            score: 0,
            xfiles: Xfiles,
            activeCard: null,
            selectedXfiles: []
        };
    }


    handleClick = (event) => {
        console.log('Clicking a card');

        let activeCard = event.target.id;

        console.log('ID of current card', activeCard);

        if (this.state.activeCard === activeCard) {
            this.endGame();
        } else {
            console.log('Updating score');
            this.setState({ activeCard });
            this.updateScore();
        }

        this.setState({ xfiles: shuffle(this.state.xfiles) });

        if (this.state.score === 12) {
            alert("You win!");
            this.props.updateCurrentScore(0);
            this.reset();    
        };
    }


    updateScore = () => {
        console.log('Local score is', this.state.score);
        const newScore = this.state.score + 1;
        console.log('Score is:', newScore);
        this.setState({ score: newScore });
        this.props.updateCurrentScore(newScore);
        
    }


    endGame = () => {
        alert("Game over! Try again?");
        this.props.updatehighScore(this.state.score);
        this.props.updateCurrentScore(0);
        this.reset();

    }

    reset = () => {
        this.setState({
          activeCard: null,
          score: 0
        });
    }

    render() {
        return (
            <div className="container" id="card-container">
                <div className="row">
                    {Xfiles.map(xfile => <Card src={xfile.image} key={xfile.id} id={xfile.id} alt={xfile.name} endGame={this.endGame} handleClick={this.handleClick} score={this.state.score} />)}
                </div>
            </div>
        );
    }
}

export default Container;