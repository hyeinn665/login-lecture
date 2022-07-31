"use strict";

const home = (req, res) => {
    res.render("home/index");
};
// function home(req, res){
//     res.render("home/index");
// }

const login = (req, res) => {
    res.render("home/login");
};

module.exports = {
    home,
    login,
}; //원래는 key:value 구조이지만 key값만 입력하면 key:key로 인식