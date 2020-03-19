import React, {Component} from "react";
import data from "../data";
import Fullpage from "../components/Fullpage";
import DownIcon from "../components/DownIcon";
import {Link} from "react-scroll";
import SkillCard from "../components/SkillCard";

class SkillsSection extends Component {
    state={}
    constructor(props) {
        super(props);
        this.state.theme = props.theme;
    }

    render() {
        return (
            <div>
                <Fullpage className={`${this.props.theme} third`}>
                    <h2>{data.sections[1].title}</h2>
                    <div className="skills">
                        {
                            data.sections[1].items.map((skill,index) => {
                                return (
                                    <SkillCard skill={skill} key={index}/>
                                )
                            })
                        }
                    </div>
                    <Link activeClass="active" to="title" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>
                        <DownIcon className={"reverse"}/>
                    </Link>
                </Fullpage>
            </div>
        )
    }
}

export default SkillsSection;