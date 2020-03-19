import React, {Component} from "react";
import {SocialIcon} from "react-social-icons";
import {Link,Element} from "react-scroll";

import Fullpage from "../components/Fullpage";
import DownIcon from "../components/DownIcon";


import data from "../data";
import './TitleSection.css'

class TitleSection extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.state.theme = props.theme;
    }

    render() {
        return (
            <div>
                <Element name="title" className="element"/>
                <Fullpage className={`${this.props.theme || ''} first`}>
                    <h1 className="title">
                        {
                            data.title
                        }
                    </h1>
                    <div>
                        <h2>
                            {data.subtitle}
                        </h2>
                    </div>
                    <div className="icons">
                        {
                            Object.keys(data.links).map((key,index) => {
                                return (
                                    <SocialIcon key={index} url={data.links[key]}/>
                                );
                            })
                        }
                    </div>
                </Fullpage>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>
                    <DownIcon/>
                </Link>
                <Element name="about" className="element"/>
            </div>
        )
    }
}

export default TitleSection;