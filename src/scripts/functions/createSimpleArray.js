export default function createSimpleArray(data) {

  let newArray = []
  let obj = {}
  Object.keys(data).map(function(e) {
          obj = {
            "timestamp" : data[e].timestamp,
            "amount_cellphones" : data[e].cellphones.length
          }
          newArray.push(obj)
  })

  return newArray

}
