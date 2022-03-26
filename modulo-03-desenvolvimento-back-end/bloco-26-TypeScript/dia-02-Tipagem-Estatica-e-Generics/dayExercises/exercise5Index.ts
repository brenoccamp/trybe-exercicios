type callBackFilter<T> = (value: T, index?: number, array?: Array<T>) => boolean;

function myFilter<T>(array: Array<T>, callback: callBackFilter<T>): Array<T> {
  const newArray: Array<T> = [];

  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

console.log(myFilter([1, 2, 3], (item) => item < 3));