function maxProfit(prices: number[]): number {
  let minPrice = Number.MAX_VALUE;
  let n = prices.length;
  let dp = new Array(n).fill(0);
  
  for(let i =0; i<n; i++){

    // remember new syntax
    minPrice =  Math.min(minPrice,prices[i]);

    let currentSale = prices[i] - minPrice;

    if(dp[i-1]!==undefined){
        dp[i] = Math.max(dp[i-1],currentSale);
    }else{
        dp[i] = Math.min(0,currentSale);
    }
  }

  return dp[dp.length-1];
    
};