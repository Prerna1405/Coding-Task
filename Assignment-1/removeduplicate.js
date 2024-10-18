const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i]=nums[j];
        }
    }
    return i + 1; 
};

function getInput() {
    rl.question("Enter the array ", (input) => {
        const nums = input.split(' ').map(Number); 
        
        const result = removeDuplicates(nums); 
        console.log("Number of unique elements: " + result);
        console.log("Modified array: ", nums.slice(0, result)); 
        
        rl.close(); 
    });
}

getInput(); 
