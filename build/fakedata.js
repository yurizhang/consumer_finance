var express = require('express')
var app = express()

// 本地json-server服务器搭建代码
// 引入数据库文件

var apiRoutes = express.Router()
// 使用api的方法来创建连接时候的请求

apiRoutes.post('/common', function (req, res) {
  var appData = require('../static/data/common.json');
  res.json(appData);
})

apiRoutes.get('/common', function (req, res) {
  var appData = require('../static/data/common.json');
  res.json(appData);
})

apiRoutes.get('/index', function (req, res) {
  var appData = require('../static/data/_index.json');
  res.json(appData);
})
apiRoutes.get('/list', function (req, res) {
  var appData = require('../static/data/list.json');
  res.json(appData);
})
apiRoutes.get('/detail', function (req, res) {
  var appData = require('../static/data/detail.json');
  res.json(appData);
})

apiRoutes.get('/coupon', function (req, res) {
  var appData = require('../static/data/coupon.json');
  res.json(appData);
})

apiRoutes.get('/bankCardList', function (req, res) {
  var appData = require('../static/data/bankcardlist.json');
  res.json(appData);
})

apiRoutes.post('/bankCardAdd', function (req, res) {
  var appData = require('../static/data/common.json');
  res.json(appData);
})

apiRoutes.post('/bankCardDel', function (req, res) {
  var appData = require('../static/data/common.json');
  res.json(appData);
})

module.exports = apiRoutes;
// 调用api
//app.use('/api', apiRoutes);
//axios.post('/api/test2,{"abc":234}); 这样的形式调用
//dev-server.js里加载这个资源文件