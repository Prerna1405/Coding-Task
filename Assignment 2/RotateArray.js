/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the array elements separated by commas: ", (input) => {
    let nums = input.split(',').map(Number); // Convert the input string to an array of numbers
    rl.question("Enter the number of rotations (k): ", (k) => {
        rotate(nums, parseInt(k, 10)); // Parse k as an integer and call rotate function
        console.log("Rotated array:", nums);
        rl.close();
    });
});

/**
 * Rotate function as defined earlier
 */
var rotate = function(nums, k) {
    k = k % nums.length;

    function reverse(start, end) {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }

    reverse(0, nums.length - 1);
    reverse(0, k - 1);
    reverse(k, nums.length - 1);
};
