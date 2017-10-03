export default function findMax(data){

  let max = Math.max.apply(null,
                        Object.keys(data).map(function(e) {
                                return data[e].cellphones.length
                        }));
  // let maxRssi = getMaxRssi(data)
  return max
}

function getMaxRssi (data){
  let max = Math.max.apply(null,
                        Object.keys(data).map(function(e) {
                                return getMaxRssiInArray(data[e].cellphones)
                        }));
  return max
}


function getMaxRssiInArray (data){
  let max = Math.max.apply(null,
                        Object.keys(data).map(function(e) {
                                return data[e]['rssi'];
                        }));
  return max

}
