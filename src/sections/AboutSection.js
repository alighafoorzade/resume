import React,{Component} from "react";
import data from "../data";
import Fullpage from "../components/Fullpage";
import DownIcon from "../components/DownIcon";
import {Element, Link} from "react-scroll";

class AboutSection extends Component{

    constructor(props) {
        super(props);
        this.state= {};
        this.state.theme = props.theme;
    }

    render(){
        return(
            <div>
                <Fullpage className={`${this.props.theme} second`}>
                    <h2>{data.sections[0].title}</h2>
                    <pre>{data.sections[0].items[0].content}</pre>
                </Fullpage>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>
                    <DownIcon/>
                </Link>
                <Element name="skills" className="element"/>
            </div>
        )
    }
}
export default AboutSection;