import { Oops } from "../friendly-except/oops";

const root = 'root';

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
    }
  
    const idPattern = /^(?<type>file|dir)!(?<id>\d+)$/;
  
    if (idPattern.test(str)) {
      const arr = idPattern.exec(str);
      if (!arr?.groups) {
        return undefined;
      }

      const id = parseInt(arr.groups['id']);
      if (!id || id <= 0) {
        return undefined;
      }
    
      this.type = arr.groups['type'] as 'file' | 'dir';
    }

    throw Oops.bah('');
  }
}
