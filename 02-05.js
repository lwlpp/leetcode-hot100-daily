动态规划


//爬楼梯
//假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
//每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
//dp[n]=dp[n-1]+dp[n-2]
//dp[0]=1;
//dp[1]=2;
var climbStairs = function(n) {
    let dp=[1,2];
    for(let i=2;i<n;i++)
        dp.push(dp[i-1]+dp[i-2]);
    return dp[n-1];
};



//杨辉三角形
//给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
//在「杨辉三角」中，每个数是它左上方和右上方的数的和。
var generate = function(numRows) {
    let ans=[];
    for(let i=0;i<numRows;i++){
        let num=[];
        for(let j=0;j<=i;j++){
            if(j===0 || j===i){
                num.push(1);
            }
            else{
                num.push(ans[i-1][j-1]+ans[i-1][j]);
            }
        }
        ans.push(num);
    }
    return ans;
};



//打家劫舍
//相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
//一夜之内能够偷窃到的最高金额。
//dp[i]=max(dp[i-1],dp[i-2]+a)
//             不偷     偷
//不偷：从上一个转移，上一个偷不偷都无所谓
//偷：不要转移上一个，而是转移上上一个，这样不会被上一个影响，上上一个偷不偷都无所谓
var rob = function(nums) {
    let dp=[];
    for(let i=0;i<nums.length;i++){
        if(i>=2)
            dp.push(Math.max(dp[i-1],dp[i-2]+nums[i]));
        else if(i===1)
            dp.push(Math.max(dp[i-1],nums[i]));
        else
            dp.push(nums[i]);
    }
    return dp[dp.length-1];
};
