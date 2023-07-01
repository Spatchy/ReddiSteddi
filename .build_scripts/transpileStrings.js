const fs = require("fs")
const path = require("path")
const jsStringEscape = require("js-string-escape")

const templatePath = "exportStringTemplate.js"
const cssTemplatePath = "exportCssStringTemplate.js"
const rootDirectoryPath = "../build/src/"

console.log("The following raw files were transpiled to strings:")
// Recursively traverse directories and process .raw.js and .raw.css files
const traverseDirectory = (directoryPath) => {
  fs.readdirSync(directoryPath).forEach((filename) => {
    const filePath = path.join(directoryPath, filename)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      traverseDirectory(filePath)
    } else if (stat.isFile() && (filename.endsWith(".raw.js") || filename.endsWith(".raw.css"))) {
      console.log("    " + filename)
      let fileContent = fs.readFileSync(filePath, "utf8")
      const templateContent = fs.readFileSync(filename.endsWith(".raw.js") ? templatePath : cssTemplatePath, "utf8")
      fileContent = jsStringEscape(fileContent)
      const modifiedContent = templateContent.replace("{{{STRINGIFIED_FILE_CONTENT}}}", fileContent)
      fs.writeFileSync(filePath.replace(".raw.css", ".raw.css.js"), modifiedContent, "utf8")
    }
  })
}

traverseDirectory(rootDirectoryPath)