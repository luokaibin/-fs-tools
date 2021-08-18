/**
 * 以 utf-8 编码向文件写入内容
 * @param path 要写入的文件路径，如果路径不存在，会新建目录和文件
 * @param text 要写入的文本内容
 * @returns 写入成功 返回 true
 */
function writeFile(path: string, text: string): true;
export = writeFile;
