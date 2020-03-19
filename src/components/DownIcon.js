import React,{Component} from "react";

import './DownIcon.css'
import data from "../data";

class DownIcon extends Component{
    render(){
        return (
            <div className={`downIcon ${this.props.className || ''}`}>
                <img src={data.icons.down} alt="Down icon"/>
            </div>
        );
    }
};

export default DownIcon