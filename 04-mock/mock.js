function map(arr, cb) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(cb(arr[i]));
  }

  // console.log(result);
  return result;
}

module.exports = { map };
