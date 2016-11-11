var http = require('http');
http.createServer(function(req,res){
	// res.writeHead(200,{'Content-Type':'text/plain'});
	// res.end('hello world\n');
     var path = req.url.replace(/\/?(?:\?.*)?$/,'').toLowerCase();
     switch(path){
     	case '':
	     	res.writeHead(200,{'Content-Type':'text/plain'});
	     	res.end('Homepage');
	     	break;

     	case '/about':
     	    res.writeHead(200,{'Content-Type':'text/plain'});
     	    res.end('About');
     	    break;
     	default:
     	    res.writeHead(404,{'Content-Type':'text/plain'});
     	    res.end('Not Found');
     	    break;
     }
}).listen(8080);
console.log('server running at http://127.0.0.1:8080,press Ctrl-c to terminate......');