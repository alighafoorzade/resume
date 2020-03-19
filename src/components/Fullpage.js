import React,{Component} from "react";

import './Fullpage.css'

class Fullpage extends Component{
    render(){
        let {children,className} = this.props
        return(
            <div className={`fullpage ${className || ''}`}>
                {children}
            </div>
        );
    }
}
export default Fullpage;