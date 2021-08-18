/**
 * 复制文件或目录
 * @param src 要复制的源文件或者原目录。基于当前项目的相对路径，不需要传入完整路径。
 * @param desc 要复制到的一个目标目录，必须是一个存在的目录，必须是目录，路径是基于当前项目的相对路径，不需要传入完整路径。
 * @returns 成功后返回 true ，失败会 throw 错误
 */
function copyDirOrFile(src: string, desc: string): boolean;
export = copyDirOrFile;
