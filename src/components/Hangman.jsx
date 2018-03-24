import React, { Component } from 'react';
import '../index.css';
import '../App.css';
import {Link} from 'react-router-dom';
import Gallow from './Gallow';
import GameState from './GameState';

class Hangman extends Component {
    constructor() { //the purpose of the constructor is to Initialize the things that need to be set up
        super();       
        this.state = {
            pastGuesses: [],
            inputLetters: '',
            nWrong:0,
            win: false,
            underLine:[],
            answer: [],
            gameover: false,
            replay:'',
            goodbye:'',
            delay: false,
            // history:[]
        }
        this.props = {words: [
            'pizza',
            'noodle',
            'pasta',
            'sushi',
            'tofu',
            'steak',
            'meatball',
            'veggies'
        ]}

        this.setUpGame(); //Set up the game once(initialized), if the function set up in render, it will update every single time when the there's a change
    
    }

    setUpGame = () => {
        this.state.answer = this.props.words[Math.floor(Math.random() * this.props.words.length)].split('') //this function is called in the constructor
        console.log(this.state.answer) 
        this.state.nWrong = 0;
        this.state.pastGuesses = []
    }

    handleInputLetters = (event)=>{
        this.setState({inputLetters:event.target.value});
    }
    handleButton = (event)=>{ //button controls output, check right or wrong
        event.preventDefault();
        //this.setState({pastGuesses:this.state.pastGuesses.concat(this.state.inputLetters)});
        this.checkInput(); 
        console.log(this.state.pastGuesses);
    }
    checkInput = () => {
        let guessed = false;
        for(let i=0; i< this.state.pastGuesses.length; i++){
            if(this.state.inputLetters.toLowerCase() === this.state.pastGuesses[i]){
                guessed = true;
                break;
            }
        }
        if(guessed){
            alert('You already guessed ' + this.state.inputLetters.toLowerCase());
            this.setState({
                inputLetters: '' //clear form after alert
            })
        }
        else{
            this.setState({
                pastGuesses: this.state.pastGuesses.concat(this.state.inputLetters.toLowerCase()),
                inputLetters: '' // clear the form in setState after submitting, so it will update to empty string everytime when the 'onChange' submitted
            }) 
            if (this.state.answer.indexOf(this.state.inputLetters.toLowerCase()) === -1) {
                this.setState({ //nWrong is set  to update, so this.state.nWrong will be updated in anywhere else in the game
                    nWrong: this.state.nWrong + 1, //nWrong: ++this.state.nWrong    
                })
            } 
        }
        
        if (this.state.nWrong >= 6 ) { 
                this.setState({ 
                    win: false,
                    gameover: true,
                })
                // this.state.nWrong++;
                setTimeout(() => { this.setState({ replay: 'Would you like to play again?'})},2000);
                setTimeout(() => { this.setState({ delay: true})},2000);
            } else {
                let count = 0
                for(let i = 0; i < this.state.answer.length; i++){
                 //for loop checking for coun
                    let found = false;
                    for(let j =0; j< this.state.pastGuesses.length; j++){
                        if (this.state.answer[i] === this.state.pastGuesses[j]) {
                            found = true;
                            console.log(this.state.answer[i])
                            console.log(this.state.pastGuesses[j])   
                        }
                    }
                    if(found){
                        count++;
                        console.log(count)
                    }
                }    
                
                if (count === this.state.answer.length) {
                    this.setState({
                        win: true,
                        gameover: true,
                    }) 
                  setTimeout(() => { this.setState({ replay: 'Would you like to play again?' }) }, 2000);
                  setTimeout(() => { this.setState({ delay: true }) }, 2000);
                } 
            }      
    } //checkinput() ends

    goodbyeFunc = (event)=>{
        event.preventDefault();
        this.setState({goodbye:'Check your record in Highscore!'})
    }
     
    componentDidUpdate() {
        localStorage.setItem('history', JSON.stringify(this.state))
    }

    render() {
       
        let underline = "";
        for (let i = 0; i < this.state.answer.length; i++) {
            if(this.state.pastGuesses.indexOf(this.state.answer[i]) >= 0) {
                underline += this.state.answer[i]   //if matched, right letters take up the udererlines
            } else {
                underline += '_ '
            }
        }
        this.state.underLine.push(underline);

        return (
            <div className="container-fluid">
                <ul className="nav navBar nav-tabs">
                    <li><Link to="/">Game</Link></li>
                    <li><Link to="/Instruction">Instruction</Link></li>
                    <li><Link to="/Highscore">Highscore</Link></li>
                    {/* {React.cloneElement(this.props.children,{pastGuesses:this.state.pastGuesses, checkInput:this.checkInput})} */}
                </ul>
                <h4 className="foodques">Can you guess a popular food name?</h4>
                <Gallow nWrong={this.state.nWrong}/>
                <div className='container gameContainer'>
                    <form><button className="btn restart" onSubmit={()=>{this.constructor()}}>Restart</button></form>
                    <form onSubmit={(event)=>{this.handleButton(event)}}>
                        <label>
                            <input onChange={(event)=>{this.handleInputLetters(event);}}
                                   value={this.state.inputLetters.toLowerCase()}
                                   maxLength="1" />
                        </label>
                        <button className="btn" type="submit">Try!</button>
                    </form>
                    <div>
                        <h3>Your word is:</h3>
                        <div>{underline}</div>
                    </div>
                    <GameState inputLetters={this.state.inputLetters} nWrong={this.state.nWrong} pastGuesses={this.state.pastGuesses}/>
                    <div className="result">
                        {this.state.gameover ? <h3>{this.state.win ? 'Yay! You won!' : 'Sorry, You lost.'}</h3> : <div></div>}
                        {this.state.gameover ? <h3>{this.state.replay}</h3> : <div></div>}
                        {this.state.delay ? <form onSubmit={() => { this.constructor() }}><button className="btn" type="submit">Yes</button></form> : <div></div>}
                        {this.state.delay ? <form onSubmit={(event) => { this.goodbyeFunc(event) }}><button className="btn" type="submit">No</button></form> : <div></div>}
                        <div>{this.state.goodbye}</div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Hangman;


//localStorage.setItem()

