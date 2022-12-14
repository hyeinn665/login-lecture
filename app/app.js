"use strict";

// var http = require('http');
// var app = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type":"text/html; charset=utf-8"});
//     if(req.url === '/'){
//         res.end("여기는 루트입니다.");
//     }else if(req.url === '/login'){
//         res.end("여기는 로그인 화면입니다.");
//     }
// });

// app.listen(3001, () => {
//     console.log("http로 가동된 서버입니다.");
// });



// 모듈
const express = require("express"); //express모듈 다운로드
const app = express(); //express실행

// 라우팅
const home = require("./src/routes/home");

// 웹 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`)); //정적경로 추가
//__dirname : 현재 파일의 위치 반환하는 것

app.use("/", home); // use -> 미들웨어를 등록해주는 메소드

module.exports = app;
