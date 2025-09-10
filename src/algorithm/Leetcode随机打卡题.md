# Leetcode随机打卡题

<div style="background: #f8f9fa; padding: 12px 16px; border-left: 3px solid #4CAF50; margin-bottom: 16px; border-radius: 0 4px 4px 0; font-size: 0.9rem">
    <div style="display: flex; align-items: center; gap: 30px; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">📅</span>
            <span>2025-08-22</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">✍️</span>
            <span>Jixer</span>
        </div>
    </div>
</div>

## 3195. 包含所有 1 的最小矩形面积 I

分别找出 x、y 最大和最小的值，相乘就是最小面积

```java
class Solution {
    public int minimumArea(int[][] grid) {
        int maxxI = 0, minnI = 1010, maxxJ = 0, minnJ = 1010;
        for(int i = 0; i < grid.length; i++) {
            for(int j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == 1) {
                    minnI = Math.min(minnI, i);
                    maxxI = Math.max(maxxI, i);
                    minnJ = Math.min(minnJ, j);
                    maxxJ = Math.max(maxxJ, j);
                }
            }
        }
        return (maxxI - minnI + 1) * (maxxJ - minnJ + 1);
    }
}
```

## 498.对角线遍历

模拟遍历规律，从左上开始：

- 先向右一步，若达到边界就向下一步。再不断向左下移动直到边界
- 再向下一步，若达到边界就向右一步。再不断向右上移动直到边界

```java
class Solution {
	public int[] findDiagonalOrder(int[][] mat) {
		int len1 = mat.length, len2 = mat[0].length;
		int[] res = new int[len1 * len2];
		int x = 0, y = 0, flag = 1, i = 0;
		while (true) {
			res[i++] = mat[x][y];
            if (x == len1 - 1 && y == len2 - 1) {
				break;
			}
			if (flag % 2 == 1) {
				if (y < len2 - 1) {
					y ++;
				} else {
					x ++;
				}
				while (x < len1 - 1 && y >= 1) {
					res[i++] = mat[x][y];
					x ++;
					y --;
				}
			} else {
				if (x < len1 - 1) {
					x ++;
				} else {
					y ++;
				}
				while (x >= 1 && y < len2 - 1) {
					res[i++] = mat[x][y];
					x --;
					y ++;
				}
			}
			flag ++;
		}
		return res;
	}
}
```

## 3000. 对角线最长的矩形的面积

算出最大值，比较，替换值。若最大值相同，取最大面积

```java
class Solution {
    public int areaOfMaxDiagonal(int[][] dimensions) {
        int m1 = 0, m2 = 0;
		for (int[] dimension : dimensions) {
			int num = dimension[0] * dimension[0] + dimension[1] * dimension[1];
			if (m1 < num) {
				m1 = num;
				m2 = dimension[0] * dimension[1];
			}
			if (m1 == num) {
				m2 = Math.max(m2, dimension[0] * dimension[1]);
			}
		}
		return m2;
    }
}
```

## 1493. 删掉一个元素以后全为 1 的最长子数组

统计各个子数组中的1的数量，并删除相邻的两个元素中为0的这个元素组成新的数组，例如 1,1,0,0,1,0,1，改写为 2,0,1,1，最大的相邻两个元素的和就是答案

```java
class Solution {
    public int longestSubarray(int[] nums) {
        List<Integer> list = new ArrayList<>();
        int count = 0, remove = 1;
        for (int num : nums) {
            if (num == 1) {
                count ++;
            } else {
                list.add(count);
                count = 0;
                remove = 0;
            }
        }
        list.add(count);
        int maxx = list.get(0) - remove;
        for(int i = 1; i < list.size(); i++) {
            maxx = Math.max(maxx, list.get(i) + list.get(i - 1));
        }
        return maxx;
    }
}
```

## 3446. 按对角线进行矩阵排序

取出对角线的元素，排序后，重新对对角线的元素赋值

```java
class Solution {
    public int[][] sortMatrix(int[][] grid) {
        int i = 0, j = grid[0].length - 1, len1 = grid.length, len2 = grid[0].length;
        while (true) {
            int xx = i, yy = j, _x = i, _y = j;
            List<Integer> list = new ArrayList<>();
            while (xx < len1 && yy < len2) {
                list.add(grid[xx][yy]);
                xx ++;
                yy ++;
            }
            xx = i; yy = j;
            if (j != 0) {
                list.sort((a, b) -> a.compareTo(b));
                j --;
            } else if (i == 0) {
                list.sort((a, b) -> b.compareTo(a));
                i ++;
            } else {
                list.sort((a, b) -> b.compareTo(a));
                i ++;
            }
            int index = 0;
            while (xx < len1 && yy < len2 && index < list.size()) {
                grid[xx][yy] = list.get(index ++);
                xx ++;
                yy ++;
            }
            if (_x == len1 - 1 && _y == 0) {
                break;
            }
        }
        return grid;
    }
}
```

