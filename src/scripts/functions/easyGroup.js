export default function easyGroup(data) {

  let groupedArray = groupArray(data)
  let cleanGroupedArray = createCleanGroupedArray(groupedArray)
  let simpleArray = makeSimpleArray(cleanGroupedArray)
  return simpleArray


}

function createCleanGroupedArray(array) {

    let new_array = []
    for (var i = 0; i < array.length; i++) {

      let filteredArray = filterArray(array[i])
      new_array.push(filteredArray)

    }

    return new_array

}

function filterArray(array_elment) {

    array_elment.cellphones = array_elment.cellphones.filter((cellphones, index, self) => self.findIndex((t) => {return t.mac === cellphones.mac; }) === index)
    return array_elment

}

function makeSimpleArray(data) {

  let newArray = []
  let obj = {}
  for (let key in data) {
      obj = {
        "timestamp" : data[key].timestamp,
        "amount_cellphones" : data[key].cellphones.length
      }
      newArray.push(obj)
  }
  return newArray

}

function makeAverage() {

  let values = [2, 56, 3, 41, 0, 4, 100, 23];
  let sum = values.reduce((previous, current) => current += previous);
  let avg = sum / values.length;
  avg = Math.round(avg)
  console.log(avg)
}


function groupArray(data) {
  //change this
  const group_number = 10
  let new_array = []
  let object = {
    "cellphones" : [] ,
    "timestamp" : 0
  }
  let counter = 0
  for (var i = 0; i< data.length; i++) {
    for (var ii=0; ii < data[i].cellphones.length; ii++){
      object.cellphones.push(data[i].cellphones[ii])
    }
    object.timestamp = data[i].timestamp
    counter++
    if(counter == group_number){
      new_array.push(object)
      object = {
        "cellphones" : [] ,
        "timestamp" : 0
      }
      counter = 0
    }
  }
  return new_array

}
