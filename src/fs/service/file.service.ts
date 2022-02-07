import { Injectable } from '@nestjs/common';
import { Manifest } from '../../domain/manifest/model/manifest';
import { IFileService } from './file.interface';

@Injectable()
export class FileService implements IFileService {
  getManifest(id: string): Promise<Manifest> {
    // TODO: 实现服务
    console.log(id);
    throw new Error('Method not implemented.');
  }
  
  preview(id: string, version?: number): Promise<string> {
    // TODO: 实现服务
    console.log(id, version);
    throw new Error('Method not implemented.');
  }

  export(id: string): Promise<string> {
    // TODO: 实现服务
    console.log(id);
    throw new Error('Method not implemented.');
  }
}
