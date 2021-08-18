const fs = require('fs');
const {resolve} = require('path');
const getCurrPath = require('./getCurrPath');
const mkdir = require('./mkdir');

const writeFile = (path, text) => {
  const paths = path.split('/');
  const currPath = getCurrPath();
  paths.pop();
  mkdir(resolve(...paths));
  const writePath = resolve(currPath, path);
  
  try {
    fs.writeFileSync(writePath, text, {encoding: 'utf-8'});
    return true
  } catch (error) {
    throw error
  }
}
module.exports = writeFile;
