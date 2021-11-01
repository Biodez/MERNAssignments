const minToFront = (arr) => {
  let minIndex = 0;
  let min = arr[minIndex];
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
      minIndex = i;
    }
  }
  for (let j = minIndex; j < 0; j--) {
    arr[j] = arr[j - 1];
  }

  arr[0] = min;
  return arr;
};

let arr = [6, 7, 8, 3, 4, 5, 9, 10];
console.log(minToFront(arr));
