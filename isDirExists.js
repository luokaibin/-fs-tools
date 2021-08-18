const fs = require('fs');
const {resolve} = require('path');
const getCurrPath = require('./getCurrPath');
const isDirExists = (path) => {
  const splicPath = resolve(getCurrPath(), path);
  try {
    fs.statSync(splicPath);
    return true
  } catch (error) {
    return false
  }
}
module.exports = isDirExists;