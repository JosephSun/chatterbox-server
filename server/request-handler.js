/*************************************************************

You should implement your request handler function in this file.

requestHandler is already getting passed to http.createServer()
in basic-server.js, but it won't work as is.

You'll have to figure out a way to export this function from
this file and include it in basic-server.js so that it actually works.

*Hint* Check out the node module documentation at http://nodejs.org/api/modules.html.

**************************************************************/
var results = [];
var exports = module.exports = {};
//URL FROM CHATTERBOX CLIENT: 'https://api.parse.com/1/classes/chatterbox',
var sendResponse = function(response, data,status){//Put this so we would not repeat ourselves. We would have repeated the body of this function multiple times in the if statements if we did not have this code
    response.writeHead(status, headers);//for the GET request we will need a data variable. We need a status variable as well for our writeHead Function. 
    response.end(JSON.stringify(response._data));


};


exports.requestHandler = function(request, response) {
  // Request and Response come from node's http module.
  //
  // They include information about both the incoming request, such as
  // headers and URL, and about the outgoing response, such as its status
  // and content.
  //
  var statusCode = 200;//default statusCode; meaning everything is okay. 

  if (request.method === "GET") {//if the server is recieving a GET request. That is to say that the user wants information. 
    sendResponse(response, "Hello World",statusCode);
  }else if (request.method === "POST") {//if the server is recieving a POST request. That is to say that the user is giving information to the server.
    sendResponse(response);
  }

  // response._data = {}; 
  // var returnObj = {}; 
 
  // if (request.url.slice(0,2) !== '/c'){
  //   var statusCode = 404; 
  // }else if (request.method === 'POST') {
  //   console.log("THIS IS A POST &&&&&&&&&&&&&&&&&&&&&%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
  //   console.log('request._postData', request._postData);
  //   var statusCode = 201; 
  //   if (request._postData !== undefined) {
  //     results.push(/*request._postData.username,*/ request._postData);
  //     console.log('THESE ARE THE RSULTS after IF', results);

  //   }
  // }else {
    
  // }
  // response._data['results'] = results; 
  // returnObj['results'] = results; 

  // Documentation for both request and response can be found in the HTTP section at
  // http://nodejs.org/documentation/api/
  // Do some basic logging.
  //
  // Adding more logging to your server can be an easy way to get passive
  // debugging help, but you should always be careful about leaving stray
  // console.logs in your code.
  console.log("Serving request type " + request.method + " for url " + request.url);

  // The outgoing status.

  // See the note below about CORS headers.
  var headers = exports.defaultCorsHeaders;
  // Tell the client we are sending them plain text.
  //
  // You will need to change this if you are sending something
  // other than plain text, like JSON or HTML.
  headers['Content-Type'] = 'application/json';

  // .writeHead() writes to the request line and headers of the response,
  // which includes the status and all headers.
  response.writeHead(statusCode, headers);
  // Make sure to always call response.end() - Node may not send
  // anything back to the client until you do. The string you pass to
  // response.end() will be the body of the response - i.e. what shows
  // up in the browser.
  //
  // Calling .end "flushes" the response's internal buffer, forcing
  // node to actually send all the data over to the client.
  // if (returnObj.results.length !== 0){
  //   response.end(JSON.stringify(returnObj[results]));
  // }else {
    
  // }
    response.end(JSON.stringify(response._data));

};
// exports.requestHandler(); 
// These headers will allow Cross-Origin Resource Sharing (CORS).
// This code allows this server to talk to websites that
// are on different domains, for instance, your chat client.
//
// Your chat client is running from a url like file://your/chat/client/index.html,
// which is considered a different domain.
//
// Another way to get around this restriction is to serve you chat
// client from this domain by setting up static file serving.
exports.defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};

