import React, {Component} from "react";
import {Link} from "react-scroll";

import './Navigation.css'

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.changeTheme = this.props.callback
    }

    render() {
        return (
            <div>
                <div className={`navigation ${this.props.theme || ''}`}>
                    <Link className="nav-item" to="title" spy={true} smooth={true} offset={0} duration={500}
                          onSetActive={this.handleSetActive}>
                        Title
                    </Link>
                    <Link className="nav-item" to="about" spy={true} smooth={true} offset={0} duration={500}
                          onSetActive={this.handleSetActive}>
                        About
                    </Link>
                    <Link className="nav-item" to="skills" spy={true} smooth={true} offset={0} duration={500}
                          onSetActive={this.handleSetActive}>
                        Skills
                    </Link>
                    <div className="nav-item" onClick={this.changeTheme}>
                        <img src="./images/theme-change.png" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation