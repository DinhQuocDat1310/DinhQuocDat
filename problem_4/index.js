// Requirement:
// Provide 3 unique implementations of the following function in TypeScript.
// Comment on the complexity or efficiency of each function.
// Input: n - any integer
// Output: return - summation to n, i.e. sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15.
//Complexity: O(N) - Efficiency: Less efficient because it run time increases with N
var firstWaySumToN = function (n) {
    if (!checkValidNumber(n))
        return -1;
    var sum = 0;
    for (var index = 1; index <= n; index++) {
        sum += index;
    }
    return sum;
};
//Complexity: O(1) - Efficiency: Is the best because it calculates the sum in constant time
var secondWaySumToN = function (n) {
    if (!checkValidNumber(n))
        return -1;
    return (n * (n + 1)) / 2;
};
//Complexity: O(N) - Efficiency: Less efficient because uses more memory due to recursion
var thirdWaySumToN = function (n) {
    if (!checkValidNumber(n))
        return -1;
    return n === 1 ? 1 : n + thirdWaySumToN(n - 1);
};
//Check valid number
var checkValidNumber = function (n) {
    if (!n || n < 0 || n % 1 !== 0)
        return false;
    return true;
};
var resultFirstWaySumToN = firstWaySumToN(5);
var resultSecondWaySumToN = secondWaySumToN(5);
var resultThirdWaySumToN = thirdWaySumToN(5);
console.log(resultFirstWaySumToN);
console.log(resultSecondWaySumToN);
console.log(resultThirdWaySumToN);
