const fs = require('fs');
const {resolve} = require('path');
const getCurrPath = require('./getCurrPath');
const isDirOrFile = require('./isDirOrFile');

const readFile = (path) => {
  const readPath = resolve(getCurrPath(), path);
  const testRes = isDirOrFile(readPath);
  if (testRes === 'file') {
    return fs.readFileSync(readPath, {encoding: 'utf-8'}) 
  }
  throw new Error(`${path} 不是一个文件`)
}
module.exports = readFile;
