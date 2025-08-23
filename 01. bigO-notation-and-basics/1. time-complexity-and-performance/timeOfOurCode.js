// bad performance

// function sumOfAll(num) {
//     let total = 0;
//     for (let i = 0; i <= num; i++) {
//         total += i;
//         // console.log(total, i)
//     }

//     return total;
// };


// better performance
function sumOfAll(num) {
    return num * (num + 1) / 2
};

const t0 = performance.now();

console.log(sumOfAll(50000000000))

const t1 = performance.now();

console.log(`Execution took: ${(t1 - t0) / 1000}`)




