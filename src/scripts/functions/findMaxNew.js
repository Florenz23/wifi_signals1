export default function findMaxNew(data) {
  let max = Math.max.apply(null,
                        Object.keys(data).map(function(e) {
                                return data[e].amount_cellphones
                        }));
  return max
}
