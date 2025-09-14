const myObject = {
    name: 'Ujjal B. Allen',
    age: 24,
    address: 'Dhaka',
    phone: 1234567890
}


// const result = Object.keys(myObject); // time and space complexity O(n)
// const result = Object.values(myObject); // time and space complexity O(n)
// const result = Object.entries(myObject); // time and space complexity O(n)
// const result = myObject.hasOwnProperty('name') time and space complexity O(1)
console.log(result)






/* 
Time complexity:
If we add or remove an element at the first of the array, the complexity increases. 
But if we add or remove an element at the end of the array, the complexity stays the same.
*/


// 1. 
const myArray = ['a', 'b', 'c', 'd'];
// myArray.push('e'); // time and space complexity O(1)

/* 

1. Time Complexity

  push() adds an element to the end of the array.

  In JavaScript, adding at the end is done in constant time,
  because arrays are dynamic.


  Even if the array grows bigger, adding one element at the end still takes roughly the same time.


2. Space complexity:
  push() adds one element, so space grows by 1 element.
  
  In Big O terms, adding a single element is considered O(1),
  because it’s a constant addition.

*/


// 2.
let myArray2 = ['a', 'b'];
myArray.unshift('c'); 

/* 
Time Complexity
  move all existing elements one position to the right.
  If there are n elements, it has to move all n elements,
  So it's O(n)

Space Complexity
  unshift() only adds one new element.
  No big extra memory is used except the new element,
  So, it's O(1)
*/




/* 
NOTE: Big O of Array time complexity

 Insertion = depends
 Removal = depends
 Seraching = O(n)
 Access element using index = O(1)

Operation: 

 push = O(1)
 pop = O(1)
 shift = O(n)
 unShift = O(n)
 
map, filter, forEach, reduce = O(n)


*/