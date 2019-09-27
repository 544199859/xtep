const fs = require('fs');
const path = require('path');

const express = require('express');

// 本文件有后端程序猿 编写 给前端程序猿 提供服务
const app = express();

app.get('/product/user', function (req, res) {
    res.send([
        {phone:'1234',password:'1234'}
    ])
});

app.listen(5000);
