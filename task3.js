//Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 
function task3(arr) {
    const frequency = {};
    let maxFreq = 0;
    let mostFreqElement = arr[0];
  
    for (const element of arr) {
        frequency[element] = (frequency[element] || 0) + 1;
  
      if (frequency[element] > maxFreq) {
        maxFreq = frequency[element];
        mostFreqElement = element;
      }
    }
  
    return mostFreqElement;
  }
  
  const array = [3, 5, 2, 5, 3, 3, 1, 4, 5]
  const mostFrequent = task3(array);
  console.log("Most frequent element:", mostFrequent);  
  