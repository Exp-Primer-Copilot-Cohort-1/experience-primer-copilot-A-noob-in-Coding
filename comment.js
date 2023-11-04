// create web server
// create a web server
const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('mime');
const url = require('url');
const querystring = require('querystring');
const _ = require('underscore');
let comments = [
    {
        name: '张三',
        message: '今天天气不错',
        dateTime: '2018-12-12'
    },
    {
        name: '李四',
        message: '今天天气不错',
        dateTime: '2018-12-12'
    },
    {
        name: '王五',
        message: '今天天气不错',
        dateTime: '2018-12-12'
    },
    {
        name: '赵六',
        message: '今天天气不错',
        dateTime: '2018-12-12'
    },
    {
        name: '田七',
        message: '今天天气不错',
        dateTime: '2018-12-12'
    }
];
http.createServer((req, res) => {
    // parse url
    let urlObj = url.parse(req.url, true);
    // get path
    let pathname = urlObj.pathname;
    if (pathname === '/') {
        fs.readFile('./views/index.html', (err, data) => {
            if (err) {
                return res.end('404 Not Found');
            }
            let htmlStr = template.render(data.toString(), {
                comments: comments
            });
            res.end(htmlStr);
        });
    } else if (pathname.indexOf('/public/') === 0) {
        fs.readFile('.' + pathname, (err, data) => {
            if (err) {
                return res.end('404 Not Found');
            }
            res.setHeader('Content-Type', mime.getType(pathname));
            res.end(data);
        });
    } else if (pathname === '/post') {
        fs.readFile('./views/post.html', (err, data) => {
            if (err) {
                return res.end('404 Not Found');
            }
            res.end(data);
        });
    } else if (pathname === '/pinglun') {
        let comment = urlObj.query;
        comment.dateTime = '2019-12-12';
        comments.unshift(comment);
        res.statusCode =