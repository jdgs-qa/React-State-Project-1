import React, { Component } from 'react';

export default class Right extends Component {

    render() {
        return (
            <input id="kilometers" className="form-control" value={this.props.values.right} placeholder="Enter a value" type="text" onChange={this.handleChange} />
        )
    }
    handleChange = (e) => this.props.onChange(e.target.value);
}