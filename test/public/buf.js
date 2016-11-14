// var buf1 = new Buffer('www.baidu.com')
// var buf2 = new Buffer("百度网址:");

// var buf3 = Buffer.concat([buf2,buf1],256);

// console.log(buf3.toString());
 // var buf1 = new Buffer('你')

 // var buf2 = new Buffer('好')

 // var result = buf1.compare(buf2);

 // console.log(result)

 var buffer1= new Buffer('buffer')

 var buffer2 = buffer1.slice(0,2)

 console.log("buffer1:"+buffer1.toString()+"     buffer2:"+buffer2.toString())