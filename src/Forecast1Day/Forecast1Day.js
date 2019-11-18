import React, { Component } from 'react';
import './Forecast1Day.css';
class Forecast1Day extends Component {
    render() {
        const days =["sunday", "monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        return (
            
            <div className="ForcastDay">
                <h1>{days[this.props.day]}</h1>
                <img alt="#" src= {require(`../icons/${this.props.icon}.png`)}></img>
                <div className="ForcastDayRow">
                    <span className="temp">{this.props.temperature}</span>
                    <span>{this.props.description}</span>
                </div>
            </div>
        );
    }
}

export default Forecast1Day;