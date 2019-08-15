import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';

function NavbarLink(props) {
    return (
        <ul className="nav navbar-nav">
            <li className="nav-item">
                <Link className="mr-5 text-center" to={props.link}>{props.text} <i className={props.iconClass}></i> </Link>
            </li>
        </ul>
    );
}

export default NavbarLink;