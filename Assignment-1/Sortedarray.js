const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let countBreaks = 0;
    const n = nums.length;
    
    for (let i = 0; i < n; i++) {
        if (nums[i] > nums[(i + 1) % n]) {
            countBreaks++;
        }
        if (countBreaks > 1) {
            return false;
        }
    }
    return true;
};

// Function to get user input and call the check function
function getInput() {
    rl.question("Enter the array elements separated by spaces: ", (input) => {
        const nums = input.split(' ').map(Number);  // Convert the input string into an array of numbers
        
        const result = check(nums);
        console.log("Is the array a rotated sorted array? " + result);
        rl.close();  // Close the readline interface
    });
}

getInput();  // Calling the function to get input from the user
