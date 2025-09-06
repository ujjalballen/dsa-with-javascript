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
    console.log(unique)



    // time complexity is O(log n)
    unique.sort((a, b) => { 
        return b - a;
    });

    if(unique.length >=2 ){
        return unique[1];
    }else{
        return -1
    }

};


const num = [10];

const result = secondLargest(num);
console.log(result)
