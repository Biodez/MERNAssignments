const reverseArray = (arr) => {
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
};

const rotateArr = (arr, moveBy) => {
  var actualMovementsNeeded;
  if (moveBy > 0) {
    actualMovementsNeeded = moveBy % arr.length;
  } else {
    actualMovementsNeeded = Math.abs(moveBy) % arr.length;
  }
  if (moveBy > 0) {
    for (var i = 0; i < actualMovementsNeeded; i++) {
      var temp = arr[arr.length - 1];
      for (var k = arr.length - 2; k >= 0; k--) {
        arr[k + 1] = arr[k];
      }
      arr[0] = temp;
    }
  } else {
    for (var i = 0; i < actualMovementsNeeded; i++) {
      var temp = arr[0];
      for (var k = 1; k < arr.length; k++) {
        arr[k - 1] = arr[k];
      }
      arr[arr.length - 1] = temp;
    }
  }
};

const filterRange = (arr, minVal, maxVal) => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < minVal || arr[i] > maxVal) {
      for (var k = i + 1; k < arr.length; k++) {
        arr[k - 1] = arr[k];
      }
      arr.length--;
      i--;
    }
  }
};

const concatArrays = (arr1, arr2) => {
  var newArr = [];
  var curInd = 0;
  for (var i = 0; i < arr1.length; i++) {
    newArr[curInd] = arr1[i];
    curInd++;
  }
  for (var i = 0; i < arr2.length; i++) {
    newArr[curInd] = arr2[i];
    curInd++;
  }
  return newArr;
};
