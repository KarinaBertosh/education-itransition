const fs = require("fs");
const crypto = require("crypto");

const email = "cherrycake246@gmail.com";
const hashAll = [];

const folder = fs.readdir("files", (err, files) => {
  const buff = fs.readFileSync("index.js");
  files.forEach((f) => {
    const hash = crypto.createHash("sha3-256").update(f).digest("hex");
    hashAll.push(hash);
  });
  const handledHash = hashAll
    .sort((a, b) => a - b)
    .join("")
    .concat(email)
    .toLowerCase();
  console.log("ggg", handledHash);
  const result = crypto
    .createHash("sha3-256")
    .update(handledHash)
    .digest("hex");
  console.log(0, result);
});
