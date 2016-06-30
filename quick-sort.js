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

  console.log('loArray');
  console.log(loArray);
  console.log('hiArray');
  console.log(hiArray);

  return quickSortAl(loArray).concat(pivot, quickSortAl(hiArray));
}

module.exports = quickSortAl;

//NUKED CODE 2
/*function quickSortAl(someArray){
  var pivot;
  var loArray = [];
  var hiArray = [];

  if(someArray.length <= 1){
    return someArray;
  }

    pivot = someArray[0];


    for(var i = 0; i < someArray.length; i++){
      if(someArray[i] < pivot){

        console.log('entered if');
        loArray.push(someArray[i]);
        console.log('Check out loArray now');
        console.log(loArray);

      } else if (someArray[i] >= pivot) {
        console.log('entered else');
        hiArray.push('test value');
        console.log('Check out hiArray now');
        console.log(hiArray);
      } else {
        return;
      }

    }

  return(quickSortAl(loArray) + pivot + quickSortAl(hiArray));
}*/


/*  var i = 0;
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
}*/

//NUKED CODE
/*var pivot;
var loArray = [];
var hiArray = [];
var i = 0;

function quickSortAl(someArray){

  //assign pivot to first digit of array
  pivot = someArray[0];
  console.log('pivot ' + pivot);
  console.log(loArray);
  console.log(hiArray);

  i++;
  console.log('here\'s i: ' + i);

  //base case
  if(someArray[i] > pivot){
    console.log('entered if? ');
    loArray.push(someArray[i]);
    console.log(loArray);

    //return 'chirp';
  } else {
    console.log('entered else? ');
    hiArray.push();
  }

  console.log('Here\'s loArray');
  console.log(loArray);
  console.log('Here\'s hiArray');
  console.log(hiArray);

  if(loArray < 2){
    console.log('not enough low values');
  } else {
    console.log('not enough high values');
  }
  //return 'chirp ' + chirp(--num, word);

}*/


