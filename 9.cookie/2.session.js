let http = require('http');
let querystring = require('querystring');
let uuid = require('uuid');
// 店的名字
let sessionId = 'lifadian'
// 存放用户和信息隐射表
let session = {

}

http.createServer(function(req, res) {
  if(req.url === '/lifa') {
    let cookies = querystring.parse(req.headers.cookie, '; ') || {};
    console.log(cookies)
    let username = cookies[sessionId];
    console.log(username)
    console.log(session)
    if(username && session[username]) {
      session[username].mny -=10;
      res.setHeader('Content-Type', 'text/html;charset=utf-8');
      res.end(`当前额度为${session[username].mny}`)
    } else {
      // 第一次来店里面，办卡
      let cardId = uuid.v4();
      res.setHeader('Set-Cookie', `${sessionId}=${cardId}; httpOnly=true`);
      session[cardId] = {
        mny: 100
      }
      res.setHeader('Content-Type', 'text/html;charset=utf-8');
      res.end(`当前额度为${session[cardId].mny}`)
    }
  }
}).listen(8080)

