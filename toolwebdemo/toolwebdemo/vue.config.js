const express = require('express')
const app = express()
var appData = require('./mock/token.json')
var seller = appData
var apiRoutes = express.Router()
app.use('/', apiRoutes)

module.exports = {
  devServer: {
    port:8080,  // 生产注释掉
    before(app){  // 生产注释掉
      // 虚拟报文
      app.get('/token.json', (req,res,next) => {
        res.json(appData);
      });
      app.post('/token.json', (req,res,next) => {
        res.json(appData);
      });
    },
    proxy: {
      '/': {
        //target: 'http://192.168.1.209:10751/', // Dev环境
        //  target: 'http://192.168.1.238:10751/', // Test环境
        // target: 'http://192.168.1.215:10751/', // Rls环境
        target: 'http://127.0.0.1:8080/', // 正式环境
        changeOrigin: true,
        autoRewrite: true,
        cookieDomainRewrite: true,
        pathRewrite: {
          '^/': '/'
        }
      }
    }
  }
  }