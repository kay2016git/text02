var mongodb = require('mongodb')

var server = mongodb.Server('localhost',27017,{safe:true})

var db  =  new mongodb.Db('dd',server,auto_reconnect:true)

db.open(function(err,db){
	if(!err)
		console.log('connect')
	else
		console.log(err)
})
console.log("prosess over")
