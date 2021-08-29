const fs = require('fs');
const {join, resolve} = require('path');
const getCurrPath = require('./getCurrPath');
const mkdir = require('./mkdir');

const writeFileStream = (path, content) => {
  const paths = path.split('/');
  paths.pop();
  mkdir(paths.join('/'));
  const writePath = resolve(getCurrPath(), path);
  
  try {
    fs.writeFileSync(writePath, content);
    return true
  } catch (error) {
    throw error
  }
}
module.exports = writeFileStream;
