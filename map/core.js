function multiplyBy10 (array) {
 return array.map(function(i){
   return i * 10;
 });
}

function shiftRight (array) {

  return array.map(function(element, i, arr) {
    if (i === 0) {
      return arr[arr.length - 1];
    } else {
      return arr[i - 1];
    }
  });
}

function onlyVowels (array) {
  return array.map(function(element) {
     return element.replace(/[bcdfghjklmnpqrstvwxyz]/gi, '');
  });
}

function doubleMatrix (array) {
  return array.map((ele) => {
    return ele.map((num) => {
      return num * 2;
    })
  })
}

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
