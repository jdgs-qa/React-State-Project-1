import React, { Component } from 'react';

export default class Dropdown extends Component {
    constructor() {
        super();
        this.state = {
            OptionConstants: {
                item1: {
                    value: 1,
                    text: 1
                },
                item2: {
                    value: 2,
                    text: 2
                }
            }
        }
    }

    render() {
        return (
            <select class="form-control text-center" onChange={this.handleChange}>
                <option value="1.60934">⇐ Miles | Kilometers ⇒</option>
                <option value="0.621372736649807">⇐ Kilometers | Miles ⇒</option>
                <option value="28.3495">⇐ Ounces | Grams ⇒</option>
                <option value="0.03527399072294">⇐ Grams | Ounces ⇒</option>
                <option value="1760">⇐ Miles | Yards ⇒</option>
                <option value="0.000568181818182">⇐ Yards | Miles ⇒</option>
                <option value="240">⇐ Cups | Millilitres ⇒</option>
                <option value="0.004166666666667">⇐ Yards | Miles ⇒</option>
            </select>
        )
    }
    handleChange = (e) => this.props.onChange(e.target.value);
}