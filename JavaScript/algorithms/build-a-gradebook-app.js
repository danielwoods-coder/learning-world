

function getAverage(arr) {
  let sum = 0
  for (let ele of arr) {
    sum += ele
  }
  return sum / arr.length
}
console.log(getAverage([38, 99, 87, 100, 100, 100, 100, 100, 100, 100]));
function getGrade(score) {
  if (score === 100) {
    return "A+"
  } else if (score >= 90) {
    return "A"
  } else if (score >= 80) {
    return "B"
  } else if (score >= 70) {
    return "C"
  } else if (score >= 60) {
    return "D"
  } else {
    return "F"
  }
}
console.log(getGrade(100));
function hasPassingGrade(score) {
  switch (getGrade(score)) {
    case "A+":
      return true
      break;
    case "A":
      return true
      break;
    case "B":
      return true
      break;
    case "C":
      return true
      break;
    case "D":
      return true
      break;
    default:
      return false
  }
}
console.log(hasPassingGrade(99));
let studentMsg = (arr, score) => {
  if (hasPassingGrade(score)) {
    return `Class average: ${getAverage(arr)}. Your grade: ${getGrade(score)}. You passed the course.`
  } else {
    return `Class average: ${getAverage(arr)}. Your grade: ${getGrade(score)}. You failed the course.`
  }
}
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100))



