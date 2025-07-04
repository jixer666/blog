# 第十二届蓝桥杯 B 组省赛

## 空间

单位换算题

1比特 = 8位

256 * 1024 * 1024 / 4

## 卡片

模拟题

需要注意的的是答案是输出能够拼到多少，而不是拼完的那个数，所以需要答案 - 1

```c++
#include<bits/stdc++.h>
#define endl "\n"
using namespace std;
typedef long long ll;
typedef pair<int, int> PII;
const int N = 1e6 + 10, M = 1e9 + 10;
int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};
int a, b, x, y;

int main(){
	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);
	int n[10];
	for(int i = 0; i <= 9; i++){
		n[i] = 2021;
	}	
	int idx = 1;
	while(true){
		int c = idx, flag = 0;
		while(c){
			if(n[c % 10] == 0){
				cout << idx - 1 << endl;
				flag = 1;
				break;
			}
			n[c % 10] --;
			c /= 10;
		}
		if(flag){
			break;
		}
		idx ++;
	}
	
	return 0;
}
```

## 直线

模拟、数学题

需要注意直线的公式：y = kx + b

斜率：k = (y1 - y2) / (x1 - x2)

截距：b = (y1 * x2 - y2 * x1) / (x2 - x1)

```c++
#include<bits/stdc++.h>
#define endl "\n"
using namespace std;
typedef long long ll;
typedef pair<int, int> PII;
const int N = 1e6 + 10, M = 1e9 + 10;
int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};
int a, b, x, y;
map<pair<double, double>, int> mp;

int main(){
	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);
	int res = 0;
	for(int i = 0; i < 20; i++){
		res ++;
	}
	for(int i = 0; i < 21; i++){
		res ++;
	}
	
	for(int i = 0; i < 20; i++){
		for(int j = 0; j < 21; j++){
			for(int x = i + 1; x < 20; x++){
				for(int y = 0; y < 21; y++){
					if(i != x && j != y){
						double num = (j - y) * 1.0 / (i - x);	
						double val = (i * y - j * x) * 1.0 / (i - x);
						if(mp.find({num, val}) == mp.end()){
							mp[{num, val}] = 1;
							res ++;
						}
					}
				}
			}
		}
	}
	cout << res << endl;
	return 0;
}
```

## 货物摆放

枚举、数学知识**因数**题

找出2021041820210418所有的因数，从因数中找出满足条件的即可，极大的缩减了遍历范围

```c++
#include<bits/stdc++.h>
#define endl "\n"
using namespace std;
typedef long long ll;
typedef pair<int, int> PII;
const int N = 1e6 + 10, M = 1e9 + 10;
int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};
int a, b, x, y;
map<pair<ll, ll>, ll> map;

int main(){
	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);
	 vector<ll> v;
    
    ll a = 2021041820210418;
    ll res = 0;
    
    for(ll i = 1; i * i <= a; i++){
        if(a % i == 0) {
            v.push_back(i);    
            if(i * i != a){
                v.push_back(a / i);
            }
        }
    }
    
    for(ll i = 0; i < v.size(); i++){
        for(ll j = 0; j < v.size(); j++){
            for(ll m = 0; m < v.size(); m++){    
                if(v[i] * v[j] * v[m] == a) res++;
            }
        }
        
    }
    cout << res;
	return 0;
}
```

## 路径

图论、数学知识题

迪杰斯特拉模板题，最小公倍数模板

```c++
#include<bits/stdc++.h>
#define endl "\n"
using namespace std;
typedef long long ll;
typedef pair<int, int> PII;
const int N = 1e6 + 10, M = 1e9 + 10;
int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};
int a, b, x, y;
map<pair<ll, ll>, ll> map;
int w[N], idx, h[N], ne[N], e[N], dis[N], st[N];

void add(int x, int y, int z){
	e[idx] = y, w[idx] = z, ne[idx] = h[x], h[x] = idx ++;
}

int fun1(int x, int y){
	return y == 0 ? x : fun1(y, x % y);
}

int fun2(int x, int y){
	return x / fun1(x, y) * y;	
}

int dj(){
	memset(dis, 0x3f3f3f3f, sizeof dis);
	priority_queue<PII, vector<PII>, greater<PII>> pq;
	pq.push({1, 0});
	while(!pq.empty()){
		auto top = pq.top();
		pq.pop();
		int x = top.first, y = top.second;
		if(st[x]) continue;
		st[x] = 1;
		for(int i = h[x]; i != -1; i = ne[i]){
			int j = e[i];
			if(dis[j] > y + w[i]){
				dis[j] = y + w[i];
				pq.push({j, dis[j]});
			}
		}
	}
	if(dis[2021] == 0x3f3f3f3f) return -1;
    return dis[2021];
}

int main(){
	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);
	memset(h, -1, sizeof h);

	for(int i = 1; i <= 2021; i++){
		for(int j = i + 1; j <= 2021; j++){
			if(j - i <= 21){
				int c = fun2(i, j);
				add(i, j, c);
				add(j, i, c);	
			} else {
				break;
			}
		}
	} 
	cout << dj();
	
	return 0;
}
```

