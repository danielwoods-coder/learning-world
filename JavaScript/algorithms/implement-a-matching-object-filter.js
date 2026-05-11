
let whatIsInAName = (arr, obj) => {
  let propArr = []
  for (let prop in obj) {
    propArr.push(prop);
  }

  return arr.filter((item) => {

    return propArr.every(x => x in item && item[x] === obj[x])

  })

}
console.log(whatIsInAName([
  { first: "Romeo", last: "Montague" },
  { first: "Mercutio", last: null },
  { first: "Tybalt", last: "Capulet" }
],
  { last: "loop" }))


