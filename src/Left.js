import React, { Component } from 'react';

export default class Left extends Component {
    render() {
        return (
            <input className="form-control text-right" value={this.props.values.left} placeholder="Enter a value" type="text" onChange={this.handleChange} />
        )
    }
    handleChange = (e) => this.props.onChange(e.target.value);
}