function search (nums, target) {
  // 最小索引和最大索引
  let low = 0, high = nums.length - 1;
  while (low <= high) {
      const mid = Math.floor((high - low) / 2) + low;
      const num = nums[mid];
      if (num === target) {
          return mid;
      } else if (num > target) {
          high = mid - 1;
      } else {
          low = mid + 1;
      }
  }
  return -1;
}

const arr = [1,2,3,4,5]

search(arr, 4)
