import React from "react";
import { Move } from "react-feather";

const dragstyle = {
  outline: "0px solid transparent",
  color:"#ffff",
  fontSize:"0.5rem"
};

const Heading = () => (
  <div className="movable heading">
    <p className="handle">
      <Move size="18" />
    </p>
    <h3 contentEditable suppressContentEditableWarning style={dragstyle}>
      My awesome blog post
    </h3>
  </div>
);

export default Heading;
