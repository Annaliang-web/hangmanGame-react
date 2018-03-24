import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

class Highscore extends React.Component{
    componentWillMount() {
        let storedPastGuesses = JSON.parse(localStorage.getItem('history')) //'history' is key in local storage

        if (storedPastGuesses !== null) {
            this.setState({
                pastGuesses: storedPastGuesses
            })
        }
    }        
    componentDidUpdate() {
        localStorage.setItem('history', JSON.stringify(this.props.pastGuesses))
    }
    
    render(){
        return(
            <div>
                <ul className="nav navBar nav-tabs" >
                    <li><Link to="/">Game</Link></li>
                    <li><Link to="/Instruction">Instruction</Link></li>
                    <li><Link to="/Highscore">Highscore</Link></li>
                </ul>
                <div className="history">
                    <div>{this.props.pastGuesses}</div>
                </div>
            </div>
            
        )
    }
}

export default Highscore;