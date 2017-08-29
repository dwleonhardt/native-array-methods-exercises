function onlyEven (array) {
  return array.filter((ele) => {
    return ele % 2 === 0;
  })
};

function onlyOneWord (array) {
  return array.filter((ele) => {
    return !/\s/.test(ele);
  })
};

function positiveRowsOnly (array) {
  return array.filter((ele) => {
    let filtered = ele.filter((num) => num > -1);
    return filtered.length === ele.length;
  })
};

function allSameVowels (array) {
  return array.filter((e) => {
    let array = e.split('');
    let val;
    for (var i = 0; i < array.length; i++) {
      if (array[i].match(/[aeiou]/)) {
        if (val === undefined) {
          val = array[i];
        }
        else if (val !== array[i]) {
          return false;
        }
      }
    }
    return true;
  })
};

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};
