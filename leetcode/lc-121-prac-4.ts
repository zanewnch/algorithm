function maxProfit(prices: number[]): number {
  // define a state
  let minPrice: number = Number.MAX_VALUE;
  let dp: number[] = new Array(prices.length).fill(null);

  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);

    if (dp[i - 1] !== undefined) {
      dp[i] = Math.max(dp[i - 1], prices[i] - minPrice);
    }
  }
  return dp[dp.length - 1];
}
