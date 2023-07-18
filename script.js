function threeSum(arr, target) {
  arr.sort((a, b) => a - b);
  let closestSum = Infinity;
  for (let i = 0; i < arr.length - 2; i++) {
    let ptr1 = i + 1;
    let ptr2 = arr.length - 1;
    while (ptr1 < ptr2) {
      const sum = arr[i] + arr[ptr1] + arr[ptr2];
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }
      if (sum < target) {
        ptr1++;
      } else if (sum > target) {
        ptr2--;
      } else {
        return sum;
      }
    }
  }
  return closestSum;
}

module.exports = threeSum;

