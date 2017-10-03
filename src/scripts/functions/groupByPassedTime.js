export default function groupByPassedTime (getData) {
  const data = [
    {"time" : 1, "amount":1},
    {"time" : 2, "amount":1},
    {"time" : 6, "amount":2},
    {"time" : 7, "amount":2},
    {"time" : 8, "amount":2},
    {"time" : 9, "amount":2},
    {"time" : 10, "amount":3},
    {"time" : 11, "amount":3},
    {"time" : 12, "amount":3},
  ]
  const data1 = [
    {"time" : 1, "amount":1},
    {"time" : 2, "amount":1},
    {"time" : 3, "amount":1},
    {"time" : 4, "amount":2},
    {"time" : 5, "amount":2},
    {"time" : 6, "amount":2},
    {"time" : 7, "amount":2},
    {"time" : 8, "amount":3},
    {"time" : 9, "amount":3},
  ]
  const data3 = [
    [
        {"time" : 1, "amount":1},
        {"time" : 2, "amount":1},
        {"time" : 3, "amount":1}
    ],
    [
      {"time" : 4, "amount":2},
      {"time" : 5, "amount":2},
      {"time" : 6, "amount":2},
      {"time" : 7, "amount":2}
    ],
    [
      {"time" : 8, "amount":3},
      {"time" : 9, "amount":3}
    ]
  ]
  const data4 = [
    [
        {"time" : 1, "amount":1},
        {"time" : 2, "amount":1}
    ],
    [
      {"time" : 6, "amount":1},
      {"time" : 7, "amount":2},
      {"time" : 8, "amount":2},
      {"time" : 9, "amount":2}
    ],
    [
      {"time" : 10, "amount":2},
      {"time" : 11, "amount":3},
      {"time" : 12, "amount":3}
    ]
  ]
  let array = getData
  let indexArray = createIndexArray(data)
  // console.log(indexArray)
  let newGroupArray = groupArray(indexArray,data)
  console.log(newGroupArray)
  return array

}

function groupArray(indexArray,data) {
  // let indexArray = [0,1,2,5,9]
  // console.log(indexArray)
  let newArray = []
  let partArray = []
  let counter = 0
  for (var ii = 0; ii<data.length;i++) {
    if ( counter >= data.length) {
      break
    }
    let i_key_from = indexArray[counter]
    let i_key_to = indexArray[counter+1]
    console.log(i_key_from)
    console.log(i_key_to)
    for (var i = i_key_from; i < i_key_to; i++) {
      partArray.push(data[ii])
      ii++
    }
    newArray.push(partArray)
    partArray = []
    counter++
    counter++
  }
  return newArray
}

function createIndexArray(data) {

  let difference = 3
  let newArray = [0]
  let time_start = 0
  let timeSum = 0
  let timeDiff = 0
  let steps = 0
  for (var i = 0; i < data.length; i++) {
    if (i == 0 ) {
      timeSum = data[0].time
      i = 1
    }
    steps++
    timeDiff = data[i].time - data[i-1].time
    timeSum = timeSum + timeDiff
    if (timeSum > difference) {
      if (steps == 1) {
        newArray.push(i)
        timeSum = 0
        steps = 0
      } else {
        timeSum = 0
        steps = 0
        newArray.push(i)
        newArray.push(i+1)
        i--
      }
    }
  }
  newArray.push(i)
  console.log(newArray)
  return newArray

}
