import React, { Component } from "react";
import Colorpicker from "./Colorpicker.component";
import "./MenuItems.styles.css";
import SettingsContext from "../../contexts/settings.context";

class MenuItems extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.width = React.createRef();
    this.height = React.createRef()    

  }

  componentDidMount() {
    this.width.current.value = this.context.width;
    this.height.current.value = this.context.height;
  }

  updateWidth = e => {
    this.context.width = parseInt(e.target.value);
    this.context.setwidth(parseInt(e.target.value));
    
  };

  updateHeight = e => {
    this.context.height = e.target.value;
    this.context.setheight(parseInt(e.target.value));
  };

  
 
  render() {
    return (

    
      <div className="properties-menu">
        <div className="d-f j-sb">
          <h5>Width</h5>

          <input type="number" ref={this.width} onChange={this.updateWidth} />
        </div>
        <div className="d-f j-sb">
          <h5>Height</h5>
          <input type="number" ref={this.height} onChange={this.updateHeight} />
        </div>
        <div className="d-f j-sb">
          <h5>Background</h5>
          <Colorpicker />
        </div>
      </div>
    );
  }
}

export default MenuItems;
MenuItems.contextType = SettingsContext;
