/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let sumArray = []
  sumArray[0] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    sumArray[i] = nums[i] + sumArray[i - 1]
  }
  return sumArray
}
