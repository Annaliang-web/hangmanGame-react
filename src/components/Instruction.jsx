import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
class Instruction extends React.Component {
    render() {
        return (
            <div>
                <ul className="nav navBar nav-tabs">
                    <li><Link to="/">Game</Link></li>
                    <li><Link to="/Instruction">Instruction</Link></li>
                    <li><Link to="/Highscore">Highscore</Link></li>
                </ul>
                <div className="rules">
                    <h3>Instructions for Playing Hangman</h3>
                    <ol>
                        <li>Play individually or in groups.</li>
                        <li>Select a letter of the alphabet.</li>
                        <li>If the letter is contained in the word, the group or individual takes another turn guessing a letter. </li>
                        <li>If the letter is not contained in the word/phrase, a portion of the hangman is added. </li>
                        <li>The game continues until: <br/>
                            <span>the word is guessed (all letters are revealed)- win the game or,</span><br/>
                            <span>all the parts of the hangman are displayed - loes the game.</span>
                        </li>
                        <li>You only have 6 chances. Good luck on the game!</li>
                    </ol>
                </div>
            </div >
        )
    }
}

export default Instruction;