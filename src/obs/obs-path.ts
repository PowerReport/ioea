import { isAbsolute } from 'path';

export class ObsPath {
  private readonly _src: string;
  private readonly _type: ObsPathType;

  constructor(src: string) {
    if (!src) {
      throw new Error('path cannot be null.');
    }

    this._type = ObsPath.isLocal(src) ? ObsPathType.Local : ObsPathType.Cloud;
    this._src = ObsPath.toRealFilePath(this._src);
  }

  private static isLocal(src: string): boolean {
    // 判断是否为绝对路径，如果是绝对路径则是本地路径，或者是否以 local: 开头
    if (isAbsolute(src) || src.startsWith(ObsPathType.Local)) {
      return true;
    }

    // 以 cloud: 开头为云端路径
    if (src.startsWith(ObsPathType.Cloud)) {
      return false;
    }

    throw new Error('not supported.');
  }

  private static toRealFilePath(src: string): string {
    return src.replace(
      ObsPath.isLocal(src) ? ObsPathType.Local : ObsPathType.Cloud,
      '',
    );
  }

  get realPath(): string {
    return this._src;
  }

  get type(): ObsPathType {
    return this._type;
  }
}

export enum ObsPathType {
  Cloud = 'cloud:',
  Local = 'local:',
}
