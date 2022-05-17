function sum2Element(nums, sum, currPosition = 0) {
  let valuePostion = nums[0];

  if (nums.length === 0) {
    console.log("no output");
    return;
  }

  for (let i = 1; i <= nums.length - 1; i++) {
    if (valuePostion + nums[i] === sum) {
      console.log(`${currPosition},${currPosition + i}`);
      return;
    }
  }

  nums.shift();
  sum2Element(nums, sum, currPosition + 1);
}

sum2Element([2, 7, 11, 15], 9);
sum2Element([3, 2, 4], 6);
sum2Element([3, 1, 2, 3], 6);
sum2Element([3, 2], 3);
