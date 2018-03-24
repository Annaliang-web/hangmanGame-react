import React, { Component } from 'react'
import '../index.css';
import '../App.css';
import { Link } from 'react-router-dom';

class Gallow extends Component{
    render(){
        return(
            <div className='gallow'>
                <div className='base'></div>  
                <div className='post'></div>
                <div className='bar'></div>
                <div className='rope'></div>
                <div className='head' style={{ visibility: this.props.nWrong >= 1 ? 'visible' : 'hidden' }}></div>
                <div className='body' style={{ visibility: this.props.nWrong >= 2 ? 'visible' : 'hidden' }}></div>
                <div className='leftArm' style={{ visibility: this.props.nWrong >= 3 ? 'visible' : 'hidden' }}></div>
                <div className='rightArm' style={{ visibility: this.props.nWrong >= 4 ? 'visible' : 'hidden' }}></div>
                <div className='leftLeg' style={{ visibility: this.props.nWrong >= 5 ? 'visible' : 'hidden' }}></div>
                <div className='rightLeg' style={{ visibility: this.props.nWrong >= 6 ? 'visible' : 'hidden' }}></div>
            </div>
        )
    }
}

export default Gallow;