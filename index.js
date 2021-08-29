const getCurrPath = require('./getCurrPath');
const isDirExists = require('./isDirExists.js');
const isDirOrFile = require('./isDirOrFile');
const mkdir = require('./mkdir');
const delDirOrFile = require('./delDirOrFile');
const readDir = require('./readDir');
const readFile = require('./readFile');
const writeFile = require('./writeFile');
const readFileStream = require('./readFileStream');
const writeFileStream = require('./writeFileStream');
const copyDirOrFile = require('./copyDirOrFile');
// copyDirOrFile('/Users/luokaibin/Documents/toolNode/node', '/Users/luokaibin/Documents/toolNode/test', (content,filePath, fileName) => {
//   console.log(content.toString())
//   return content
// })
module.exports = {
  getCurrPath,
  isDirOrFile,
  isDirExists,
  mkdir,
  delDirOrFile,
  readDir,
  readFile,
  writeFile,
  readFileStream,
  writeFileStream,
  copyDirOrFile
}