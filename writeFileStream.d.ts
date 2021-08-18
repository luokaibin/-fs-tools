/**
 * 将 buffer 写入文件
 * @param path 要读取的文件路径，如果路径不存在，会新建目录和文件
 * @param content 要写入的内容 buffer
 * @returns 写入成功 返回 true
 */
function writeFileStream(path: string, content: Buffer): true;
export = writeFileStream;
