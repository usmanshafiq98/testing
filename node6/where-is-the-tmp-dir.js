const os = require("os");
// newer versions of Node >6 use os.tmpdir()
const temp = os.tmpDir();
console.log("Tmp dir is: " + temp);
console.log("Yay, I worked");
