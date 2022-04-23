HTTP

0.9
1.0
1.1 -
2 -
3
HTTP
HTTP2 -> HTTPS

TCP - UDP

URL uniform resource identifier 统一资源标识符

mongodb
file
smtp
ftp
http

ip whitelisting

https 443
http 80

GET -> 获取数据 -> Read
POST -> 数据添加 -> Create
PUT -> 更新数据，数据替换 -> Update
DELETE -> 删除数据 -> Delete
PATCH -> 更新数据，只更新部分数据

CRUD -> 增删改查

request:
METHOD PATH PROTOCOL
root

response:
PROTOCOL Status code(状态码)

https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Messages#http_%E8%AF%B7%E6%B1%82
报文

client [browser, server, cmd line]
server

preflight

x-custom-header

C - P - S
C - S
https://s.com
https://p.com/?url=https://s.com

204 no content
209 conflicts

序列化与反序列化

public api server
web server

api server

GET /books

无状态
A,B
B,A

rpc

Restful api 设计规范(建议)

1. versioning (版本)
   example.com/api/v1
   example.com/v1
   example.com/v2/books

2. url 里，尽量使用名词 noun，不要使用动词, 资源尽量使用复数形式
   GET /v1/books
   GET /v1/getBooks x

3. 保证 GET 不会对资源进行修改（污染）
   GET /v1/books (只读数据，而不做更新或添加)

4. url 推荐使用嵌套结构
   GET /posts/:postId/comments
   GET /posts/{postId}/comments
   GET /posts/post123/comments

5. 对返回的数据进行分页（注意返回的大小）
   1000 个数据
   把数据分层 100 页，每页 10 个
   GET /v1/books -> 10 个数据
   GET /v1/books?page=2&pageSize=100 -> 100 个数据

6. 使用正确的 status code 来表示返回的结果

7. 尽量返回人性化的文本信息（错误信息）
   {"error":"invalid password"}
   {"error": 1001} // error code

sequence diagram

monolith server
