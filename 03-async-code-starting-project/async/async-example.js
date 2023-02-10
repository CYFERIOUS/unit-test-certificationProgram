import jwt from 'jsonwebtoken';

export function generateToken(userEmail, doneFn) {
  jwt.sign({ email: userEmail }, 'secret123', doneFn);
}

export function generateTokenPromise(userEmail) {
  const promise = new Promise((resolve, reject) => {
    jwt.sign({ email: userEmail }, 'secret123', (error, token) => {
      if (error) {
        reject(error);
      } else {
        resolve(token);
      }
    });
  });

  return promise;
}

let graveUpheaval = false;

 const profaneTombs = new Promise((resolve, reject) => {
   if (graveUpheaval) {
     const corpse = {
       name: 'frankane drujes',
       age: '78',
       town: 'salem',
     };
     resolve(corpse);
   } else {
     reject('no corpse in the tomb');
   }
 });

  const openTheTomb = (resolvedValue) => {
     console.log(`you open the grave and release ${resolvedValue.name}`);
  };
  const tombIsEmpty = (rejectedValue) => {
    console.log(`you have choose a empty tomb ${rejectedValue}`);
  };

 const profanation = () => {
    profaneTombs.then(openTheTomb).catch(tombIsEmpty);
 };
