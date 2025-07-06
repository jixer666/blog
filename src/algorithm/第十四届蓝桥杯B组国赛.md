# 第十四届蓝桥杯B组国赛

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
## 子2023

有两种方法，一种暴力枚举，一种动态规划

暴力枚举：需要等一两分钟

```c++
#include<bits/stdc++.h>
#define endl "\n"
using namespace std;
typedef long long ll;
typedef pair<int, int> PII;
const int N = 1e6 + 10, M = 1e9 + 10;
int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};
int a, b, x, y, z;

int main(){
	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);
	string str = "";
	for(int i = 1; i <= 2023; i++){
		string ss = to_string(i);
		for(int j = 0 ; j < ss.size(); j++){
			if(ss[j] == '2' || ss[j] == '0' || ss[j] == '3'){
				str += ss[j];
			}
		}
	} 
	int len = str.size();
	ll res = 0;
	for(int i = 0; i < len; i++){
		if(str[i] != '2') continue;
		for(int j = i + 1; j < len; j ++){
			if(str[j] != '0') continue;
			for(int z = j + 1; z < len; z ++){
				if(str[z] != '2') continue;
				for(int x = z + 1; x < len; x ++){
					if(str[x] != '3') continue;
					if(str[i] == '2' && str[j] == '0' && str[z] == '2' && str[x] == '3'){
						res ++;
					}
				}
			}
		}
	}
	cout << res << endl;
	
	return 0;
}
```

动态规划

```c++
#include<bits/stdc++.h>
#define endl "\n"
using namespace std;
typedef long long ll;
typedef pair<int, int> PII;
const int N = 1e6 + 10, M = 1e9 + 10;
int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};
int a, b, x, y, z;
ll dp[5];

int main(){
	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);
	string str = "";
	for(int i = 1; i <= 2023; i++){
		string ss = to_string(i);
		for(int j = 0 ; j < ss.size(); j++){
			if(ss[j] == '2' || ss[j] == '0' || ss[j] == '3'){
				str += ss[j];
			}
		}
	} 
	int len = str.size();
	for(int i = 0; i < len; i++){
		if(str[i] == '2'){
			dp[1] ++;
			dp[3] += dp[2]; 
		} else if(str[i] == '0'){
			dp[2] += dp[1];
		} else if(str[i] == '3'){
			dp[4] += dp[3]; 
		}
	}
	cout << dp[4] << endl;
	
	return 0;
}
```



## 班级活动

本题需要注意一下几点：

- 重复学生数量小于没有重复的数量
- 重复学生数量大于没有重复数量，且重复数量为偶数
- 重复学生数量大于没有重复数量，且重复数量为奇数

```c++
#include<bits/stdc++.h>a
#define endl "\n"
using namespace std;
typedef long long ll;
typedef pair<int, int> PII;
const int N = 1e6 + 10, M = 1e9 + 10;
int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};
int a, b, x, y, z;

int main(){
	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);
	cin >> a;
	unordered_map<int, int> ump;
	int idx = 0, idx2 = 0;
	for(int i = 0; i < a; i++){
		int num;
		cin >> num;
		ump[num] ++;
		if(ump[num] == 2){
			idx ++;
		} else if(ump[num] > 2){
			idx2 ++;
		}
	}
	int cc = a - idx * 2 - idx2;
	if(cc >= idx2){
		cout << idx2 + (cc - idx2) / 2 << endl;
	} else {
		cout << idx2 << endl;
	}
	
	return 0;
}
```

## 合并数列

双指针，一个指向A数组最左边，一个指向B数组最左边，同时向右移动。遇到一致的跳过，不一致的停下来只让该一个指针移动直到相同为止

```c++
#include<bits/stdc++.h>
#define endl "\n"
using namespace std;
typedef long long ll;
typedef pair<int, int> PII;
const int N = 1e6 + 10, M = 1e9 + 10;
int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};
int a, b, x, y, z;

int main(){
	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);
	cin >> a >> b;
	vector<int> v1(a), v2(b);
	for(int i = 0; i < a; i++){
		cin >> v1[i];
	}
	for(int i = 0; i < b; i++){
		cin >> v2[i];
	}
	int idx1 = 0, idx2 = 0, res = 0;
	while(idx1 < a){
		int num1 = v1[idx1], num2 = v2[idx2];
		while(num1 != num2){
			if(num1 > num2){
				idx2 ++;
				num2 += v2[idx2];
			} else {
				idx1 ++;
				num1 += v1[idx1];
			}
			res ++;
		}
		idx1 ++;
		idx2 ++;
	}
	cout << res << endl;
	
	
	return 0;
}
```

## AB路线

BFS模板题，注意以下测试数据

```
2 2 10
AA
AB
```
答案为10
这题需要标记 **走过且走的次数的点**，走过的点只要次数不一致还可以再次走，所以需要用到三维数组st来标记

```cpp
#include<bits/stdc++.h>
#define endl "\n"
using namespace std;
typedef long long ll;
typedef pair<int, int> PII;
const int N = 1e6 + 10, M = 1e9 + 10;
int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};
int a, b, x, y, z, res = -1;
char n[1010][1010];
int st[1010][1010][12];

struct p{
	int x, y, cot, cc;
};

void bfs(int k){
	
	queue<p> q;
	q.push({0, 0, 1, 0});
	st[0][0][1] = 1;
	while(!q.empty()){
		auto top = q.front();
		q.pop();
		int x = top.x, y = top.y, cot = top.cot, cc = top.cc;
		if(x == a - 1 && y == b - 1){
			res = cc;
			break;
		}
		for(int i = 0; i < 4; i++){
			int xx = x + ix[i], yy = y + iy[i];
			if(xx >= 0 && xx < a && yy >= 0 && yy < b){
				if(cot == k){
					if(n[x][y] == n[xx][yy] || st[xx][yy][1]) continue;
					st[xx][yy][1] = 1;
					q.push({xx, yy, 1, cc + 1});
				} else if(n[xx][yy] == n[x][y]){
					if(st[xx][yy][cot + 1]) continue;
					st[xx][yy][cot + 1] = 1;
					q.push({xx, yy, cot + 1, cc + 1});
				} 
			}
		}
	}	
	
}

int main(){
	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);
	cin >> a >> b >> x;
	for(int i = 0; i < a; i++){
		for(int j = 0; j < b; j++){
			cin >> n[i][j];
		}
	}
	bfs(x);
	cout << res << endl;	
	
	return 0;
}
```

## 抓娃娃

用前缀和的思想来做

根据给出的线段的两个点，求出中点，在求助中点数组的前缀和

注意：因为 l，r两个点相加除2后可能出现小数，所以这里需要变通一下改为乘2

```c++
#include<bits/stdc++.h>
#define endl "\n"
using namespace std;
typedef long long ll;
typedef pair<int, int> PII;
const int N = 2e6 + 10, M = 1e9 + 10;
int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};
int a, b, x, y, z;
int n[N];

int main(){
	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);
	cin >> a >> b;
	for(int i = 0; i < a; i++){
		cin >> x >> y;
		n[x + y] ++;
	}
	for(int i = 0; i <= N; i++){
		n[i] += n[i - 1];
	}
	for(int i = 0; i < b; i++){
		cin >> x >> y;
		cout << n[2 * y] - n[x * 2 - 1] << endl;
	}
	
	return 0;
} 
```



