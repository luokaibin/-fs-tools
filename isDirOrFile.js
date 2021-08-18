const fs = require('fs');
const {resolve} = require('path');
const getCurrPath = require('./getCurrPath');
const isDirOrFile = (path) => {
  const splicPath = resolve(getCurrPath(), path);
  try {
    const stats = fs.statSync(splicPath);
    if (stats.isDirectory()) {
      return 'directory'
    }
    return 'file'
  } catch (error) {
    throw new Error(`找不到 ${path} 这个路径，检查的完整路径为 ${splicPath}`)
  }
}
module.exports = isDirOrFile;