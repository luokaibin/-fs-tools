const fs = require('fs');
const {resolve} = require('path');
const getCurrPath = require('./getCurrPath');

const mkdir = (path) => {
  const currPath = getCurrPath()
  try {
    fs.mkdirSync(resolve(currPath,path), {recursive: true})
    return true;
  } catch (error) {
    throw error
  }
}
module.exports = mkdir;
