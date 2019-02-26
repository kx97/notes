## SQL - 结构化查询语句
> 对大小写不敏感 分为数据操作语言（DML）和数据定义语言（DDL）
### SELECT - 查询
`select 列名 from 表名`
> 多个列名用','分隔
### DISTINCT - 查询数据去重
`select distinct 列名 from 表名`
### WHERE - 查询满足条件的数据
`select 列名 from 表名 where 条件`
### AND & OR - 连接多个条件
`select 列名 from 表名 where 条件1 and/or 条件2`
### ORDER BY - 对查询到的结果进行排序
`select 列名 from 表名 order by 列名 desc/asc`
> desc - 降序排列，asc - 升序排列
### INSERT INTO - 向表格插入数据
`insert into 表名(列名) values(值) `
### UPDATE - 修改表中数据
`update 表名 set 列名 = 新值 where 列名 = 值`
### DELETE - 删除表的某行
`delete from 表名 where 列名 = 值`
### TOP 子句 - 规定查询记录的数量
`select top number|percent 列名 from 表名`
> MySQL语句 - select 列名 from 表名 limit number
> oracle语句 - select 列名 from 表名 where rownum <= number
### LIKE - 在where 子句中搜索列中的指定模式
`select 列名 from 表名 where 列名 like 条件`
> % - 通配符（模式中缺少的字母），NOT LIKE - 查找不满足条件的
### SQL 通配符 - 代替一个或多个字符
1. % - 匹配一个或多个字符
2. _ - 匹配一个字符
3. [charlist] - 字符列中的任意单一字符
4. [^charlist] 或 [!charlist] - 不在字符列中的任意单一字符
### IN 操作符 - 在where子句规定多个值
`select 列名 from 表名 where 列名 in (value1, value2)`
### BETWEEN - 取介于范围内的数据
`select 列名 from 表名 where 列名 between value1 and value2`
> NOT BETWEEN - 去介于范围外的数据
### Alias - 给表和列指定别的名称
`select 列名 from 表名 as 替代表名` 
`select 列名 as 替代列名 from 表名`
### join - 根据多个表中的列的关系，查询数据
`select 表名1.列名, 表名2.列名 from 表名1 inner join 表名2 on 表名1.主键 = 表名2.主键`
### UNION - 合并多个select查询的结果集
`select 列名 from 表名1 union select 列名 from 表名2`
> union会去掉相同的值，union all 不回去掉
### SELECT INTO - 用于创建表的备份
`select 列名 into 新表名 from 旧表名`
`select 列名 into 新表名 in 数据库 from 旧表名`
### CREATE DATABASE - 创建数据库
`create database 库名`
### CREATE TABLE - 创建表
```
create table 表名
(
  列名1 数据类型,
  列名2 数据类型,
  列名3 数据类型
)
```
#### 数据类型
1. 整数 - integer(size)、int(size)、smallint(size)、tinyint(size)
2. 小数 - decimal(size, d)、numeric(size, d)
3. 固定长度字符串 - char(size)
4. 可变长度字符串 - varchar(size)
5. 日期类型 - date(yyyymmdd)
#### SQL 约束
1. not null - 不为空约束
2. unique - 唯一键约束
3. primary key - 主键约束，只能有一个
4. foreign key - 外键约束
5. check - 限制列中值的范围
6. default - 默认约束
### CREATE INDEX - 在表中创建索引
`create index 索引名 on 表名(列名)`
> 索引用来加速查询和搜索
### DROP - 删除索引、表、数据库
`drop index 表名.索引名` 
> oracle - drop index 索引名
> MySQL - alter table 表名 drop index 
`drop table 表名`
`drop database 库名`
> 仅删除表中数据 - truncate table 表名
### ALTER TABLE - 在表中添加、修改、删除列
1. 添加列
`alter table 表名 add 列名 数据类型` 
2. 删除列
`alter table 表名 drop column 列名`
3. 修改列的数据类型
`alter table 表名 alter column 列名 数据类型`
### AUTO INCREMENT - 新数据插入生成唯一数字
`P_id int not null auto increment`
> 起始值是1，每次添加数据数值加1

#### 在oracle中要创建一个序列
```
create sequence 序列名
minvalue 1
start with 1
increment by 1
cache 10

insert into 表名 (列名) values (序列名.nextval)
```
> 以1起始，每次递增1，cache选项规定为了提高访问速度需要存储多少个序列