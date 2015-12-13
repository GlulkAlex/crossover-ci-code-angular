var http = require('http');

var sys = require('sys');
var fs = require('fs');
var url = require('url');

http.createServer(function (request, response) {
  //response.writeHead(200, {'Content-Type': 'text/plain'});
  //response.end('Hello World\n');
  var url_parts = url.parse(request.url);
  var route_Path_Name = url_parts.pathname;
  
  if (route_Path_Name == '/') {
    sys.puts(route_Path_Name);
    
    fs.readFile(
      './index.html', 
      function(e, c) {
    		/*var data = {
    		    title: "Erdnodeflip document: " + doc.name,
    		    message: "Your Erdnusflip document was found!",
    		    items: doc.items,
    		};
    		var html = haml.render(c.toString(), {locals: data});*/
    		
		    response.writeHead(
		      200, 
		      //Content-type:text/html
		      {'Content-Type': 'text/html'});
        response.end(c);

    		//res.end(html);
    });    
    //response.writeHead(200, {'Content-Type': 'text/plain'});
    //response.end('route_Path_Name is: ' + route_Path_Name + '\n');
    
  } else if (route_Path_Name == '/data') {
    sys.puts(route_Path_Name);
    //Content-type:application/json
    fs.readFile(
      './data/changed_code_commit.json', 
      function(e, c) {
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(c);

    }); 
  //img -> Content-type:image/png  
  //views -> Content-type:text/html
  //Content-Type:text/javascript; charset=UTF-8
  //scripts -> Content-type:application/javascript
  //styles -> Content-type:text/css
  } else {
    sys.puts("oh dear, 404");
    //TypeError: Object #<Console> has no method 'debug'
    console.log('route_Path_Name is: ' + route_Path_Name );
    console.log('url_parts.slashes: ' + url_parts.slashes );
    console.log('url_parts.host: ' + url_parts.host );
    console.log('url_parts.port: ' + url_parts.port );
    console.log('url_parts.hostname: ' + url_parts.hostname );
    //TypeError: Property 'search' of object #<Url> is not a function
    console.log('url_parts.hash: ' + url_parts.hash );
    console.log('url_parts.search: ' + url_parts.search );
    console.log('url_parts.query: ' + url_parts.query );
    console.log('url_parts.path: ' + url_parts.path );
    //TypeError: Parameter 'url' must be a string, not undefined
    console.log('url_parts.parse: ' + url_parts.parse(route_Path_Name) );    
    //console.log('url_parts.parseHost: ' + url_parts.parseHost(url_parts.host) );
    /*
    url_parts.item is: protocol
    url_parts.item is: slashes
    url_parts.item is: auth
    url_parts.item is: host -> null
    url_parts.item is: port
    url_parts.item is: hostname
    url_parts.item is: hash
    url_parts.item is: search
    url_parts.item is: query
    url_parts.item is: pathname
    url_parts.item is: path
    url_parts.item is: href
    url_parts.item is: parse
    url_parts.item is: format
    url_parts.item is: resolve
    url_parts.item is: resolveObject
    url_parts.item is: parseHost -> undefined
    */
    /*for (var property in url_parts) {
      console.log('url_parts.item is: ' + property );
      //console.log('url_parts.item is: ' + property + ":" + url_parts[property]);
    }*/
    /*for (var item in url_parts.parse(route_Path_Name)) {
      console.log('url_parts.item is: ' + item );
      //console.log('url_parts.item is: ' + property + ":" + url_parts[property]);
    }*/
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('oh dear, 404 Not Found\n' + 
    'The requested page could not be found ' + 
    'but may be available again in the future\n');
  }
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');
/*
To run the server, 
put the code into a `file` 
called example.js and 
`execute` it 
with the `node` program:

> node example.js
>>>nodejs simple_server.js
Server running at http://127.0.0.1:8124/
*/