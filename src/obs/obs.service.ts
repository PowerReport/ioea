import { IObsService } from './obs.interface';
import { Injectable } from '@nestjs/common';
import { Client } from 'minio';
import { ObsPath, ObsPathType } from './obs-path';

@Injectable()
export class ObsService implements IObsService {
  readonly _minioClient: Client;
  readonly _bucketName: string;

  constructor() {
    this._minioClient = new Client({
      endPoint: '127.0.0.1',
      port: 9000,
      useSSL: true,
      accessKey: 'Q3AM3UQ867SPQQA43P2F',
      secretKey: 'zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG',
    });
    this._bucketName = 'ioea';
  }

  async copy(source: string, target: string): Promise<void> {
    const src1 = new ObsPath(source);
    const src2 = new ObsPath(target);

    // 上传文件至云端
    if (src1.type === ObsPathType.Local && src2.type === ObsPathType.Cloud) {
      await this._minioClient.fPutObject(
        this._bucketName,
        src2.realPath,
        src1.realPath,
        {
          'Content-Type': 'application/zip',
        },
      );
      return;
    }

    // 下载文件至本地
    if (src1.type === ObsPathType.Cloud && src2.type === ObsPathType.Local) {
      await this._minioClient.fGetObject(
        this._bucketName,
        src1.realPath,
        src2.realPath,
      );
      return;
    }

    throw new Error('not implemented.');
  }

  async remove(source: string): Promise<void> {
    const src = new ObsPath(source);

    // 删除云端的文件
    if (src.type === ObsPathType.Cloud) {
      await this._minioClient.removeObject(this._bucketName, src.realPath);
      return;
    }

    throw new Error('not implemented.');
  }
}
