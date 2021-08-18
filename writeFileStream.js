const fs = require('fs');
const {resolve} = require('path');
const getCurrPath = require('./getCurrPath');
const mkdir = require('./mkdir');

const writeFileStream = (path, content) => {
  const paths = path.split('/');
  const currPath = getCurrPath();
  paths.pop();
  mkdir(resolve(...paths));
  const writePath = resolve(currPath, path);
  
  try {
    fs.writeFileSync(writePath, content);
    return true
  } catch (error) {
    throw error
  }
}
module.exports = writeFileStream;
