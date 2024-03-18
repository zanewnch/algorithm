function maxProfit(prices: number[]): number {
  // 要用dp來解
  let minPrice = Number.MAX_VALUE;
  let n = prices.length;
  let dp = new Array(n).fill(0); // dp 是用來放maxProfit的
  
  for(let i =0;i<n;i++){
    if(prices[i] < minPrice){
        minPrice = prices[i];
    }

    let currentSale = prices[i] - minPrice;

    if(dp[i-1]!==undefined){
        dp[i] = Math.max(dp[i-1], currentSale);
    }else{
        dp[i] = Math.max(0,currentSale);
    }
  }

  // return dp last element
  return dp[dp.length-1];
    
};