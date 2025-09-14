//Space complexity means how much extra memory (RAM) your program needs while it runs.

// This function has only one variable, which holds a dynamic value
// and Does not grow with input size
// now we can say Space Complexity = O(1)
// and O(n) time complexity


function funnyNumer(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        // sum = sum + some value
        sum += array[i] 
    };

    return sum;
};




const numbers = [410, 20, 54, 48, 65];

const result = funnyNumer(numbers);


console.log(result);




// here n = 5, memory stores 5 items
// Space Complexity = O(n)
// and Time Complexity = O(n)

function funnyNumbersArray(n){
    let array = [];
    for(let i=0; i<n; i++){
        array.push(i * 69);
    }

    return array;
}

console.log(funnyNumbersArray(5))