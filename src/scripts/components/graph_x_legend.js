import React from 'react';
import timestampToTimeNotDecimal from '../functions/timestampToTimeNotDecimal'

export default class LegendY extends React.Component {
  prepareCords() {
    let coords = {
      x1: this.props.x,
      y1: this.props.y
    }

    coords.x2 = coords.x1 + this.props.length;
    coords.y2 = coords.y1;
    return coords;
  }

  prepareLegend() {
      for (var i = 0; i<10; i=i+30){
      }
  }
  makeTime(multiplicator_data,part_number) {
    let index = multiplicator_data*part_number
    let timestamp = this.props.data[index].timestamp
    let time = timestampToTimeNotDecimal(timestamp)
    return time
  }

  render() {
    let coords = this.prepareCords();
    let time_max = this.props.x_max
    let multiplicator = this.props.length/9
    let multiplicator_data = Math.round(this.props.data.length/9)



    const color = "black"
    const corrector = 0
    return (
      <g>
        <text x={coords.x1+1*multiplicator-corrector} y={coords.y1} fill={color}>{this.makeTime(multiplicator_data,1)}</text>
        <text x={coords.x1+2*multiplicator-corrector} y={coords.y1} fill={color}>{this.makeTime(multiplicator_data,2)}</text>
        <text x={coords.x1+3*multiplicator-corrector} y={coords.y1} fill={color}>{this.makeTime(multiplicator_data,3)}</text>
        <text x={coords.x1+4*multiplicator-corrector} y={coords.y1} fill={color}>{this.makeTime(multiplicator_data,4)}</text>
        <text x={coords.x1+5*multiplicator-corrector} y={coords.y1} fill={color}>{this.makeTime(multiplicator_data,5)}</text>
        <text x={coords.x1+6*multiplicator-corrector} y={coords.y1} fill={color}>{this.makeTime(multiplicator_data,6)}</text>
        <text x={coords.x1+7*multiplicator-corrector} y={coords.y1} fill={color}>{this.makeTime(multiplicator_data,7)}</text>
        <text x={coords.x1+8*multiplicator-corrector} y={coords.y1} fill={color}>{this.makeTime(multiplicator_data,8)}</text>
      </g>
    )
  }
}
