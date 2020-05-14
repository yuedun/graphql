# graphql
graphql demo

# 安装依赖

> npm i

> npm install -g nodemon

或
> npm install --save-dev nodemon

# 启动服务

> npm start

# 操作
浏览器中访问：http://localhost:3000/会打开图形界面

## 查询
```
{
  hello
}
或
query {
  hello
}
```
## 修改
```
mutation {
  setMessage(message:"hello")
}
加别名
mutation {
  update: setMessage(message:"hello")
}
```