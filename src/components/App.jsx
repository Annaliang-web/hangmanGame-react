//App
import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../index.css';
import Hangman from './Hangman';
import Instruction from './Instruction';
import Highscore from './Highscore';

class App extends React.Component {
  
  render(){
    
    return(
       <Switch>
         <Route path='/' exact component={Hangman} />
         <Route path='/instruction' component={Instruction}/>
         <Route path='/highscore' component={Highscore}/>
       </Switch>     
    )
  }
}




export default App;

