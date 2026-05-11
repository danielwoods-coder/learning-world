
function smallestCommons(arr) {
  arr.sort((a, b) => a - b)
  console.log(arr)
  let numArr = [];

  for (let i = arr[0]; i <= arr[1]; i++) {
    numArr.push(i)
  }
  let j = arr[0];
  let result;
  while (!numArr.every((num) => j % num === 0)) {
    result = ++j;
    
  }
  return result
}

console.log(smallestCommons([20, 10]));

