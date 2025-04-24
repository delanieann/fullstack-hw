const http = require('http');
const port = process.env.PORT || 5001;

// http://localhost:5001/welcome should return a status code 200 with a welcome message of your choice in html format

// http://localhost:5001/redirect should redirect the request to '/redirected' by using 302 as the status code / the redirected page should return a redirected message of your choice

// http://localhost:5001/cache should return 'this resource was cached' in html format and set the cache max age to a day

// http://localhost:5001/cookie should return 'cookies… yummm' in plain text and set 'hello=world' as a cookie

// For other routes, such as http://localhost:5001/other, this exercise should return a status code 404 with '404 - page not found' in html format

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === "/") {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Node Routing Exercise');
    res.end();
  }

  // welcome
  else if (req.method === 'GET' && req.url === "/welcome") {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Welcome to the welcome route. ');
    res.end();
  }

  //redirect the request to '/redirected' by using 302 as the status code
  else if (req.method === 'GET' && req.url === '/redirect') {
    res.writeHead(302, {location: '/redirected'});
    res.end();
  }
  //redirected
  else if (req.method === 'GET' && req.url === '/redirected') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Redirected page. ');
    res.end();
  }
  //cache
  else if (req.method === 'GET' && req.url === '/cache') {
      res.writeHead(200, { 'Content-Type': 'text/html',
        'cache-control': 'max-age=86400',
      });
      res.write('This resource was cached. ');
      res.end();
  }
  //cookie
  else if (req.method === 'GET' && req.url === '/cookie') {
    res.writeHead(200, {
      'Content-Type': 'text/html', 
      'Set-Cookie': 'hello=world',
    });
    res.write('cookies... yummm');
    res.end();
  }
  //other status code 404 and custom 404 message for all other route
  else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h1>Oops! 404: Page not found. </h1>');
    res.end();
  }

});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
