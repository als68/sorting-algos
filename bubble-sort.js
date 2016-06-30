function bubbleSortAl(someArray){

  var i = 0;
  do {
    i += 1;
    for(var j = 0; j < someArray.length; j++){

      if(someArray[j] > someArray[j + 1]){
        var tempVal = someArray[j];
        someArray[j] = someArray[j + 1];
        someArray[j + 1] = tempVal;
      }
    }
  } while (i < someArray.length);
  return someArray;
}

module.exports = bubbleSortAl;