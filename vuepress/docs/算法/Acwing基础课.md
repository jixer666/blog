# Acwing基础课

<div style="background: #f8f9fa; padding: 12px 16px; border-left: 3px solid #4CAF50; margin-bottom: 16px; border-radius: 0 4px 4px 0; font-size: 0.9rem">
    <div style="display: flex; align-items: center; gap: 30px; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">📅</span>
            <span>2024-01-16</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">✍️</span>
            <span>Jixer</span>
        </div>
    </div>
</div>
## 基础算法

### 快速排序

#### AcWing 785. 快速排序

```
#include <bits/stdc++.h>
using namespace std;

int main()
{
	vector<int> v;
    int a;
    cin >> a;
    for(int i = 0; i < a; i++){
        int m;
        cin >> m;
        v.push_back(m);
    }
    sort(v.begin(), v.end());
    for(int i = 0; i < a; i++){
        cout << v[i] << " ";
    }

  return 0;
}
```

#### 第k个数

```
#include <bits/stdc++.h>
using namespace std;

int main()
{
    vector<int> v;
    int a, b;
    cin >> a >> b;
    for(int i = 0; i < a; i++){
        int m;
        cin >> m;
        v.push_back(m);
    }
    sort(v.begin(), v.end());
    cout << v[b-1];

  return 0;
}
```

### 归并排序

#### AcWing 787. 归并排序

```
#include <bits/stdc++.h>
using namespace std;

int main()
{
	vector<int> v;
    int a;
    cin >> a;
    for(int i = 0; i < a; i++){
        int m;
        cin >> m;
        v.push_back(m);
    }
    sort(v.begin(), v.end());
    for(int i = 0; i < a; i++){
        cout << v[i] << " ";
    }

  return 0;
}
```

### 二分

可以直接用STL中的lower\_bound和upper\_bound

- lower\_bound(n, n+a, target)
- upper\_bound(n, n+a, target)

