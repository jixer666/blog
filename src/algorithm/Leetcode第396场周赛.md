# Leetcode第396场周赛

<div style="background: #f8f9fa; padding: 12px 16px; border-left: 3px solid #4CAF50; margin-bottom: 16px; border-radius: 0 4px 4px 0; font-size: 0.9rem">
    <div style="display: flex; align-items: center; gap: 30px; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">📅</span>
            <span>2024-05-05</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">✍️</span>
            <span>Jixer</span>
        </div>
    </div>
</div>
本次比赛WA嘛了，最后3分钟把第三题解了，一直错本来都打算放弃了，突然就给我对了。

字符串这方面还是太弱了，本场基本都是字符串的题目.....

## 有效单词

签到题，如果数组元素较多的的化建议用循环做

```c++
class Solution {
public:
    bool isValid(string word) {
        int len = word.size();
        if(len < 3){
            return false;
        }
        int f1 = 0, f2 = 0;
        for(int i = 0; i < len; i++){
            char c = word[i];
            if(c == 'a' || c == 'e' || c == 'i' || c =='o' || c == 'u' ||
              c == 'A' || c == 'E' || c == 'I' || c =='O' || c == 'U' ){
                f1 = 1;
            } else {
                if(c >= 'a' && c <= 'z' || c >= '0' && c <= '9' || c >= 'A' && c <= 'Z'){
                    if(c >= 'a' && c <= 'z' ||  c >= 'A' && c <= 'Z'){
                         f2 = 1;
                    }
                } else {
                    return false;
                }
            }
        }
        if(f1 && f2) return true;
        else return false;
    }
};
```

## K 周期字符串需要的最少操作次数

一开始没读懂题目，后面发现不必要考虑两个字符串相隔的位置

```c++
class Solution {
public:
    int minimumOperationsToMakeKPeriodic(string word, int k) {
        int len = word.size(), maxlen = 0, cot = 0, idx = 0;
        string mstr = "";
        unordered_map<string, int> ump;
        for(int i = 0;  i < len; i++){
            string ss = word.substr(i, k);
            ump[ss] ++;
            if(ump[ss] > maxlen){
                maxlen = ump[ss];
                mstr = ss;
            }
            i += k - 1;
        }
        idx = 0;
        for(int i = 0;  i < len; i++){
            string ss = word.substr(i, k);
            if(ss == mstr){
                cot ++;
            }
            i += k - 1;
        }
        return (len - cot * k) / k;
    }
};
```

## 同位字符串连接的最小长度

通过求出每个元素的个数，然后求出所有个数的最大公约数来判断可以分为多少组，从而求出每组的个数

个人感觉这题的数据量不是很多，我这个思路遇多多少少是有点问题的

```c++
class Solution {
public:
    int fun(int x, int y){
        return y == 0? x : fun(y, x % y);
    }
    int minAnagramLength(string s) {
        set<char> ss;
        int len = s.size();
        unordered_map<char, int> ump;
        int cot = INT_MAX, f = 0, cot2 = 0, bf = 0;
        for(int i = 0; i < len; i++){
            ump[s[i]] ++;
        }
        for(auto item : ump){
            if(bf == 0){
                bf = item.second;
            } else {
                cot = min(cot, fun(bf, item.second));
                bf = item.second;
            }
        }

        return cot != INT_MAX ? len / cot: len / bf;
    }
};
```

## 使数组中所有元素相等的最小开销

待补充
