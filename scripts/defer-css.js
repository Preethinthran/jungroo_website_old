
const fs = require("fs");
const path = require("path");

const indexHtmlPath = path.resolve(__dirname, "../build/index.html");
let html = fs.readFileSync(indexHtmlPath, "utf8");

// Replace the regular stylesheet link with a deferred version
html = html.replace(
  /<link href="(\/static\/css\/main\.[^"]+\.css)" rel="stylesheet">/,
  `<link href="$1" rel="stylesheet" media="print" onload="this.media='all'">
<noscript><link rel="stylesheet" href="$1"></noscript>`
);

fs.writeFileSync(indexHtmlPath, html);
console.log("✅ CSS deferring applied successfully.");
