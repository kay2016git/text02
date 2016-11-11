// var fs = require('fs')

// var data = fs.readFileSync('input.text')

// console.log(data.toString());
// console.log("程序执行结束")
// 2016年11月8日
// var fs = require('fs');

// var data = fs.readFile('input.text',function(err,data){
// 	if(err) return console.error(err);
// 		console.log(data.toString());
// })

// console.log("程序执行完毕")

var fs = require('fs')

var data = fs.readFile('home.html',function(err,data){
    if(err) return console.log(err.stack);
     console.log(data.toString());

})
console.log("process over")