## 3021. Alice 和 Bob 玩鲜花游戏

找出规律，发现只要 n + m 为奇数都能满足，所以只有以下两种情况满足：

- n 为奇，m 为偶
- n 为偶，m 为奇

需要分别判断 n，m 的具体值来分别处理：答案 = n 里的奇数 * m 里的偶数 + n 里的偶数 * m 里的奇数

```java
class Solution {
    public long flowerGame(int n, int m) {
        if (n % 2 == 0) {
            if (m % 2 == 0) {
                return (1L * n * m) / 2;
            } else {
                return 1L * n / 2 * (m / 2 + 1) + ((n / 2) *(m / 2));
            }
        } else {
            if (m % 2 == 0) {
                return 1L * (n / 2 + 1) * (m / 2) + ((n / 2) * (m / 2));
            } else {
                return 1L * (n / 2 + 1) * (m / 2) + (n / 2) * (m / 2 + 1);
            }
        }
    }
}
```

## 1792. 最大平均通过率

设置 a，b 分别为两组数据，只要满足以下条件，a 增加的后的通过率才会大于 b 增加的后的通过率

```
(a[0] + 1) / (a[1] + 1) -  a[0] * 1.0 / a[1] > (b[0] + 1) * 1.0 / (b[1] + 1) / b[0] * 1.0 / b[1]
```

使用优先队列构建这个上诉条件即可

```java
class Solution {
    public double maxAverageRatio(int[][] classes, int extraStudents) {
        PriorityQueue<int[]> pq = new PriorityQueue<int[]>((a, b) -> {
            double a1  = (a[0] + 1) * 1.0 / (a[1] + 1);
            double a2  = a[0] * 1.0 / a[1];
            double b1  = (b[0] + 1) * 1.0 / (b[1] + 1);
            double b2  = b[0] * 1.0 / b[1];
            if (a1 - a2 == b1 - b2) {
                return 0;
            } else if (a1 - a2 > b1 - b2) {
                return -1;
            } else {
                return 1;
            }
        });
        for(int i = 0; i < classes.length; i++) {
            int[] aClass = classes[i];
            pq.offer(aClass);
        }
        for(int i = 0; i < extraStudents; i++) {
            int [] nums = pq.poll();
            pq.offer(new int[]{nums[0] + 1, nums[1] + 1});
        }
        double res = 0.0;
        for(int i = 0; i < classes.length; i++) {
            int[] nums = pq.poll();
            res += nums[0] * 1.0 / nums[1];
        }
        return res / classes.length;
    }
}
```

## 3025. 人员站位的方案数 I

先按照 x 升序排序，再按 y 降序排序

查看数据量较小，就考虑能用双 for 循环遍历，每轮遍历都要维护一个最大的 y，有且只有满足 `points[j][1] <= points[i][1] && maxy < points[j][1]` 条件的时候说明满足条件，这里特别说明当时没想明白的一个点：若 `maxy` 大于了 `points[i][1]` 其实对后面的数据并不会有影响，所以并不需要考虑大于的情况

```java
class Solution {
    public int numberOfPairs(int[][] points) {
        int res = 0;
        Arrays.sort(points, (a, b) -> a[0] == b[0] ? b[1] - a[1] : a[0] - b[0]);
        for(int i = 1; i < points.length; i++) {
            int maxy = 0;
            for(int j = i + 1; j < points.length; j ++) {
                if (points[j][1] <= points[i][1] && maxy < points[j][1]) {
                    res ++;
                    maxy = points[j][1];
                }
            }
        }
        return res;
    }
}
```

## 3516. 找到最近的人

判断两对人谁的距离最短，输出最短的那个人

```java
class Solution {
    public int findClosest(int x, int y, int z) {
        int flag = Math.abs(y - z) - Math.abs(x - z);
        return  flag == 0 ? 0 : (flag > 0 ? 1 : 2);
    }
}
```

## 1317. 将整数转换为两个无零整数的和

从1遍历到 n，判断两个数是否包含0

```java
class Solution {
    public int[] getNoZeroIntegers(int n) {
        for(int i = 1; i < n; i++) {
            int j = n - i;
            int _i = i, _j = j;
            boolean flag = false;
            while (_i != 0) {
                if (_i % 10 == 0) {
                    flag = true;
                    break;
                }
                _i /= 10;
            }
            if (flag) {
                continue;
            }
            while (_j != 0) {
                if (_j % 10 == 0) {
                    flag = true;
                    break;
                }
                _j /= 10;
            }
            if (flag) {
                continue;
            }
            return new int[]{i, j};
        }
        return new int[0];
    }
}
```
