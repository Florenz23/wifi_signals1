import React from 'react';
import easyGroup from '../easyGroup'
import findMaxNew from '../findMaxNew'
import createUsersArray from '../createUsersArray'

export default class IndividualMacs extends React.Component {
  static defaultProps = { multiplier_x: (33+1/3), multiplier_y:10 };

  timestampToTime(timestamp) {
      let date = new Date(timestamp *1000)
      const hour = date.getHours()
      const minutes = date.getMinutes()
      const new_time = hour + minutes * 0.01
      return new_time
  }

  prepareData() {
    // let data = createSimpleArray(this.props.data)
    // let data = easyGroup(this.props.data)
    // let max = findMaxNew(data)
    let data = createUsersArray(this.props.data)
    console.log(data)
    // let dataCut = groupByPassedTime()
    let d = [`M ${this.props.x} ${this.props.y}`];
    let multiplier = this.props.height/(40)
    let collector = data[5].map(chunk => {
      let hour = this.timestampToTime(chunk.timestamp)
      let xNext = this.props.x + hour * this.props.length/25;
      let yNext = this.props.y - (chunk.cellphone[0].rssi+100) * multiplier;
      return `L ${xNext} ${yNext}`;
    });

    return d.concat(collector).join(' ');
  }

  render() {
    let d = this.prepareData();
    return(
      <path d={d}
        stroke="blue"
        strokeWidth={1}
        fill="none"
      />
    )
  }
}






// [
//   [1, 3],
//   [2, 5],
//   [3, 2],
//   [4, 16],
//   [18, 5]
// ],


// {
//   "node": "wifi4garden1",
//   "cellphones": [
//     {
//       "rssi": -88.88888888888889,
//       "company": "Apple, Inc.",
//       "mac": "f0:d1:a9:18:2e:5d"
//     },
//     {
//       "rssi": -92.18181818181819,
//       "company": "Apple, Inc.",
//       "mac": "80:e6:50:e1:80:c0"
//     },
//     {
//       "rssi": -85.5,
//       "company": "Cambridge Industries(Group) Co.,Ltd.",
//       "mac": "4c:fa:ca:f7:70:c0"
//     },
//     {
//       "rssi": -90,
//       "company": "SAMSUNG ELECTRO-MECHANICS(THAILAND)",
//       "mac": "ac:5f:3e:ca:9b:41"
//     },
//     {
//       "rssi": -75,
//       "company": "Apple, Inc.",
//       "mac": "40:30:04:93:97:72"
//     },
//     {
//       "rssi": -85,
//       "company": "Apple, Inc.",
//       "mac": "8c:2d:aa:44:3d:df"
//     }
//   ],
//   "timestamp": 1504735342
// }
//
// ]
