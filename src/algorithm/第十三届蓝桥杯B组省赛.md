# 第十三届蓝桥杯B组省赛

<div style="background: #f8f9fa; padding: 12px 16px; border-left: 3px solid #4CAF50; margin-bottom: 16px; border-radius: 0 4px 4px 0; font-size: 0.9rem">
    <div style="display: flex; align-items: center; gap: 30px; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">📅</span>
            <span>2024-04-08</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">✍️</span>
            <span>Jixer</span>
        </div>
    </div>
</div>
## 九进制转十进制

进制转换题

2 + 2 * 9 + 2 * 9 * 9 + 2 * 9 *9 * 9

## 顺子日期

模拟、枚举题

```c++
#include<bits/stdc++.h>
#define endl "\n"
using namespace std;
typedef long long ll;
typedef pair<int, int> PII;
const int N = 1e6 + 10, M = 1e9 + 10;
int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};
int a, b; 
int n[13] = {0, 31, 28, 31,30,31,30,31,31,30,31,30,31};

bool fun(string kk){
	bool flag = 0;
	int idx = 1;
		for(int j = 1; j < kk.size(); j++){
			if(kk[j] - '0' == kk[j - 1] - '0' + 1 ){
				idx ++;
			}else {
				if(idx == 3) {
					flag = 1;
					break;
				}
				idx = 1;
			}
		}
    	// 注意没遍历完的也需要确认idx是否大于等于3
		return idx >= 3 ? true : flag;
}

int main(){
	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);
	int res = 0;
	for(int i = 1; i <= 12; i++){
		int num = 20220000 + i * 100, idx = 0, flag = 0;
		for(int j = 1; j <= n[i]; j++){
			int cot = num + j;
			string kk = to_string(cot);
			if(fun(kk)){
				res ++;
			}
		}
	}
	cout << res << endl;

	return 0;
}
```

## 刷题统计

模拟题，这题唯一需要注意的就是数据范围，需要long long类型

```c++
#include<bits/stdc++.h>
#define endl "\n"
using namespace std;
typedef long long ll;
typedef pair<int, int> PII;
const int N = 1e6 + 10, M = 1e9 + 10;
int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};

int main(){
	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);
	ll m, a, b;
	cin >> a >> b >> m;
	ll kk = a * 5 + 2 * b; 
	ll kk3 = m % kk;
	ll res = m / kk * 7;
	if(kk3 <= a * 5){
		res += (ll) ceil(kk3 * 1.0 / a);
	} else {
		res += 5 + (ll)ceil((kk3 - a * 5) * 1.0 / b);
	}
	cout << res << endl;
	return 0;
}
```

## 修剪灌木

思维题

```c++
#include<bits/stdc++.h>
#define endl "\n"
using namespace std;
typedef long long ll;
typedef pair<int, int> PII;
const int N = 1e6 + 10, M = 1e9 + 10;
int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};
int a, b; 

int main(){
	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);
	int x;
	cin >> x;
	for(int i = 1; i <= x; i++){
		cout << max(2 * (x - i), 2 * (i - 1)) << endl;
	}
	
	return 0;
}
```

## 统计子矩阵

前缀和、双指针题

思路：先求出二维数组的前缀和，用双循环遍历每个数，此时我们需要用另一个数来比较出当前范围的和。

我们可以发现若另一个数和遍历的数的范围和小于k，那么这个数的左边的数的范围和也是小于k的。于是就可以将另一个数设置在最右边，不断让这个数的列减少行增加来算出满足条件的个数，此时时间复杂度优化至O(n^3)，能过。

```c++
#include<bits/stdc++.h>
#define endl "\n"
using namespace std;
typedef long long ll;
typedef unsigned long long ull;
typedef pair<int, int> PII;
const int N = 1e6 + 10, M = 1e9 + 10;
int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};
int a, b, res = N;
int v[501][501], n[501][501];

int main(){
	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);
	ll k, res = 0;
	cin >> a >> b >> k;
	for(int i = 1; i <= a; i++){
		for(int j = 1; j <= b; j++){
			cin >> v[i][j];	
			v[i][j] = v[i-1][j] + v[i][j-1] - v[i-1][j-1] + v[i][j];
		}
	} 
	
	for(int i = 1; i <= a; i++){
		for(int j = 1; j <= b; j++){
			int r = b;
			for(int l = i; l <= a; l++){
				while(r >= j && v[l][r] - v[i - 1][r] - v[l][j - 1] + v[i - 1][j - 1] > k){
					r --;
				}
				if(j > r){
					break;
				}
				res += r - j + 1;
			}
		}
	} 
	cout << res << endl;	
}	
```

