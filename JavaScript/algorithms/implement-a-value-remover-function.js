
function destroyer(arr, ...para) {
  let arr1 = [...para]
  return arr.filter((item) => !arr1.some(ele => ele === item))
}
console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"))


