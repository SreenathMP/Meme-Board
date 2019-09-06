import React, { Component } from "react";
import "./Canvas.styles.css";
import SettingsContext from "../../contexts/settings.context";
import Heading from './Heading.component';
import DraggableComponent from "./Draggable.component";

class Canvas extends Component {
  state = {};

  render() {
    return (
      <div className="content">
        <div className="center">

          <div className="design-frame"
            style={{
              width: this.context.width,
              height: this.context.height,
              border: "1px solid #000000",
              background: this.context.background
            }}
            ref="canvas"
          >
            <div className="capture">
            <DraggableComponent>
            <Heading style={{padding:"10px",display:"block"}}/>
            </DraggableComponent>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Canvas;
Canvas.contextType = SettingsContext;
