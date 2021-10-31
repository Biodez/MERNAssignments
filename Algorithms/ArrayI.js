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
  for (let index = 0; index < arr.length; index++) {
    arr[arr.length - index] = arr[arr.length - 1 - index];
  }
  arr[index] = value;
  return arr;
};

let arr = [3, 4, 5, 6, 7];
let value = 2;
let index = 3;
console.log(insertAt(arr, index, value));
