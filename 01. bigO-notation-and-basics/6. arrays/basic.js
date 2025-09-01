const nums = [1, 2, 3, 4, 2, 7, 5];

const a = nums.slice(1, 5);

// console.log(a)

// nums.splice(2, 4);
// nums.splice(2, 0, 11, 20)
console.log(a)

nums.map((num, index, nums) => {
    return num + 1;
})


nums.filter((num, index, nums) => {
     return num <= 3
});


nums.find((num, index, nums) => {
    return num > 3
})


nums.reduce((previousValue, currentValue) => {
    let sum = previousValue + currentValue;
    // console.log(sum)
    return sum;
}, 0)

// console.log(result)