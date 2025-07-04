# Leetcode 热题100

<div style="background: #f8f9fa; padding: 12px 16px; border-left: 3px solid #4CAF50; margin-bottom: 16px; border-radius: 0 4px 4px 0; font-size: 0.9rem">
    <div style="display: flex; align-items: center; gap: 30px; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">📅</span>
            <span>2025-01-05</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">✍️</span>
            <span>Jixer</span>
        </div>
    </div>
</div>

文章用于记录复习 LeetCode 的每日刷题

## 哈希

### 两数之和

**2025.1.5**

```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> mp = new HashMap<Integer, Integer>();
        int[] result = new int[2];
        for(int i = 0; i < nums.length; i++) {
            if(mp.containsKey(target - nums[i])) {
                result[0] = mp.get(target - nums[i]);
                result[1] = i;
                return result;
            }
            mp.put(nums[i], i);
        }
        return result;
    }
}
```

### 字母异位词分组

**2025.1.5**

方法一：字符串排序，乱序后的字符串排序后一定是一样的

方法二：使用26位 `字符 + 出现次数` 的格式当作 key，比如 aaabbd 就为 a3b2c0d1....

```java
class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> list = new HashMap<>();
        for(int i = 0; i < strs.length; i++) {
            int[] cs = new int[26];
            StringBuffer tmpStr = new StringBuffer();
            for(int j = 0; j < strs[i].length(); j++) {
                cs[strs[i].charAt(j) - 'a'] ++;
            }
            for(int j = 0; j < 26; j++) {
                tmpStr.append((char)(cs[j] + 'a'));
                tmpStr.append(cs[j]);
            }

            List<String> tmpList = list.getOrDefault(tmpStr.toString(), new ArrayList<>());
            tmpList.add(strs[i]);
            list.put(tmpStr.toString(), tmpList);
            System.out.println(tmpStr.toString());
        }
        return new ArrayList<List<String>>(list.values());
    }
}
```

### 最长连续序列

**2024.1.5**

方法一：先排序，依次遍历，用一个变量 A，若当前元素 - 1是前一个元素，则 A++，否则 A = 1，求出最大的 A

方法二：找到首元素，从首元素开始遍历，找到末元素，能求出一个区间的长度，比较求最值即可

```java
class Solution {
    public int longestConsecutive(int[] nums) {
        int res = 0;
        Set<Integer> s = new HashSet<>();
        for(int i = 0; i < nums.length; i++) {
            s.add(nums[i]);
        }
        for(int cc: s) {
            if (s.contains(cc - 1)) {
                continue;
            }
            int temp = cc, idx = 0;
            while(s.contains(temp)) {
                temp ++;
                idx ++;
            }
            res = Math.max(res, idx);
        }
        return res;
    }
}
```

## 双指针

### 移动零

**2025.1.6**

方法：用两个指针 l，r，l 用于指向为0的数，r 用于指向为1的数，两个指针向后移动，找到满足条件的进行交换

```java
class Solution {
    public void moveZeroes(int[] nums) {
        int r = 0, temp = 0;
        for(int l = 0; l < nums.length; l++) {
            if(nums[l] != 0) {
                continue;
            }
            r = l;
            while (r < nums.length && nums[r] == 0){
                r++;
            }
            if (r == nums.length) {
                break;
            }
            temp = nums[l];
            nums[l] = nums[r];
            nums[r] = temp;
        }
    }
}
```

### 盛最多水的容器

**2025.1.6**

方法：用两个指针 l，，一个指向开头，一个指向末尾，两个向中间靠拢，期间不断维护最大值

```java
class Solution {
    public int maxArea(int[] height) {
        int l = 0, r = height.length - 1, res = 0;
        while (l < r) {
            res = Math.max(res, Math.min(height[l], height[r]) * (r - l));
            if(height[l] < height[r]) {
                l ++;
            } else {
                r --;
            }
        }
        return res;
    }
}
```

### 三数之和

**2025.1.6**

方法：先用指针 i 从前往后遍历，再用指针 l = i + 1, r = len - 1，循环进行判断：

- nums[i] + nums[i] + nums[i]  < 0，需要提高元素，l ++
- nums[i] + nums[i] + nums[i]  > 0，需要降低元素，r --
- nums[i] + nums[i] + nums[i] = 0，存入答案列表，l ++（r --也可以）

```java
class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        Map<String, Integer> mp = new HashMap<>();
        List<List<Integer>> result = new ArrayList<>();
        for (int i = 0; i < nums.length; i++) {
            int l = i + 1, r = nums.length - 1;
            while(l < r){
                if(nums[l] + nums[i] + nums[r] < 0) {
                    l ++;
                } else if(nums[l] + nums[i] + nums[r] > 0) {
                    r --;
                } else {
                    String str = String.valueOf(nums[i]) + String.valueOf(nums[l]) + String.valueOf(nums[r]);
                    if(!mp.containsKey(str)) {
                        result.add(Arrays.asList(nums[i], nums[l], nums[r]));
                        mp.put(str, 1);
                    }
                    l ++;
                }
            }
        }
        return result;
    }
}
```

## 矩阵

