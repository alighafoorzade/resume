import React,{Component} from "react";

import './SkillCard.css'

class SkillCard extends Component{
    render(){
        let {skill} = this.props
        return ( <div  className="card">
            <img src={skill.content.image} width="100px" height="auto" alt={`skill.content.title logo`}/>
            <p>{skill.content.title}</p>
        </div> );
    }
}

export default SkillCard;