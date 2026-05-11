
function chunkArrayInGroups(arr, num) {
  let y = [];
  while (arr.length >= num) {
    let x = [];
    for (let i = 0; i < num; i++) {
      x.push(arr.shift())
    }
    y.push(x)
  }
  if (arr.length < num && arr.length > 0) {
    y.push(arr)
  }
  return y;
}
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 10))