### 螺旋矩阵

**2025.1.14**

方法：封装四个方法，分别代表上方从左到右遍历，右方从上到下遍历，下方从右到左遍历，左方从下到上遍历，细节之处在于需要考虑边界值

```java
class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        List<Integer> result = new ArrayList<>();
        int idx = 0;
        while(idx < Math.ceil(matrix.length * 1.0 / 2)) {
            boolean f = fun1(idx, result, matrix);
            if (!f) {
                break;
            }
            f = fun2(idx, result, matrix);
            if (!f) {
                break;
            }
            f = fun3(idx, result, matrix);
            if (!f) {
                break;
            }
            f = fun4(idx, result, matrix);
            if (!f) {
                break;
            }
            idx++;
        }
        return result;
    }
    private boolean fun1(Integer idx, List<Integer> result, int[][] matrix) {
        boolean flag = false;
        for(int i  = idx; i < matrix[0].length - idx; i++) {
            result.add(matrix[idx][i]);
            flag = true;
        }
        return flag;
    }
    private boolean fun2(Integer idx, List<Integer> result, int[][] matrix) {
        boolean flag = false;
        for(int i  = idx + 1; i < matrix.length - idx; i++) {
            result.add(matrix[i][matrix[0].length - idx - 1]);
            flag = true;
        }
        return flag;
    }
    private boolean fun3(Integer idx, List<Integer> result, int[][] matrix) {
        boolean flag = false;
        for(int i  = matrix[0].length - idx - 1 - 1; i >= idx; i--) {
            result.add(matrix[matrix.length - idx - 1][i]);
            flag = true;
        }
        return flag;
    }
    private boolean fun4(Integer idx, List<Integer> result, int[][] matrix) {
        boolean flag = false;
        for(int i  = matrix.length - idx - 1 - 1; i >= idx + 1; i--) {
            result.add(matrix[i][idx]);
            flag = true;
        }
        return flag;
    }
}
```

## 链表

### 反转链表

**2025.1.9**

方法：使用一个临时的节点表示反转后的链表头，遍历节点（head 节点需要维持状态），交换节点

```java
class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode temp = null;
        while(head != null) {
            ListNode cc = head.next;  // 用于维持 head 节点状态
            head.next = temp; // 修改下一个节点的值为当前答案链表头
            temp = head; // 修改链表头为 head
            head = cc; // 维持 head 节点状态
        }
        return temp;
    }
}
```

### 合并 K 个升序链表

**2025.1.14**

方法：使用优先队列存放所有的链表节点，重写优先队列的比较方法，改为比较链表节点值，遍历队列，每次获取队列头并弹出，维护弹出的这个节点

```java
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        PriorityQueue<ListNode> pq = new PriorityQueue<>(new Comparator<ListNode>() {
            @Override
            public int compare(ListNode o1, ListNode o2) {
                return o1.val - o2.val;
            }
        });
        for(int i = 0; i < lists.length; i++) {
            if (lists[i] != null) {
                pq.offer(lists[i]);
            }
        }
        if(pq.isEmpty()) {
            return null;
        }
        ListNode result = new ListNode();
        ListNode temp = result;
        while(!pq.isEmpty()) {
            ListNode node = pq.poll();
            temp.val = node.val;
            node = node.next;
            if(node != null) {
                pq.offer(node);
            }
            if (pq.size() > 0) {
                temp.next = new ListNode();
                temp = temp.next;
            }
        }
        return result;
    }
}
```


## 动态规划

### 打架劫舍

**2025.1.9**

方法：用一个数组表示到当前下标为止的最大值

```java
class Solution {
    public int rob(int[] nums) {
        int res[] = new int[nums.length];
        for(int i = 0; i < nums.length; i++) {
            if (i == 0) {
                res[i] = nums[i];
            } else if (i == 1) {
                res[i] = Math.max(nums[i], nums[i - 1]);
            } else {
                res[i] = Math.max(nums[i] + res[i - 2], res[i - 1]);
            }
        }
        return res[nums.length - 1];
    }
}
```

同类问题：打架劫舍II

方法：用两次遍历，两个数组分别维护最值，一次不遍历最后一位，另一次不遍历第一位，求出两个数组的最大的最值

```java
class Solution {
    public int rob(int[] nums) {
        if (nums.length == 1){
            return nums[0];
        }
        int res[] = new int[nums.length], res2[] = new int[nums.length];
        for(int i = 0; i < nums.length - 1; i++) {
            if (i == 0) {
                res[i] = nums[i];
            } else if(i == 1){
                res[i] = Math.max(nums[i], nums[i - 1]);
            } else {
                res[i] = Math.max(nums[i] + res[i - 2], res[i - 1]);
            }
        }
        for(int i = 1; i < nums.length; i++) {
            if (i == 1) {
                res2[i] = nums[i];
            } else if(i == 2){
                res2[i] = Math.max(nums[i], nums[i - 1]);
            } else {
                res2[i] = Math.max(nums[i] + res2[i - 2], res2[i - 1]);
            }
        }
        return Math.max(res[nums.length - 2], res2[nums.length - 1]);
    }
}
```