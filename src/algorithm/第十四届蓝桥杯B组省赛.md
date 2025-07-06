# 第十四届蓝桥杯B组省赛

<div style="background: #f8f9fa; padding: 12px 16px; border-left: 3px solid #4CAF50; margin-bottom: 16px; border-radius: 0 4px 4px 0; font-size: 0.9rem">
    <div style="display: flex; align-items: center; gap: 30px; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">📅</span>
            <span>2024-03-12</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">✍️</span>
            <span>Jixer</span>
        </div>
    </div>
</div>

## 日期统计

> 此题蓝桥杯官网没说清除，子序列按道理来说应该是连续的，而这个题却不是
>
> 思路：暴力法遍历8个数，找出符合条件的即可

```c++
#include<bits/stdc++.h> 
using namespace std;
int a, b;
int n[101];

int v[13] = {0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

set<int> s;
int main(){
	int res = 0;
	for(int i = 0; i < 100; i++) cin >> n[i];
	for(int i = 0; i < 100; i++){
		if(n[i] == 2){
			for(int i2 = i + 1; i2 < 100; i2++){
				if(n[i2] == 0){
					for(int i3 = i2 + 1; i3 < 100; i3++){
						if(n[i3] == 2){
							for(int i4 = i3 + 1; i4 < 100; i4++){
								if(n[i4] == 3){
									for(int i5 = i4 + 1; i5 < 100; i5++){
										for(int i6 = i5 + 1; i6 < 100; i6++){
											for(int i7 = i6 + 1; i7 < 100; i7++){
												for(int i8 = i7 + 1; i8 < 100; i8++){
													int moth = n[i5] * 10 + n[i6], day = n[i7] * 10 + n[i8];
													if(moth >= 1 && moth <= 12 && day >= 1 && day <= v[moth]){
														if(s.find(moth * 100 + day) == s.end()){
															s.insert(moth * 100 + day);
														}
													}
												}	
											}
										}
									}
								}
							}	
						}
					}	
				}
			}
		}
	}
	cout << s.size() << endl;
	 

	return 0;
}
```

## 01串的熵

暴力枚举

```c++
#include<bits/stdc++.h>
#include<math.h>
#define endl "\n"
using namespace std;
typedef long long ll;
typedef pair<int, int> PII;
const int N = 1e6 + 10, M = 1e9 + 10;
int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};
int a, b;

int main(){
	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);
	int res = 0;
	int cot = 23333333;
	for(int i = 1; i < cot; i++){
		int j = cot - i;
		double a = 1.0 * i / cot;
		double b = 1.0 * j / cot;
		double res = -a * log2(a) * i - b * log2(b) * j;  	 
		if(fabs(res - 11625907.5798) < 0.0001){
			cout << min(i, cot - i) << endl;
			break;
		}
	}
	return 0;
}
```

## 冶炼金属

> 唯一会做的简单题。。。
>
> 思路：每次循环都求出最大和最小的边界，注意考虑最大最小边界【根据题意笔画一下】

```c++
#include<bits/stdc++.h> 
using namespace std;

int main(){
	
	int a, _max = 1e9, _min = 0;
	cin >> a;
	while(a--){
		int x, y;
		cin >> x >> y;
		_max = min(_max, x / y);
		_min = max(_min, x / (y + 1) + 1); 
	}
	cout << _min << " " << _max << endl;
	
	return 0;
}
```

## 飞机降落

> 原先第一看就使用贪心，后看题解需使用 DFS + 剪枝（原因是因为数据范围只有10）
>
> 思路：从下标0开始搜索，每次搜索都遍历一次数组，从第一个没遍历到的下标下手，继续搜索，这里需要用额外的数组标识是否已经遍历过了。当搜索的下标到最后时，也就是下标等于数组时，就说明能完成降落，因为如果无法完成降落，就不会进行下一次的搜索

```c++
#include<bits/stdc++.h>
using namespace std;
int a, b;
bool res = false;
int flag[11];

struct p{
	int x, y, z;
} n[11];

void dfs(int x, int s){
	if(res){
		return;
	}
	if(x == b){
		res = true;
		return;
	}
	for(int i = 0; i < b; i++){
		if(!flag[i] && s <= n[i].x + n[i].y){
			flag[i] = 1;
            // 此处用了一点点贪心，尽可能保证本次的开始是满足条件的
            // 也就是必须都要满足时间是从上一次结束和这一次开始，取个最大值就行
			dfs(x + 1, max(s, n[i].x) + n[i].z);
			flag[i] = 0;
		}
	}
}

int main(){
	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);
   	cin >> a;
   	while(a--){
   		res = false;
		cin >> b;
		for(int i = 0; i < b; i++) cin >> n[i].x >> n[i].y >> n[i].z;
		dfs(0, 0);
		if(res) cout << "YES" << endl;
		else cout << "NO" << endl;
	}
}
```

## 接龙数列

> 最少删除数 = 总长度- 最长接龙数总长度  

```c++
#include<bits/stdc++.h>
#define endl "\n"
using namespace std;
typedef long long ll;
typedef pair<int, int> PII;
const int N = 1e6 + 10, M = 1e9 + 10;
int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};
int a, b; 
int dp[10];
int main(){
	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);
	cin >> a;
	int res = 0;
	for(int i = 0; i < a; i++){
		string num;
		cin >> num;
		int x = num[0] - '0', y = num[num.size() - 1] - '0';
		dp[y] = max(dp[x] + 1, dp[y]);
		res = max(res, dp[y]);
	}
	cout << a - res << endl;


	return 0;
}
```

## 子串简写

此题唯一需要注意的是数据范围需要用 long long

```c++
#include<bits/stdc++.h>
#define endl "\n"
using namespace std;
typedef long long ll;
typedef pair<int, int> PII;
const int N = 1e6 + 10, M = 1e9 + 10;
int ix[9] = {1,-1,0,0}, iy[9] = {0,0,1,-1};
int a, b;
int n[5001][5001];

int main(){
	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);
	cin >> a;
	string str;
	char x, y;
	cin >> str >> x >> y;
	ll len = str.size(), cot = 0, res = 0;
	queue<int> pq;
	for(int i = 0; i < len; i++){
		if(str[i] == x) pq.push(i);
		else if(str[i] == y){
			res += cot;
			while(pq.size() && i - pq.front() + 1 >= a){
				cot ++;
				pq.pop();
				res ++;
			}
			
		} 
	}
	cout << res << endl;
	
	return 0;
}
```







## 个人感受

重温一下去年蓝桥杯省赛，依稀记得去年只做了一个C题，一些题用暴力骗分，填空题全军覆没

现在任感觉难度颇高，技术有待提高
