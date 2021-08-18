/**
 * 判断路径是一个文件还是目录
 * @param path 要校验的路径。基于当前项目的相对路径，不需要传入完整路径。
 * @returns 目录返回 directory；文件返回 file
 */
function isDirOrFile(path: string): 'directory'|'file'
export = isDirOrFile;

