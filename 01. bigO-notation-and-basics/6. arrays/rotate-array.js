// ques 2 - Rotate arry by k
// give aninteger array nums, rotate the array to the right by k steps
// where k is non - negative.

// input: nums = [1, 2, 3, 4, 5, 6] == k = 3 ; out: [4,5,6,1,2,3]
// input: nums = [-1, -100, 3, 99] == k = 2; out: [3, 99, -1, -100]

// Solution 1

const rotateArray = (nums, k) => {
  const length = nums.length;

  if (length > k) {
    k = k % length;
  }

  const rotate = nums.splice(length - k, length);
  nums.unshift(...rotate);

  console.log(rotate);

  return nums;
};

// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3))

//Optimised Approch

function rotateArrayOptimised(nums, k) {
  const length = nums.length;

  if (length > k) {
    k = k % length;
  }

  reverse(nums, 0, nums.length - 1); // O(n)
  reverse(nums, 0, k - 1); // O(k)
  reverse(nums, k, nums.length - 1); //O(n-k)

  return nums;
}

// time complexity= O(n)
// space complexity= O(1)

function reverse(nums, left, right) {
  while (left < right) {
    const temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;

    left++;
    right--;
  }
}

console.log(rotateArrayOptimised([-1, -100, 3, 99], 2));
