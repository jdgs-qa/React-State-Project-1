import React, { Component } from 'react';

export default class TextBoxes extends Component {

    constructor() {
        super();
        this.state = {
            text: "",
            style: {
                color: "",
                fontFamily: "",
                backgroundColor: "white",
                fontSize: "20px"
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
                        <span className="input-group-text"> <i className="fa fa-palette"></i> </span>
                    </div>
                    <input id="colorbox" className="form-control" value={this.state.color} placeholder="choose a web color" type="text" onChange={colorbox => this.changeColor(colorbox)} />
                    <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-palette"></i> </span>
                    </div>
                    <input id="colorbox" className="form-control" value={this.state.backgroundColor} placeholder="choose a background color" type="text" onChange={colorbox => this.changeBGColor(colorbox)} />
                    <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-palette"></i> </span>
                    </div>
                    <input id="fontbox" className="form-control" value={this.state.fontFamily} placeholder="choose a font" type="text" onChange={fontbox => this.changeFont(fontbox)} />
                    <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-palette"></i> </span>
                    </div>
                    <input id="fontSizebox" className="form-control" value={this.state.fontSize} placeholder="choose a fontSize" type="text" onChange={fontSizebox => this.changeFont(fontSizebox)} />
                </div>
                <div className="">
                    <p className="text-center" style={this.state.style}>{this.state.text}</p>
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

    changefontSize(fontSizebox) {
        this.setState({
            style: {
                color: this.state.style.color,
                fontFamily: this.state.style.fontFamily,
                backgroundColor: this.state.style.backgroundColor,
                fontSize: fontSizebox.target.value + "px"
            }
        });
    }
}