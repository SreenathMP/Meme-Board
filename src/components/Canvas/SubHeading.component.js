import React from "react";
import { Move } from "react-feather";




const SubHeading = (props) => (
  <div className="movable heading">
    <p className="handle">
      <Move size="18" color="white" />
    </p>
    <h3 contentEditable suppressContentEditableWarning style={props.dragstyle}>
      My Meme content 
    </h3>
  </div>
);

export default SubHeading;

