const fs = require("fs");
const crypto = require("crypto");

const email = "cherrycake246@gmail.com";
const hashAll = [];

const folder = fs.readdir("files", (err, files) => {
  files.forEach((f) => {
    let fileContent = fs.readFileSync(
      `E:/itransition/education-itransition/files/${f}`
    );
    const hash = crypto
      .createHash("sha3-256")
      .update(fileContent)
      .digest("hex");
    hashAll.push(hash);
  });
  const handledHash = hashAll
    .sort()
    .join("")
    .concat(email)
    .toLowerCase();
  const result = crypto
    .createHash("sha3-256")
    .update(handledHash)
    .digest("hex");
  console.log(0, result);
});
