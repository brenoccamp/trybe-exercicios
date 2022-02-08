const exercise1 = (param1, param2, param3) => {
  return new Promise((resolve, reject) => {
    if (typeof param1 !== 'number' || typeof param2 !== 'number' || typeof param3 !== 'number') return reject(new Error('Only numbers allowed!'));

    const result = (param1 + param2) * param3;

    if (result < 50) return reject(new Error('Value too low.'));
    return resolve(result);
  });
};

// exercise1(1, 5, 20).then((result) => console.log(result)).catch((err) => console.log(err.message)); // -> testing the function behavior!

module.exports = exercise1;