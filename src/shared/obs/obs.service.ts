import { IObsService } from './obs.interface';
import { Injectable, Logger } from '@nestjs/common';
import { Client } from 'minio';
import { ObsPath, ObsPathType } from './obs-path';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ObsService implements IObsService {
  private readonly logger = new Logger(ObsService.name);

  private readonly client: Client;
  private readonly bucketName: string;

  constructor(private readonly configService: ConfigService) {
    try {
      this.client = new Client({
        endPoint: configService.get('MINIO_END_POINT'),
        port: configService.get('MINIO_PORT'),
        useSSL: configService.get('MINIO_USE_SSL') === 'true',
        accessKey: configService.get('MINIO_ROOT_USER'),
        secretKey: configService.get('MINIO_ROOT_PASSWORD'),
      });
    } catch (err) {
      this.logger.error('连接 Minio 失败', err.stack);
    }
    this.bucketName = 'ioea';
  }

  async copy(source: string, target: string): Promise<void> {
    const path1 = new ObsPath(source);
    const path2 = new ObsPath(target);

    // 上传文件至云端
    if (path1.type === ObsPathType.Local && path2.type === ObsPathType.Cloud) {
      await this.client.fPutObject(
        this.bucketName,
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
      await this.client.fGetObject(
        this.bucketName,
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
      await this.client.removeObject(this.bucketName, path.realPath);
      return;
    }

    throw new Error('not supported.');
  }
}
