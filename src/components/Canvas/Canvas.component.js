import React, { Component } from "react";
import "./Canvas.styles.css";
import SettingsContext from "../../contexts/settings.context";
import Heading from "./Heading.component";
import SubHeading from "./SubHeading.component";
import DraggableComponent from "./Draggable.component";
import { Button } from "react-bootstrap";
import { downloadImage } from '../../utils/download.util';




class Canvas extends Component {
  state = {};
constructor(props){

super(props);
this.frameset=React.createRef();

}

exportPic = async (width,height) => downloadImage(this.frameset.current, width, height, "jpeg");

Combineframes = () =>{

 
var combined = document.createElement("div");
document.getElementById('container').appendChild(combined);
const width=this.context.width1+this.context.width2;
const height=this.context.height;
this.exportPic(width,height);

}
 

  render() {
    return (
      <div className="content">
        <div className="toolbar">
          <Button className="downloadimage"  onClick={this.Combineframes}>Download Image</Button>
        </div>
        <div className="center" id="container" ref={this.frameset}>
          <div
            className="design-frame1"
            id="frameset"
            style={{
              width: this.context.width1,
              height: this.context.height,
              border: "1px solid #fffff",
              borderTopLeftRadius: this.context.borderradius,
              borderBottomLeftRadius: this.context.borderradius,
              background: this.context.background1,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center"
            }}
            ref="canvas"
          >
            <div className="capture">
              <DraggableComponent>
                <Heading
                  dragstyle={{
                    padding: "10px",
                    display: "block",
                    outline: "0px solid transparent",
                    color: this.context.fontcolor1,
                    fontSize: this.context.headingsize1
                  }}
                />
              </DraggableComponent>
            </div>
            <div className="capture">
              <DraggableComponent>
                <SubHeading  dragstyle={{
                    padding: "10px",
                    display: "block",
                    outline: "0px solid transparent",
                    color: this.context.fontcolor1,
                    fontSize: this.context.subheadingsize1
                  }} />
              </DraggableComponent>
            </div>
            <div className="capture">
              <DraggableComponent>
                <SubHeading dragstyle={{
                    padding: "10px",
                    display: "block",
                    outline: "0px solid transparent",
                    color: this.context.fontcolor1,
                    fontSize: this.context.subheadingsize1
                  }} />
              </DraggableComponent>
            </div>
            <div className="capture">
              <DraggableComponent>
                <SubHeading dragstyle={{
                    padding: "10px",
                    display: "block",
                    outline: "0px solid transparent",
                    color: this.context.fontcolor1,
                    fontSize: this.context.subheadingsize1
                  }} />
              </DraggableComponent>
            </div>
          </div>
          <div
            className="design-frame2"
            id="frameset"
            style={{
              width: this.context.width2,
              height: this.context.height,
              border: "1px solid #fffff",
              borderTopRightRadius: this.context.borderradius,
              borderBottomRightRadius: this.context.borderradius,
              background: this.context.background2,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center"
            }}
            ref="canvas"
          >
            <div className="capture">
            <DraggableComponent>
                <Heading
                  dragstyle={{
                    padding: "10px",
                    display: "block",
                    outline: "0px solid transparent",
                    color: this.context.fontcolor2,
                    fontSize: this.context.headingsize2
                  }}
                />
              </DraggableComponent>
            </div>
            <div className="capture">
              <DraggableComponent>
                <SubHeading  dragstyle={{
                    padding: "10px",
                    display: "block",
                    outline: "0px solid transparent",
                    color: this.context.fontcolor2,
                    fontSize: this.context.subheadingsize2
                  }} />
              </DraggableComponent>
            </div>
            <div className="capture">
              <DraggableComponent>
                <SubHeading dragstyle={{
                    padding: "10px",
                    display: "block",
                    outline: "0px solid transparent",
                    color: this.context.fontcolor2,
                    fontSize: this.context.subheadingsize2
                  }} />
              </DraggableComponent>
            </div>
            <div className="capture">
              <DraggableComponent>
                <SubHeading dragstyle={{
                    padding: "10px",
                    display: "block",
                    outline: "0px solid transparent",
                    color: this.context.fontcolor2,
                    fontSize: this.context.subheadingsize2
                  }} />
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
