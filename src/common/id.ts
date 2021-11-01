type Type = 'file' | 'dir';

export class Id {
  public static readonly root = 'root';

  constructor(public id: number, public type: Type) {}

  public get isDir(): boolean {
    return this.type === 'dir';
  }

  public get isRoot(): boolean {
    return this.id === 0 && this.isDir;
  }
}

export function parseId(str: string): Id | undefined {
  // 根目录
  if (str === Id.root) {
    return new Id(0, 'dir');
  }

  // 目录
  const num = parseInt(str);
  if (num) {
    return new Id(num, 'dir');
  }

  // 目录或文件
  const idPattern = /^(?<type>file|dir)!(?<id>\d+)$/;

  const result = idPattern.test(str);
  if (!result) {
    return undefined;
  }

  const arr = idPattern.exec(str);

  const id = parseInt(arr.groups['id']);
  if (id <= 0) {
    return undefined;
  }

  const type = arr.groups['type'] as Type;

  return new Id(id, type);
}
