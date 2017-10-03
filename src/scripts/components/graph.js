import React from 'react';
import Axis from './axis';
import DisplayDay from './DisplayDay';
import DisplayDaySimple from './DisplayDaySimple';
import DisplayDayByUsers from './DisplayDayByUsers';
import LegendX from './graph_x_legend';
import LegendY from './graph_y_legend';
import findMax from '../functions/findMax'
import easyGroup from '../functions/easyGroup'
import findMaxNew from '../functions/findMaxNew'
import findMaxRssi from '../functions/findMaxRssi'
import timestampToTime from '../functions/timestampToTime'
import zoomPeriod from '../functions/zoom/zoomPeriod'


export default class Graph extends React.Component {
  state = {test:0}
  static defaultProps = { width: 800, height: 600 };
  getLastTime(data) {
    let timestamp = data[data.length-1].timestamp
    let hour = timestampToTime(timestamp)
    return hour
  }
  renderContent(lastTime,data) {
    if (this.props.viewSelection === 0) {
      return (
          <DisplayDay
            x={50}
            y={this.props.height - 100}
            data={data}
            length={this.props.width}
            height={this.props.height - 100}
            max = {findMax(data)}
            x_max = {lastTime}
          />
      )
    }
    if (this.props.viewSelection === 1) {
      return (
          <DisplayDaySimple
            x={50}
            y={this.props.height - 100}
            data={data}
            length={this.props.width}
            height={this.props.height - 100}
            max = {findMax(data)}
            x_max = {lastTime}
          />
      )
    }
    if (this.props.viewSelection === 2) {
      return (
          <DisplayDayByUsers
            x={50}
            y={this.props.height - 100}
            data={data}
            length={this.props.width}
            height={this.props.height - 100}
            max = {findMaxRssi(data)}
            x_max = {lastTime}
          />
      )
    }
  }
  renderLegend(data) {
    if (this.props.viewSelection === 0 ) {
      return (
        <LegendY
          x={0}
          y={0}
          length={this.props.height}
          max = {findMax(data)}
        />
      )
    }
    if (this.props.viewSelection === 1) {
      let groupData = easyGroup(data)
      let max = findMaxNew(groupData)
      return (
        <LegendY
          x={0}
          y={0}
          length={this.props.height}
          max = {max}
        />
      )
    }
    if (this.props.viewSelection === 2) {
      return (
        <LegendY
          x={0}
          y={0}
          length={this.props.height}
          max = {findMaxRssi(data)}
        />
      )
    }
  }
  getData(allData,time,timestamps) {
    let display_timestamps = timestamps

    let start_time = time
    if (time === "day") {
      display_timestamps = 999999
      start_time = 0
    }
    if (display_timestamps === "day") {
      display_timestamps = 999999
    }
    let zoomData = zoomPeriod(allData,start_time,display_timestamps)
    // this.setState({test: 5});
    return zoomData
  }
  render() {
    let data = this.getData(this.props.sendData,this.props.timeSelection,this.props.timestampSelection)
    console.log(data.length)
    let lastTime = this.getLastTime(data)
    return (
      <svg width={this.props.width} height={this.props.height}>
        <Axis
          x={50}
          y={this.props.height - 100}
          length={this.props.width}
          horizontal={true}
        />
        <Axis
          x={50}
          y={0}
          length={this.props.height - 100}
          horizontal={false}
        />
        <LegendX
          x={0}
          y={this.props.height - 50}
          length={this.props.width}
          x_max={lastTime}
          data={data}
        />
        {this.renderLegend(data)}
        {this.renderContent(lastTime,data)}
      </svg>
    )
  }
}
