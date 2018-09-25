const testNum = (num) => {
  return new Promise(function(resolve, reject) {
    if (num >= 10) {
      resolve(`${num} is greater than 10, success!`);  
    } else {
      reject(`${num} is less than 10, error!`);
    }
  });
}

