/**
 * 创建目录
 * @param path 要创建的目录；可以传入多级目录，会递归创建，如果目录已存在，会直接返回成功。基于当前项目的相对路径，不需要传入完整路径。
 * @returns 创建成功会返回true
 */
function mkdir(path: string): true;
export = mkdir;
