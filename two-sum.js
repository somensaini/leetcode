/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Parameters 
// - nums: array of integers
// - target: integer

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109

// Return 
// - An array of two indices in any order from nums that add up to target.
// - Each input will have exactly one solution
// - You may not use the same element twice

// Examples
// - Input: nums = [2,7,11,15], target = 9 
// - Output: [0,1]

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Pseudocode
// Use nested loops to compare each value in the array to the rest of the values in the array. If the two values add up to the target, return the two indices of those values. The complexity will be O(n^2).

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i] + nums[j] === target) return [i, j]
        }
    }
};