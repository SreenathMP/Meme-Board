import React, { Component } from "react";
import "./MenuItems.styles.css";
import SettingsContext from "../../contexts/settings.context";

class Properties extends Component {
  state = {};

  constructor(props) {
    super(props);

    this.height = React.createRef();
    this.radius = React.createRef();
  }

  componentDidMount() {
    this.height.current.value = this.context.height;
    this.radius.current.value = this.context.borderradius;
  }

  updateRadius = e => {
    this.context.borderradius = parseInt(e.target.value);
    this.context.setborderradius(parseInt(e.target.value));
  };

  updateHeight = e => {
    this.context.height = parseInt(e.target.value);
    this.context.setheight(parseInt(e.target.value));
  };

  render() {
    return (
      <div className="properties-menu">
        <div className="d-f j-sb">
          <h5>Border-Radius</h5>
          <input type="number" ref={this.radius} onChange={this.updateRadius} />
        </div>
        <div className="d-f j-sb">
          <h5>Height</h5>
          <input type="number" ref={this.height} onChange={this.updateHeight} />
        </div>
      </div>
    );
  }
}

export default Properties;
Properties.contextType = SettingsContext;
