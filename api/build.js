const fs = require("fs-extra");
const childProcess = require("child_process");

try {
  // Remove current build
  fs.removeSync("./dist/");
  // Transpile the ES2015 into raw JS build
  const proc = childProcess.exec("npx babel src --out-dir dist");
  proc.on("close", (code) => {
    if (code !== 0) {
      throw Error("Build failed");
    }
  });
} catch (err) {
  console.log(err);
}
