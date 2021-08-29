/**
 * 复制文件或目录
 * @param src 要复制的源文件或者原目录。基于当前项目的相对路径，不需要传入完整路径。
 * @param desc 要复制到的一个目标目录，必须是一个存在的目录，必须是目录，路径是基于当前项目的相对路径，不需要传入完整路径。
 * @param updateFileContent 在对文件进行复制时，可以传入updateFileContent来修改文件内容，updateFileContent 是一个方法 接收三个参数 content 类型 Buffer，为文件内容
 * filePath 为文件路径 fileName 为文件名，修改之后需要返回修改后的内容，类型为 Buffer
 * @returns 成功后返回 true ，失败会 throw 错误
 */
function copyDirOrFile(src: string, desc: string, updateFileContent?: (content: Buffer, filePath: string, fileName: string) => Buffer): boolean;
export = copyDirOrFile;
