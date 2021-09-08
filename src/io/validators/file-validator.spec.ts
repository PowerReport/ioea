import { validate } from 'class-validator';
import { DataState } from '../../recycle-bin/entities/data-state';
import { FileEntity } from '../entities/file.entity';

test('文件名称特殊字符验证测试', async () => {
  const file: FileEntity = {
    id: 1,
    name: 'Holler%/',
    ext: '.txt',
    location: '/tmp',
    state: DataState.Normal,
    owner: 'admin',
    creator: 'admin',
    createTime: new Date(),
    lastModified: new Date(),
    depth: 0,
  };

  const errors = await validate(file);
  console.log(errors);
  expect(errors.length).toBe(1);
  expect(errors[0].value).toBe('文件名不能包含下列任何字符：\\/:*"<>|');
});
