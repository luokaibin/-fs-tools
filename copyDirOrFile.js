const fs = require('fs');
const {resolve, join} = require('path');
const getCurrPath = require('./getCurrPath');
const isDirOrFile = require('./isDirOrFile');
const writeFileStream = require('./writeFileStream');
const readFileStream = require('./readFileStream');
const readDir = require('./readDir');
const mkdir = require('./mkdir');


const copyDirOrFile = (src,desc) => {
  const testDescRes = isDirOrFile(desc);
  if (testDescRes !== 'directory') {
    throw new Error(`${desc} 不是一个目录`)
  }
  const testSrcRes = isDirOrFile(src);
  if (testSrcRes === 'file') {
    const file = src.split('/').pop();
    writeFileStream(join(desc, file), readFileStream(src));
    return true;
  }
  if (testSrcRes === 'directory') {
    const dirList = readDir(src, 'directory');
    dirList.forEach(item => {
      mkdir(join(desc, item));
      copyDirOrFile(join(src,item), join(desc, item))
    })
    const fileList = readDir(src, 'file');
    fileList.forEach(item => {
      copyDirOrFile(join(src,item), join(desc))
    })
    return true
  }
}
module.exports = copyDirOrFile;
