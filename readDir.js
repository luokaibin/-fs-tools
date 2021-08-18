const fs = require('fs');
const {resolve} = require('path');
const getCurrPath = require('./getCurrPath');
const readDir = (path, type = 'list') => {
  const readPath = resolve(getCurrPath(), path);
  const list = fs.readdirSync(readPath);
  const files = [];
  const directorys = [];
  const detaileds = []
  list.forEach(item => {
    const stats = fs.statSync(resolve(readPath, item));
    const detailed = {name: item};
    if (stats.isDirectory()) {
      directorys.push(item);
      detailed.type = 'directory';
    } else {
      files.push(item);
      detailed.type = 'file';
    }
    detailed.size = stats.size;
    detailed.birthtime = stats.birthtime;
    detailed.mtime = stats.mtime;
    detailed.atime = stats.atime;
    detaileds.push(detailed)
  })
  if (type === 'file') {
    return files
  }
  if (type === 'directory') {
    return directorys
  }
  if (type === 'list') {
    return list
  }
  if (type === 'detailed') {
    return detaileds
  }
}

module.exports = readDir;
