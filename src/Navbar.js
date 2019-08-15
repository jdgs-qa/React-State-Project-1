import React, { Component } from 'react';
import NavbarLink from './NavbarLink';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar sticky-top navbar-dark bg-dark navbar-expand-lg ">
                <div className="navbar-collapse collapse d-flex justify-content-start" id="navbar">
                    {this.props.items.map((item) =>
                        <NavbarLink link={item.link} text={item.text} iconClass={item.iconClass} key={item.id} />
                    )}
                </div>
                <form className="form-inline input-group w-custom">
                    <input className="form-control" type="text" placeholder="Search"
                        aria-label="Search" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button"><i className="fa fa-search" aria-hidden="true"></i></button>
                    </div>
                </form>
            </nav>
        )
    }
}