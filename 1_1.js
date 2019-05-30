// What does the async keyword do?

const normieArrow = () => 23;
function normieFunc() {
  return 23;
}

console.log('normieArrow', normieArrow())
console.log('normieFunc', normieFunc())

// const funkyArrow = async () => 23;
// async function funkyFunc() {
//   return 23; 
// }

// console.log('funkyArrow', funkyArrow())
// console.log('funkyFunc', funkyFunc())

// funkyArrow().then(res => console.log(res));
// funkyFunc().then(res => console.log(res))