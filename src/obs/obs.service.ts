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
    const path1 = new ObsPath(source);
    const path2 = new ObsPath(target);

    // 上传文件至云端
    if (path1.type === ObsPathType.Local && path2.type === ObsPathType.Cloud) {
      await this._minioClient.fPutObject(
        this._bucketName,
        path2.realPath,
        path1.realPath,
        {
          'Content-Type': 'application/zip',
        },
      );
      return;
    }

    // 下载文件至本地
    if (path1.type === ObsPathType.Cloud && path2.type === ObsPathType.Local) {
      await this._minioClient.fGetObject(
        this._bucketName,
        path1.realPath,
        path2.realPath,
      );
      return;
    }

    throw new Error('not implemented.');
  }

  async remove(source: string): Promise<void> {
    const path = new ObsPath(source);

    // 删除云端的文件
    if (path.type === ObsPathType.Cloud) {
      await this._minioClient.removeObject(this._bucketName, path.realPath);
      return;
    }

    throw new Error('not supported.');
  }
}
