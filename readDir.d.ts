/**
 * 读取目录
 * @param path 要读取的目录；基于当前项目的相对路径，不需要传入完整路径。
 * @param type 要获取的类型；list 由目录名和文件名组成的 Array；file 由文件名组成的 Array；directory 由目录名组成的 Array；detailed 由目录和文件详细信息组成的 Array，包含类型是文件还是目录、name、size（单位是字节）、birthtime 创建时间、mtime 修改时间、atime 访问时间
 * @returns 包含目录内容的列表
 */
function readDir(path: string): string[];
function readDir(path: string, type: "list" | "file" | "directory"): string[];
function readDir(
  path: string,
  type: "detailed"
): {
  /**
   * file 文件类型 directory 目录类型
   */
  type: "file" | "directory";
  /**
   * 文件名或目录名
   */
  name: string;
  /**
   * 文件或目录大小，单位字节
   */
  size: number; // 单位 字节
  /**
   * 文件或目录的创建时间
   */
  birthtime: string;
  /**
   * 文件或目录的修改时间
   */
  mtime: string;
  /**
   * 文件或目录的访问时间
   */
  atime: string;
}[];
export = readDir;
