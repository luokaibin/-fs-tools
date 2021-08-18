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


exports = {
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