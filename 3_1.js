// Error handling for Dariusz

const heartbreak = () => new Promise((resolve, reject) => reject('rejected'));
const error = () => new Promise(() => {throw new Error('you really fucked up this time')});

function withPromises() {
  heartbreak()
    .then(() => console.log('this will not be called'))
    .catch(err => console.log(err));
  
  error()   
    .catch(err => console.log(err));
}

withPromises();

async function withoutPromises() {
  try {
    const res = await heartbreak();
    console.log('this will not be logged')
  } catch (e) {
    console.log('catch: ', e);
  }

  try {
    const res = await error();
  } catch (e) {
    console.log('catch: ', e);
  }
}

withoutPromises();