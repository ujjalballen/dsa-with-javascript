// O(log n) = grows much slower than input size
// Each step cuts the size down by half

// How to spot O(log n)
   // The key idea: Every step reduces the problem size (input size) by a factor (like half)
   // We don’t check all n elements. Instead, we cut down the work each time




function binarySearch(array, targetNum) {

    let fristIndex = 0;
    let lastIndex = array.length - 1;

    while (fristIndex <= lastIndex) {
        let midIndex = Math.floor((fristIndex + lastIndex) / 2);

        if (array[midIndex] === targetNum) {
            return midIndex;
        } else if (array[midIndex] < targetNum) {
            fristIndex = midIndex + 1
        } else {
            fristIndex = midIndex - 1
        }
    };

    return -1;
}

const numbers = [1, 3, 5, 7, 9, 11, 13];
const result = binarySearch(numbers, 222);
console.log(result)