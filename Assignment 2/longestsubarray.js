
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


class Solution {
    /**

     * @param {number[]} arr - The array of integers.
     * @param {number} k - The target sum.
     * @returns {number} - The length of the longest subarray with sum k.
     */
    lenOfLongestSubarr(arr, k) {
        let sum = 0;
        let maxLength = 0;
        let sumMap = new Map();

        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];


            if (sum === k) {
                maxLength = i + 1;
            }

       
            if (sumMap.has(sum - k)) {
                maxLength = Math.max(maxLength, i - sumMap.get(sum - k));
            }

            if (!sumMap.has(sum)) {
                sumMap.set(sum, i);
            }
        }

        return maxLength;
    }
}

rl.question("Enter the array (e.g., [10, 5, 2, 7, 1, 9]): ", (arrayInput) => {
    rl.question("Enter the target sum k: ", (kInput) => {
        const arr = JSON.parse(arrayInput); 
        const k = parseInt(kInput);    

      
        const solution = new Solution();

        const longestSubarrayLength = solution.lenOfLongestSubarr(arr, k);
        console.log("Length of the longest subarray with sum equal to k:", longestSubarrayLength);

        rl.close();
    });
});