**举例**（转载：[博客链接](https://blog.csdn.net/qq_40160605/article/details/80150252)）

```
#include<bits/stdc++.h>
using namespace std;
const int maxn=100000+10;
const int INF=2*int(1e9)+10;
#define LL long long
int cmd(int a,int b){
	return a>b;
}
int main(){
	int num[6]={1,2,4,7,15,34}; 
	sort(num,num+6);                           //按从小到大排序 
	int pos1=lower_bound(num,num+6,7)-num;    //返回数组中第一个大于或等于被查数的值 
	int pos2=upper_bound(num,num+6,7)-num;    //返回数组中第一个大于被查数的值
	cout<<pos1<<" "<<num[pos1]<<endl;
	cout<<pos2<<" "<<num[pos2]<<endl;
	sort(num,num+6,cmd);                      //按从大到小排序
	int pos3=lower_bound(num,num+6,7,greater<int>())-num;  //返回数组中第一个小于或等于被查数的值 
	int pos4=upper_bound(num,num+6,7,greater<int>())-num;  //返回数组中第一个小于被查数的值 
	cout<<pos3<<" "<<num[pos3]<<endl;
	cout<<pos4<<" "<<num[pos4]<<endl;
	return 0;	
} 
```

#### AcWing 789. 数的范围

```
#include <bits/stdc++.h>
using namespace std;
int n[100010];
int a, b;

// 左边距
int get_l(int x){
    int l = 0, r = a - 1;
    while(l < r){
        int mid = (l + r ) / 2;
        if(n[mid] >= x) r = mid;
        else l = mid + 1;
    }
    return l;
}

// 右边距
 int get_r(int x){
    int l = 0, r = a - 1;
    while(l < r){
    	int mid = (l + r + 1) / 2;
        if(n[mid] <= x) l = mid;
        else r = mid - 1;
    }
    return r;
 }

int main(){
    
    cin >> a >> b;
    for(int i = 0; i < a; i++) cin >> n[i];
    for(int i = 0; i < b; i++){
        int m;
        cin >> m;
        int l = get_l(m);
        if(n[l] != m) cout << -1 << " " << -1 << endl;
		else {
			int r = get_r(m);
			if(n[r] != m) cout << -1 << " " << -1 << endl;
			else cout << l << " " << r << endl; 
		} 
    }
	
    return 0;
}
```

#### AcWing 790. 数的三次方根  

```
#include<bits/stdc++.h>

using namespace std;
typedef long long ll;
const int N = 1e5 + 10 ;

double getS(double x){
    return x * x * x;
}

double fun(double x){
    double l = -10000, r = 10000;
    while(l < r){
        double mid = (l + r) / 2;
        double res = getS(mid);
        if(fabs(res - x) < 0.0000000001){
        	return mid;
		}
        if(res <= x) l = mid;
        else r = mid;
    }
}

int main(){
    double a;
    cin >> a;
	printf("%.6lf", fun(a));
    
    return 0;
}
```

### 高精度

#### AcWing 791. 高精度加法

```
a = int(input())
b = int(input())
print(a + b)
```

#### AcWing 792. 高精度减法

```
a = int(input())
b = int(input())
print(a - b)
```

#### AcWing 793. 高精度乘法

```
a = int(input())
b = int(input())
print(a * b)
```

#### AcWing 794. 高精度除法

```
a = int(input())
b = int(input())
print(a // b)
print(a % b)
```

### 前缀和与差分

#### AcWing 795. 前缀和

```
#include<bits/stdc++.h>

using namespace std;
typedef long long ll;
const int N = 1e5 + 10 ;

int n[N], m[N];

int main(){
    
    int a, b;
    cin >> a >> b;
    for(int i = 1; i <= a; i++){
       cin >> n[i];
       m[i] = n[i] + m[i - 1];
    }
    
    while(b--){
        int x, y;
        cin >> x >> y;
        cout << m[y] - m[x - 1] << endl;
    }
    
    return 0;
}
```

#### AcWing 796. 子矩阵的和 

```
#include<bits/stdc++.h>

using namespace std;
typedef long long ll;
const int N = 1e5 + 10 ;

int n[1001][1001], m[1001][1001];

int main(){
    
    int a, b, c;
    cin >> a >> b >> c;
    for(int i = 1; i <= a; i++){
        for(int j = 1; j <= b; j++){
            cin >> n[i][j];
            m[i][j] = n[i][j] + m[i-1][j] + m[i][j-1] - m[i-1][j-1];
        }
    }
    while(c--){
        int q, w, e, r;
        cin >> q >> w >> e >> r;
        cout << m[e][r] + m[q-1][w-1] - m[q-1][r] - m[e][w-1] << endl;
    }
    

    return 0;
}
```

#### AcWing 797. 差分 

```
#include<bits/stdc++.h>

using namespace std;
typedef long long ll;
const int N = 1e5 + 10 ;

int n[N], m[N];

int main(){
   int a, b;
   cin >> a >> b;
   for(int i = 1; i <= a; i++){
       cin >> n[i];
       m[i] = n[i] - n[i-1];
   }
   while(b--){
       int x, y ,z;
       cin >> x >> y >> z;
       m[x] += z;
       m[y+1] -= z;
   }
   for(int i = 1; i <= a; i++){
       n[i] = m[i] + n[i-1];
       cout << n[i] << " ";
   }
   
   return 0;
}
```

#### AcWing 798. 差分矩阵

```
#include<bits/stdc++.h>

using namespace std;
typedef long long ll;
const int N = 1e5 + 10 ;

int n[1010][1010], m[1010][1010];

int main(){
  
   int a, b, c;
   cin >> a >> b >> c;
   for(int i = 1; i <= a; i++){
       for(int j = 1; j <= b; j++){
           cin >> n[i][j];
           m[i][j] = n[i][j] - n[i-1][j] - n[i][j-1] + n[i-1][j-1];
       }
   }
   while(c--){
       int q, w, e, r, t;
       cin >> q >> w >> e >> r >> t;
       m[q][w] += t;
       m[e+1][r+1] += t;
       m[e+1][w] -= t;
       m[q][r+1] -= t;
   }
  for(int i = 1; i <= a; i++){
      for(int j = 1; j <= b; j++){
          n[i][j] = n[i-1][j] + n[i][j-1] - n[i-1][j-1] + m[i][j];
          cout << n[i][j] << " ";
      }
      cout << endl;
  }
   
   return 0;
}
```

### 双指针算法

#### AcWing 799. 最长连续不重复子序列 

```
#include<bits/stdc++.h>

using namespace std;
typedef long long ll;
const int N = 1e5 + 10 ;

int n[N];

int main(){
    
    int a, l, r, res = 0;
    map<int, int> is;
    cin >> a;
    for(int i = 0, j = 0; i < a; i++){
        cin >> n[i];
        is[n[i]] ++;
        while(is[n[i]] > 1){
            is[n[j]] --;
            j ++;
        }
        res = max(res, i - j + 1);
    }
    cout << res << endl;
  
    return 0;
}
```

#### AcWing 800. 数组元素的目标和

哈希方法

```
#include<bits/stdc++.h>

using namespace std;
typedef long long ll;
const int N = 1e5 + 10 ;

int n[N], m[N];
unordered_map<int, int> ump;

int main(){
    
    int a, b, c, r1 = 0, r2 = 0;
    cin >> a >> b >> c;
    for(int i = 0; i < a; i++) {
        cin >> n[i];
        ump[n[i]] = i;
    }
    for(int j = 0; j < b; j++) {
        cin >> m[j];
        if(ump.count(c - m[j])){
            r1 = ump[c - m[j]], r2 = j;
        }
    }

    cout << r1 << " " << r2 << endl;
  
    return 0;
}
```

#### AcWing 2816. 判断子序列

```
#include<bits/stdc++.h>

using namespace std;
typedef long long ll;
const int N = 1e5 + 10 ;

int n[N], m[N];
unordered_map<int, int> ump;

int main(){
    
    int a, b;
    cin >> a >> b;
    for(int i = 0; i < a; i++) cin >> n[i];
    for(int j = 0; j < b; j++) cin >> m[j];
   
    int x = 0, y = 0;
    while(x < a && y < b){
        if(n[x] == m[y]) x ++;
        y ++;
    }
    
    if(x == a) cout << "Yes" << endl;
    else cout << "No" << endl;
  
    return 0;
}
```

### 位运算

#### AcWing 801. 二进制中1的个数

> 小知识：n的二进制表示中第k位是几？  
> 答案：n >> k & 1  
> n右移k位&1后得出二进制数的最后一位

```
#include<bits/stdc++.h>

using namespace std;
typedef long long ll;
const int N = 1e5 + 10 ;

// 返回x的最后一位1
// 比如10010的最后一位就是10
int lowbit(int x){
    return x & -x;    
}

int main(){
        
    int a, b, res;
    cin >> a;
    for(int i = 0; i < a; i++){
        cin >> b;
        res = 0;
        while(b){
            b -= lowbit(b);
            res ++;
        }
        cout << res << " ";
    }
        
    return 0;
}
```

### 离散化

#### AcWing 802. 区间和  

> 小知识  
> 离散化：将100，2000，30000，4000000映射为1，2，3，4的过程

```
#include<bits/stdc++.h>

using namespace std;
typedef long long ll;
// 此处不是1e5+10
// 极端情况下第一排输入会有1e5的数据，第二排会有2e5的数据
const int N = 3e5 + 10 ;

int s[N], f[N];

vector<int> v;
vector<pair<int, int> > q, w;
// 二分查找元素下标
int find(int x){
    int l = 0, r = v.size() - 1;
    while(l < r){
        int mid = l + r >> 1;
        if(v[mid] >= x) r = mid;
        else l = mid + 1;
    }
    return l + 1;
}

int main(){
    
    int a, b, m, n;
    cin >> a >> b;
    for(int i = 0; i < a; i++){
        cin >> m >> n;
        q.push_back({m, n});
        v.push_back(m);
    }
    for(int j = 0; j < b; j++){
        cin >> m >> n;
        w.push_back({m, n});
        v.push_back(m);
        v.push_back(n);
    }
    sort(v.begin(), v.end());
    // 去重
    v.erase(unique(v.begin(), v.end()), v.end());
    // 离散化处理
    for(auto i: q){
        int x = find(i.first);
        s[x] += i.second;
    }
    // 预处理前缀和
    for(int i = 1; i <= v.size(); i++){
        f[i] = f[i-1] + s[i];
    }
    // 查询结果
    for(auto i: w){
        int l = find(i.first), r = find(i.second);
        cout << f[r] - f[l-1] << endl;
    }
    
    return 0;
}
```

![图片描述](http://www.lijunxi.site:4000/api/file/download/6261dfbb-afd5-42b9-bcdf-46091f5b8e0f.jpg)

数据范围分析

### 区间合并

#### AcWing 803. 区间合并

```
#include<bits/stdc++.h>

using namespace std;
typedef long long ll;
const int N = 1e5 + 10 ; 

struct point{
    int x, y;
} n[N];

bool cmp(point a, point b){
    if(a.x == b.x) return a.y < b.y;
    return a.x < b.x;
}

int main(){
    
    int a, idx = 0;
    cin >> a;
    for(int i = 0; i < a; i++) cin >> n[i].x >> n[i].y;
    sort(n, n+a, cmp);
    int langm = n[0].y;
    for(int i = 1; i < a; i++){
        langm = max(langm, n[i-1].y);
        if(langm < n[i].x) idx++;
    }
    cout << idx + 1 << endl;
  
    return 0;
}
```

## 数据结构

### 单链表

#### AcWing 826. 单链表

数组模拟单链表

```
#include<bits/stdc++.h>

using namespace std;
typedef long long ll;
const int N = 1e5 + 10;

// 头指针（用下表指针辅助），下标指针
int hidx = -1, idx = 0;
// 元素值，元素下表
int n[N], ne[N];

void insert(int k, int x){
    // 新节点值赋值
    n[idx] = x;
    // 将新结点下一个结点赋值为插入位置的下一个结点
    ne[idx] = ne[k];
    // 将插入位置的一下个节点指向新节点
    ne[k] = idx;
    idx++;
}

void addHead(int x){
    // 头节点赋值
    n[idx] = x;
    // 指向头指针
    ne[idx] = hidx;
    // 更改头指针为当前下表
    hidx = idx;
    idx++;
}

void del(int idx){
    ne[idx] = ne[ne[idx]];   
}

int main(){
    
    int x, k, num; 
    char s;
    cin >> x;
    while(x--){
        cin >> s;
        if(s == 'H'){
            cin >> num;
            addHead(num);
        }
        else if(s == 'D'){
            cin >> k;
            //判断是否删除的为头节点
            if(!k) hidx = ne[hidx];  
            del(k-1);
        }
        else{
            cin >> k >> num;
            insert(k-1, num);
        }
    }
    while(hidx != -1){
        cout << n[hidx] << " ";
        hidx = ne[hidx];
    }
    
    return 0;
}
```

### 双链表

### 栈

#### AcAcWing 3302. 表达式求值

```
#include<bits/stdc++.h>

using namespace std;
typedef long long ll;
const int N = 1e5 + 10;

stack<int> s;
stack<char> f;
unordered_map<char, int> ump;

void init_map(){
	ump['*'] = 2;
	ump['/'] = 2;
	ump['+'] = 1;
	ump['-'] = 1;
}

void eval(){
	int num = 0;
	int x = s.top(); s.pop();
	int y = s.top(); s.pop();
	char op = f.top(); f.pop();
	if(op == '+') num = x + y;
	else if(op == '-') num = y - x;
	else if(op == '*') num = x * y;
	else num = y / x;
	s.push(num);
}

int main(){
    init_map();
    string str;
    int num, idx = 0;
    char c;
    cin >> str;
    int len = str.size();
    for(int i = 0; i < len; i++){
        if(str[i] >= '0' && str[i] <= '9'){
            idx = i;
            num = 0;
            while(str[idx] >= '0' && str[idx] <= '9' && idx < len){
                num = num * 10 + str[idx] - '0';
                idx++; 
            }
            s.push(num);
            i = idx - 1;
        }
        else if(str[i] == '(') f.push(str[i]);
        else if(str[i] == ')'){
       		while(f.size() && s.size() >= 2 && ump[str[i]] <= ump[f.top()] && f.top() != '(') eval();
       		f.pop();
        }
        else{
        	while(f.size() && s.size() >= 2 && ump[str[i]] <= ump[f.top()]) eval();
            f.push(str[i]);
        }
    }
    while(f.size()) eval();
	cout << s.top() << endl; 
    
    return 0;
}
```

### 队列

#### AcWing 829. 模拟队列

```
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
const int N = 1e5 + 10;
queue<int> q;

int main(){
    int a, num;
    string s;
    cin >> a;
    while(a--){
        cin >> s;
        if(s == "push"){
            cin >> num;
            q.push(num);
        }
        else if(s == "pop"){
            q.pop();
        }
        else if(s == "empty"){
            if(q.empty()) cout <<"YES"<<endl;
            else cout <<"NO" << endl;
        }
        else{
            cout << q.front() << endl;
        }
    }
   
    return 0;
}
```

### 单调栈

#### AcWing 830. 单调栈

```
#include<bits/stdc++.h>

using namespace std;
typedef long long ll;
const int N = 1e5 + 10 ;

stack<int> s;

int main(){
    
    int a, num;
    cin >> a;
    for(int i = 0; i < a; i++) {
        cin >> num;
        while(s.size() && s.top() >= num) s.pop();
        if(!s.size()) cout << -1 << " ";
        else cout << s.top() << " ";
        s.push(num);
    }
    
    return 0;
}
```

### 单调队列

#### AcWing 154. 滑动窗口

```
#include<iostream>
#include<algorithm>
#include<deque>
#include<vector>
using namespace std;
typedef long long ll;
const int N = 1e6 + 10 ;

// deque没法直接获取下表的元素值，所以需要用一个数组来维护 
int n[N];
deque<int> dq; 

int main(){
  
    int a, b, num;
    cin >> a >> b;
    for(int i = 1; i <= a; i++) cin >> n[i];
    for(int i = 1; i <= a; i++){
    	// 当尾元素比n[i]大时，需要弹出 
    	while(dq.size() && n[dq.back()] > n[i]) dq.pop_back();
    	dq.push_back(i);
    	// 当队列的个数满足b时们需要弹出首元素
		// 这里不能用dq.size()来判断是否满足个数，因为可能出现首元素到i之间有些元素已经弹出了但size总数任然小于b情况 
    	if(dq.size() && i - dq.front() >= b) dq.pop_front();
    	// 当i大于b时候就能开始输出了，这里也不能用dq.size()来判断，因为存在整个过程都小于b的情况，这样就没有输出了 
		if(i >= b) cout << n[dq.front()] << " ";
	}
	dq.clear();
	puts("");
      for(int i = 1; i <= a; i++){
    	while(dq.size() && n[dq.back()] < n[i]) dq.pop_back();
    	dq.push_back(i);
    	if(dq.size() && i - dq.front() >= b) dq.pop_front();
		if(i >= b) cout << n[dq.front()] << " ";
	}
    
    return 0;
}
```

### KMP

### Tire

#### AcWing 835. Trie字符串统计

> Trie树（字典树）：高效存储和查找字符串集合的数据结合

```
#include<iostream>
#include<algorithm>
#include<deque>
#include<vector>
using namespace std;
typedef long long ll;
const int N = 1e5 + 10 ;

// son[][]存储子节点的位置，分支最多26条
// cnt[]存储以某节点结尾的字符串个数（同时也起标记作用）
// idx表示当前要插入的节点是第几个,每创建一个节点值+1
int son[N][26], cnt[N], idx = 0;

void insert(string str){
	// 类似指针，指向当前节点
	int p = 0;
	for(int i = 0; i < str.size(); i++){
		int s = str[i] - 'a';
		// 该字符不存在就创建一个 
		if(!son[p][s]) son[p][s] = ++idx;
		// 	p指向下一个节点
		p = son[p][s];
	}
	// 统计字符串个数 
	cnt[p] ++;
} 

int query(string str){
	int p = 0;
	for(int i = 0; i < str.size(); i++){
		int s = str[i] - 'a';
		if(!son[p][s]) return 0;
		p = son[p][s]; 
	}
	return cnt[p];
}


int main(){
 
	int a;
	char c;
	string str;
	cin >> a;
	while(a--){
		cin >> c;
		cin >> str;
		if(c == 'I') insert(str);
		else cout << query(str) << endl;
	}
    
    return 0;
}
```

#### AcWing 143. 最大异或对  

```
#include<iostream>
#include<algorithm>
#include<deque>
#include<vector>
using namespace std;
typedef long long ll;
// 最多有1e5个数，每个数的二进制数有31位，极限情况下就1e5 * 31
const int N = 31e5 + 10 ;

int son[N][2], n[N], idx = 0;

// 将数字插入trie树中 
void insert(int x){
	int p = 0;
	// 数的范围为小于2e31次方 
	for(int i = 30; i >= 0; i --){
		int s = x >> i & 1;
		if(!son[p][s]) son[p][s] = ++idx;
		p = son[p][s];
	}
}

int query(int x){
	int p = 0, res = 0;
	for(int i = 30; i >= 0; i--){
		// x二进制第i位上的数 
		int s = x >> i & 1;
		// 若存在相反的数 
		if(son[p][!s]){
			p = son[p][!s];
			// 1左移i位就是2^(30-i)次方 
			res += 1 << i;
		}
		else{
			p = son[p][s];
			res += 0 << i;
		}
	}
	return res;
}


int main(){

	int a, res = 0;
	cin >> a;
	for(int i = 0; i < a; i++) {
		cin >> n[i];
		insert(n[i]);
	}
	for(int i = 0; i < a; i++) res = max(res, query(n[i]));
	cout << res << endl;
	
    return 0;
}
```

### 并查集

#### AcWing 836. 合并集合

```
#include<iostream>
#include<algorithm>

using namespace std;
typedef long long ll;
const int N = 1e5 + 10 ;
int n[N];

// 找到祖宗结点
int find(int x){
    // 修改结点，避免重复查找
   if(n[x] != x) n[x] = find(n[x]);
   return n[x];
}

int main(){
    int a, b;
    cin >> a >> b;
    for(int i = 0; i < a; i++) n[i] = i;
    for(int i = 0; i < b; i++){
        char x;
        int o, p;
        cin >> x >> o >> p;
        if(x == 'M'){
            n[find(o)] = find(p);
        }
        else{
            if(find(o) == find(p)) cout << "Yes" << endl;
            else cout << "No" << endl;
        }
    }
     
    return 0;
}
```

### 堆

> 堆：优先队列

#### AcWing 838. 堆排序

```
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
const int N = 1e5 + 10;
int n[N];
// 从小到大排序，从大到小就为less<int>，与sort相反
priority_queue<int, vector<int>, greater<int>> pq;
int main(){
    
    int a, b, num;
    cin>> a >> b;
    for(int i = 0; i < a; i++){
        cin >> num;
        pq.push(num);
    }
    int idx = 0;
    while(idx != b){
        idx ++;
        cout << pq.top() << " ";
        pq.pop();
    }
    
    return 0;
}
```

### 哈希表

## 搜索与图论

### DFS

#### AcWing 842. 排列数字 

```
#include<bits/stdc++.h>

using namespace std;
typedef long long ll;
const int N = 1e5 + 10;
    
int a;
int is[N];
vector<int> v;

void dfs(int x){
    if(x == 0) return; 
    if(v.size() == a){
    	for(int i = 0; i < a; i++) cout << v[i] << " ";
    	cout << endl;
	}
	for(int i = 1; i <= a; i++){
		if(!is[i]){
			is[i] = 1;
			v.push_back(i);
			dfs(i);
			v.pop_back();
			is[i] = 0;
		}
	}
}

int main(){
    cin >> a;
    dfs(a);
    return 0;
}
```

#### AcWing 843. n-皇后问题

```
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
const int N = 1e5 + 10;
    
int a;
char n[11][11];
int l[11], xie[11], fx[11];

void print(){
	for(int i = 1; i <= a; i++){
		for(int j = 1; j <= a; j++){
			cout << n[i][j];
		}
		puts("");
	}
	puts("");
} 

void dfs(int x){
	if(x == a + 1){
		print();
		return;
	}
    for(int i = 1; i <= a; i++){
    	// 	i - x + a是为了避免出现下标是负数的情况 
    	if(!l[i] && !xie[i - x + a] && !fx[i + x]){
    		n[x][i] = 'Q';
    		xie[i - x + a] = 1;
    		fx[i + x] = 1;
    		l[i] = 1;
    		dfs(x + 1);
    		n[x][i] = '.';
    		xie[i - x + a] = 0;
    		fx[i + x] = 0;
    		l[i] = 0;
		}
	
	}

}

int main(){
  	
	cin >> a;
	for(int i = 1; i <= a; i++){
		for(int j = 1; j <= a; j++){
			n[i][j] = '.';
		}
	}
    dfs(1);
    
    return 0;
}
```

### BFS

#### AcWing 844. 走迷宫 

```
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
const int N = 1e5 + 10;

int a, b;
int n[1010][1010], is[1001][1001];
int ix[4] = {1, -1, 0 ,0}, iy[4] = {0, 0, 1, -1};

void bfs(int x, int y){
    queue<pair<int, int>> q;
    map<pair<int, int>, int> mp;
    q.push({0, 0});
    mp[{0, 0}] = 0;
    while(!q.empty()){
    	auto top = q.front();
    	q.pop();
    	int xx = top.first, yy = top.second;
    	if(xx == a - 1 && yy == b - 1){
    		cout << mp[{xx, yy}] << endl;
    		return;
		}
		for(int i = 0; i < 4; i++){
			int x = xx + ix[i], y = yy + iy[i];
			if(!n[x][y] && !is[x][y] && x >= 0 && x < a && y >= 0 && y < b){
				is[x][y] = 1;
				q.push({x, y});
				mp[{x, y}] = mp[{xx, yy}] + 1;
			}
		}
	}
}

int main(){
  	
	cin >> a >> b;
	for(int i = 0; i < a; i++){
	    for(int j = 0; j < b; j++){
	        cin >> n[i][j];
	    }
	}
	bfs(0, 0);
    
    return 0;
}
```

### 树与图的深度优先遍历

#### AcWing 846. 树的重心

图的存储采用数组模拟邻接表

思路：邻接表dfs

```
#include<bits/stdc++.h>

using namespace std;
typedef long long ll;
const int N = 2e5 + 10;

// 邻接表头结点 
int h[N];
// 存储元素 
int e[N];
// 下个节点值
int ne[N];
// 结点是否访问过
int st[N]; 
// 单链表指针 
int idx = 0; 
int a, ans = N; 

void add(int x, int y){
	e[idx] = y, ne[idx] = h[x], h[x] = idx++;
}

int dfs(int x){
	int res = 0, sum = 1;
	st[x] = 1;	
	for(int i = h[x]; i != -1; i = ne[i]){
		int j = e[i];
		if(!st[j]){
			int s = dfs(j);
			// 子图最大结点数 
			res = max(res, s);
			// j为根的节点总数 
			sum += s;		
		}
	}
	// a - sum：另一部分的节点总数 
	res = max(res, a - sum);
	// 选取最小的最大结点数 
	ans = min(ans, res);
	return sum;
}


int main(){
  	//初始化h数组 -1表示尾节
	memset(h, -1, sizeof h); 
    cin.tie(0);cout.tie(0);ios::sync_with_stdio(false);
    cin >> a;
    // 创建邻接表 
    for(int i = 0; i < a - 1; i++){
    	int m, n;
    	cin >> m >> n;
    	add(m, n);
    	add(n, m);
	}
    dfs(1);
    cout << ans << endl;
    return 0;
}
```

### 树与图的广度优先遍历

#### AcWing 847. 图中点的层次

思路：邻接表bfs

```
#include<bits/stdc++.h>

using namespace std;
typedef long long ll;
const int N = 2e5 + 10;

// 邻接表头结点 
int h[N];
// 存储元素 
int e[N];
// 下个节点值
int ne[N];
// 结点是否访问过
int st[N]; 
// 单链表指针 
int idx = 0; 
int a, b, ans = N; 

void add(int x, int y){
	e[idx] = y, ne[idx] = h[x], h[x] = idx, idx ++;
}

void dfs(int x){
    queue<pair<int, int>> q;
    map<pair<int, int>, int> ump;
    q.push({1, 1});
    ump[{1, 1}] = 0;
    while(!q.empty()){
        auto top = q.front();
        q.pop();
        int xx = top.first, yy = top.second;
        if(yy == a){
        	cout << ump[{xx, yy}] << endl;
        	return;
		}
		for(int i = h[yy]; i != -1; i = ne[i]){
			if(ump.find({yy, e[i]}) == ump.end()){
				q.push({yy, e[i]});
				ump[{yy, e[i]}] = ump[{xx, yy}] + 1;
			}
		}
    }   
	cout << -1 << endl; 
 
}

int main(){
  	//初始化h数组 -1表示尾节
	memset(h, -1, sizeof h); 
    cin.tie(0);cout.tie(0);ios::sync_with_stdio(false);
    cin >> a >> b;
    // 创建邻接表 
    for(int i = 0; i < b; i++){
    	int m, n;
    	cin >> m >> n;
    	add(m, n);
	}
    dfs(1);

    return 0;
}
```

### 拓扑排序

#### AcWing 848. 有向图的拓扑序列

思路：邻接表找入度为0的结点

```
#include<bits/stdc++.h>

using namespace std;
typedef long long ll;
const int N = 1e5 + 10;

int h[N], e[N], ne[N], idx, a, b;
queue<int> q;
// 保存各个点的入度
int d[N]; 
// v存放答案
vector<int> v;

void add(int x, int y){
    e[idx] = y, ne[idx] = h[x], h[x] = idx++;
}

bool topsort(){
    // 找出入读为0的点
    for(int i = 1; i <= a; i++){
    	if(!d[i]) q.push(i); 
	}	
	while(q.size()){
		int top = q.front();
		q.pop();
		v.push_back(top);
		// 每次循环减去一条边
		for(int i = h[top]; i != -1; i = ne[i]){
			int j = e[i];
			d[j] --;
			// 当减去后的入读为0则入队列
			if(!d[j]) q.push(j);
		}
	}
	return v.size() == a;
}

int main(){
  	
  	memset(h, -1, sizeof h);
  	cin >> a >> b;
  	while(b--){
  	    int x, y;
  	    cin >> x >> y;
  	    add(x, y);
  	    d[y] ++;
  	}
  	if(topsort()){
  		for(int i = 0; i < v.size(); i++) cout << v[i] << " ";
	}
	else puts("-1");
  	
    return 0;
}
```

### Dijkstra

稠密图：临界矩阵（点较少）  
稀疏图：邻接表（点较多）

#### AcWing 849. Dijkstra求最短路 I

**朴素版（暴力）**

```
#include<bits/stdc++.h>

using namespace std;
typedef long long ll;
const int N = 1e5 + 10;
int m, n;
// 为稠密阵所以用邻接矩阵存储
int num[501][501];
// 用于记录每一个点距离第一个点的距离
int dis[N];
// 用于记录该点的最短距离是否已经确定
int st[N];

int dijkstra(){
	memset(dis, 0x3f3f3f3f, sizeof dis);
	dis[1] = 0;
	for(int i = 0; i < m; i++){
		int t = -1;
		// 找到没有确定最短路径的节点中距离源点最近的点t 
		for(int j = 1; j <= m; j++){
			if(!st[j] && (t == -1 || dis[t] > dis[j])){
				t = j;
			}
		}
		st[t] = 1;
		// 更新到其他点的距离 
		for(int k = 1; k <= m; k++){
			dis[k] = min(dis[k], dis[t] + num[t][k]);
		}
	}
	if(dis[m]==0x3f3f3f3f) return -1;
    return dis[m];
}

int main(){
	memset(num, 0x3f3f3f3f, sizeof num);
	cin >> m >> n;
	for(int i = 0; i < n; i++){
		int x, y, z;
		cin >> x >> y >> z;
		num[x][y] = min(num[x][y], z);
	}
  	cout << dijkstra() << endl;
    return 0;
}
```

#### AcWing 850. Dijkstra求最短路 II 

**临界表法**

```
#include<bits/stdc++.h>
 
using namespace std;
typedef long long ll;
const int N = 1e6 + 10;
typedef pair<int, int> PII;

int e[N], ne[N], idx, h[N], dis[N], st[N];
int w[N]; // 存放权重 
int a, b;

void add(int x, int y, int z){
	w[idx] = z, e[idx] = y, ne[idx] = h[x], h[x] = idx++;
}

int dj(){
	memset(dis, 0x3f3f3f3f, sizeof dis);
	priority_queue<PII, vector<PII>, greater<PII>> heap;
	// 插入距离和结点编号 
	heap.push({0, 1});
	while(!heap.empty()){
		auto top = heap.top();
		heap.pop();
		int x = top.second, y = top.first;
		if(st[x]) continue;
		st[x] = 1;
		// 遍历该节点的每个临界结点，给每个选出最短距离 
		for(int i = h[x]; i != -1; i = ne[i]){
			int j = e[i];
			if(dis[j] > dis[x] + w[i]){
				dis[j] = dis[x] + w[i];
				heap.push({dis[j], j});
			}
		}
	}
	if(dis[a] == 0x3f3f3f3f) return -1;
	return dis[a];
}

int main(){
	memset(h, -1, sizeof h);
	cin >> a >> b;
	while(b--){
		int x, y, z;
		cin >> x >> y >> z;
		add(x, y, z);
		add(y, x, z);
	}
	cout << dj() << endl;

    return 0;
}
```

### Floyd

与迪杰斯特拉的区别：

- 迪杰斯特拉算法适用于非负权，用于查找1到n 的最短距离，数据范围大
- 弗洛伊德算法适用于含有负权，用于查找每个点之间的最短距离，数据范围较少

#### AcWing 854. Floyd求最短路

```
#include<bits/stdc++.h> 
using namespace std;
typedef long long ll;
const int N = 1e6 + 10;
const int INF = 0x3f3f3f3f;
typedef pair<int, int> PII;

int n, m, k;
int e[201][201];

void floyd(){
	//  f[i, j, k]表示从i走到j的路径上除i和j点外只经过1到k的点的所有路径的最短距离。那么f[i, j, k] = min(f[i, j, k - 1), f[i, k, k - 1] + f[k, j, k - 1]。
    // 因此在计算第k层的f[i, j]的时候必须先将第k - 1层的所有状态计算出来，所以需要把k放在最外层。 
	for(int k = 1; k <= n; k++){
		for(int i = 1; i <= n; i++){
			for(int j = 1; j <= n; j++){
				e[i][j] = min(e[i][j], e[i][k] + e[k][j]);
			}
		}
	}
}


int main(){
	cin >> n >> m >> k; 
	for(int i = 1; i <= n; i++){
		for(int j = 1; j <= n; j++){
			if(i == j) e[i][j] = 0;
			else e[i][j] = INF;
		}
	}
	for(int i = 0; i < m; i++){
		int x, y, z;
		cin >> x >> y >> z;
		e[x][y] = min(e[x][y], z);
	}
	floyd();
	while(k--){
		int x, y;
		cin >> x >> y;
		// 不能e[x][y] == INF，原因是INF是一个确定的值，并非真正的无穷大，会随着其他数值而受到影响，t大于某个与INF相同数量级的数即可 
		if(e[x][y] > INF / 2) cout << "impossible"<<endl;
		else cout << e[x][y] <<endl;
	}
	return 0;
}
```

## 数学知识

### 质数

#### AcWing 867. 分解质因数

主要需要开方来避免超时

```
#include<bits/stdc++.h> 
using namespace std;
typedef long long ll;
const int N = 1e5 + 10;

int main(){
	
	int n, m;
	cin >> n;
	while(n--){
		cin >> m;
		int mm = m, flag = 0;
		for(int i = 2; i <= m / i; i++){
			int idx = 0;
			while(mm % i == 0){
				idx ++;
				mm /= i;
			}
			if(idx != 0){
			    flag = 1;
			    cout << i << " " << idx << endl;
			} 
		}
		if(flag){
	        if(mm != 1) cout << mm << " " << 1 << endl;
	        cout << endl;
		}
		else {
		    cout << m << " " << 1 << endl;
		    cout << endl;
		}
	}

	return 0;
}
```

#### AcWing 868. 筛质数

```
#include<bits/stdc++.h> 
using namespace std;
typedef long long ll;
const int N = 1e6 + 10;
int n[N], st[N], idx;

void init(){
	for(int i = 2; i <= N; i++){
		if(!st[i]) n[idx++] = i;
		for(int j = 0; n[j] <= N / i; j++){
			st[n[j] * i] = 1;
			if(i % n[j] == 0) break;
		}
	}
}


int main(){
	init();
	int a, res = 0;
	cin >> a;
	for(int i = 2; i <= a; i++){
		if(!st[i]){
			res ++;
		}
	}
	cout << res << endl;
	return 0;
}
```

### 约数

![图片描述](http://www.lijunxi.site:4000/api/file/download/bd17a18c-0c3c-475c-87f2-30830d333ee3.png)

#### AcWing 870. 约数个数

```
#include<bits/stdc++.h> 
using namespace std;
typedef long long ll;
const int N = 1e5 + 10, M = 1e9 + 7;

int main(){
	set<int> s;
	map<int, int> mp;
	ll a, b, res = 1;
	cin >> a;
	while(a--){
		cin >> b;
		int xx = b;
		for(int i = 2; i <= b / i; i++){
			while(xx % i == 0){
				xx /= i; 
				mp[i] ++;
			}
		}
                // x的最大公约数可能大于sqrt(x);
		if(xx > 1) mp[xx] ++;
	}
	for(auto i: mp){
		res = (res * (i.second + 1)) % M; 
	}
	cout << res << endl;

	return 0;
}
```

#### AcWing 871. 约数之和

```
#include<bits/stdc++.h> 
using namespace std;
typedef long long ll;
const int N = 1e5 + 10, M = 1e9 + 7;

int main(){
	map<ll, ll> mp;
	int a;
	ll res = 1;
	cin >> a;
	while(a--){
		int m;
		cin >> m;
		int c = m;
		for(int i = 2; i <= m / i; i++){
			ll cot = 0;
			while(c % i == 0){
				c /= i;
				mp[i] ++;
			}
		}
		if(c > 1) mp[c] ++;	
	}
	for(auto i: mp){
		ll x = i.first, y = i.second, cot1 = 1, cot2 = 1;
		while(y--){ 
			cot2 = cot2 * x % M;
			cot1 = (cot1 + cot2) % M;
		}
		res = (res * cot1) % M;
	}
	cout << res << endl;
	return 0;
}
```

#### AcWing 872. 最大公约数

```
#include<bits/stdc++.h> 
using namespace std;
typedef long long ll;
const int N = 1e5 + 10, M = 1e9 + 7;
// 最大公约数
ll fun1(int x, int y){
	return y ? fun1(y, x % y) : x;
}
// 最小公倍数
ll fun2(int x, int y){
	return x * fun1(x, y) / y;
}

int main(){
	
	int a;
	cin >> a;
	while(a--){
		int m, n;
		cin >> m >> n;
		cout << fun1(m, n) << endl;
	}


	return 0;
}
```

### 欧拉函数

> 1∼N 中与 N 互质的数的个数被称为欧拉函数，称为O(n)  
> 若N = p1^a\*p2^b\*p3^c\*.....  
> 则O(N) = N \* (p1-1)/p1 \* (p2-1)/p2 \* (p3-1)/p3 \*.....

#### AcWing 873. 欧拉函数

```
#include<bits/stdc++.h> 
using namespace std;
typedef long long ll;
const int N = 1e5 + 10, M = 1e9 + 7;

int main(){
	
	int a;
	cin >> a;
	while(a--){
		int m;
		cin >> m;
		ll res = m; 
		map<int, ll> mp;
		for(int i = 2; i <= m / i; i++){
			while(m % i == 0){
				m /= i;
				mp[i] ++;
			} 
		}
		if(m > 1) mp[m] ++;
		for(auto i: mp){
			int x = i.first;
			res = res * (x - 1) / x;
		} 
		cout << res << endl;
	}

	return 0;
}
```

### 组合数

#### AcWing 885. 求组合数 I

```
#include<bits/stdc++.h> 
using namespace std;
typedef long long ll;
const int N = 1e6 + 10, M = 1e9 + 7;

int e[2010][2010];

void init(){
    // 类似于DP
    // e[i][j]就代表的是Cij
	for(int i = 0; i < 2010; i++){
		for(int j = 0; j <= i; j++){
		    // Ci0为1
			if(!j) e[i][j] = 1;
			else e[i][j] = (e[i-1][j-1] + e[i-1][j]) % M;
		}
	}
} 

int main(){
	
	init(); 
	int a;
	cin >> a;
	while(a--){
		int m, n;
		cin >> m >> n;
		cout << e[m][n] << endl;
	}

	return 0;
}
```

### 容斥原理

#### AcWing 890. 能被整除的数

若给出的待求的数组都是互质

```c++
#include<bits/stdc++.h>

using namespace std;
typedef long long ll;
const int N = 1e5 + 10;
int v[20];
int main(){

    int a, b, res = 0;
    cin >> a >> b;
    for(int i = 0; i < b; i ++){
        cin >> v[i];
    }
    for(int i = 1; i < 1 << b; i ++){
        int cot = 0, t = 1;
        for(int j = 0; j < b; j ++){
            if(i >> j & 1){
                cot ++;
                if((ll) t * v[j] > a){
                    t = -1;
                    break;
                }
                t *= v[j];
            }
        }
        if(t != -1){
            if(cot % 2 == 0){
                res -= a / t;
            } else {
                res += a / t;
            }
        }
    }

    cout << res << endl;

    return 0;
}
```

否则，修改乘积为求最小公倍数

参考Leetcode：[单面值组合的第 K 小金额](https://leetcode.cn/problems/kth-smallest-amount-with-single-denomination-combination/)

```c++
class Solution {
public:
    int len;
    long long fun(long long x, vector<int>& v){
        long long res = 0;
        for(int i = 1; i < 1 << len; i++){
            long long cot = 0, t = 1;
            for(int j = 0; j < len; j++){
                if(i >> j & 1){
                    long long ccc = t / gcd(t, v[j]) * v[j]; //《-------------修改这里
                    if(ccc > x){
                        t = -1;
                        break;
                    }
                    cot ++;
                    t = ccc;
                }
            }
            if(t != -1){
                if(cot % 2 == 1) res += x / t;
                else res -= x / t;
            }
        }
        return res;
    }
    long long findKthSmallest(vector<int>& coins, int k) {
        len = coins.size();
        long long l = 1, r = 1e12;
        while(l < r){
            long long mid = (l + r) >> 1;
            if(fun(mid, coins) >= k) r = mid;
            else l = mid + 1;
        }

        return l;

    }
};
```



## 动态规划

### 记忆化搜索

#### AcWing 901. 滑雪

```
#include<bits/stdc++.h> 
using namespace std;
typedef long long ll;
const int N = 1e5 + 10;
int a, b;
int n[310][310], cot[310][310];
int ix[4] = {-1,0,1,0};
int iy[4] = {0,1,0,-1};

int dfs(int x, int y){
	if(cot[x][y] != -1) return cot[x][y];
	cot[x][y] = 1;
	for(int i = 0; i < 4; i++){
		int xx = ix[i] + x, yy = iy[i] + y;
		if(xx >= 1 && xx <= a && yy >= 1 && yy <= b && n[x][y] > n[xx][yy]){
			cot[x][y] = max(cot[x][y], dfs(xx, yy) + 1);
		}
	}
	return cot[x][y];
}


int main(){
    memset(cot, -1, sizeof cot);
	cin >> a >> b;
	for(int i = 1; i <= a; i++){
		for(int j = 1; j <= b; j++){
			cin >> n[i][j];
		}
	}
	int ans = 0;
	for(int i = 1; i <= a; i++){
		for(int j = 1; j <= b; j++){
			ans = max(ans, dfs(i, j));
		}
	}
	cout << ans << endl;
	
	return 0;
}
```

### 线性DP

#### AcWing 898. 数字三角形

```
#include<bits/stdc++.h> 
using namespace std;
typedef long long ll;
typedef pair<int, int> PII;
const int N = 510, M = 1e5 + 10;	
int n[N][N]; 
int cot[N][N];
int a;

int dfs(int x, int y){
	if(x < 1 || x > a || y < 1 || y > a) return 0;
	if(cot[x][y] != -1) return cot[x][y];
	int _1 = dfs(x + 1, y), _2 = dfs(x + 1, y + 1);
	cot[x][y] = max(_1, _2) + n[x][y]; 
	return cot[x][y]; 
}

int main(){
	memset(cot, -1, sizeof cot);
	cin >> a;
	for(int i = 1; i <= a; i++){
		for(int j = 1; j <= i; j++){
			cin >> n[i][j];	
		}
	}
	cout << dfs(1, 1) << endl;
	
	return 0;
}
```

#### AcWing 896. 最长上升子序列

```
#include<bits/stdc++.h> 
using namespace std;
typedef long long ll;
typedef pair<int, int> PII;
const int N = 1e5 + 10, M = 1e5 + 10;
int n[N];
int a;
vector<int> v; 

int main(){

	int a;
	cin >> a;
	for(int i = 0; i < a; i++) cin >> n[i];
	for(int i = 0; i < a; i++){
		if(v.empty() || n[i] > v.back()){
			v.push_back(n[i]);
		}
		else{
			*lower_bound(v.begin(), v.end(), n[i]) = n[i];
		}
	}
	cout << v.size() << endl;
	
	return 0;
}
```

#### AcWing 897. 最长公共子序列

```c++
#include<bits/stdc++.h> 
using namespace std;
typedef long long ll;
typedef pair<int, int> PII;
const int N = 1e5 + 10, M = 1e5 + 10;

char n1[N], n2[N];
// n[i][j]记录前i个n1和前j个n2的公共子串的最大长度
int n[1010][1010];
 
int main(){
	
	int a, b;
	cin >> a >> b >> n1 + 1 >> n2 + 1;
	for(int i = 1; i <= a; i++){
		for(int j = 1; j <= b; j++){
			if(n1[i] == n2[j]){
				n[i][j] = n[i-1][j-1] + 1;
			}
			else{
				n[i][j] = max(n[i-1][j], n[i][j-1]);
			}
		}
	}
		for(int i = 1; i <= a; i++){
		for(int j = 1; j <= b; j++){
			cout << n[i][j] << " ";
		}
		cout << endl;
	}
	
	cout << n[a][b] << endl;
	
	return 0;
}
```