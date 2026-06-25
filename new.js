const start = performance.now();

function Fibo(n) {
  let a = 0n;
  let b = 1n;
  const arr = [a, b];
  while (arr.length < n) {
    let temp = a;
    a = b;
    b = temp + b;
    arr.push(b);
  }
  return arr;
}
console.log(Fibo(100));

const end = performance.now();

console.log(`Execution time: ${end - start}ms`);
