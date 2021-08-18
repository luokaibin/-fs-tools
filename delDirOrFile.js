const fs = require('fs');
const {resolve} = require('path');
const getCurrPath = require('./getCurrPath');

const delDirOrFile = (path, isCurrDir = true) => {
  const delPath = resolve(getCurrPath(),path);
  if (!isCurrDir) {
    const files = fs.readdirSync(delPath);
    files.forEach(item => {
      fs.rmSync(resolve(delPath, item),{recursive: true, force: true, maxRetries: 5, retryDelay: 40});
    })
    return true
  }
  fs.rmSync(delPath,{recursive: true, force: true, maxRetries: 5, retryDelay: 40});
  return true
}
module.exports = delDirOrFile;
