import React, { Component } from 'react';
import Card from './Card';
import Xfiles from "./../xfiles.json"
import shuffle from "shuffle-array";

class Container extends Component {

    constructor(props) {
        super(props);

        this.state = {
            // score: 1,
            xfiles: Xfiles,
            selectedXfiles: []
        };
    }


    handleClick = (event) => {


        let id = event.target.id;
        let exists = false;
        this.state.xfiles.forEach(xfile => {

            if (xfile.id === id) {
                exists = true;
                this.updateScore();
            }
        });

        if (exists) {
            this.endGame();
        }

        else {
            this.state.xfiles.forEach(xfile => {
                if (xfile.id === id) {
                    this.setState({ selectedXfiles: [...this.state.selectedXfiles, xfile] });
                    console.log(this.state.selectedXfiles);
                    this.updateScore();
                }
            })
        }

        this.setState({ xfiles: shuffle(this.state.xfiles) });

    }


    // updateScore = () => {
    //     this.setState({ score: this.state.score + 1 });
    //     this.props.updateCurrentScore(this.state.score);
        
    // }


    // endGame = () => {
    //     alert("Game over!");
    //     this.props.updateTopScore(this.state.score);
    //     this.setState({ score: 1, selectedXfiles: [] });
    //     this.props.updateCurrentScore(0);
    // }

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