## 积木画

动态规划题

这题很难推出状态的转移方程

假设当前点为i，用v[i]表示当前满足的个数

- 若i-1全部铺满，则v[i] = v[i-1]
- 若i-1一个都没有铺，则v[i] = v[i - 2]
- 若i-1只铺满了一半，则v[i] = v[i - 3] * 2，同理也可以推出 v[i] = v[i - 4] * 2

于是：

v[i] = v[i - 1] + v[i - 2] + v[i - 3] * 2 + v[i - 4] * 2 + ... + 2 * v[1]

v[i - 1] = v[i - 2] + v[i - 3] + v[i - 4] * 2 + ... + 2 * v[1]

两式相减得出：**v[i] = v[i - 1] * 2 + v[i - 3]** 

```c++
#include<bits/stdc++.h>
#define endl "\n"
using namespace std;
typedef long long ll;
typedef unsigned long long ull;
typedef pair<int, int> PII;
const int N = 1e6 + 10, M = 1e9 + 10;
int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};
int a, b, res = N;

int main(){
	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);
	cin >> a;
	vector<int> v(a);
	v[1] = 1, v[2] = 2, v[3] = 5;  
	for(int i = 4; i <= a; i++){
		v[i] = (2 * v[i - 1] % 1000000007  + v[i - 3] % 1000000007) % 1000000007;
	}

	cout << v[a] << endl;
	
	return 0;
}	
```

## 扫雷

BFS 暴力法能过 40% 的样例

优化是在队列遍历的进行二分查找，~~我就不会了~~

```c++
#include<bits/stdc++.h>
#define endl "\n"
using namespace std;
typedef long long ll;
typedef unsigned long long ull;
typedef pair<int, int> PII;
const int N = 1e6 + 10, M = 1e9 + 10;
int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};
int a, b, res;
struct p{
	int x, y, num;
}n[N],v[N];
int flag[N];

int main(){
    ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);
    scanf("%d%d",&a, &b);
    queue<pair<int, int>> q;
    for(int i = 0; i < a; i++){
    	scanf("%lld%lld%lld",&n[i].x, &n[i].y, &n[i].num);
	}
	for(int i = 0; i < b; i++){
		scanf("%lld%lld%lld",&v[i].x, &v[i].y, &v[i].num);
		q.push({i, 1});	
	}
	while(!q.empty()){
		auto top = q.front();
		q.pop();
		int f = top.first, s = top.second;
		int xx, yy, rr;
		if(s == 1){
			xx = v[f].x, yy = v[f].y, rr = v[f].num;
		} else {
			xx = n[f].x, yy = n[f].y, rr = n[f].num;
		}
		for(int i = 0; i < a; i++){
			if(!flag[i] && (ll)(n[i].x - xx)*(n[i].x - xx) + (ll)(n[i].y - yy) * (n[i].y - yy) <= (ll)rr*rr){
				flag[i] = 1;
				q.push({i, 2});
				res ++;
			}
		}
		
		
	}
	printf("%d", res);
		
    return 0;
}
```



## 李白打酒加强版

记忆化搜索 + 剪枝

此题不难想到用DFS，可是只用用DFS的话注意题干条件：**由于答案很大，输出模1000000007**，这时候就需要用其他条件辅助

```c++
#include<bits/stdc++.h>
#define endl "\n"
using namespace std;
typedef long long ll;
typedef unsigned long long ull;
typedef pair<int, int> PII;
const int N = 1e6 + 10, M = 1e9 + 10;
int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};
int a, b;
long long res = 0;
ll n[101][101][101];
int mod = 1000000007;

int dfs(int x, int y, int num){
    // num + a - x >  b - y 剪枝，满足当前剩余的数加上需要相乘的数必须小于需要相减的数
    if(x > a || y > b || num < 0 || num + a - x > b - y){
        return 0;
    }
    if(x == a && y == b - 1 && num == 1){
        return 1;
    }
    if(n[x][y][num]){
    	return n[x][y][num];
	}
	if(num > 0){
		n[x][y][num] = (dfs(x + 1, y, num * 2) % mod + dfs(x, y + 1, num - 1) % mod) % mod;
	} else {
		n[x][y][num] = dfs(x + 1, y, num * 2) % mod;
	}
	return n[x][y][num];
}


int main(){
    ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);
    cin >> a >> b;
    cout << dfs(0, 0, 2) << endl;
    
    return 0;
}
```

