
const reg = /\s|-|_/g;
const regUpperCase = /((?<=[a-z])[A-Z])/g;
function spinalCase(str) {
  const x = str.match(reg);
  console.log(x);

  const y = str.replace(reg, "-");
  console.log(y);

  const z = y.match(regUpperCase)
  console.log(z);

  if (!z) {
    return y.toLowerCase()
  } else {

    let o = y.replace(regUpperCase, "-$1")
    console.log(o)
    return o.toLowerCase()
  }
}

console.log(spinalCase("thisIsSpinalTap"))


