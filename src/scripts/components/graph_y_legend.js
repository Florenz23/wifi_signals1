import React from 'react';

export default class LegendY extends React.Component {
  prepareCords() {
    let coords = {
      x1: this.props.x,
      y1: this.props.y
    }

    coords.x2 = coords.x1 + this.props.length;
    coords.y2 = coords.y1;
      for (var i = 0; i<10; i=i+30){
      }

    return coords;
  }

  prepareLegend() {
      for (var i = 0; i<10; i=i+30){
      }
  }

  render() {
    let maxValue = this.props.max
    // let maxValue = 100
    let coords = this.prepareCords();
    let yposition = [this.props.length/2-50,20]
    let yvalues =[maxValue/2,maxValue]
    const color = "black"
    return (
      <g>
        <text y={coords.x1+yposition[1]} x={coords.y1} fill={color}>{yvalues[1]}</text>
        <text y={coords.x1+yposition[0]} x={coords.y1} fill={color}>{yvalues[0]}</text>
      </g>
    )
  }
}
