const pushFront = (arr, val) => {
  for (let index = 0; index < arr.length; index++) {
    arr[arr.length - index] = arr[arr.length - 1 - index];
  }
  arr[0] = val;
  return arr;
};

let arr = [3, 4, 5, 6, 7];
let val = 2;
console.log(pushFront(arr, val));

const popFront = (arr) => {
  let lastValue = arr.pop();
  for (let index = 0; index < arr.length; index++) {
    arr[arr.length - index] = arr[arr.length - 1 - index];
  }
  arr[0] = lastValue;
  return arr;
};
let arr = [3, 4, 5, 6, 7];
console.log(popFront(arr));

const insertAt = (arr, index, value) => {
  for (let i = arr.length - 1; i >= index; i--) {
    arr[i + 1] = arr[i];
  }
  arr[index] = value;
  return arr;
};

let arr = [3, 4, 5, 6, 7];
let value = 2;
let index = 3;
console.log(insertAt(arr, index, value));

const removeAt = (arr, index) => {
  if (index > arr.length || index < 0) {
    return null;
  }
  let val = arr[index];
  for (let i = index; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr.pop();
  return val;
};
let arr = [3, 4, 5, 6, 7, 8, 9, 10];
let index = 1;
console.log(removeAt(arr, index));

const swapPairs = (arr) => {
  for (let index = 0; index < arr.length - 1; index += 2) {
    let val = arr[index];
    arr[index] = arr[index + 1];
    arr[index + 1] = val;
  }
  return arr;
};

let arr = [3, 4, 5, 6, 7, 8, 9];
console.log(swapPairs(arr));

const removeDups = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      while (arr[i] === arr[i + 1]) {
        removeAt(arr, i + 1);
      }
    }
  }
  return arr;
};

let arr = [3, 4, 5, 5, 6, 7, 8, 8, 9];
console.log(removeDups(arr));
