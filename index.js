// Http module

const http = require("http");

const path = require("path");

const fs = require("fs");

const app = http.createServer((req, res) => {
  // handle the request inside this function

  // Header
  //   res.writeHead(200, {
  //     "Content-Type": "text/html",
  //     // "Content-Type": "text/plaintext",
  //   });

  //   if (req.url === "/") {
  //     //asynchrously read the file
  //     fs.readFile(
  //       path.join(__dirname, "/public", "index.html"),
  //       "utf-8",
  //       (error, content) => {
  //         if (error) {
  //           // console.log("Error:", error);
  //           // return;
  //           throw error;
  //         }
  //         res.end(content);
  //       }
  //     );
  //   } else if (req.url === "/about") {
  //     fs.readFile(
  //       path.join(__dirname, "/public", "about.html"),
  //       "utf-8",
  //       (error, content) => {
  //         if (error) {
  //           // console.log("Error:", error);
  //           // return;
  //           throw error;
  //         }
  //         res.end(content);
  //       }
  //     );
  //   }

  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  let contentType = "tex/html";

  let ext = path.extname(filePath);

  if (!ext) {
    filePath += ".html";
  }

  switch (ext) {
    case ".css":
      contentType = "text/css";
      break;
    case ".js":
      contentType = "text/javascript";
      break;
    default:
      contentType = "text/html";
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end("Error!!");
    }
    res.writeHead(200, {
      "Content-type": contentType,
    });
    res.end(content);
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
