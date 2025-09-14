// function showAllNum(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (i === 3) {

//             console.log(array[i]);

//         }
//     }
// };

function showAllNum(array) {
    return array[2]
}


const numbers = [12, 15, 42, 54, 15, 4]

console.time('numbers');
console.log(showAllNum(numbers))
console.timeEnd('numbers')