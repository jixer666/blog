# Leetcode第398场周赛

<div style="background: #f8f9fa; padding: 12px 16px; border-left: 3px solid #4CAF50; margin-bottom: 16px; border-radius: 0 4px 4px 0; font-size: 0.9rem">
    <div style="display: flex; align-items: center; gap: 30px; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">📅</span>
            <span>2024-05-20</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">✍️</span>
            <span>Jixer</span>
        </div>
    </div>
</div>
## 3151. 特殊数组 I

简单模拟

```c++
class Solution {
public:
    bool isArraySpecial(vector<int>& nums) {
        int len = nums.size();
        if(len == 1){
            return true;
        }
        for(int i = 1; i < len; i++){
            if(nums[i] % 2 == nums[i - 1] % 2){
                return false;
            }
        }
        return true;
    }
};
```

## 特殊数组 II

前缀和处理相邻特殊元素总数

```c++
class Solution {
public:
    vector<bool> isArraySpecial(vector<int>& nums, vector<vector<int>>& queries) {
        int len = nums.size();
        vector<bool> res;
        if(len == 1){
            for(int i = 0; i < queries.size(); i++){
                res.push_back(true);
            }
            return res;
        }
        vector<int> v(len + 1);
        v[0] = 0;
        for(int i = 1; i < len; i++){
            if(nums[i] % 2 == nums[i - 1] % 2){
                v[i] = v[i - 1] + 1;
            } else {
                v[i] = v[i - 1];
            }
        }
        for(int i = 0; i < queries.size(); i++){
            if(v[queries[i][1]] - v[queries[i][0]] == 0){
                res.push_back(true);
            } else {
                res.push_back(false);
            }
        }
        return res;
    }
};
```

## 所有数对中数位不同之和

拆分位运算贡献

```c++
class Solution {
public:
    long long n[100010][20];
    long long sumDigitDifferences(vector<int>& nums) {
        int len = nums.size();
        long long res = 0;
        for(int i = 0; i < len; i++){
            int cc = nums[i], idx = 0;
            while(cc){
                int j = cc % 10;
                res += i * 1ll - n[idx][j];
                cc /= 10;   
                n[idx][j] ++;
                idx ++;
            }
        }
        return res;
    }
};
```

## 到达第 K 级台阶的方案数

记忆化搜索

灵神这题做法是用记忆存储的元素与以往题目不一样，使用 `long long p = (long long) x << 10 | num << 1 | f; `来确定元素的唯一性，这个做法tql，换我来做就需要用个二维数组来标志

```c++
class Solution {
public:
    unordered_map<long long, int> ump;
    int dfs(int x, int num, bool f, int k){
        if(x > k + 1 || x < 0){
            return 0;
        }
        long long p = (long long) x << 10 | num << 1 | f;
        if(ump.find(p) != ump.end()){
            return ump[p];
        }
        int ss = (x == k);
        ss += dfs(x + (1 << num), num + 1, false, k);
        if(!f){
            ss += dfs(x - 1, num, true, k);
        }
        ump[p] = ss;
        return ss;
    }
    int waysToReachStair(int k) {
        return dfs(1, 0, false, k);
    }
};
```

