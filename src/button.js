import React, { Component } from 'react';

export default class Button extends Component {
    constructor() {
        super();
        this.state = {
            timeNow: new Date()
        };
        this.updateTime = this.updateTime.bind(this);
    }

    render() {
        return (
            <div>
                <button className="btn btn-outline-dark btn-lg btn-block" onClick={this.updateTime}>{this.state.timeNow.toLocaleTimeString()}</button>
            </div>
        )
    }

    updateTime() {
        this.setState({
            timeNow: new Date()
        })
    }
}