## 时间显示

单位换算题

```c++
#include<bits/stdc++.h>
#define endl "\n"
using namespace std;
typedef long long ll;
typedef pair<int, int> PII;
const int N = 1e6 + 10, M = 1e9 + 10;
int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};
int a, b, x, y;

int main(){
	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);
	ll num;
	cin >> num;
	int dv = 1000 * 3600 * 24;
	num = num % dv;
	int sv = num / 1000;
	int h = sv / 3600;
	int m = sv % 3600 / 60;
	int s = sv % 3600 % 60;
	printf("%02d:%02d:%02d\n", h, m, s);
	
	return 0;
}
```

## 砝码称重

set模拟DFS遍历，巧解此题

正解为动态规划

```c++
#include<bits/stdc++.h>
#define endl "\n"
using namespace std;
typedef long long ll;
typedef pair<int, int> PII;
const int N = 1e6 + 10, M = 1e9 + 10;
int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};
int a, b, x, y;

int main(){
	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);
	cin >> a;
	vector<int> v(a);
	set<int> s;
	for(int i = 0; i < a; i++) cin >> v[i];
	for(int i = 0; i < a; i++){
		set<int> ss;
		for(int j: s){
			ss.insert(j + v[i]);
			if(j - v[i] > 0) ss.insert(j - v[i]);
			if(v[i] - j > 0) ss.insert(v[i] - j);
		}
		for(int j: ss){
			s.insert(j);	
		}
		s.insert(v[i]);
	}
	cout << s.size() << endl;

	return 0;
}
```

## 杨辉三角形

技巧、二分题

暴力能够 40% 的分数

```c++
#include<bits/stdc++.h>
#define endl "\n"
using namespace std;
typedef long long ll;
typedef pair<int, int> PII;
const int N = 1e6 + 10, M = 1e9 + 10;
int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};
int a, b, x, y;

map<PII, int> mp; 
map<int, int> smp;

int main(){
	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);
	cin >> a;
	if(a == 1){
		cout << 1 << endl;
		return 0;
	}
	mp[{1, 1}] = 1;
	int flag = 0;
	ll res = 1;
	for(int i = 2; ;i++){
		for(int j = 1; j <= i;j ++){
			int cot;
			if(j == 1){
				cot = 1; 
			} else {
				cot = mp[{i - 1, j}] + mp[{i - 1, j - 1}];
			}
			res ++;
			mp[{i, j}] = cot;
			if(cot == a && smp.find(cot) == smp.end()){
				flag = 1;
				cout << res << endl;
				break;
			}
		}
		if(flag){
			break;
		}
	}

	return 0;
}
```

## 双向排序

sort暴力能够 60% 题

```c++
#include<bits/stdc++.h>
#define endl "\n"
using namespace std;
typedef long long ll;
typedef pair<int, int> PII;
const int N = 1e6 + 10, M = 1e9 + 10;
int ix[4] = {1,-1,0,0}, iy[4] = {0,0,1,-1};
int a, b, x, y;
int n[N];

int main(){
	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);
	
	cin >> a >> b;
	for(int i = 0; i < a; i++) n[i] = i + 1;
	while(b --){
		cin >> x >> y;
		if(x == 0){
			sort(n, n + y, greater<int>());
		} else {
			sort(n + y - 1, n + a);
		}

	}
	
	for(int i = 0; i < a; i++) cout << n[i] << " "; 
	return 0;
}
```