// Await is blocking within the async function block

const UK = () => new Promise(resolve => setTimeout(() => resolve('nothing'), 2000));
const EU = () => new Promise(resolve => setTimeout(() => resolve('nothing'), 2000));

async function meaningfulVote() {
  const resUK = await UK();
  const resEU = await EU();
  console.log('meaningfulVote');
  console.log(resUK);
  console.log(resEU);
}

meaningfulVote();

// async function brexitMeansBrexit() {
//   // Some code here
//   const res = await UK();
//   // More code here
//   console.log(res);
// }

// async function merkelAndMacron() {
//   // Some code here
//   const res = await EU();
//   // More code here
//   console.log(res);
// }

// function hardBrexit() {
//   brexitMeansBrexit();
//   merkelAndMacron();
// }

// hardBrexit();