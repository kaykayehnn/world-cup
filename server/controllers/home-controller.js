const path = require("path");
const fs = require("fs");

const production = process.env.NODE_ENV === "production";
const indexPath = path.join(
  require.resolve("@world-cup/client/package.json"),
  "../dist/index.html"
);

let cachedHtml;
let handler;

if (production) {
  handler = (req, res) => {
    if (cachedHtml !== undefined) return void res.end(cachedHtml);

    fs.readFile(indexPath, (err, data) => {
      if (err) {
        console.log(data);
        res.end(404 + "");
      }

      cachedHtml = data;
      res.end(cachedHtml);
    });
  };
} else {
  handler = (req, res) => {
    res.sendFile(indexPath);
  };
}

exports.index = handler;
