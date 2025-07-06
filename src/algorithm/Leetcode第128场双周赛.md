# Leetcode第128场双周赛

<div style="background: #f8f9fa; padding: 12px 16px; border-left: 3px solid #4CAF50; margin-bottom: 16px; border-radius: 0 4px 4px 0; font-size: 0.9rem">
    <div style="display: flex; align-items: center; gap: 30px; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">📅</span>
            <span>2024-05-01</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">✍️</span>
            <span>Jixer</span>
        </div>
    </div>
</div>
今日刷哔哩哔哩小羊肖恩大神10分钟都没到就AK了本场比赛，于是就想来试着做下

## 字符串的分数

求相邻字母的ASCALL码值之和

```c++
class Solution {
public:
    int scoreOfString(string s) {
        int res = 0;
        for(int i = 1; i < s.size(); i++){
            res += fabs(s[i] - s[i - 1]);
        }
        return res;
    }
};
```

## 覆盖所有点的最少矩形数目

一眼贪心，只用考虑横坐标

```c++\
class Solution {
public:
    int minRectanglesToCoverPoints(vector<vector<int>>& points, int w) {
        int cot = 0, res = 0;
        vector<int> v;
        for(int i = 0; i < points.size(); i++){
            v.push_back(points[i][0]);
        }
        int len = v.size();
        sort(v.begin(), v.end());
        cot = -1e9 - 10;
        for(int i = 0; i < len; i++){
            if(v[i] - cot > w){
                cot = v[i];
                res ++;
            }
        }
        return res;

    }
};
```

## 访问消失节点的最少时间

Djakarta模板题，这里提供两种做法，一种参考灵神的，一种是yxc模板的。

参考灵神做法

```c++
class Solution {
public:
    vector<int> minimumTime(int n, vector<vector<int>>& edges, vector<int>& disappear) {
        vector<vector<pair<int, int>>> g(n);
        for(int i = 0; i < edges.size(); i++){
            g[edges[i][0]].push_back({edges[i][1], edges[i][2]});
            g[edges[i][1]].push_back({edges[i][0], edges[i][2]});
        }

        vector<int> dis(n, 0x3f3f3f3f);
        vector<bool> st(n ,false);
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
        dis[0] = 0;
        pq.push({0, 0});
        while(!pq.empty()){
            auto [len, xx] = pq.top();
            pq.pop();
            if(st[xx]) continue;
            st[xx] = 1;
            for(auto [_ne, _w] : g[xx]){
                if(dis[_ne] > len + _w  && len + _w < disappear[_ne]){
                    dis[_ne] = len + _w;
                    pq.push({dis[_ne], _ne});
                }
            }
        }
        for(int i = 0; i < n; i++){
            if(dis[i] == 0x3f3f3f3f) dis[i] = -1;
        }
       
        return dis;
    }
};
```

yxc模板做法

```c++
const int N = 1e6 + 10;
class Solution {
public:
    int n[N], ne[N], w[N], h[N], dis[N], st[N], idx;
    void dj(vector<int>& disappear){
        memset(dis, 0x3f3f3f3f, sizeof dis);
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
        dis[0] = 0;
        pq.push({0, 0});
        while(pq.size()){
            auto top = pq.top();
            pq.pop();
            int yy = top.first, xx = top.second;
            if(st[xx]) continue;
            st[xx] = 1;
            for(int i = h[xx]; i != -1; i = ne[i]){
                int j = n[i];
                if(dis[j] > yy + w[i] && yy + w[i] < disappear[j]){
                    dis[j] = yy + w[i];
                    pq.push({dis[j], j});
                }
            }
        }
    }
    void add(int x, int y, int z){
        n[idx] = y, w[idx] = z, ne[idx] = h[x], h[x] = idx ++;
    }
    vector<int> minimumTime(int n, vector<vector<int>>& edges, vector<int>& disappear) {
        memset(h, -1, sizeof h);
        for(int i = 0; i < edges.size(); i++){
            add(edges[i][0], edges[i][1], edges[i][2]);
            add(edges[i][1], edges[i][0], edges[i][2]);
        }
        dj(disappear);
        vector<int> res;
        for(int i = 0; i < n; i ++){
            res.push_back((dis[i] ==  0x3f3f3f3f ? -1 : dis[i]));
        }
       
        return res;
    }
};
```

## 边界元素是最大值的子数组数目

这题只要想到单调栈就很好做啦

```c++
class Solution {
public:
    long long numberOfSubarrays(vector<int>& nums) {
        long long res = 0;
        int len = nums.size();
        stack<int> s;
        vector<int> v(len, 0);
        for(int i = 0; i < len; i++){
            v[i] ++;
            while(!s.empty() && nums[s.top()] < nums[i]){
                s.pop();
            }
            if(!s.empty() && nums[s.top()] == nums[i]){
                v[i] = v[s.top()] + 1;
            }
            res += v[i];
            s.push(i);
        }
        return res;
    }
};
```

