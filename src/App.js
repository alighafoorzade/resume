import React,{Component} from 'react';
import SnowStorm from 'react-snowstorm';

import Navigation from "./components/Navigation";
import TitleSection from "./sections/TitleSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";

import './themes.css'
import themes from './themes'
import './App.css';

class App extends Component{
  state ={};

  constructor(props){
    super(props);
    this.state.theme = 'default'
    this.themesArray = Object.keys(themes).map((key)=>{
      return themes[key];
    });
  }
  changeTheme= ()=>{
    let index = this.themesArray.indexOf(this.state.theme);
    index = (index+1) % this.themesArray.length;
    this.setState({
      'theme': this.themesArray[index]
    });
  }
  render() {
    return (
        <div className="App">
          <SnowStorm/>
          <Navigation    theme={this.state.theme} callback={this.changeTheme}/>
          <TitleSection  theme={this.state.theme} />
          <AboutSection  theme={this.state.theme} />
          <SkillsSection theme={this.state.theme} />
        </div>
    );
  }

}

export default App;
