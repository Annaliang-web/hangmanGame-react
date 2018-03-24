import React, { Component } from 'react'
import '../index.css';
import '../App.css';
import { Link } from 'react-router-dom';

class GameState extends Component{

    render(){
        return(
            <div className="game-state">
                <div>
                    <h3>Currently Selected Guess is:</h3>
                    <div>{this.props.inputLetters.toLowerCase()}</div>
                </div>
                <div>
                    <h3>Your past guesses are:</h3>
                    <div>{this.props.pastGuesses}</div>
                </div>
                <div>
                    <h3>Number of wrong guesses:</h3>
                    <div>{this.props.nWrong}</div>
                </div>
            </div>
        )
    }
}

export default GameState;