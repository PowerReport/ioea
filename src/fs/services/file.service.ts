import { Injectable } from '@nestjs/common';
import { Manifest } from '../manifest';
import { IFileService } from './file.interface';

@Injectable()
export class FileService implements IFileService {
  getManifest(id: number): Promise<Manifest> {
    throw new Error('Method not implemented.');
  }
  
  preview(id: number, version?: number): Promise<string> {
    throw new Error('Method not implemented.');
  }

  export(id: number): Promise<string> {
    throw new Error('Method not implemented.');
  }
}
