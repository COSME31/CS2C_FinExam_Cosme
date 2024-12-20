function bubbleSort(arr) {
  const n = arr.length;
  let swapped;
  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
        console.log(`Swapped ${arr[j + 1]} and ${arr[j]}. Array: ${arr}`);
      }
    }
    if (!swapped) {
      break;
    }
  }
  return arr;
}

const numbers = [42, 25, 12, 63, 48, 10, 16, 5, 30, 78];

const sortedNumbers = bubbleSort(numbers);

console.log("\nSorted array:", sortedNumbers);