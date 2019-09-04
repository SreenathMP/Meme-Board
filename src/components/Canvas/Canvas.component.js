import React, { Component } from "react";
import "./Canvas.styles.css";
import SettingsContext from "../../contexts/settings.context";

class Canvas extends Component {

 
  
  state = {};

  render() {
    
    return (
      <div className="content">
        <div className="center">
          <div
            style={{
              width: this.context.width,
              height: this.context.height,
              border: "1px solid #000000",
              background: this.context.background
            }}
            ref="canvas"
           >
             <div contentEditable>jjjdj</div>
           </div>
           
          
          
        </div>
      </div>
    );
  }
}

export default Canvas;
Canvas.contextType = SettingsContext;
