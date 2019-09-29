import React, { Component } from "react";
import Colorpicker from "./Colorpicker.component";
import "./MenuItems.styles.css";
import SettingsContext from "../../contexts/settings.context";
import Fontcolor from "./Fontcolor.component";


class MenuItems1 extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.width = React.createRef();
    this.headingsize = React.createRef();
    this.subsize=React.createRef();
   
   
  }

  componentDidMount() {
    
    this.width.current.value = this.context.width1;
    this.headingsize.current.value=this.context.headingsize1;
    this.subsize.current.value=this.context.subheadingsize1;
    
  }

  updateWidth = e => {
    
    if(e.target.parentNode.parentNode.parentNode.className === "menu1"){
    
    this.context.width1 = parseInt(e.target.value); 
    this.context.setwidth1(parseInt(e.target.value));

    }

    if(e.target.parentNode.parentNode.parentNode.className === "menu2"){
    
      this.context.width2 = parseInt(e.target.value); 
      this.context.setwidth2(parseInt(e.target.value));
  
      }
  };

  updateHeadingSize = (e)=>{

     let node=e.target.parentNode.parentNode.parentNode.className;

    if(node === "menu1"){
    
      this.context.headingsize1 = parseInt(e.target.value); 
      this.context.setheadingsize1(parseInt(e.target.value));
  
      }

      if(node === "menu2"){
    
        this.context.headingsize2 = parseInt(e.target.value); 
        this.context.setheadingsize2(parseInt(e.target.value));
    
        }
  }


  updateSubSize = (e)=>{

    let node=e.target.parentNode.parentNode.parentNode.className;

   if(node === "menu1"){
   
     this.context.subheadingsize1 = parseInt(e.target.value); 
     this.context.setsubheadingsize1(parseInt(e.target.value));
 
     }

     if(node === "menu2"){
   
       this.context.subheadingsize2 = parseInt(e.target.value); 
       this.context.setsubheadingsize2(parseInt(e.target.value));
   
       }
 }

    

 
  render() {
    return (
      <div className="properties-menu" >
        <div className="d-f j-sb">
          <h5>Width</h5>

          <input type="number" ref={this.width} onChange={this.updateWidth} />
          
        </div>
        <div className="d-f j-sb" id="background">
          <h5>Background</h5>
          <Colorpicker />
        </div>
        <div className="d-f j-sb">
          <h5>Heading Font Size</h5>
          <input type="number" ref={this.headingsize} onChange={this.updateHeadingSize} />
        </div>
        <div className="d-f j-sb">
          <h5>Content Font Size</h5>
          <input type="number" ref={this.subsize} onChange={this.updateSubSize} />
        </div>
        <div className="d-f j-sb" id="fontcolor">
          <h5>Font Color</h5>
          <Fontcolor />
        </div>
       
      </div>
    );
  }
}

export default MenuItems1;
MenuItems1.contextType = SettingsContext;
