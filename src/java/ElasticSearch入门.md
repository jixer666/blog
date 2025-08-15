# ElasticSearch 入门

<div style="background: #f8f9fa; padding: 12px 16px; border-left: 3px solid #4CAF50; margin-bottom: 16px; border-radius: 0 4px 4px 0; font-size: 0.9rem">
    <div style="display: flex; align-items: center; gap: 30px; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">📅</span>
            <span>2025-7-19</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #666;">✍️</span>
            <span>Jixer</span>
        </div>
    </div>
</div>

**你知道的，为了搜索**

## 基本概念

### 索引

名词：相当于 MySQL 中的数据库

动词：索引一个文档，相当于 MySQL 中的 INSERT 关键字

倒排索引：相当于 MySQL 中的 B+ 树索引结构

### 类型

相当于数据库中的表

### 文档

相当于数据库中的字段

###  相关性得分

相关性得分：即每个文档跟查询的匹配程度

执行命令会按照相关性得分进行降序排序

例如：

```json
{
   ...
   "hits": {
      "total":      2,
      "max_score":  0.16273327,
      "hits": [
         {
            ...
            "_score":         0.16273327,  // 相关性得分
            "_source": {
             ...
            }
         },
         {
            ...
            "_score":         0.016878016, 
            "_source": {
              ...
            }
         }
      ]
   }
}
```

## 基本命令

-  GET /_cat/nodes：查看所有节点
- GET /_cat/health：查看 ES 健康状况
- GET /_cat/master：查看主节点
- GET /_cat/indices：查看所有索引
- PUT /megacorp/employee/1：索引文档

  ```json
  {
      "first_name" : "John",
      "last_name" :  "Smith",
      "age" :        25,
      "about" :      "I love to go rock climbing",
      "interests": [ "sports", "music" ]
  }
  ```

  - megacorp：索引名词
  - employee：类型名词
  - 1：文档 ID

- GET /megacorp/employee/1：查询文档 ID 为1的员工
- GET /megacorp/employee/_search：查询索引 megacorp 下所有类型为 employee 的文档

  添加高级搜索条件：

  ```json
  {
      "query" : {
          "bool": {
              "must": {
                  "match" : {
                      "last_name" : "smith Alin"  // 搜索 last_name 中包含 smith 或 Alin 的文档
                  }
              },
              "filter": {
                  "range" : {
                      "age" : { "gt" : 30 } 
                  }
              }
          },
          "match_phrase" : {
              "about" : "rock climbing" // 短语搜索：搜索 last_name 中包含 rock climbing 的文档
          }
      },
       "highlight": {
          "fields" : {
              "about" : {} // 搜索结果中的 about 字段高亮
          }
      }
  }
  ```

## 深入搜索

### 精确搜索

单个值

```json
{
    "query" : {
    	"term" : { 
        	"age" : 25
        }
    }
}
```

多个值

```json
{
    "query" : {
    	"term" : { 
        	"age" : [25, 30]
        }
    }
}
```

### 多条件搜索

布尔过滤器：由下面三个部分组成 `should`、`must`、`must_not`

```json
{
  "query": {
    "bool": {
      "should": [ // 相当于 MySQL 查询的 OR 
        {"term": {"age": 25}}
      ],
      "must": [ // 相当于 MySQL 查询的 AND 
        {"match": {"first_name": "John"}}
      ],
      "must_not": [ // 相当于 MySQL 查询的 NOT 
        {"match": {"last_name": "John"}}
      ]
    }
  }
}
```

### 范围搜索

`range` 可供组合的选项如下：

- `gt`: `>` 大于
- `lt`: `<` 小于
- `gte`: `>=` 大于或等于
- `lte`: `<=` 小于或等于

```json
{
  "query": {
    "range": {
      "age": {
        "gte": 20,
        "lte": 25
      }
    }
  }
}
```

### 处理 NULL 值

不存在 NULL

```json
{
  "query": {
    "exists": {
      "field": "last_name"
    }
  }
}
```

存在 NULL

```json
{
  "query": {
    "missing": {
      "field": "last_name"
    }
  }
}
```

### 语句提升权重

自定义权重值

```json
{
  "query": {
    "bool": {
      "should": [
        {"term": {"age": {"value": 25, "boost": 2}}},
        {"term": {"age": {"value": 35, "boost": 3}}}
      ]
    }
  }
}
```

## 参考文章

https://www.elastic.co/guide/cn/elasticsearch/guide/current





