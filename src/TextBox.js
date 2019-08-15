import React, { Component } from 'react';

export default class TextBoxes extends Component {

    constructor() {
        super();
        this.state = {
            text: "",
            style: {
                color: "",
                fontFamily: "",
                backgroundColor: "",
                fontSize: ""
            }
        }

        this.changeText = this.changeText.bind(this);
        this.changeColor = this.changeColor.bind(this);
    }

    render() {
        return (
            <div>
                <div className="form-group input-group mt-4">
                    <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-pencil"></i> </span>
                    </div>
                    <textarea id="textbox" className="form-control" value={this.state.text} placeholder="Type a story in here!" type="text" rows="3" onChange={textbox => this.changeText(textbox)} />

                </div >
                <div className="form-group input-group mt-4">
                    <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-tint"></i> </span>
                    </div>
                    <input id="colorbox" className="form-control" value={this.state.style.color} placeholder="choose a web color" type="text" onChange={colorbox => this.changeColor(colorbox)} />
                    <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-fill-drip"></i> </span>
                    </div>
                    <input id="colorbox" className="form-control" value={this.state.style.backgroundColor} placeholder="choose a background color" type="text" onChange={colorbox => this.changeBGColor(colorbox)} />
                    <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-font"></i> </span>
                    </div>
                    <input id="fontbox" className="form-control" value={this.state.style.fontFamily} placeholder="choose a font" type="text" onChange={fontbox => this.changeFont(fontbox)} />
                    <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-text-height"></i> </span>
                    </div>
                    <input id="fontSizebox" className="form-control" value={this.state.style.fontSize} placeholder="choose a font size" type="text" onChange={fontSizebox => this.changeFontSize(fontSizebox)} />
                </div>
                <div className="m-4" style={this.state.style}>
                    <p>{this.state.text}</p>
                </div>
            </div >
        )
    }

    changeText(textbox) {
        this.setState({ text: textbox.target.value }
        )
    }

    changeColor(colorbox) {
        this.setState({
            style: {
                color: colorbox.target.value,
                fontFamily: this.state.style.fontFamily,
                backgroundColor: this.state.style.backgroundColor,
                fontSize: this.state.style.fontSize
            }
        });
    }

    changeBGColor(colorbox) {
        this.setState({
            style: {
                color: this.state.style.color,
                fontFamily: this.state.style.fontFamily,
                backgroundColor: colorbox.target.value,
                fontSize: this.state.style.fontSize
            }
        });
    }

    changeFont(fontbox) {
        this.setState({
            style: {
                color: this.state.style.color,
                fontFamily: fontbox.target.value,
                backgroundColor: this.state.style.backgroundColor,
                fontSize: this.state.style.fontSize
            }
        });
    }

    changeFontSize(fontSizebox) {
        this.setState({
            style: {
                color: this.state.style.color,
                fontFamily: this.state.style.fontFamily,
                backgroundColor: this.state.style.backgroundColor,
                fontSize: fontSizebox.target.value
            }
        });
    }
}