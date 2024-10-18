const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;

    let expectedSum = n * (n + 1) / 2;
    
    
    let actualSum = nums.reduce((sum, num) => sum + num, 0);
    

    return expectedSum - actualSum;
};

function getInput() {
    rl.question("Enter the array ", (input) => {
        const nums = input.split(' ').map(Number); 

        const result = missingNumber(nums); 
        console.log("The missing number is: " + result);
        
        rl.close(); 
    });
}

getInput(); 
