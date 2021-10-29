import { isAbsolute } from 'path';
import { Oops } from '../../common/friendly-except/oops';

export class ObsPath {
  public readonly realPath: string;
  public readonly type: ObsPathType;

  constructor(path: string) {
    if (!path) {
      throw Oops.oh('path cannot be null.');
    }

    this.type = ObsPath.isLocal(path) ? ObsPathType.Local : ObsPathType.Cloud;
    this.realPath = ObsPath.toRealFilePath(this.realPath);
  }

  private static isLocal(path: string): boolean {
    // 判断是否为绝对路径，如果是绝对路径则是本地路径，或者是否以 local: 开头
    if (isAbsolute(path) || path.startsWith(ObsPathType.Local)) {
      return true;
    }

    // 以 cloud: 开头为云端路径
    if (path.startsWith(ObsPathType.Cloud)) {
      return false;
    }

    throw Oops.oh('not supported.');
  }

  private static toRealFilePath(path: string): string {
    return path.replace(
      ObsPath.isLocal(path) ? ObsPathType.Local : ObsPathType.Cloud,
      '',
    );
  }
}

export enum ObsPathType {
  Cloud = 'cloud:',
  Local = 'local:',
}
