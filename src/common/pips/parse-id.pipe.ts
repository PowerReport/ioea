import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { Oops } from '../friendly-except/oops';
import { parseId } from '../id';

@Injectable()
export class ParseIdPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata): any {
    if (!value) {
      throw Oops.bah('验证失败，参数 ‘{0}’ 不能为空', metadata.data);
    }

    const id = parseId(value);

    if (!id) {
      throw Oops.bah('验证失败，不支持的 ID 格式：{0}', value);
    }

    return id;
  }
}
