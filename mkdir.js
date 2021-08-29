const fs = require('fs');
const {resolve} = require('path');
const getCurrPath = require('./getCurrPath');

const mkdir = (path) => {
  const currPath = resolve(getCurrPath(),path)
  try {
    fs.mkdirSync(currPath, {recursive: true})
    return true;
  } catch (error) {
    throw error
  }
}
module.exports = mkdir;
