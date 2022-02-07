import { Oops } from "../../common/friendly-except/oops";

const root = 'root';
const idPattern = /^(?<type>file|dir)!(?<id>\d+)$/;

export class Id {
  private id?: number | undefined;
  private type: 'file' | 'dir';

  constructor(str: string ) {
    this.parse(str);
  }

  public get realId(): number | undefined {
    return this.id;
  }

  public get isDir(): boolean {
    return this.type === 'dir';
  }

  public get isRoot(): boolean {
    return this.id === 0;
  }

  private parse(str: string): void {
    // 根目录
    if (str === root) {
      this.id = 0;
      this.type = 'dir';

      return;
    }

    if (idPattern.test(str)) {
      const arr = idPattern.exec(str);
      if (!arr?.groups) {
        throw Oops.bah(`无法识别的 id: ${str}, 请检查格式是否正确!例如: dir!100, file!101`);
      }

      const id = parseInt(arr.groups['id']);
      if (!id || id <= 0) {
        throw Oops.bah(`无法识别的 id: ${str}, 请检查格式是否正确!例如: dir!100, file!101`);
      }

      this.id = id;
      this.type = arr.groups['type'] as 'file' | 'dir';

      return;
    }

    throw Oops.bah(`无法识别的 id: ${str}, 请检查格式是否正确!例如: dir!100, file!101`);
  }
}
