//Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

function task4(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      const sum = arr[left] + arr[right];
  
      if (sum === target) {
        return [left, right];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  
    return null; 
  }
  
  const array = [1, 3, 6, 8, 11, 15];
  const targetValue = 9;
  const result = task4(array, targetValue);
  console.log("Output:", result); 
  