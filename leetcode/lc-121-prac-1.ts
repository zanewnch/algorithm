function maxProfit(prices: number[]): number {
    let n = prices.length;
    let dp = new Array(n).fill(0);
    let minPrice = Number.MAX_VALUE;

    for(let i =0;i<n;i++){
        // 如果prices[i] < minPrice, 就update minPrice
        if(prices[i]<minPrice){
            minPrice = prices[i];
        }

        /* 
        在這個問題中，dp[i-1] 代表的是在第 i-1 天結束時可以獲得的最大利潤。當我們在計算 dp[i]（即第 i 天結束時可以獲得的最大利潤）時，我們有兩種選擇：

        我們可以選擇在第 i 天賣出股票，這樣我們的利潤就是當前的價格 prices[i] 減去到目前為止見到的最低價格 minPrice。
        我們也可以選擇不在第 i 天賣出股票，這樣我們的利潤就是在第 i-1 天結束時的最大利潤，即 dp[i-1]。
        我們選擇這兩種選擇中的最大值作為 dp[i]。這就是為什麼我們需要找 dp[i-1] 的原因。

        要考慮到i = 0 的情況下，沒有前一天的數據, 所以就用0代替
        */
        if(dp[i-1]!==undefined){
            // dp[i] represent the maxProfit 
            dp[i] = Math.max(dp[i-1], prices[i] - minPrice);
        }else{
            // 為什麼是用0, 就代表都沒有賣出,所以profit 是0
            dp[i] = Math.max(0,prices[i]-minPrice);
        }
    }

    return dp[n-1];
    
};


const testData = [7,1,5,3,6,4];
let result = maxProfit(testData);
console.log(result);


/* 
official solution:

function maxProfit(prices) {
    let n = prices.length;
    let dp = new Array(n).fill(0);
    let minPrice = Number.MAX_VALUE;

    for (let i = 0; i < n; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        dp[i] = Math.max(dp[i-1] || 0, prices[i] - minPrice);
    }

    return dp[n-1];
}
*/