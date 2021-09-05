let arr = [5,3,7,6,2,9];

const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const partition = (arr, i, j) => {
    var pivot = arr[Math.floor((i+j)/2)];
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }

        while (arr[j] > pivot) {
            j--;
        }

        if (i<=j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }

    return j;
}

const quickSort = (arr, i, j) => {
    let index;
    if (arr.length > 1) {
        index = partition(arr, i, j);
        if (i < index -1) {
            quickSort(arr, i, index-1);
        }
        if(index < j) {
            quickSort(arr, index, j);
        }
    }
    return arr;
}

let result = quickSort(arr, 0, arr.length - 1);
console.log(result)
