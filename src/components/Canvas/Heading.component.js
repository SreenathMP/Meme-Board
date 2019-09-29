import React from "react";
import { Move } from "react-feather";
import "./Draggable.styles.css";



const Heading = (props) => (
  <div className="movable heading">
    <p className="handle">
      <Move size="18" color="white" />
    </p>
    <h3 contentEditable suppressContentEditableWarning style={props.dragstyle}>
      My Exciting Meme
    </h3>
  </div>
);

export default Heading;
