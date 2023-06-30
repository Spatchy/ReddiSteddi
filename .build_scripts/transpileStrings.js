const fs = require("fs")
const path = require("path")
const jsStringEscape = require("js-string-escape")

const templatePath = "exportStringTemplate.js"
const rootDirectoryPath = "../build/src/"

const templateContent = fs.readFileSync(templatePath, "utf8")

console.log("The following raw files were transpiled to strings:")
// Recursively traverse directories and process .raw.js files
const traverseDirectory = (directoryPath) => {
  fs.readdirSync(directoryPath).forEach((filename) => {
    const filePath = path.join(directoryPath, filename)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      traverseDirectory(filePath)
    } else if (stat.isFile() && filename.endsWith(".raw.js")) {
      console.log("    " + filename)
      let fileContent = fs.readFileSync(filePath, "utf8")
      fileContent = jsStringEscape(fileContent)
      const modifiedContent = templateContent.replace("{{{STRINGIFIED_FILE_CONTENT}}}", fileContent)
      fs.writeFileSync(filePath, modifiedContent, "utf8")
    }
  })
}

traverseDirectory(rootDirectoryPath)