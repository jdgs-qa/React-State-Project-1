import React, { Component } from 'react';
import Left from './Left';
import Right from './Right';
import Dropdown from './Dropdown';

export default class Converter extends Component {
    constructor() {
        super();
        this.state = {
            conversionFactor: 1.60934,
            values: {
                left: null,
                right: null
            }
        }
        this.updateLeft = (val) => this.setState({ conversionFactor: this.state.conversionFactor, values: { left: val, right: (val * this.state.conversionFactor).toFixed(2) } })
        this.updateRight = (val) => this.setState({ conversionFactor: this.state.conversionFactor, values: { left: (100 * val / this.state.conversionFactor).toFixed(2), right: val } })

        this.updateConversionFactor = (val) => this.setState({ conversionFactor: val, values: { left: this.state.values.left, right: (this.state.values.left * val).toFixed(2) } });
    }

    render() {
        return (
            <div className="form-group input-group mt-4">
                <Left values={this.state.values} onChange={this.updateLeft} />
                <Dropdown onChange={this.updateConversionFactor} />
                <Right values={this.state.values} onChange={this.updateRight} />
            </div>
        )
    }
}