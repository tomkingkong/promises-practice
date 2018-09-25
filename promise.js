const testNum = (num) => {
  return new Promise(function(resolve, reject) {
    if (num >= 10) {
      resolve(`${num} is greater than 10, success!`);  
    } else {
      reject(`${num} is less than 10, error!`);
    }
  });
}

const makeAllCaps = (array) => {
  const isString = (value) => {
    typeof value === 'string';
  }
  return new Promise(function(resolve, reject) {
    if (array.every(isString)) {
      resolve(array.toUpperCase());
    } else {
      reject('No, the array you passed in contained an element that was not a string!');
    }
  });
}
