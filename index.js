// Code your solution here
const batteryBatches = [
  { batchNum: 1, amount: 4 },
  { batchNum: 2, amount: 5 },
  { batchNum: 3, amount: 3 },
  { batchNum: 4, amount: 4 },
  { batchNum: 5, amount: 4 },
  { batchNum: 6, amount: 6 },
  { batchNum: 7, amount: 5 },
];

const totalBatteries = batteryBatches.reduce((accumulator, batch) => {
  return accumulator + batch.amount;
}, 0); // Initialize accumulator with 0

// You can test the result by logging it:
// console.log(totalBatteries);