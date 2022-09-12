const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

// 解决跨域问题
app.use(cors());

// 引入路由文件
require("./router/index.js")(app);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//404页面
app.use(function (req, res, next) {
  let error = new Error("not found");
  error.status = 404;
  next(error);
});

//出现错误处理-错误处理中间件
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
