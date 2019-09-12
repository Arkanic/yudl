const express = require("express"),
  cors = require("cors"),
  ytdl = require("ytdl-core");

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());

app.listen(port, function(error) {
  if(error) {
    console.log("index.js has failed to execute");
  } else {
    console.log("Success! Listening on port *:" + port);
  }
});

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/index.html");
  console.log("sent index.html");
});

app.get("/global.css", function(request, response) {
  response.sendFile(__dirname + "/global.css");
  console.log("sent global.css");
});

app.get("/script.js", function(request, response) {
  response.sendFile(__dirname + "/script.js");
  console.log("sent script.js");
});

app.get("/download", function(request, response) {
  var url = request.query.URL;
  var type = request.query.TYPE;
  url = String(url);
  type = String(type);
  ytdl.getInfo(url, function(error, info) {
    response.header("Content-Disposition", "attachment; filename=" + info.title);
    console.log("request for download of " + url + " (" + info.title + "), format " + type);
  });

  ytdl(url, {
    format: type
  }).pipe(response);
});
