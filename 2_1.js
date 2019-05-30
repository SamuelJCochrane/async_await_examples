// Refactor chains of then methods to await

const first = () => new Promise(resolve => setTimeout(() => resolve(10), 500));
const second = (num) => new Promise(resolve => setTimeout(() => resolve(num * 20), 500));
const third = (num) => new Promise(resolve => setTimeout(() => resolve(num + 69), 500));

function ramsesTheGreat() {
  first()
    .then(num => {
      console.log(num);
      second(num)
        .then(num2 => {
          console.log(num2);
          third(num2)
            .then(num3 => {
              console.log(num3);
            })
        })
    })
}

ramsesTheGreat();

// async function ramsesTheManageable() {
//   const num = await first();
//   console.log(num);
//   const num2 = await second(num);
//   console.log(num2);
//   const num3 = await third(num2);
//   console.log(num3);
// }

// ramsesTheManageable();