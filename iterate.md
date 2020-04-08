# 迭代

* 完成博客站长博客，实现浏览，发布基本功能

* 实现账号系统,并加入评论功能

* 完成类似于clone,push的操作，并加入同步更新手动更新等内容

* ...

## stage1

### 接口设计

所有后端请求都以/api开头

get 请求：
`/api/allposts`:获取所有posts
`/api/post?id=xxx`:获取单个id为xxx的post

post 请求：
`/api/post`:创建一个新的post

put 请求：
`/api/post?id=xxx`:修改id为xxx的post

delete 请求：
`/api/post?id=xxx`:删除id为xxx的post

### 数据库设计

|post_id|post_content|post_title|post_date|post_userID|
|----|----|----|----|----|
|int|text|text|Date|int|
