const http = require("http");
const port = 3000;

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-type": "text/html" });
  res.write("hallo node");
  res.end();
});
server.listen(port, function (error) {
  if (error) {
    console.log("srong", error);
  } else {
    console.log("cascasc" + port);
  }
});
