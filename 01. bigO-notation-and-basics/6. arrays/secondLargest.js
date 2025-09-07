/* function secondLargest(arr) {
    let uniqueArray = [];

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];

        if (!uniqueArray.includes(element)) {
            uniqueArray.push(element);
        }
    };

    uniqueArray.sort((a, b) => b - a);

    if (uniqueArray.length >= 2) {

        return uniqueArray[1]
    }

    return -1;
};


const num = [10];

const result = secondLargest(num);

console.log(result) */

/* 
new Set() collection of unique values (no duplicates)
method: has(), delete(), add(), clear()

*/


//Brute Force Approach

const secondLargest = (array) => {
    // time complexity is O(n)
    // Space = O(n) (because we make a new Set and a new array) 
    const unique = Array.from(new Set(array));
    // console.log(unique)



    // time complexity is O(log n)
    unique.sort((a, b) => {
        return b - a;
    });

    if (unique.length >= 2) {
        return unique[1];
    } else {
        return -1
    }

};


const num = [10];

// const result = secondLargest(num);
// console.log(result)




// Optimised Approach


/* 
# Time Complexity (O(n))

   The loop runs n times, where n is the length of the array.
   If the array size grows, the loop also grows and runs that many times.

# Space Complexity (O(1))

  We only keep a few variables (largest, secondLargest, currentNumber).
  They don’t depend on the array size.
  That’s why it uses constant space.
*/

const secondLargestOpt = (arr) => {
    let largest = Number.NEGATIVE_INFINITY; // 55
    let secondLargest = Number.NEGATIVE_INFINITY; // 20

    for (let i = 0; i < arr.length; i++) {  // time complexity =  O(n); space complexity O(1)
        const currentNumber = arr[i];

        if (currentNumber > largest) { // comparisons = O(1) time complexity
            secondLargest = largest;
            largest = currentNumber;

        } else if (currentNumber !== largest && currentNumber > secondLargest) {
            secondLargest = currentNumber;
        };
    };

    return secondLargest;

}

const num3 = [10, 5, 20, 8, 55];

const result = secondLargest(num3);
console.log(result)
