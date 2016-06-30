function quickSortAl(someArray){
  var pivot;
  var loArray = [];
  var hiArray = [];

  if(someArray.length <= 1){
    return someArray;
  }

  pivot = someArray.shift();

  function checkLo(testVal){
    return testVal <= pivot;
  }
  function checkHi(testVal){
    return testVal > pivot;
  }

  loArray = someArray.filter(checkLo);
  hiArray = someArray.filter(checkHi);

  return quickSortAl(loArray).concat(pivot, quickSortAl(hiArray));
}

module.exports = quickSortAl;