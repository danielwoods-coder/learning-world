
let diffArray = (arr1, arr2) => {
  let arr1Filter = arr1.filter(ele => !arr2.includes(ele))
  console.log(arr1Filter)
  let arr2Filter = arr2.filter(ele => !arr1.includes(ele))
  console.log(arr2Filter)
  return [...arr1Filter, ...arr2Filter]
}


console.log(diffArray(["diamond", "stick", "apple"], ["stick", "emerald", "bread"]))
