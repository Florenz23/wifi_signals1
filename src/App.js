import React, { Component } from 'react';
import Graph from './scripts/components/graph'
import readUrl from './scripts/functions/zoom/readUrl'


export default class App extends React.Component {
  state = { dataSetIndex: 0 , timeSetIndex:0, timestampSetIndex:0}
  static defaultProps = {
    views: [["day"],["simpleDay"],["Macs"]],
    times: [["day"],[0],[2],[4],[6],[8],[10],[12],[14],[16],[18],[20],[22]],
    timestamps: [["day"],[10],[20],[30],[60],[120]]

  }

  selectDataset(event) {
    this.setState({dataSetIndex: event.target.value});
  }
  selectTime(event) {
    this.setState({timeSetIndex: event.target.value});
  }
  selectTimestamp(event) {
    this.setState({timestampSetIndex: event.target.value});
  }


  render() {
    let parametes = readUrl()
    console.log(parametes)
    let options = this.props.views.map((value, index) => {
      return <option key={index} value={index}>Ansicht {value}</option>
    });
    let options_time = this.props.times.map((value, index) => {
      return <option key={index} value={index}>Time {value}</option>
    });
    let options_timestamp = this.props.timestamps.map((value, index) => {
      return <option key={index} value={index}>Timestamps {value}</option>
    });
    let selectedHour = this.props.times[this.state.timeSetIndex][0]
    let selectedAmountTimestamps = this.props.timestamps[this.state.timestampSetIndex][0]

    return (
      <div>
        <select
          value={this.state.dataSetIndex}
          onChange={this.selectDataset.bind(this)} >
          {options}
        </select>
        <select
          value={this.state.timeSetIndex}
          onChange={this.selectTime.bind(this)} >
          {options_time}
        </select>
        <select
          value={this.state.timestampSetIndex}
          onChange={this.selectTimestamp.bind(this)} >
          {options_timestamp}
        </select>
        <Graph sendData={this.props.datasets}
              viewSelection={this.state.dataSetIndex}
              timeSelection={selectedHour}
              timestampSelection={selectedAmountTimestamps}
        />
      </div>
    )
  }
}
