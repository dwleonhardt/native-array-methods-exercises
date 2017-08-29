function sum (array) {
  return array.reduce(function(ele, val){
    return ele + val;
  });
};

function productAll (array) {
  var newArr = [];
  array.reduce(function(ele, val){
    return val.reduce(function(ele1, val1) {
      console.log(ele1 * val1);
    },1) * ele;
  },1);
};

function objectify (array) {
  // your code here
};

function luckyNumbers (array) {
  // your code here
};

module.exports = {
  sum: sum,
  productAll: productAll,
  objectify: objectify,
  luckyNumbers: luckyNumbers
};
