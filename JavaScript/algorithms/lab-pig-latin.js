
const regCons = /^[^aeiou]+/
const regVow = /^[aeiou]+/
const regVowAtMid = /j/;
function translatePigLatin(str) {
  let x = str.match(regCons);

  let y = str.match(regVow)
  console.log(x)
  console.log(y)
  if (x) {
    return str.replace(regCons, "") + x + "ay"
  }
  if (y) {
    return str + "way"
  }
}
console.log(translatePigLatin("rhythm"))

