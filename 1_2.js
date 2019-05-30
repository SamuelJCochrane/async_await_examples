// What does await do?

const longTime = () => new Promise(resolve => setTimeout(() => resolve('RESULT'), 4000));

async function noSee() {
  console.log('before');
  const res = await longTime();
  console.log(res);
  console.log('after??');
}

noSee();