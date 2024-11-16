// que 5 - best time to buy and sell stocks
// you are given an array prices where prices[i] is the price of a given stockson the ith day.
// you want to maximize your profit by choosing a single day to buy one stocks
// choosing a different day in the future to sell that stock.
// Return the maximum profit, if you cannot achieve any profit, return 0

// so basically we have all day data
// eg: [m,t,w,t,f,s] <- day
//     [7,1,5,3,6,4] <- data according to day
// so we will be comparing next day data with currect day in order to get the difference with the currect day.be
// as the line mentiones that id we by stock today then when is the right time to sell so we will mius (nextday - currectday)

// i = 0; 7 currect day
// j= 1; 1 next day
// 1-7 = -6 // no profit
// ----------------
// i= 1; 1 CD
// j = 2; 5 ND
// 5-1 = 4 // 4RS profit
// ------------------
// i=2; 5 CD
// j=3; 3 ND
// 3-5 = -2 no profit
// -------------------
// i=3; 6 CD
// j=4; 4 ND
// 4-6 = -2 no profit

// i.e 5 has profit

// const maxProfit = function (prices) {
//   //   let globalProfit = 0;

//   //   for (let i = 0; i < prices.length - 1; i++) {
//   //     for (let j = i + 1; j < prices.length; j++) {
//   //       if (prices[j] > prices[i]) {
//   //         const currentProfit = prices[j] - prices[i];
//   //         if (currentProfit > globalProfit) globalProfit = currentProfit;
//   //       }
//   //     }
//   //   }
//   //   return globalProfit;
//   let minPurchasePrice = prices[0] || 0;
//   let profit = 0;

//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] < minPurchasePrice) {
//       minPurchasePrice = prices[i];
//     } else {
//       profit = Math.max(profit, prices[i] - minPurchasePrice);
//     }
//   }
//   return profit;
// };

// console.log(this.maxProfit([7, 1, 5, 3, 6, 4]));

// this solution is based under greedy algorithm
// so what will be happening is
// [7, 1, 5, 3, 6, 4]

// minProfit = 7<1 =no= 1;
// profit = 0;
// i = 1 = 1
// --------------
// minProfit = 1 <5 = yes so will do the sum ;
// profit = 5-1 = 4
// i=2 = 5
// --------------------

// minProfit = 1  = 1<3 = yes will do sum
// profit = 4 = 3-1 = 2
// i = 3 = 3
// =================
// i = 4 = 6
// minProfit = 1 = 1<6 = yes will do sum
// profit = 4 = 6-1 = 5 new value
// ==========================
// i = 5 = 4
// minProfit =  1 1<4 = yes will do sum
// profit = 5 = 4-1 = 3
//  soo the profit is 5

const maxProfit = function (prices) {
  let minPurchasePrice = prices[0] || 0;
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPurchasePrice) {
      minPurchasePrice = prices[i];
    }
    profit = Math.max(profit, prices[i] - minPurchasePrice);
  }
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
