import React, { Component } from "react";
import Menu from "../Menu/Menu.component";
import Canvas from "../Canvas/Canvas.component";
import "./Memes.styles.css";
import SettingsContext from "../../contexts/settings.context";
import { defaultSettings } from "../../contexts/settings.utils";

class Memes extends Component {
  state = {
    height: defaultSettings.height,
    borderradius:defaultSettings.borderradius,

    width1:defaultSettings.width1,
    background1: defaultSettings.background1,
    headingsize1:defaultSettings.headingsize1,
    subheadingsize1:defaultSettings.subheadingsize1,
    fontcolor1:defaultSettings.fontcolor1,

    width2:defaultSettings.width2,
    background2: defaultSettings.background2,
    headingsize2:defaultSettings.headingsize2,
    subheadingsize2:defaultSettings.subheadingsize2,
    fontcolor2:defaultSettings.fontcolor2,


    setheight: h => {
      this.setState({ height: h });
    },

    setborderradius: r =>{
    
     this.setState({borderradius: r})
    },


    setwidth1: w => {
      this.setState({ width1: w });
    },
    
    setbackground1: b => {
      this.setState({ background1: b });
    },

    setwidth2: w => {
      this.setState({ width2: w });
    },
    setbackground2: b => {
      this.setState({ background2: b });
    },

    setheadingsize1: s => {
     this.setState({headingsize1: s})
    },

    setsubheadingsize1: s =>{

      this.setState({subheadingsize1: s})
    },

    setheadingsize2: s => {

      this.setState({
        headingsize2: s
      })

    },

    setsubheadingsize2: s => {

      this.setState({
        subheadingsize2: s
      })

    },

    setfontcolor1: c =>{

      this.setState({
        fontcolor1: c
      })
    },

    setfontcolor2: c =>{

      this.setState({
        fontcolor2: c
      })
    }

   
  };

  render() {
    return (
      <div>
        <div className="root">
          <div className="wrapper" >
            <SettingsContext.Provider value={this.state}>
              <Menu />
              <Canvas />
            </SettingsContext.Provider>
          </div>
        </div>
      </div>
    );
  }
}

export default Memes;
