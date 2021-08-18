/**
 * 删除目录或文件
 * @param path 要删除的目录或文件，如果删除的是目录，会递归删除这个目录下的所有子目录和文件。基于当前项目的相对路径，不需要传入完整路径。
 * @param isCurrDir 如果要删除的对象是文件，这个参数会被忽略。如果传入的是一个目录，例如：a/b/c/d ，是否删除 d 本身，默认 true
 * @returns 删除成功返回 true
 */
function delDirOrFile(path: string, isCurrDir?: boolean): boolean;
export = delDirOrFile;
