import { IObsService } from './obs.interface';
import { Injectable } from '@nestjs/common';
import { Client } from 'minio';
import { ObsPath, ObsPathType } from './obs-path';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ObsService implements IObsService {
  readonly _minioClient: Client;
  readonly _bucketName: string;

  constructor(private readonly configService: ConfigService) {
    this._minioClient = new Client({
      endPoint: configService.get('minio.endPoint'),
      port: configService.get('minio.port'),
      useSSL: configService.get('minio.useSSL'),
      accessKey: configService.get('minio.rootUser'),
      secretKey: configService.get('minio.rootPassword'),
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
