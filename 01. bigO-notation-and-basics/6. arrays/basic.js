const nums = [1, 2, 3, 4, 2, 7, 5];

const a = nums.slice(1, 5);

// console.log(a)

// nums.splice(2, 4);
// nums.splice(2, 0, 11, 20)
// console.log(a)

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


<<<<<<< HEAD
<<<<<<< HEAD
let one = [1, 2, 3, 4, 5, 6];
=======
let one = [1, 2, 3, 4];
>>>>>>> 98808da4b4786b4f0daaae1b1610572c2b760702
=======
let one = [1, 2, 3, 4];
>>>>>>> 98808da4b4786b4f0daaae1b1610572c2b760702
let two = [2, 4, 5];

const newArray = one.concat(two);
// console.log(newArray)

<<<<<<< HEAD
<<<<<<< HEAD
const newSlice = one.slice(0, 3)

const getSlice = newArray.slice(-2);

console.log(newSlice)
=======
=======
>>>>>>> 98808da4b4786b4f0daaae1b1610572c2b760702
const newSlice = newArray.slice(0, 3)

const getSlice = newArray.slice(-2);

// console.log(newSlice)
<<<<<<< HEAD
>>>>>>> 98808da4b4786b4f0daaae1b1610572c2b760702
=======
>>>>>>> 98808da4b4786b4f0daaae1b1610572c2b760702


const names = ['red', 'green', 'yellow'];
names.splice(0, 1, 'oooo')

// console.log(names)
const aNums = [2, 5, 4, 6];
// aNums.fill(0);
aNums.fill(5, 3);
// console.log(aNums)


// const result2 = aNums.indexOf(5);
// const result2 = aNums.findIndex((index) => index === 4) 
// console.log(result2)

const nestedArray = [1, [2, 5, 4], [[8, 4, 5, 8]], 5, 55];

// const newOne = nestedArray.flat(); // it will remove the array
const newOne = nestedArray.flat(2); // it will remove the array
// console.log(newOne)


// reverse
const nums4 = [1, 2, 3, 4, 5, 6];

// console.log(nums4);

nums4.reverse();

// console.log(nums4)


let numbers = [5, 30, 100, 7];

// Ascending Order

numbers.sort((a, b) => a - b);

// Descending Order
<<<<<<< HEAD
<<<<<<< HEAD
numbers.sort((a, b) => b - a)
=======
numbers.sort((a, b) => b-a)
>>>>>>> 98808da4b4786b4f0daaae1b1610572c2b760702
=======
numbers.sort((a, b) => b-a)
>>>>>>> 98808da4b4786b4f0daaae1b1610572c2b760702

// console.log(numbers)


let users = [
<<<<<<< HEAD
<<<<<<< HEAD
    { name: "Alice", age: 25 },
    { name: "Bob", age: 40 },
    { name: "Charlie", age: 30 }
=======
  { name: "Alice", age: 25 },
  { name: "Bob", age: 40 },
  { name: "Charlie", age: 30 }
>>>>>>> 98808da4b4786b4f0daaae1b1610572c2b760702
=======
  { name: "Alice", age: 25 },
  { name: "Bob", age: 40 },
  { name: "Charlie", age: 30 }
>>>>>>> 98808da4b4786b4f0daaae1b1610572c2b760702
];


users.sort((a, b) => b.age - a.age)
users.sort((a, b) => a.age - b.age)
// console.log(users)


