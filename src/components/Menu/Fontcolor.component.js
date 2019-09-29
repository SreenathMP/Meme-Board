import React, { Component } from "react";
import { TwitterPicker } from "react-color";
import reactCSS from "reactcss";
import SettingsContext from "../../contexts/settings.context";

class Fontcolor extends Component {
  state = {
    displayColorPicker: false,
    color: this.context.fontcolor1
  };

  componentDidMount(){
    let node=document.getElementById("picker").parentNode.parentNode.parentNode.className;

   if(node === "menu1"){
     this.setState({
       color:this.context.fontcolor1
     })
   }

   if(node === "menu2"){
    this.setState({
      color:this.context.fontcolor2
    })
  }
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = (color,e) => {

    let node=e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.className
    
    console.log(node)
    if( node === "menu1"){
      
      this.setState({ color: color.hex });
      this.context.setfontcolor1(color.hex);
      }

    if(node === "menu2"){
    this.setState({ color: color.hex });
    this.context.setfontcolor2(color.hex);
    }
  };

  render() {
    const styles = reactCSS({
      default: {
        color: {
          width: "36px",
          height: "14px",
          borderRadius: "2px",
          background: `${this.state.color}`
        },
        swatch: {
          padding: "5px",
          background: "#f1f1f1",
          borderRadius: "1px",
          boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
          display: "inline-block",
          cursor: "pointer"
        },
        popover: {
          marginTop: "5px",
          zIndex: "1",
          marginLeft: "-60px"
        },
        cover: {
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px"
        },
        picker: {
          margin: "15px 4px"
        }
      }
    });

    return (
      <div className="color-picker" id="picker" style={styles.picker}>
        <div style={styles.swatch} onClick={this.handleClick}>
          <div style={styles.color} />
        </div>
        {this.state.displayColorPicker ? (
          <div style={styles.popover}>
            <div style={styles.cover} onClick={this.handleClose} />
            <TwitterPicker
              color={this.state.color}
              onChange={this.handleChange}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default Fontcolor;
Fontcolor.contextType = SettingsContext;
