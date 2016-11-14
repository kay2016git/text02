// var express  = require("express")

// var app = express();
// app.set('port',process.env.PORT || 3030)

// app.use(function(req,res){
//  res.type('text/plain')
//  res.status(404)
//  res.send('404 - not found!')
// })
//   app.use(function(req,res){
//    res.type('text/plain')
//    res.status(500)
//    res.send('500 - server error')
//   })
//   app.listen(app.get('port'),function(){
//    console.log('express started on http://localhost:'+app.get('port'));
//   })
var express = require('express')
var app = express();
app.set('port',process.env.PORT || 3000)
var handlebars = require('express3-handlebars').create({
  defaultLayout: 'main'
});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
  res.render('home');
})
app.get('/about', function(req, res) {
  res.render('about');
})
app.use(function(req,res,next){
  res.status(404)
  res.render('404')
})
app.use(function(err,req,res,next){
  console.error(err.stack);
  res.status(500)
  res.render('500')
})
app.listen(app.get('port'),function(){
  console.log('server run at:'+ app.get('port'))
})
console.log('over')